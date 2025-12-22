const orderModel = require("../models/orderModel")
const userModel = require("../models/userModel")
const Stripe = require("stripe")

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// ==============================
// PLACE ORDER (COD + STRIPE)
// ==============================
const placeOrder = async (req, res) => {
  const frontend_url = "http://localhost:5173"

  try {
    const userId = req.userId
    const { items, amount, address, paymentMethod } = req.body

    if (!items || !amount || !address) {
      return res.json({ success: false, message: "Missing order details" })
    }

    // ======================
    // 🟢 CASH ON DELIVERY
    // ======================
    if (paymentMethod === "COD") {
      const newOrder = new orderModel({
        userId,
        items,
        amount,
        address,
        payment: false
      })

      await newOrder.save()

      // clear cart
      await userModel.findByIdAndUpdate(userId, { cartData: {} })

      return res.json({
        success: true,
        message: "Order confirmed (Cash on Delivery)"
      })
    }

    // ======================
    // 🔵 ONLINE PAYMENT (STRIPE)
    // ======================
    if (paymentMethod === "ONLINE") {
      const newOrder = new orderModel({
        userId,
        items,
        amount,
        address,
        payment: false
      })

      await newOrder.save()

      const line_items = items.map((item) => ({
        price_data: {
          currency: "inr",
          product_data: {
            name: item.name
          },
          unit_amount: item.price * 100
        },
        quantity: item.quantity
      }))

      // delivery charges
      line_items.push({
        price_data: {
          currency: "inr",
          product_data: {
            name: "Delivery Charges"
          },
          unit_amount: 40 * 100
        },
        quantity: 1
      })

      const session = await stripe.checkout.sessions.create({
        line_items,
        mode: "payment",
        success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
        cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`
      })

      return res.json({
        success: true,
        session_url: session.url
      })
    }

    res.json({ success: false, message: "Invalid payment method" })

  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

// ==============================
// VERIFY PAYMENT (STRIPE CALLBACK)
// ==============================
const verifyOrder = async (req, res) => {
  try {
    const { success, orderId } = req.body

    if (success === "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true })
      await userModel.findByIdAndUpdate(req.userId, { cartData: {} })

      res.json({ success: true, message: "Payment Successful" })
    } else {
      await orderModel.findByIdAndDelete(orderId)
      res.json({ success: false, message: "Payment Failed" })
    }
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

// ==============================
// USER ORDERS
// ==============================
const userOrders = async (req, res) => {
  try {
    const userId = req.userId
    const orders = await orderModel.find({ userId })

    res.json({ success: true, data: orders })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: "Error" })
  }
}

// ==============================
// EXPORTS
// ==============================
module.exports = {
  placeOrder,
  verifyOrder,
  userOrders
}
// ==============================
// UPDATE ORDER STATUS (ADMIN)
// ==============================
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body

    if (!orderId || !status) {
      return res.json({
        success: false,
        message: "Order ID and status are required"
      })
    }

    await orderModel.findByIdAndUpdate(
      orderId,
      { status }
    )

    res.json({
      success: true,
      message: "Status Updated"
    })

  } catch (error) {
    console.log(error)
    res.json({
      success: false,
      message: "Error"
    })
  }
}

const userModel = require("../models/userModel")

// ADD ITEM TO CART
const addToCart = async (req, res) => {
  try {
    const userId = req.userId
    const { itemId } = req.body

    const user = await userModel.findById(userId)
    if (!user) {
      return res.json({ success: false, message: "User not found" })
    }

    const cartData = user.cartData || {}

    if (cartData[itemId]) {
      cartData[itemId] += 1
    } else {
      cartData[itemId] = 1
    }

    await userModel.findByIdAndUpdate(userId, { cartData })

    res.json({ success: true, message: "Item added to cart", cartData })
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

// REMOVE ITEM FROM CART
const removeFromCart = async (req, res) => {
  try {
    const userId = req.userId
    const { itemId } = req.body

    const user = await userModel.findById(userId)
    if (!user) {
      return res.json({ success: false, message: "User not found" })
    }

    const cartData = user.cartData || {}

    if (cartData[itemId]) {
      cartData[itemId] -= 1
      if (cartData[itemId] <= 0) {
        delete cartData[itemId]
      }
    }

    await userModel.findByIdAndUpdate(userId, { cartData })

    res.json({ success: true, message: "Item removed from cart", cartData })
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

// GET USER CART
const getCart = async (req, res) => {
  try {
    const userId = req.userId

    const user = await userModel.findById(userId)
    if (!user) {
      return res.json({ success: false, message: "User not found" })
    }

    res.json({ success: true, cartData: user.cartData || {} })
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

// ✅ COMMONJS EXPORT (IMPORTANT)
module.exports = {
  addToCart,
  removeFromCart,
  getCart
}

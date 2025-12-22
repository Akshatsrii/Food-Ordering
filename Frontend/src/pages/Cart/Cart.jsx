import React, { useContext, useState } from "react"
import "./Cart.css"
import { StoreContext } from "../../Context/Storecontext"
import { useNavigate } from "react-router-dom"

const Cart = () => {

  const {
    cartItems,
    food_list,
    removeFromCart,
    getTotalCartAmount
  } = useContext(StoreContext)

  const navigate = useNavigate()

  const [promoCode, setPromoCode] = useState("")
  const [discount, setDiscount] = useState(0)
  const [paymentMethod, setPaymentMethod] = useState("")

  // ✅ APPLY PROMO CODE
  const applyPromoCode = () => {
    const total = getTotalCartAmount()

    if (promoCode === "SAVE10") {
      setDiscount(0.1 * total)
    } else if (promoCode === "SAVE20") {
      setDiscount(0.2 * total)
    } else {
      setDiscount(0)
      alert("Invalid Promo Code")
    }
  }

  const subtotal = getTotalCartAmount()
  const finalAmount = Math.max(subtotal - discount, 0)

  return (
    <div className="cart">
      <div className="cart-items">

        {/* HEADER */}
        <div className="cart-items-title">
          <p>Image</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <hr />

        {/* CART ITEMS */}
        {food_list.map((item) => {
          const quantity = cartItems[item._id] || 0

          if (quantity > 0) {
            return (
              <div key={item._id} className="cart-items-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <p>{quantity}</p>
                <p>₹{item.price * quantity}</p>
                <p
                  className="remove"
                  onClick={() => removeFromCart(item._id)}
                >
                  X
                </p>
              </div>
            )
          }
          return null
        })}

        {subtotal === 0 && (
          <p className="cart-empty">Your cart is empty 🛒</p>
        )}

        <hr />

        {/* PROMO CODE */}
        <div className="promo-section">
          <input
            type="text"
            placeholder="Enter Promo Code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />
          <button onClick={applyPromoCode}>Apply</button>
        </div>

        {/* TOTALS */}
        <div className="cart-summary">
          <p>
            Subtotal: <span>₹{subtotal}</span>
          </p>
          <p>
            Discount: <span>-₹{discount}</span>
          </p>
          <p className="final-total">
            Total Payable: <span>₹{finalAmount}</span>
          </p>
        </div>

        {/* PAYMENT OPTIONS */}
        <div className="payment-section">
          <h3>Select Payment Method</h3>

          <label>
            <input
              type="radio"
              name="payment"
              onChange={() => setPaymentMethod("Cash on Delivery")}
            />
            Cash on Delivery
          </label>

          <label>
            <input
              type="radio"
              name="payment"
              onChange={() => setPaymentMethod("Online Payment")}
            />
            Online Payment
          </label>
        </div>

        {/* PLACE ORDER */}
        <button
          className="place-order-btn"
          disabled={!paymentMethod || finalAmount === 0}
          onClick={() => navigate("/order")}
        >
          Place Order
        </button>

      </div>
    </div>
  )
}

export default Cart

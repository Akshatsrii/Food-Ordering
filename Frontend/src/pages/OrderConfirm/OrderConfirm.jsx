import React from "react"
import { useNavigate } from "react-router-dom"
import "./OrderConfirm.css"

const OrderConfirm = () => {
  const navigate = useNavigate()

  return (
    <div className="order-confirm">
      <div className="order-confirm-box">
        <h1>🎉 Order Confirmed!</h1>
        <p>Your order has been placed successfully.</p>

        <button onClick={() => navigate("/myorders")}>
          View My Orders
        </button>

        <button className="home-btn" onClick={() => navigate("/")}>
          Go to Dashboard
        </button>
      </div>
    </div>
  )
}

export default OrderConfirm

import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import "./MyOrders.css"
import { StoreContext } from "../../Context/Storecontext"
import { assets } from "../../assets/assets"

const MyOrders = () => {

  const { token, url } = useContext(StoreContext)
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  const restaurantLocation = "Food Restaurant, India"

  // FETCH USER ORDERS
  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        `${url}/api/order/user`,
        { headers: { token } }
      )

      if (response.data.success) {
        setOrders(response.data.data)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (token) fetchOrders()
  }, [token])

  if (loading) {
    return <p className="loading">Loading orders...</p>
  }

  return (
    <div className="my-orders">
      <h2>My Orders</h2>

      {orders.length === 0 && (
        <p className="no-orders">You have not placed any orders yet.</p>
      )}

      <div className="container">
        {orders.map((order) => {

          const orderStatus = order.payment
            ? "Out for Delivery"
            : "Order Processing"

          const mapUrl = `https://www.google.com/maps/dir/?api=1&origin=${restaurantLocation}&destination=${order.address?.city || "India"}`

          return (
            <div key={order._id} className="my-orders-order">

              {/* ICON */}
              <img src={assets.parcel_icon} alt="order" />

              {/* ITEMS */}
              <p className="order-items">
                {order.items.map((item, index) =>
                  index === order.items.length - 1
                    ? `${item.name} x ${item.quantity}`
                    : `${item.name} x ${item.quantity}, `
                )}
              </p>

              {/* AMOUNT */}
              <p className="order-amount">₹{order.amount}</p>

              {/* STATUS */}
              <p className="order-status">
                <span className={order.payment ? "paid" : "pending"}>
                  {order.payment ? "Paid (Online)" : "Cash on Delivery"}
                </span>
                <br />
                <small className="tracking-text">{orderStatus}</small>
              </p>

              {/* DATE */}
              <p className="order-date">
                {new Date(order.date).toLocaleDateString()}
              </p>

              {/* TRACK ORDER */}
              <div className="track-btns">
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="track-btn"
                >
                  Track Order 📍
                </a>

                <button className="refresh-btn" onClick={fetchOrders}>
                  Refresh 🔄
                </button>
              </div>

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyOrders

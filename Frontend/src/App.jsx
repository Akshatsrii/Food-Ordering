import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import LoginPopup from "./components/LoginPopup/LoginPopup"

import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import PlaceOrder from "./pages/Placeorder/Placeorder"
import MyOrders from "./pages/MyOrders/MyOrders"   // ✅ REQUIRED IMPORT
import OrderConfirm from "./pages/OrderConfirm/OrderConfirm"
import Verify from "./pages/Verify/Verify"


import StoreContextProvider from "./Context/Storecontext"

const App = () => {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <StoreContextProvider>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}

      <div className="app">
        <Navbar setShowLogin={setShowLogin} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/myorders" element={<MyOrders />} /> {/* ✅ */}
          <Route path="/verify" element={<Verify />} />
<Route path="/order-confirm" element={<OrderConfirm />} />

        </Routes>
      </div>

      <Footer />
    </StoreContextProvider>
  )
}

export default App

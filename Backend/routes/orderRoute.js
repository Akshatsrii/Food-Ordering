const express = require("express")
const {
  placeOrder,
  verifyOrder,
  userOrders
} = require("../controllers/ordercontroller")

const authMiddleware = require("../middleware/auth")

const orderRouter = express.Router()

orderRouter.post("/place", authMiddleware, placeOrder)
orderRouter.post("/verify", authMiddleware, verifyOrder)
orderRouter.get("/user", authMiddleware, userOrders)   // ✅ ADDED

module.exports = orderRouter

require("dotenv").config()

const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")

const foodRouter = require("./routes/foodRoute")
const userRouter = require("./routes/userRoute")
const cartRouter = require("./routes/cartRoute")   // ✅ ADDED
const orderRouter = require("./routes/orderRoute")


const app = express()
const port = process.env.PORT || 4000

// ✅ CONNECT DATABASE
connectDB()

// Middlewares
app.use(cors())
app.use(express.json())
app.use("/uploads", express.static("uploads"))

// Routes
app.use("/api/food", foodRouter)
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)     // ✅ ADDED
app.use("/api/order", orderRouter)


// Test Route
app.get("/", (req, res) => {
  res.send("API Working")
})

// Server
app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`)
})

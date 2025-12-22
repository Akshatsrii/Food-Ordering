const express = require("express")
const multer = require("multer")
const { addFood, listFood, removeFood } = require("../controllers/foodController")

const foodRouter = express.Router()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/")
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname)
  }
})

const upload = multer({ storage })

// ➕ ADD
foodRouter.post("/add", upload.single("image"), addFood)

// 📋 LIST
foodRouter.get("/list", listFood)

// ❌ REMOVE
foodRouter.delete("/remove/:id", removeFood)

module.exports = foodRouter

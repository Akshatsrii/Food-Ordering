const foodModel = require("../models/foodModel")

// ➕ ADD FOOD
const addFood = async (req, res) => {
  try {
    if (!req.body.name) {
      return res.status(400).json({
        success: false,
        message: "Name is missing"
      })
    }

    const food = new foodModel({
      name: req.body.name.trim(),
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: req.file.filename
    })

    await food.save()

    res.status(201).json({
      success: true,
      message: "Food Added Successfully"
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

// 📋 LIST FOOD
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({})
    res.status(200).json({
      success: true,
      data: foods
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

// ❌ REMOVE FOOD
const removeFood = async (req, res) => {
  try {
    const { id } = req.params

    await foodModel.findByIdAndDelete(id)

    res.status(200).json({
      success: true,
      message: "Food Removed Successfully"
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

module.exports = { addFood, listFood, removeFood }

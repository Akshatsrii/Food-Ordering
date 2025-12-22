const userModel = require("../models/userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" })
}

// REGISTER
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.json({ success: false, message: "All fields required" })
    }

    const exists = await userModel.findOne({ email })
    if (exists) {
      return res.json({ success: false, message: "User already exists" })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await userModel.create({
      name,
      email,
      password: hashedPassword
    })

    const token = createToken(user._id)

    res.json({ success: true, token })

  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

// LOGIN
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await userModel.findOne({ email })
    if (!user) {
      return res.json({ success: false, message: "User not found" })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials" })
    }

    const token = createToken(user._id)

    res.json({ success: true, token })

  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

module.exports = { registerUser, loginUser }

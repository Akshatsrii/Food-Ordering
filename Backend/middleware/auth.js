const jwt = require("jsonwebtoken")

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.token

    if (!token) {
      return res.json({ success: false, message: "Not Authorized" })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.userId = decoded.id

    next()
  } catch (error) {
    res.json({ success: false, message: "Invalid Token" })
  }
}

module.exports = authMiddleware

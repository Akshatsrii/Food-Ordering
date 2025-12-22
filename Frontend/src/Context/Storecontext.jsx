import { createContext, useState, useEffect } from "react"
import axios from "axios"
import { food_list } from "../assets/assets"

export const StoreContext = createContext(null)

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({})
  const [token, setToken] = useState("")

  const url = "http://localhost:4000"

  // ✅ LOAD TOKEN FROM LOCALSTORAGE
  useEffect(() => {
    const savedToken = localStorage.getItem("token")
    if (savedToken) {
      setToken(savedToken)
    }
  }, [])

  // ✅ SAVE TOKEN TO LOCALSTORAGE
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token)
      loadCartData(token)
    } else {
      localStorage.removeItem("token")
      setCartItems({})
    }
  }, [token])

  // ✅ LOAD CART FROM BACKEND
  const loadCartData = async (tokenValue) => {
    try {
      const response = await axios.get(`${url}/api/cart/get`, {
        headers: { token: tokenValue },
      })
      setCartItems(response.data.cartData || {})
    } catch (error) {
      console.log("Cart load error", error)
    }
  }

  // ✅ ADD TO CART (FRONTEND + BACKEND)
  const addToCart = async (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
    }))

    if (token) {
      await axios.post(
        `${url}/api/cart/add`,
        { itemId },
        { headers: { token } }
      )
    }
  }

  // ✅ REMOVE FROM CART (FRONTEND + BACKEND)
  const removeFromCart = async (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return prev

      const updated = { ...prev }
      updated[itemId] === 1
        ? delete updated[itemId]
        : (updated[itemId] -= 1)

      return updated
    })

    if (token) {
      await axios.post(
        `${url}/api/cart/remove`,
        { itemId },
        { headers: { token } }
      )
    }
  }

  // ✅ TOTAL CART AMOUNT
  const getTotalCartAmount = () => {
    let total = 0
    for (const item in cartItems) {
      const itemInfo = food_list.find(
        (product) => product._id === item
      )
      if (itemInfo) {
        total += itemInfo.price * cartItems[item]
      }
    }
    return total
  }

  // ✅ CONTEXT VALUE
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider

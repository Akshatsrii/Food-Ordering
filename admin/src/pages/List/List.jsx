import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const List = () => {

  const url = "http://localhost:4000"
  const [list, setList] = useState([])

  // 🔹 FETCH LIST
  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`)
      if (response.data.success) {
        setList(response.data.data)
      } else {
        toast.error("Error fetching list")
      }
    } catch (error) {
      console.log(error)
      toast.error("Server Error")
    }
  }

  // 🔹 DELETE FOOD
  const removeFood = async (id) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, { id })
      if (response.data.success) {
        toast.success(response.data.message)
        fetchList()
      } else {
        toast.error("Error deleting food")
      }
    } catch (error) {
      console.log(error)
      toast.error("Server Error")
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div className="list add flex-col">
      <p>All Foods List</p>

      <div className="list-table">
        {/* TABLE HEADER */}
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>

        {/* TABLE DATA */}
        {list.map((item, index) => (
          <div key={index} className="list-table-format">
            <img src={`${url}/images/${item.image}`} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <p
              className="cursor"
              onClick={() => removeFood(item._id)}
            >
              ❌
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default List

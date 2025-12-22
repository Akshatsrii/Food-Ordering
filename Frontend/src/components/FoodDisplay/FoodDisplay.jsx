import { useContext } from "react"
import { StoreContext } from "../../Context/Storecontext"
import FoodItem from "../FoodItem/FoodItem"
import "./FoodDisplay.css"

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext)

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>

      <div className="food-display-list">
        {food_list.map((item) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={item._id}        // ✅ unique key
                _id={item._id}        // ✅ CORRECT PROP
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            )
          }
          return null
        })}
      </div>
    </div>
  )
}

export default FoodDisplay

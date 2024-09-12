import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, removeFromCart, addtoCart } = useContext(StoreContext);
  const itemCount = cartItems[id] || 0; // Get the item count from cartItems

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
        {itemCount === 0 ? (
          <img
            className="add"
            onClick={() => addtoCart(id)} // Use id from props
            src={assets.add_icon_white}
            alt="Add Icon"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)} // Use id from props
              src={assets.remove_icon_red}
              alt="Remove Icon"
            />
            <p>{itemCount}</p>
            <img
              onClick={() => addtoCart(id)} // Use id from props
              src={assets.add_icon_green}
              alt="Add Icon"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating Stars" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;

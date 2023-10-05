import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import "../../../styles/product-card.css";
import { useState } from "react";

const ProductCard = (props) => {
  const [hide, setHide] = useState(false);
  const { id, title, img, price, type, quantity } = props.item;
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        img,
        price,
        type,
      })
    );
  };
  const increaseItem = () => {
    dispatch(cartActions.addItem({ id, title, price, img, type, quantity }));
  };
  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id));
  };
  const change = () => setHide(!hide);

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={img} alt="product-img" className="w-50" />
      </div>
      <div className="product__content">
        <div
          className="d-flex justify-content-between"
          style={{ height: 40, marginBottom: 20 }}>
          <h5>{title}</h5>
          <h5 style={{ color: "#df2020" }}>{type}</h5>
        </div>
        <div
          className="d-flex align-items-center justify-content-between"
          style={{ margin: 0 }}>
          <span className="product__price">${price}</span>
          {hide ? (
            <div className="d-flex align-items-center justify-content-between increase__decrease-btn">
              <span onClick={increaseItem} style={{ padding: "3px" }}>
                <i className="ri-add-line" />
              </span>
              <span className="quantity" style={{ margin: "0 5px" }}>
                {totalQuantity}
              </span>
              <span onClick={decreaseItem} style={{ padding: "3px" }}>
                <i className="ri-subtract-line" />
              </span>
            </div>
          ) : (
            <button onClick={(addToCart, change)} className="addToCart__btn">
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

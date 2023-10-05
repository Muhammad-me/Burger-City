import React from "react";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { useSelector, useDispatch } from "react-redux";
import "../styles/cart-page.css";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "reactstrap";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { useTranslation } from "react-i18next";

const Cart = () => {
  const { t } = useTranslation("translation");
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  // products = cartItems;

  return (
    <Helmet title="Cart">
      <CommonSection title="Your cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center">{t("mpty")}</h5>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>{t("img")}</th>
                      <th>{t("titl")}</th>
                      <th>Turi</th>
                      <th>{t("prce")}</th>
                      <th>{t("quant")}</th>
                      <th>{t("dlt")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}
              <div className="mt-4">
                <h6>
                  {t("ttl")}
                  <span className="cart__subtotal"> ${totalAmount}</span>
                </h6>
                <p>{t("txshp")}</p>
                <div className="cart__page-btn">
                  <button className="addToCart__btn me-4">
                    <Link to="/foods">{t("cntshp")}</Link>
                  </button>
                  <button className="addToCart__btn">
                    <Link to="/checkout">{t("prschk")}</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = (props) => {
  const { id, img, title, type, price, quantity } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => dispatch(cartActions.deleteItem(id));
  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={img} alt="food"></img>
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">{type}</td>
      <td className="text-center">${price}</td>
      <td className="text-center">{quantity} dona</td>
      <td onClick={deleteItem} className="text-center cart__item-del">
        <i className="ri-delete-bin-line"></i>
      </td>
    </tr>
  );
};

export default Cart;

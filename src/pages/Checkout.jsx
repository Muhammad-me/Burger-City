import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import "../styles/checkout.css";
import "../styles/product-details.css";

const Checkout = () => {
  const { t } = useTranslation("translation");

  const [data, setData] = useState({
    name: "",
    number: "",
    address: "",
  });

  const { name, number, address } = data;
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/binearybeast/google_sheets/DWvJzMbTkWORMAit?tabId=Лист1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([name, number, address]),
        }
      );

      await response.json();

      setData({ ...data, name: "", number: "", address: "" });
    } catch (err) {
      console.log(err);
    }
  };

  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 10;
  const totalAmount = cartTotalAmount + shippingCost;

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">{t("shpaddres")}</h6>
              <form
                action=""
                className="checkout__form"
                onSubmit={handleSubmit}>
                <div className="form__group">
                  <input
                    required
                    value={name}
                    name="name"
                    type="text"
                    placeholder="Name"
                    autoComplete
                    onChange={handleChange}
                  />
                </div>
                <div className="form__group">
                  <input
                    required
                    value={number}
                    name="number"
                    type="tel"
                    placeholder="Phone number"
                    autoComplete
                    onChange={handleChange}
                  />
                </div>
                <div className="form__group">
                  <input
                    required
                    value={address}
                    name="address"
                    type="text"
                    placeholder="Street Address"
                    autoComplete
                    onChange={handleChange}
                  />
                </div>

                <button onSubmit={handleSubmit} className="addToCart__btn">
                  Pay for your order
                </button>
              </form>
            </Col>
            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  {t("ttl")}:<span>${cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  {t("shfee")}:<span>${shippingCost}</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    {t("totl")}: <span>${totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;

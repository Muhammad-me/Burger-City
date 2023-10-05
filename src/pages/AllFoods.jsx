import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import products from "../assets/fake-data/products";
import foodCategoryImg03 from "../assets/images/bread.png";
import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import ProductCard from "../components/UI/product-card/ProductCard";
import "../styles/all-foods.css";
import "../styles/pagination.css";

const AllFoods = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }
    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "LAVASH") {
      const filteredProducts = products.filter(
        (item) => item.category === "Lavash"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "HOTDOG") {
      const filteredProducts = products.filter(
        (item) => item.category === "Hotdog"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "KFC") {
      const filteredProducts = products.filter(
        (item) => item.category === "KFC"
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="All Foods">
      <CommonSection title="All Foods" />
      <section>
        <Container>
          <Row>
            <Col lg="12" style={{ marginBottom: 20 }}>
              <div className="food__category d-flex align-items-center justify-content-center gap-5">
                <button
                  onClick={() => setCategory("ALL")}
                  className={`all__btn ${
                    category === "ALL" ? "foodBtnActive" : ""
                  }`}>
                  All
                </button>
                <button
                  onClick={() => setCategory("BURGER")}
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  }`}>
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </button>
                <button
                  onClick={() => setCategory("LAVASH")}
                  className={`d-flex align-items-center gap-2 ${
                    category === "LAVASH" ? "foodBtnActive" : ""
                  }`}>
                  <img src={foodCategoryImg02} alt="" />
                  Lavash
                </button>
                <button
                  onClick={() => setCategory("HOTDOG")}
                  className={`d-flex align-items-center gap-2 ${
                    category === "HOTDOG" ? "foodBtnActive" : ""
                  }`}>
                  <img src={foodCategoryImg03} alt="" />
                  Hotdog
                </button>
                <button
                  onClick={() => setCategory("KFC")}
                  className={`d-flex align-items-center gap-2 ${
                    category === "KFC" ? "foodBtnActive" : ""
                  }`}>
                  <img src={foodCategoryImg03} alt="" />
                  KFC
                </button>
              </div>
            </Col>
            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;

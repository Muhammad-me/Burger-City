import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import products from "../assets/fake-data/products.js";
import foodCategoryImg03 from "../assets/images/bread.png";
import foodCategoryImg01 from "../assets/images/hamburger.png";
import heroImg from "../assets/images/hero.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";
import Helmet from "../components/Helmet/Helmet.js";
import ProductCard from "../components/UI/product-card/ProductCard.jsx";
import "../styles/hero-section.css";
import "../styles/home.css";

const featureData = [
  {
    title: "qckdlr",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, esse.",
  },
  {
    title: "sprdr",
    imgUrl: featureImg02,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente?",
  },
  {
    title: "espp",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, saepe!",
  },
];
const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);
  const { t } = useTranslation("translation");

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
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">{t("fsteasy")}</h5>
                <h1 className="mb-4 hero__title">
                  <span>{t("hngry")}</span> {t("jtwt")} <br /> {t("fdt")}
                  <span> {t("yrdr")}</span>
                </h1>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <Link to="/foods">
                    <button className="order__btn d-flex align-items-center justify-content-between">
                      {t("rdnw")} <i className="ri-arrow-right-s-line"></i>
                    </button>
                  </Link>

                  <button className="all__foods-btn">
                    <Link to="/foods">{t("slfds")}</Link>
                  </button>
                </div>
                <div className="hero__service d-flex align-items-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-car-line"></i>
                    </span>
                    {t("frdlry")}
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-shield-check-line"></i>
                    </span>
                    {t("scrchk")}
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">{t("whtsrv")}</h5>
              <h2 className="feature__title"> {t("jtsth")} </h2>
              <h2 className="feature__title">
                {t("wwll")} <span>{t("tkcr")}</span>
              </h2>
            </Col>

            {featureData.map((item, index) => {
              return (
                <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                  <div className="feature__item text-center px-5 py-3">
                    <img
                      className="w-25 mb-3"
                      src={item.imgUrl}
                      alt="feature-img"
                    />
                    <h5 className="fw-bold mb-3">{t(item.title)}</h5>
                    <p>{item.desc}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>
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

            {allProducts.map((item) => {
              return (
                <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                  <ProductCard item={item} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;

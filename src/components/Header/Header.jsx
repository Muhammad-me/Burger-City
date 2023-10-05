import i18next from "i18next";
import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import logo from "../../assets/images/logo.png";
import { cartUiActions } from "../../store/shopping-cart/cartUISlice";
import "../../styles/header.css";

const nav__links = [
  {
    display: "home",
    path: "/",
  },
  {
    display: "foods",
    path: "/foods",
  },
  {
    display: "cart",
    path: "/cart",
  },
  {
    display: "contact",
    path: "/contact",
  },
];

const languageMap = {
  "uz-UZ": { label: "Uzbek", dir: "ltr", active: true },
  "ru-RU": { label: "Русский", dir: "ltr", active: false },
  "en-EN": { label: "English", dir: "ltr", active: false },
};

const Header = () => {
  const { t } = useTranslation("translation");
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });
    return () => document.removeEventListener("scroll", headerRef);
  }, []);
  return (
    <header className="header bg-danger text-white" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <Link to="/">
            <div className="logo d-flex align-items-center justify-content-center">
              <img style={{ width: 60, height: 60 }} src={logo} alt="logo" />
            </div>
          </Link>

          {/* ======= menu ======= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5 ">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }>
                  {t(item.display)}
                </NavLink>
              ))}
            </div>
          </div>
          {/* ======= nav right icons ======= */}
          <div className="nav__right d-flex align-items-center gap-4">
            <div>
              {Object.keys(languageMap)?.map((item) => {
                return (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <button
                      type="button"
                      style={{
                        color: "green",
                        fontWeight: 500,
                        height: 40,
                        padding: 3,
                        borderRadius: 15,
                        border: 0,
                        display: "flex",
                        alignItems: "center",
                      }}
                      key={item}
                      onClick={() => {
                        i18next.changeLanguage(item);
                      }}>
                      {languageMap[item].label}
                    </button>
                  </div>
                );
              })}
            </div>

            <span className="cart__icon" onClick={toggleCart}>
              <i className="ri-shopping-basket-line text-light" />
              <span className="cart__badge">{totalQuantity}</span>
            </span>

            <span className="user">
              <Link to="/login">
                <i className="ri-user-line text-light" />
              </Link>
            </span>

            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line" />
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

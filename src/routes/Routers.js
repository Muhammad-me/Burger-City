import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AllFoods from "../pages/AllFoods";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routers = () => {
  // const [data, setData] = useState({
  //   name: "",
  //   number: "",
  //   address: "",
  //   products: [],
  // });

  // const { name, number, address, products } = data;
  // const handleChange = (e) => {
  //   setData({ ...data, [e.target.name]: e.target.value });
  // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const res = await fetch(
  //       "https://v1.nocodeapi.com/binearybeast/google_sheets/DWvJzMbTkWORMAit?tabId=Лист1",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify([name, number, address, products]),
  //       }
  //     );

  //     await res.json();

  //     setData({ ...data, name: "", number: "", address: "", products: [] });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/foods" element={<AllFoods />} />
      <Route
        path="/checkout"
        element={
          <Checkout
          // name={name}
          // number={number}
          // address={address}
          // handleSubmit={handleSubmit}
          // handleChange={handleChange}
          />
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Routers;

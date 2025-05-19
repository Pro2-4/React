import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Blog from "../pages/Blog";
import BlogDetail from "../pages/BlogDetail";
import Contact from "../pages/Contact";
import "./Main.css";

const Main = () => {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/card-do-hoa-chinh-hang" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </main>
  );
};

export default Main;

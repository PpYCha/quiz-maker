import React from "react";
import { Routes } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";

const routes = () => {
  return (
    <div className="p-4">
      <Routes path="/" element={<Home />} />
      <Routes path="/quiz" element={<Quiz />} />
    </div>
  );
};

export default routes;

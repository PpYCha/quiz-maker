import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function UserLayout() {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default UserLayout;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-5 pb-2 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 ">
      <Link to="/">
        <p className="text-2xl font-bold bg-blue-500 text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900">
          Advance Literacy Training
        </p>
      </Link>
    </nav>
  );
};

export default Navbar;

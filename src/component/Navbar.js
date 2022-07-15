import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="top-0 sticky w-full h-12 mb-4 flex bg-gradient-to-r from-indigo-300 to-purple-400 text-white font-serif">
      <div className="p-4 text-lg font-bold">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default Navbar;

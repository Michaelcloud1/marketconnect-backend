import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold">
          MarketConnect
        </Link>

        <nav className="space-x-4">
          <NavLink to="/" className={({isActive}) => isActive ? "font-medium" : "text-gray-600"}>
            Home
          </NavLink>
          <NavLink to="/login" className={({isActive}) => isActive ? "font-medium" : "text-gray-600"}>
            Login
          </NavLink>
          <NavLink to="/signup/business" className="text-gray-600">
            Sign up (Business)
          </NavLink>
          <NavLink to="/signup/marketer" className="text-gray-600">
            Sign up (Marketer)
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

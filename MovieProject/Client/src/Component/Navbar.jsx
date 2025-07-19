import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="bg-blue-600 shadow-lg "
      style={{ width: "100%", margin: "auto" }}
    >
      <div
        className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center container"
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        {/* Logo */}
        <div className="text-2xl font-semibold tracking-wide">
          <h2 className="text-red" style={{ color: "maroon" }}>
            MovieZone
          </h2>
        </div>

        {/* Navigation Links */}
        <ul
          className="flex space-x-8 text-white text-base font-medium justify-between"
          style={{
            width: "70%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <li>
            <Link
              to="/"
              className="hover:text-gray-200 transition-colors"
              style={{ color: "red", fontWeight: "bold", fontSize: "1.2rem" }}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/add-movie"
              className="hover:text-gray-200 transition-colors"
              style={{ color: "red", fontWeight: "bold", fontSize: "1.2rem" }}
            >
              Add Movie
            </Link>
          </li>
          <li>
            <Link
              to="/movies"
              className="hover:text-gray-200 transition-colors"
              style={{ color: "red", fontWeight: "bold", fontSize: "1.2rem" }}
            >
              All Movie
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="hover:text-gray-200 transition-colors"
              style={{ color: "red", fontWeight: "bold", fontSize: "1.2rem" }}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="hover:text-gray-200 transition-colors"
              style={{ color: "red", fontWeight: "bold", fontSize: "1.2rem" }}
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

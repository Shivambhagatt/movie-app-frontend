import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import { FaHome, FaSearch, FaStar, FaFilm, FaTv } from "react-icons/fa";
import logo from "../assets/Images/logo.png";

const Header = () => {
  const isLoggedIn = false; // 🔁 Yeh baad me actual auth se replace kar dena

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          <img src={logo} alt="Disney+" />
        </Link>

        <Link to="/"><FaHome /> HOME</Link>
        <Link to="/search"><FaSearch /> SEARCH</Link>
        <Link to="/watchlist"><FaStar /> WATCH LIST</Link>
        <Link to="/movies"><FaFilm /> MOVIES</Link>
        <Link to="/series"><FaTv /> SERIES</Link>
      </div>

      <div className="auth-buttons">
        {isLoggedIn ? (
          <div className="profile-icon">
            <img
              src="https://i.pravatar.cc/40"
              alt="Profile"
            />
          </div>
        ) : (
          <>
            <Link to="/login">
              <button className="login-btn">Login</button>
            </Link>
            <Link to="/signup">
              <button className="signup-btn">Signup</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;

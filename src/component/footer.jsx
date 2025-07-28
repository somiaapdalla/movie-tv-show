// Footer.jsx
import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-6 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* الروابط */}
        <div className="flex flex-wrap gap-6 justify-center md:justify-start text-sm font-medium">
          <NavLink to="/" className="hover:text-yellow-400 transition">Home</NavLink>
          <NavLink to="/movies" className="hover:text-yellow-400 transition">TV Shows</NavLink>
          <NavLink to="/listfilm" className="hover:text-yellow-400 transition">Movies</NavLink>
          <NavLink to="/watchlist" className="hover:text-yellow-400 transition">Watchlist</NavLink>
          <NavLink to="/contact" className="hover:text-yellow-400 transition">Contact</NavLink>
        </div>

        {/* أيقونات السوشيال ميديا */}
        <div className="flex gap-6 text-2xl text-gray-400 hover:text-yellow-400 transition cursor-pointer">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        {/* الحقوق */}
        <p className="text-xs text-gray-400 text-center md:text-right w-full md:w-auto">
          © {new Date().getFullYear()} NETFLIX Clone  All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;



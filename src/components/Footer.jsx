// src/Footer.js
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#240750] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Company Info */}
          <div className="mb-4 md:mb-0">
            <h5 className="text-xl font-bold">LIBRARIA</h5>
            <p className="text-sm">© 2024 LIBRARIA. All rights reserved.</p>
          </div>
          {/* Navigation Links */}
          <div className="mb-4 md:mb-0">
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/home" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/books" className="hover:underline">
                    Books
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* Social Media Links */}
          <div>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

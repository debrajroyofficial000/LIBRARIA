import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useAuthService from "../hooks/useAuthService";
import { removeUserInformation } from "../features/authSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { logOutUser } = useAuthService();
  const logInUserData = useSelector((store) => store.auth.logInUserData);

  const handleLogout = async () => {
    try {
      await logOutUser();
      dispatch(removeUserInformation());
      navigate("/"); // Redirect to home page after logout
    } catch (error) {
      console.log(error);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#240750] p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link to="/" className="text-4xl font-bold">
            LIBRARIA
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link
            to="/"
            className="text-white hover:text-gray-200 border px-4 py-2 rounded hover:bg-indigo-700"
          >
            Home
          </Link>
          <Link
            to="/books"
            className="text-white hover:text-gray-200 border px-4 py-2 rounded hover:bg-indigo-700"
          >
            Books
          </Link>
          {logInUserData?.IsUserLibrarian && (
            <>
              <Link
                to="/addNewUser"
                className="text-white hover:text-gray-200 border px-4 py-2 rounded hover:bg-indigo-700"
              >
                Add User
              </Link>
              <Link
                to="/addNewBook"
                className="text-white hover:text-gray-200 border px-4 py-2 rounded hover:bg-indigo-700"
              >
                Add Book
              </Link>
              <Link
                to="/bookIssue"
                className="text-white hover:text-gray-200 border px-4 py-2 rounded hover:bg-indigo-700"
              >
                Book Issue
              </Link>
            </>
          )}
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#240750] z-50 flex flex-col items-start md:hidden">
          <Link
            to="/"
            className="text-white hover:text-gray-200 border-t border-b border-gray-700 px-4 py-2 w-full text-left"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/books"
            className="text-white hover:text-gray-200 border-b border-gray-700 px-4 py-2 w-full text-left"
            onClick={() => setIsOpen(false)}
          >
            Books
          </Link>
          {logInUserData?.IsUserLibrarian && (
            <>
              <Link
                to="/addNewUser"
                className="text-white hover:text-gray-200 border-b border-gray-700 px-4 py-2 w-full text-left"
                onClick={() => setIsOpen(false)}
              >
                Add User
              </Link>
              <Link
                to="/addNewBook"
                className="text-white hover:text-gray-200 border-b border-gray-700 px-4 py-2 w-full text-left"
                onClick={() => setIsOpen(false)}
              >
                Add Book
              </Link>
              <Link
                to="/bookIssue"
                className="text-white hover:text-gray-200 border-b border-gray-700 px-4 py-2 w-full text-left"
                onClick={() => setIsOpen(false)}
              >
                Book Issue
              </Link>
            </>
          )}
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 w-full text-left hover:bg-red-600 transition duration-200"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React from "react";
import { useNavigate } from "react-router-dom"; // Assuming you're using react-router for navigation

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm text-center">
        <div className="text-6xl mb-4">Oops!</div>
        <h1 className="text-3xl font-bold mb-2 text-red-500">Error</h1>
        <p className="text-gray-700 mb-6">Oops! Something went wrong.</p>
        <button
          onClick={() => navigate("/")} // Go back to the previous page
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Error;

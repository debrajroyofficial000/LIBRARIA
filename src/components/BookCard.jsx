// src/BookCard.js
import React from "react";

const BookCard = ({ title, description, image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
      <div className="overflow-hidden">
        <img
          className="w-full transform transition duration-500 ease-in-out hover:scale-110"
          src={image}
          alt={title}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default BookCard;

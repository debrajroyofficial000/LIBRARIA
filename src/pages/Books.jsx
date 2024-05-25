import React, { useState, useEffect, useCallback } from "react";
import useBookService from "../hooks/useBookService";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooksInfo } from "../features/bookSlice";

const Books = () => {
  const allBooks = useSelector((store) => store.books.allBooks);
  const [searchQuery, setSearchQuery] = useState("");
  const { getAllBooks } = useBookService();
  const dispatch = useDispatch();
  console.log("render");

  useEffect(() => {
    (async () => {
      try {
        const books = await getAllBooks();
        console.log(books);
        const filteredBooks = books.documents.filter((book) =>
          book.BookName.toLowerCase().includes(searchQuery.toLowerCase())
        );
        dispatch(getAllBooksInfo(filteredBooks));
      } catch (error) {
        console.error(error);
      }
    })();
  }, [searchQuery]);

  return (
    <div className="p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by book name..."
          className="w-full p-2 border border-gray-300 rounded-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 gap-4">
        {allBooks.map((book) => (
          <div
            key={book.BookID}
            className="p-4 border border-gray-300 rounded-md"
          >
            <h2 className="text-lg font-semibold">{book.BookName}</h2>
            <p className="text-gray-700">Author: {book.BookAuthor}</p>
            <p className="text-gray-700">Category: {book.BookCategory}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;

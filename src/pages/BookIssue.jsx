import { useEffect, useState } from "react";
import useBookService from "../hooks/useBookService";
import useUserService from "../hooks/useUserService";
import useIssueService from "../hooks/useIssueService";

const BookIssue = () => {
  const { createBookIssue, getAllIssues, updateIsIssue } = useIssueService();
  const { getAllBooks } = useBookService();
  const { getAllUsers } = useUserService();
  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);
  const [selectedUser, setSelectedUser] = useState({ id: "", name: "" });
  const [selectedBook, setSelectedBook] = useState({ id: "", name: "" });
  const [bookIssueList, setBookIssueList] = useState([]);
  const [bookReturnList, setBookReturnList] = useState([]);

  const fetchData = async () => {
    try {
      const allBooks = await getAllBooks();
      setBooks(allBooks.documents);

      const allUsers = await getAllUsers();
      setUsers(allUsers.documents);

      const issues = await getAllIssues();
      const unreturnedIssues = issues.documents.filter(
        (issue) => !issue.IsReturned
      );
      const returnedIssues = issues.documents.filter(
        (issue) => issue.IsReturned
      );

      setBookIssueList(unreturnedIssues);
      setBookReturnList(returnedIssues);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleIssueBook = async (e) => {
    e.preventDefault();
    const issueData = {
      UserID: selectedUser.id,
      UserName: selectedUser.name,
      BookID: selectedBook.id,
      BookName: selectedBook.name,
    };

    try {
      await createBookIssue(issueData);
      fetchData(); // Refetch data after issuing a book
      setSelectedUser({ id: "", name: "" });
      setSelectedBook({ id: "", name: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const handleReturnBook = async (id) => {
    try {
      await updateIsIssue(id);
      fetchData(); // Refetch data after returning a book
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6">Book Issue Page</h1>
      <div className="bg-white p-6 rounded shadow-md mb-6">
        <h2 className="text-xl font-bold mb-4">Issue a Book</h2>
        <form onSubmit={handleIssueBook}>
          <div className="mb-4">
            <label
              htmlFor="user"
              className="block text-gray-700 font-bold mb-2"
            >
              Select User:
            </label>
            <select
              id="user"
              value={selectedUser.id}
              onChange={(e) => {
                const user = users.find(
                  (user) => user.UserID === e.target.value
                );
                setSelectedUser({ id: user.UserID, name: user.UserName });
              }}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select a user</option>
              {users.map((user) => (
                <option key={user.UserID} value={user.UserID}>
                  {user.UserName}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="book"
              className="block text-gray-700 font-bold mb-2"
            >
              Select Book:
            </label>
            <select
              id="book"
              value={selectedBook.id}
              onChange={(e) => {
                const book = books.find(
                  (book) => book.BookID === e.target.value
                );
                setSelectedBook({ id: book.BookID, name: book.BookName });
              }}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select a book</option>
              {books.map((book) => (
                <option key={book.BookID} value={book.BookID}>
                  {book.BookName}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              Issue Book
            </button>
          </div>
        </form>
      </div>
      <div className="bg-white p-6 rounded shadow-md mb-6">
        <h2 className="text-xl font-bold mb-4">Issued Books</h2>
        {bookIssueList.length > 0 ? (
          <ul>
            {bookIssueList.map((issue) => (
              <li
                key={issue.IssueID}
                className="mb-2 flex justify-between items-center flex-col md:flex-row"
              >
                <div>
                  <span className="font-bold">{issue.BookName}</span> issued to{" "}
                  <span className="font-bold">{issue.UserName}</span>
                </div>
                <button
                  onClick={() => handleReturnBook(issue.IssueID)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition duration-200"
                >
                  Return
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No books issued yet.</p>
        )}
      </div>
      <div className="bg-white p-6 rounded shadow-md mb-6">
        <h2 className="text-xl font-bold mb-4">Returned Books</h2>
        {bookReturnList.length > 0 ? (
          <ul>
            {bookReturnList.map((returnItem) => (
              <li key={returnItem.IssueID} className="mb-2">
                <div>
                  <span className="font-bold">{returnItem.BookName}</span>{" "}
                  returned by{" "}
                  <span className="font-bold">{returnItem.UserName}</span>
                </div>
                <p className="text-green-500">Returned</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No books returned yet.</p>
        )}
      </div>
    </div>
  );
};

export default BookIssue;

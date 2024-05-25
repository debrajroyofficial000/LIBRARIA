import { ID } from "appwrite";
import { db } from "../lib/appwrite";

const useBookService = () => {
  // *  CREATE NEW BOOK "route -> addNewBook"

  const createNewBook = async (data) => {
    const id = ID.unique();
    try {
      return await db.createDocument(
        import.meta.env.VITE_DATABASE_ID,
        import.meta.env.VITE_BOOKS_COLLECTION_ID,
        id,
        {
          BookID: id,
          BookName: data.name,
          BookAuthor: data.author,
          BookCategory: data.category,
        }
      );
    } catch (error) {
      return error;
    }
  };

  //   * GET ALL BOOKS
  const getAllBooks = async () => {
    try {
      return await db.listDocuments(
        import.meta.env.VITE_DATABASE_ID,
        import.meta.env.VITE_BOOKS_COLLECTION_ID
      );
    } catch (error) {
      return error;
    }
  };

  // * GET SPECIFIC BOOK
  const getSpecificBook = async (docID) => {
    try {
      return await db.getDocument(
        import.meta.env.VITE_DATABASE_ID,
        import.meta.env.VITE_BOOKS_COLLECTION_ID,
        docID
      );
    } catch (error) {
      return error;
    }
  };

  // * Update Book
  const updateBook = async (docID, data) => {
    try {
      return await db.updateDocument(
        import.meta.env.VITE_DATABASE_ID,
        import.meta.env.VITE_BOOKS_COLLECTION_ID,
        docID,
        {
          NumberOfBook: data,
        }
      );
    } catch (error) {
      return error;
    }
  };

  return { createNewBook, getAllBooks, getSpecificBook, updateBook };
};
export default useBookService;

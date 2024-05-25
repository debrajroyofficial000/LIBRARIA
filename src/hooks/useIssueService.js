import { ID } from "appwrite";
import { db } from "../lib/appwrite";

const useIssueService = () => {
  // * CREATE ISSUE "route -> BookIssue"

  const createBookIssue = async (data) => {
    const id = ID.unique();
    try {
      return await db.createDocument(
        import.meta.env.VITE_DATABASE_ID,
        import.meta.env.VITE_BOOK_ISSUE_ID,
        id,
        {
          ...data,
          IssueID: id,
          IsReturned: false,
        }
      );
    } catch (error) {
      return error;
    }
  };

  //   * GET ALL ISSUES "route -> BookIssue"

  const getAllIssues = async () => {
    try {
      return await db.listDocuments(
        import.meta.env.VITE_DATABASE_ID,
        import.meta.env.VITE_BOOK_ISSUE_ID
      );
    } catch (error) {
      return error;
    }
  };

  // * UPDATE ISSUE "route -> BookIssue"
  const updateIsIssue = async (docID) => {
    try {
      return await db.updateDocument(
        import.meta.env.VITE_DATABASE_ID,
        import.meta.env.VITE_BOOK_ISSUE_ID,
        docID,
        { IsReturned: true }
      );
    } catch (error) {
      return error;
    }
  };

  return { createBookIssue, getAllIssues, updateIsIssue };
};
export default useIssueService;

import { db } from "../lib/appwrite";
const useUserService = () => {
  // * CREATE NEW USER IN USERS DB "route -> addNewUser"
  const createNewUserToDB = async (id, data) => {
    try {
      return await db.createDocument(
        import.meta.env.VITE_DATABASE_ID,
        import.meta.env.VITE_USERS_COLLECTION_ID,
        id,
        {
          UserID: id,
          UserName: data.name,
          UserEmail: data.email,
          IsUserLibrarian: false,
        }
      );
    } catch (error) {
      return error;
    }
  };
  // * GET LOG IN USER "route -> signIn"

  const getLogInUserDetails = async (docID) => {
    try {
      return await db.getDocument(
        import.meta.env.VITE_DATABASE_ID,
        import.meta.env.VITE_USERS_COLLECTION_ID,
        docID
      );
    } catch (error) {
      return error;
    }
  };

  // * GET ALL USERS "route -> bookIssue"
  const getAllUsers = async () => {
    try {
      return await db.listDocuments(
        import.meta.env.VITE_DATABASE_ID,
        import.meta.env.VITE_USERS_COLLECTION_ID
      );
    } catch (error) {
      return error;
    }
  };

  return { createNewUserToDB, getLogInUserDetails, getAllUsers };
};
export default useUserService;

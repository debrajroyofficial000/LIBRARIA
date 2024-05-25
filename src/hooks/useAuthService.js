import { ID } from "appwrite";
import { acc } from "../lib/appwrite";
const useAuthService = () => {
  // * CREATE NEW USER "route -> addNewUser"
  const createNewUser = async (data) => {
    try {
      return await acc.create(
        ID.unique(),
        data.email,
        data.password,
        data.name
      );
    } catch (error) {
      return error;
    }
  };
  // * LOG IN USER "route -> singIn"
  const logInUser = async (data) => {
    try {
      return await acc.createEmailPasswordSession(data.email, data.password);
    } catch (error) {
      return error;
    }
  };

  // * LOG OUT USER "component -> Navbar"

  const logOutUser = async () => {
    try {
      return await acc.deleteSessions();
    } catch (error) {
      return error;
    }
  };

  // * GET CURRENT LOGIN USER "route -> Root"
  const getCurrentUser = async () => {
    try {
      return await acc.get();
    } catch (error) {
      return error;
    }
  };

  return { createNewUser, logInUser, logOutUser, getCurrentUser };
};

export default useAuthService;

import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { addUserInformation } from "../features/authSlice";
import { useEffect } from "react";
import useAuthService from "../hooks/useAuthService";
import useUserService from "../hooks/useUserService";
const Root = () => {
  const dispatch = useDispatch();
  const { getCurrentUser } = useAuthService();
  const { getLogInUserDetails } = useUserService();
  const logInUserData = useSelector((store) => store.auth.logInUserData);
  console.log(logInUserData);
  const navigate = useNavigate();
  useEffect(() => {
    if (!logInUserData) {
      (async () => {
        try {
          const currentUser = await getCurrentUser();
          console.log(currentUser);
          if (!currentUser.$id) {
            navigate("/signIn");
          }
          const logInUserDetails = await getLogInUserDetails(currentUser.$id);
          console.log(logInUserDetails);
          dispatch(addUserInformation(logInUserDetails));
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [logInUserData]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
// lib-admin

import signInImg from "../../public/assets/signIn.jpg";
import { useState } from "react";
import useAuthService from "../hooks/useAuthService";
import useUserService from "../hooks/useUserService";
import { useDispatch } from "react-redux";
import { addUserInformation } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { logInUser } = useAuthService();
  const { getLogInUserDetails } = useUserService();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const loggedUser = await logInUser({ email, password });
      console.log(loggedUser); // you will get userID
      const logInUserDetails = await getLogInUserDetails(loggedUser.userId);
      console.log(logInUserDetails);
      dispatch(addUserInformation(logInUserDetails));
      console.log("Form submitted:", { email, password });
      navigate("/");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded shadow-md flex flex-col md:flex-row w-full max-w-4xl">
        <div className="w-full md:w-1/2">
          <img
            src={signInImg}
            alt="Sign In"
            className="w-full h-full object-cover rounded-md mb-4 md:mb-0"
          />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-6">
              <label className="block text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Sign In
            </button>
          </form>
          <p className="mt-2 font-bold text-center">
            Don't have account? First create an account from Librarian
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

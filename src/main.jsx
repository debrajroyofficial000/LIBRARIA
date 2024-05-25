import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Redux
import store from "./store/store";
import { Provider } from "react-redux";

// Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Books from "./pages/Books";
import SignIn from "./pages/SignIn";
import AddNewUser from "./pages/AddNewUser";
import AddNewBook from "./pages/AddNewBook";
import BookIssue from "./pages/BookIssue";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/addNewUser",
        element: <AddNewUser />,
      },
      {
        path: "/addNewBook",
        element: <AddNewBook />,
      },
      {
        path: "/bookIssue",
        element: <BookIssue />,
      },
    ],
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

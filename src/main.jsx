import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import HomePage from "./homepage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./register.jsx";
import Login from "./Login.jsx";
import Success from "./success.jsx";
import LogoutScreen from "./logout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "success",
        element: <Success />,
      },
      {
        path: "loggedout",
        element: <LogoutScreen />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

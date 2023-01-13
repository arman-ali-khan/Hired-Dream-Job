import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login&Register/Login/Login";
import ResetPass from "../components/Pages/Login&Register/Login/ResetPass";
import Register from "../components/Pages/Login&Register/Register/Register";
import NotFound from "../components/Pages/NotFound/NotFound";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/resetPass",
    element: <ResetPass />,
  },
]);

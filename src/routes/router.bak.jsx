import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import StartLearning from "../pages/StartLearning";
import Tutorials from "../pages/Tutorials";
import AboutUs from "../pages/AboutUs";
import LessonDetails from "../pages/LessonDetails"; // Import the LessonDetails component
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login-bak";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute"; // Import PrivateRoute for protected routes

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Navigate to={"/start-learning"}></Navigate>,
      },
      {
        path: "/start-learning",
        element: <StartLearning></StartLearning>,
      },
      {
        path: "/tutorials",
        element: (
          <PrivateRoute>
            <Tutorials />
          </PrivateRoute>
        ),
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/lesson/:lesson_no", // Protected lesson details route
        element: (
          <PrivateRoute>
            <LessonDetails></LessonDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Error: Page Not Found</h1>,
  },
]);

export default router;

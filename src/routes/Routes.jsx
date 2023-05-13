import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
// import CheckOut from "../pages/CheckOut/CheckOut";
import BookService from "../pages/BookService/BookService";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/book/:id',
        element: <PrivateRoute><BookService></BookService></PrivateRoute>,
        loader: ({ params }) => fetch(`https://ginius-car-doctor-server-71.vercel.app/services/${params.id}`)
      },
      {
        path: '/bookings',
        element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
      },
      // {
      //   path: '/checkout/:id',
      //   element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>, 
      //   loader: ({ params }) => fetch(`https://ginius-car-doctor-server-71.vercel.app/services/${params.id}`)
      // }
    ]
  },
]);

export default router;
import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./src/pages/home/Home";
import Gigs from "./src/pages/gigs/Gigs";
import Gig from "./src/pages/gig/Gig";
import Login from "./src/pages/login/Login";
import Register from "./src/pages/register/Register";
import Add from "./src/pages/add/Add";
import Orders from "./src/pages/orders/Orders";
import Messages from "./src/pages/messages/Messages";
import Message from "./src/pages/message/Message";
import MyGigs from "./src/pages/myGigs/MyGigs";
import "./app.scss"
import GigCard from "./components/gigCard/GigCard";
function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [

        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/myGigs",
          element: <MyGigs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },

  ]);

  return <RouterProvider router={router} />;
}

export default App;

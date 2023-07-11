import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
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
import Pay from "./src/pages/pay/Pay";
import Success from "./src/pages/success/Success";
import "./app.scss"
function App() {

  const queryClient = new QueryClient()

  const Layout = () => {
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>

          <Navbar />
          <Outlet />
          <Footer />

        </QueryClientProvider>
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
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/pay/:id",
          element: <Pay />,
        },
        {
          path: "/success",
          element: <Success />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

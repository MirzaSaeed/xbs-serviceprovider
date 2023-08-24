import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Service from "./Components/Pages/Services/Service";
import Loading from "./Components/components/Loading";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/services",
      element: <Service />,
    },
    {
      path: "/contactus",
      element: <Service />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;

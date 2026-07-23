import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./index.css";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Shop from "./pages/Shop.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'product/:id',
        element: <ProductDetail />
      },
      {
        path: 'shop',
        element: <Shop />
      },
      {
        path: 'collections',
        element: <Shop />
      },
      {
        path: 'collections/:id',
        element: <Shop />
      }
    ]
  }
]);

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

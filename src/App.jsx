import React from 'react';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { ShopPage } from './pages/ShopPage';
// Route Configuration
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LayoutComponent from './Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutComponent />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

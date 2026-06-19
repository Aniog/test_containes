import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import ProductDetail from "@/pages/ProductDetail";
import About from "@/pages/About";
import Collections from "@/pages/Collections";
import Journal from "@/pages/Journal";

function NotFound() {
  return (
    <section className="pt-40 pb-32 bg-bone min-h-[60vh]">
      <div className="container-velmora text-center">
        <p className="eyebrow mb-4">404</p>
        <h1 className="font-serif text-5xl md:text-7xl font-light leading-[1.05] text-ink mb-6">
          This page
          <span className="italic"> doesn't exist — yet.</span>
        </h1>
        <p className="text-ink-soft mb-10">
          The link may have moved, or the page may still be in the studio.
        </p>
        <a href="/" className="btn-primary">
          Return Home
        </a>
      </div>
    </section>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/product/:id", element: <ProductDetail /> },
      { path: "/collections", element: <Collections /> },
      { path: "/about", element: <About /> },
      { path: "/journal", element: <Journal /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function AppRouter() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

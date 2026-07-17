import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { CartProvider } from "@/context/CartContext";
import Layout from "@/Layout";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import Product from "@/pages/Product";
import About from "@/pages/About";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:slug" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route
              path="*"
              element={
                <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 pt-32 text-center">
                  <span className="eyebrow-gold">404</span>
                  <h1 className="font-serif text-ink mt-4 text-[44px] sm:text-[60px]">
                    Page not found
                  </h1>
                  <p className="mt-3 text-muted text-[14px] max-w-sm">
                    The page you're looking for has wandered off. Let's get you
                    back to the jewelry.
                  </p>
                  <a href="/" className="btn-gold mt-8">
                    Back to Home
                  </a>
                </div>
              }
            />
          </Route>
        </Routes>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#1A1612",
              color: "#FAF6F0",
              border: "1px solid rgba(182,138,78,0.4)",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
            },
          }}
        />
      </BrowserRouter>
    </CartProvider>
  );
}

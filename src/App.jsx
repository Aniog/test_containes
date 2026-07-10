import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import ErrorBoundary from "@/components/ErrorBoundary";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import Product from "@/pages/Product";
import About from "@/pages/About";
import Journal from "@/pages/Journal";

function NotFound() {
  return (
    <div className="container-editorial pt-32 pb-32 text-center">
      <div className="eyebrow text-gold-600 mb-6">404 · Not here, yet</div>
      <h1 className="font-serif text-5xl md:text-6xl text-ink leading-[1.05]">
        A quiet corner<br />we haven't curated.
      </h1>
      <p className="text-taupe mt-6 max-w-md mx-auto leading-relaxed">
        This page is still being polished. In the meantime, wander through the
        collection — every piece was made to be lived in.
      </p>
      <a
        href="/shop"
        className="mt-10 inline-flex items-center justify-center px-7 py-3.5 text-[11px] uppercase tracking-widest2 font-medium bg-ink text-cream hover:bg-gold-600 transition-colors duration-500 ease-elegant"
      >
        Shop the collection
      </a>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="product/:id" element={<Product />} />
              <Route path="about" element={<About />} />
              <Route path="journal" element={<Journal />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ErrorBoundary>
  );
}

export default App;

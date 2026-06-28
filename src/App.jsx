import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import ProductDetail from "@/pages/ProductDetail";

function ComingSoon({ title }) {
  return (
    <div className="mx-auto max-w-2xl px-5 py-40 text-center md:px-10">
      <p className="text-[11px] uppercase tracking-[0.3em] text-velmora-taupe">Velmora</p>
      <h1 className="mt-4 font-serif text-5xl font-light text-velmora-ink">{title}</h1>
      <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-velmora-charcoal/75">
        This page is being written by our editorial team. In the meantime, explore the collection.
      </p>
      <a
        href="/shop"
        className="mt-9 inline-block bg-velmora-ink px-7 py-3.5 text-[11px] uppercase tracking-[0.24em] text-velmora-cream"
      >
        Shop the Collection
      </a>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/about" element={<ComingSoon title="Our Story" />} />
            <Route path="/journal" element={<ComingSoon title="Journal" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

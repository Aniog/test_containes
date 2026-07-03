import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import Layout from "./Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import CollectionsPage from "./pages/CollectionsPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import JournalPage from "./pages/JournalPage.jsx";

function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-ink-950 px-6">
      <div className="text-center">
        <p className="font-sans text-[10px] uppercase tracking-widest2 text-gold-300">
          404
        </p>
        <h1 className="mt-4 font-serif text-[44px] font-light text-ink-100 md:text-[72px]">
          We can't find that page.
        </h1>
        <p className="mt-4 max-w-md font-sans text-[14px] text-ink-300">
          The link may be old, or the piece has moved. Try the shop instead.
        </p>
        <a
          href="/shop"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-gold-400 px-8 font-sans text-[11px] font-medium uppercase tracking-wider2 text-ink-950 transition-colors hover:bg-gold-300"
        >
          Shop the collection
        </a>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="collections" element={<CollectionsPage />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="about/*" element={<AboutPage />} />
            <Route path="journal" element={<JournalPage />} />
            <Route path="journal/*" element={<JournalPage />} />
            <Route path="help/*" element={<Navigate to="/about" replace />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner.jsx";
import { CartProvider } from "@/context/CartContext.jsx";
import Layout from "@/components/layout/Layout.jsx";
import Home from "@/pages/Home.jsx";
import Shop from "@/pages/Shop.jsx";
import ProductDetail from "@/pages/ProductDetail.jsx";
import Collections from "@/pages/Collections.jsx";
import About from "@/pages/About.jsx";
import Journal from "@/pages/Journal.jsx";
import JournalPost from "@/pages/JournalPost.jsx";
import Checkout from "@/pages/Checkout.jsx";
import NotFound from "@/pages/NotFound.jsx";

/**
 * App entry.
 * - Wraps everything in CartProvider so the cart drawer is accessible from
 *   every page.
 * - All routed pages live inside the shared Layout (navbar, footer, drawer).
 */
export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="collections" element={<Collections />} />
            <Route path="about" element={<About />} />
            <Route path="journal" element={<Journal />} />
            <Route path="journal/:id" element={<JournalPost />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Toaster
          position="top-center"
          toastOptions={{
            classNames: {
              toast:
                "!bg-cream !text-ink !border !border-line shadow-soft-2 font-sans",
              title: "!text-ink",
              description: "!text-ink-muted",
            },
          }}
        />
      </BrowserRouter>
    </CartProvider>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import ProductDetail from "@/pages/ProductDetail";
import Collections from "@/pages/Collections";
import About from "@/pages/About";
import Journal from "@/pages/Journal";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
            <Route
              path="*"
              element={
                <section className="mx-auto max-w-3xl px-6 py-32 text-center">
                  <p className="text-[11px] tracking-[0.3em] uppercase text-charcoal">
                    404
                  </p>
                  <h1 className="mt-3 font-serif text-4xl md:text-5xl text-espresso">
                    Page not found
                  </h1>
                  <p className="mt-4 text-sm text-charcoal">
                    The page you are looking for may have moved or been retired.
                  </p>
                  <a
                    href="/"
                    className="mt-8 inline-block text-[11px] tracking-[0.22em] uppercase text-accent border-b border-accent pb-1 hover:text-espresso hover:border-espresso transition-colors"
                  >
                    Return home
                  </a>
                </section>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="bottom-right"
        toastOptions={{
          classNames: {
            toast:
              "!bg-espresso !text-bone !border !border-accent/30 !rounded-sm",
            title: "!font-serif !text-base",
            description: "!text-bone/80 !text-xs",
          },
        }}
      />
    </CartProvider>
  );
}

export default App;

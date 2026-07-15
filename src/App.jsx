import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext.jsx";
import Layout from "@/Layout.jsx";
import Home from "@/pages/Home.jsx";
import Shop from "@/pages/Shop.jsx";
import ProductDetail from "@/pages/ProductDetail.jsx";

function PlaceholderPage({ title, subtitle }) {
  return (
    <div className="pt-32 md:pt-40 pb-24 text-center px-4 bg-cream min-h-[60vh]">
      <h1 className="font-serif text-4xl md:text-6xl mb-4">{title}</h1>
      <p className="text-ink-muted max-w-md mx-auto">{subtitle}</p>
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="products/:productId" element={<ProductDetail />} />
            <Route
              path="about"
              element={
                <PlaceholderPage
                  title="Our Story"
                  subtitle="Velmora is a demi-fine jewelry brand built on craftsmanship, conscious design, and the belief that every day deserves a little shine."
                />
              }
            />
            <Route
              path="journal"
              element={
                <PlaceholderPage
                  title="The Journal"
                  subtitle="Style notes, gifting guides, and behind-the-scenes stories from the Velmora studio."
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App

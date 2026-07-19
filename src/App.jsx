import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail";
import ShopPage from "./pages/ShopPage";
import AboutPage from "./pages/AboutPage";
import PlaceholderPage from "./pages/PlaceholderPage";

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/collections" element={<ShopPage />} />
            <Route path="/journal" element={<AboutPage />} />
            <Route path="/faq" element={<PlaceholderPage title="FAQ" description="Frequently asked questions about our jewelry, shipping, and returns." />} />
            <Route path="/contact" element={<PlaceholderPage title="Contact Us" description="Get in touch with our customer service team." />} />
            <Route path="/shipping" element={<PlaceholderPage title="Shipping Information" description="Learn about our shipping options and delivery times." />} />
            <Route path="/returns" element={<PlaceholderPage title="Returns & Exchanges" description="Our hassle-free 30-day return policy." />} />
            <Route path="/size-guide" element={<PlaceholderPage title="Size Guide" description="Find your perfect fit with our jewelry sizing guide." />} />
            <Route path="/care" element={<PlaceholderPage title="Jewelry Care" description="Tips and tricks to keep your Velmora pieces looking their best." />} />
            <Route path="/track-order" element={<PlaceholderPage title="Track Your Order" description="Check the status of your Velmora order." />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            {/* Placeholder routes */}
            <Route path="/about" element={<PlaceholderPage title="Our Story" />} />
            <Route path="/journal" element={<PlaceholderPage title="Journal" />} />
            <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
            <Route path="/shipping" element={<PlaceholderPage title="Shipping Info" />} />
            <Route path="/returns" element={<PlaceholderPage title="Returns & Exchanges" />} />
            <Route path="/faq" element={<PlaceholderPage title="FAQ" />} />
            <Route path="/size-guide" element={<PlaceholderPage title="Size Guide" />} />
            <Route path="/sustainability" element={<PlaceholderPage title="Sustainability" />} />
            <Route path="/careers" element={<PlaceholderPage title="Careers" />} />
            <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
            <Route path="/terms" element={<PlaceholderPage title="Terms of Service" />} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  );
}

// Simple placeholder for secondary pages
function PlaceholderPage({ title }) {
  return (
    <div className="min-h-screen bg-[#FAF7F2] pt-32 pb-20">
      <div className="container-wide text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-[#3D3833] mb-4">
          {title}
        </h1>
        <p className="text-[#9A8E82]">
          This page is coming soon.
        </p>
      </div>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          {/* Fallback routes for links */}
          <Route path="/collections" element={<Shop />} />
          <Route path="/about" element={<Shop />} />
          <Route path="/journal" element={<Shop />} />
        </Routes>
      </Layout>
      <Toaster />
    </Router>
  );
}

export default App;

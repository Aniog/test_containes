import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product/:id" element={<ProductDetail />} />
          {/* Placeholder routes for nav items */}
          <Route path="about" element={<div className="min-h-screen pt-32 pb-24 text-center container mx-auto">About page coming soon.</div>} />
          <Route path="journal" element={<div className="min-h-screen pt-32 pb-24 text-center container mx-auto">Journal coming soon.</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

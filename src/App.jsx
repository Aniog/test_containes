import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:id" element={<ProductDetail />} />
        {/* Placeholder routes to prevent 404s before implementation */}
        <Route path="about" element={<div className="container mx-auto py-32 px-4 text-center font-serif text-2xl">About Page Coming Soon</div>} />
        <Route path="journal" element={<div className="container mx-auto py-32 px-4 text-center font-serif text-2xl">Journal Page Coming Soon</div>} />
      </Route>
    </Routes>
  );
}

export default App

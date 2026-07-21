import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="category/:id" element={<Shop />} />
          <Route path="collections" element={<div className="p-24 text-center mt-20">Collections Page Coming Soon</div>} />
          <Route path="about" element={<div className="p-24 text-center mt-20">About Page Coming Soon</div>} />
          <Route path="journal" element={<div className="p-24 text-center mt-20">Journal Page Coming Soon</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App

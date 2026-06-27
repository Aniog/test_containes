import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="collections" element={<Shop />} />
          <Route path="product/:id" element={<ProductDetail />} />
          {/* Placeholder routes */}
          <Route path="about" element={<Home />} />
          <Route path="journal" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { CollectionPage } from './pages/CollectionPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="collections/:categoryId" element={<CollectionPage />} />
          <Route path="products" element={<Navigate to="/collections/all" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

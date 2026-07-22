import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Layout from './Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import CollectionPage from './pages/CollectionPage.jsx';
import ProductPage from './pages/ProductPage.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<CollectionPage />} />
            <Route path="product/:id" element={<ProductPage />} />
          </Route>
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;

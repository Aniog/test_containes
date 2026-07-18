import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Layout from '@/Layout';
import HomePage from '@/pages/HomePage';
import CollectionPage from '@/pages/CollectionPage';
import ProductPage from '@/pages/ProductPage';
import AboutPage from '@/pages/AboutPage';
import JournalPage from '@/pages/JournalPage';
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
            <Route path="about" element={<AboutPage />} />
            <Route path="journal" element={<JournalPage />} />
          </Route>
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;

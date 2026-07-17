import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Toaster } from 'sonner';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import CollectionPage from './components/collection/CollectionPage';
import ProductDetail from './components/product/ProductDetail';
import AboutPage from './pages/AboutPage';
import JournalPage from './pages/JournalPage';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Toaster position="top-right" richColors />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<CollectionPage />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="journal" element={<JournalPage />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

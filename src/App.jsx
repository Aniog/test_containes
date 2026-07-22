import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './Layout';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import CollectionPage from './pages/CollectionPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="collection" element={<CollectionPage />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;

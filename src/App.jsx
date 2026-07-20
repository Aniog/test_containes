import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './Layout';
import Home from './pages/Home';
import Collection from './pages/Collection';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="collection" element={<Collection />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="about" element={<ComingSoon title="Our Story" />} />
            <Route path="journal" element={<ComingSoon title="Journal" />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

function ComingSoon({ title }) {
  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-serif text-4xl text-charcoal-800 mb-4">{title}</h1>
        <p className="text-charcoal-600">Coming soon...</p>
      </div>
    </div>
  );
}

export default App;

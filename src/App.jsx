import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';

const DummyPage = ({ title }) => (
  <div className="pt-32 pb-16 min-h-screen flex flex-col items-center justify-center">
    <h1 className="text-4xl mb-4 font-serif">{title}</h1>
    <p className="text-muted-foreground font-sans">Velmora Fine Jewelry</p>
  </div>
);

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="collections" element={<DummyPage title="Collections" />} />
            <Route path="about" element={<DummyPage title="Our Story" />} />
            <Route path="journal" element={<DummyPage title="Journal" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App

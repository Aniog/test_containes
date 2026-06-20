import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="about" element={<AboutPlaceholder />} />
            <Route path="journal" element={<JournalPlaceholder />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

function AboutPlaceholder() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center md:px-8">
      <h1 className="section-heading">Our Story</h1>
      <p className="mt-4 text-sm leading-relaxed text-brand-muted">
        Velmora was born from a simple belief: fine jewelry doesn't have to be reserved for special
        occasions. Our pieces are crafted in warm 18K gold-plated brass, designed in California, and
        made to move with you.
      </p>
    </div>
  );
}

function JournalPlaceholder() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center md:px-8">
      <h1 className="section-heading">Journal</h1>
      <p className="mt-4 text-sm leading-relaxed text-brand-muted">
        Stories on style, care, and the art of everyday adornment. Coming soon.
      </p>
    </div>
  );
}

export default App;

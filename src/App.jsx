import { Route, Routes } from 'react-router-dom';
import Layout from '@/Layout';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import { CartProvider } from '@/context/CartContext';

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          {/* Lightweight placeholder pages so nav links don't break */}
          <Route
            path="/about"
            element={
              <div className="max-w-3xl mx-auto px-5 md:px-8 py-24 text-center">
                <p className="text-xs tracking-[0.4em] uppercase text-champagne mb-4">
                  Our story
                </p>
                <h1 className="font-serif font-light text-4xl md:text-6xl text-ink mb-6">
                  Quiet, considered, made to last.
                </h1>
                <p className="text-ink-soft leading-relaxed">
                  Velmora is a small studio of jewelers and designers based
                  between Lisbon and New York. We make demi-fine gold jewelry in
                  limited runs, with a focus on heirloom-feeling pieces at
                  thoughtful prices.
                </p>
              </div>
            }
          />
          <Route
            path="/journal"
            element={
              <div className="max-w-3xl mx-auto px-5 md:px-8 py-24 text-center">
                <p className="text-xs tracking-[0.4em] uppercase text-champagne mb-4">
                  Journal
                </p>
                <h1 className="font-serif font-light text-4xl md:text-6xl text-ink mb-6">
                  Stories from the studio
                </h1>
                <p className="text-ink-soft leading-relaxed">
                  Long-form notes on craftsmanship, styling and the women who
                  wear our pieces. Coming soon.
                </p>
              </div>
            }
          />
          <Route
            path="*"
            element={
              <div className="max-w-3xl mx-auto px-5 md:px-8 py-24 text-center">
                <h1 className="font-serif font-light text-4xl md:text-6xl text-ink mb-6">
                  Page not found
                </h1>
                <p className="text-ink-soft">
                  The piece you are looking for has wandered off.
                </p>
              </div>
            }
          />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;

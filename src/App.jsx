import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './index.css';
import { CartProvider, useCart } from './context/CartContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';
import Homepage from './pages/Homepage';
import ProductDetailPage from './pages/ProductDetailPage';
import ShopPage from './pages/ShopPage';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header onOpenCart={() => setIsCartOpen(true)} />
          <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

// Simple Cart Page Component
function CartPage() {
  const { items, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      alert('Thank you for your purchase! This is a demo store - no actual transaction will be processed.');
      clearCart();
      setIsCheckingOut(false);
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 md:pt-32">
      <div className="container-velmora py-8 md:py-16">
        <h1
          className="font-serif text-4xl md:text-5xl mb-12"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Shopping Cart
        </h1>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <p
              className="text-2xl font-serif mb-4"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Your cart is empty
            </p>
            <p className="text-velmora-stone mb-8">Discover our collection and find something you love</p>
            <Link
              to="/shop"
              className="inline-block bg-velmora-charcoal text-velmora-cream px-8 py-3 text-sm tracking-wide hover:bg-velmora-gold transition-colors"
            >
              CONTINUE SHOPPING
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex space-x-4 border-b border-velmora-sand pb-6">
                  <Link to={`/product/${item.id}`} className="shrink-0 w-24 h-24 bg-velmora-ivory">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="flex-1">
                    <Link
                      to={`/product/${item.id}`}
                      className="font-serif text-lg hover:text-velmora-gold transition-colors"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      {item.name}
                    </Link>
                    <p className="text-sm text-velmora-stone">Variant: {item.variant}</p>
                    <p className="text-base font-medium mt-1">${item.price}.00</p>
                    <div className="flex items-center space-x-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-6 h-6 border border-velmora-sand flex items-center justify-center hover:border-velmora-gold"
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-6 h-6 border border-velmora-sand flex items-center justify-center hover:border-velmora-gold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id, item.variant)}
                    className="text-velmora-stone hover:text-red-500 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-velmora-ivory p-8 h-fit">
              <h2
                className="font-serif text-2xl mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Order Summary
              </h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>${totalPrice}.00</span>
                </div>
                <div className="flex justify-between text-sm text-velmora-stone">
                  <span>Shipping</span>
                  <span className="text-velmora-gold">Free</span>
                </div>
                <div className="border-t border-velmora-sand pt-4 flex justify-between font-medium">
                  <span>Total</span>
                  <span>${totalPrice}.00</span>
                </div>
              </div>
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full bg-velmora-charcoal text-velmora-cream py-4 text-sm tracking-widest hover:bg-velmora-gold transition-colors disabled:opacity-50 btn-premium"
              >
                {isCheckingOut ? 'PROCESSING...' : 'CHECKOUT'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

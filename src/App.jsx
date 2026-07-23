import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ShoppingBag, Search, X, Star } from 'lucide-react';

// Cart Context
const CartContext = React.createContext(null);

function CartProvider({ children }) {
  const [cartItems, setCartItems] = React.useState([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  const addToCart = React.useCallback((product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = React.useCallback((productId) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  }, []);

  const toggleCart = React.useCallback(() => {
    setIsCartOpen(prev => !prev);
  }, []);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ cartItems, isCartOpen, addToCart, removeFromCart, toggleCart, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = React.useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}

// Navigation
function Navigation() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { toggleCart, cartCount } = useCart();

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      backgroundColor: isScrolled ? 'white' : 'transparent',
      boxShadow: isScrolled ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
      transition: 'all 0.3s',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <Link to="/" style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '1.5rem',
        fontWeight: 300,
        letterSpacing: '0.1em',
        color: isScrolled ? '#1a1a1a' : 'white',
        textDecoration: 'none',
      }}>
        VELMORA
      </Link>
      
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Link to="/shop" style={{ color: isScrolled ? '#1a1a1a' : 'white', textDecoration: 'none' }}>Shop</Link>
        <Link to="/shop" style={{ color: isScrolled ? '#1a1a1a' : 'white', textDecoration: 'none' }}>Collections</Link>
        <button onClick={toggleCart} style={{ background: 'none', border: 'none', cursor: 'pointer', color: isScrolled ? '#1a1a1a' : 'white', position: 'relative' }}>
          <ShoppingBag size={20} />
          {cartCount > 0 && (
            <span style={{
              position: 'absolute',
              top: '-0.5rem',
              right: '-0.5rem',
              backgroundColor: '#c9a96e',
              color: 'white',
              fontSize: '0.75rem',
              width: '1.25rem',
              height: '1.25rem',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}

// Home Page
function HomePage() {
  const { addToCart } = useCart();
  
  const products = [
    { id: '1', name: 'VIVID AURA JEWELS', price: 42, symbol: '✦', description: 'Gold ear cuff with crystal accent' },
    { id: '2', name: 'MAJESTIC FLORA NECTAR', price: 68, symbol: '❀', description: 'Multicolor floral crystal necklace' },
    { id: '3', name: 'GOLDEN SPHERE HUGGIES', price: 38, symbol: '◉', description: 'Chunky gold dome huggie earrings' },
    { id: '4', name: 'AMBER LACE EARRINGS', price: 54, symbol: '✧', description: 'Textured gold filigree drop earrings' },
    { id: '5', name: 'ROYAL HEIRLOOM SET', price: 95, symbol: '♦', description: 'Gift-boxed earring + necklace set' },
  ];

  return (
    <div>
      <Navigation />
      <div style={{ paddingTop: '4rem' }}>
        {/* Hero Section */}
        <section style={{
          height: '100vh',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), #faf8f5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h1 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '3.5rem',
              fontWeight: 300,
              letterSpacing: '0.05em',
              marginBottom: '1rem',
              color: '#1a1a1a',
            }}>
              Crafted to be Treasured
            </h1>
            <p style={{ fontSize: '1.125rem', fontWeight: 300, marginBottom: '2rem', color: '#1a1a1a' }}>
              Demi-fine gold jewelry for life's precious moments
            </p>
            <Link to="/shop" style={{
              backgroundColor: '#c9a96e',
              color: 'white',
              padding: '1rem 2.5rem',
              textDecoration: 'none',
              fontSize: '0.875rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              display: 'inline-block',
            }}>
              Shop the Collection
            </Link>
          </div>
        </section>

        {/* Trust Bar */}
        <section style={{
          backgroundColor: '#faf8f5',
          borderTop: '1px solid #e8e0d8',
          borderBottom: '1px solid #e8e0d8',
          padding: '1rem 0',
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            fontSize: '0.75rem',
            letterSpacing: '0.05em',
            color: '#6b7280',
          }}>
            <span>Free Worldwide Shipping</span>
            <span>·</span>
            <span>30-Day Returns</span>
            <span>·</span>
            <span>18K Gold Plated</span>
            <span>·</span>
            <span>Hypoallergenic</span>
          </div>
        </section>

        {/* Bestsellers */}
        <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 2rem' }}>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '2rem',
            fontWeight: 300,
            textAlign: 'center',
            marginBottom: '3rem',
            letterSpacing: '0.05em',
          }}>
            Bestsellers
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
          }}>
            {products.map((product, index) => (
              <div key={index} style={{
                border: '1px solid #e8e0d8',
                padding: '1.5rem',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                  {product.symbol}
                </div>
                <h3 style={{
                  fontSize: '0.875rem',
                  fontWeight: 300,
                  letterSpacing: '0.1em',
                  marginBottom: '0.5rem',
                }}>
                  {product.name}
                </h3>
                <p style={{ color: '#c9a96e', fontSize: '1rem', marginBottom: '1rem' }}>${product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  style={{
                    backgroundColor: '#c9a96e',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem 1.5rem',
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                  }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

// Shop Page
function ShopPage() {
  const { addToCart } = useCart();
  
  const products = [
    { id: '1', name: 'VIVID AURA JEWELS', price: 42, symbol: '✦', category: 'Earrings' },
    { id: '2', name: 'MAJESTIC FLORA NECTAR', price: 68, symbol: '❀', category: 'Necklaces' },
    { id: '3', name: 'GOLDEN SPHERE HUGGIES', price: 38, symbol: '◉', category: 'Huggies' },
    { id: '4', name: 'AMBER LACE EARRINGS', price: 54, symbol: '✧', category: 'Earrings' },
    { id: '5', name: 'ROYAL HEIRLOOM SET', price: 95, symbol: '♦', category: 'Sets' },
  ];

  return (
    <div>
      <Navigation />
      <div style={{ paddingTop: '4rem', maxWidth: '1280px', margin: '0 auto', padding: '4rem 2rem' }}>
        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '2.5rem',
          fontWeight: 300,
          textAlign: 'center',
          marginBottom: '2rem',
        }}>
          Shop All
        </h1>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
        }}>
          {products.map((product, index) => (
            <div key={index} style={{
              border: '1px solid #e8e0d8',
              padding: '1.5rem',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{product.symbol}</div>
              <h3 style={{ fontSize: '0.875rem', fontWeight: 300, letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{product.name}</h3>
              <p style={{ color: '#6b7280', fontSize: '0.75rem', marginBottom: '0.5rem' }}>{product.category}</p>
              <p style={{ color: '#c9a96e', fontSize: '1rem', marginBottom: '1rem' }}>${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                style={{
                  backgroundColor: '#c9a96e',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1.5rem',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Cart Drawer
function CartDrawer() {
  const { cartItems, isCartOpen, toggleCart, removeFromCart, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 50 }}>
      <div
        style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}
        onClick={toggleCart}
      />
      <div style={{
        position: 'absolute',
        right: 0,
        top: 0,
        height: '100%',
        width: '100%',
        maxWidth: '28rem',
        backgroundColor: 'white',
        padding: '2rem',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem' }}>Your Bag</h2>
          <button onClick={toggleCart} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <X size={20} />
          </button>
        </div>
        {cartItems.length === 0
          ? <p style={{ color: '#6b7280' }}>Your bag is empty</p>
          : (
            <div>
              {cartItems.map((item, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #e5e7eb' }}>
                  <div>
                    <h3 style={{ fontSize: '0.875rem' }}>{item.product.name}</h3>
                    <p style={{ color: '#c9a96e' }}>${item.product.price}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.product.id)} style={{ color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer' }}>
                    Remove
                  </button>
                </div>
              ))}
              <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #e5e7eb' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.125rem' }}>
                  <span>Total:</span>
                  <span style={{ color: '#c9a96e' }}>${cartTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}

// Main App
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <CartDrawer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

// Product Detail Page
function ProductDetail() {
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = React.useState('Gold');
  const [quantity, setQuantity] = React.useState(1);
  
  const product = {
    id: '1',
    name: 'VIVID AURA JEWELS',
    price: 42,
    symbol: '✦',
    rating: 4.8,
    reviews: 124,
    description: 'A stunning gold ear cuff with crystal accent. Perfect for adding a touch of sparkle to any outfit. Hypoallergenic and 18k gold plated.',
    images: ['✦', '✧'],
  };
  
  return (
    <div>
      <Navigation />
      <div style={{ paddingTop: '4rem', maxWidth: '1280px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          {/* Left - Image Gallery */}
          <div>
            <div style={{
              backgroundColor: '#faf8f5',
              height: '500px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '8rem',
              marginBottom: '1rem',
            }}>
              {product.images[0]}
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {product.images.map((img, i) => (
                <div key={i} style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#faf8f5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  cursor: 'pointer',
                  border: '2px solid #c9a96e',
                }}>
                  {img}
                </div>
              ))}
            </div>
          </div>
          
          {/* Right - Product Info */}
          <div>
            <h1 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '2rem',
              fontWeight: 300,
              letterSpacing: '0.1em',
              marginBottom: '1rem',
            }}>
              {product.name}
            </h1>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              {'★'.repeat(5)}
              <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            
            <p style={{ fontSize: '1.5rem', color: '#c9a96e', marginBottom: '1.5rem' }}>
              ${product.price}
            </p>
            
            <p style={{ color: '#6b7280', marginBottom: '2rem', lineHeight: 1.6 }}>
              {product.description}
            </p>
            
            {/* Variant Selector */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                Tone
              </label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {['Gold', 'Silver'].map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    style={{
                      padding: '0.5rem 1.5rem',
                      border: selectedVariant === variant ? '2px solid #c9a96e' : '1px solid #d1d5db',
                      backgroundColor: selectedVariant === variant ? '#faf8f5' : 'white',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                    }}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Quantity */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <label style={{ fontSize: '0.875rem' }}>Quantity</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{ width: '2rem', height: '2rem', border: '1px solid #d1d5db' }}
                >
                  -
                </button>
                <span style={{ width: '2rem', textAlign: 'center' }}>{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  style={{ width: '2rem', height: '2rem', border: '1px solid #d1d5db' }}
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Add to Cart */}
            <button
              onClick={() => {
                for (let i = 0; i < quantity; i++) {
                  addToCart({ ...product, variant: selectedVariant });
                }
              }}
              style={{
                width: '100%',
                padding: '1rem',
                backgroundColor: '#c9a96e',
                color: 'white',
                border: 'none',
                fontSize: '0.875rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                marginBottom: '1rem',
              }}
            >
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </button>
            
            {/* Accordions */}
            {['Description', 'Materials & Care', 'Shipping & Returns'].map(section => (
              <details key={section} style={{ borderTop: '1px solid #e5e7eb', padding: '1rem 0' }}>
                <summary style={{ cursor: 'pointer', fontWeight: 300 }}>{section}</summary>
                <p style={{ marginTop: '0.5rem', color: '#6b7280', fontSize: '0.875rem' }}>
                  {section === 'Description' && product.description}
                  {section === 'Materials & Care' && '18K gold plated over brass. Hypoallergenic. Avoid contact with water, perfume, and lotions.'}
                  {section === 'Shipping & Returns' && 'Free worldwide shipping. 30-day return policy. See our return center for details.'}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

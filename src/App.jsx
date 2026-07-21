import React, { useState } from 'react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Sample products with reliable placeholder images
  const products = [
    { 
      id: 1, 
      name: "VIVID AURA JEWELS", 
      price: 42, 
      image: "https://placehold.co/800x800/gold/white?text=Ear+Cuff", 
      category: "Earrings",
      description: "Gold ear cuff with crystal accent"
    },
    { 
      id: 2, 
      name: "MAJESTIC FLORA NECTAR", 
      price: 68, 
      image: "https://placehold.co/800x800/gold/white?text=Necklace", 
      category: "Necklaces",
      description: "Multicolor floral crystal necklace"
    },
    { 
      id: 3, 
      name: "GOLDEN SPHERE HUGGIES", 
      price: 38, 
      image: "https://placehold.co/800x800/gold/white?text=Huggies", 
      category: "Huggies",
      description: "Chunky gold dome huggie earrings"
    },
    { 
      id: 4, 
      name: "AMBER LACE EARRINGS", 
      price: 54, 
      image: "https://placehold.co/800x800/gold/white?text=Drop+Earrings", 
      category: "Earrings",
      description: "Textured gold filigree drop earrings"
    },
    { 
      id: 5, 
      name: "ROYAL HEIRLOOM SET", 
      price: 95, 
      image: "https://placehold.co/800x800/gold/white?text=Gift+Set", 
      category: "Sets",
      description: "Gift-boxed earring + necklace set"
    }
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (index) => {
    const newItems = [...cartItems];
    newItems.splice(index, 1);
    setCartItems(newItems);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        padding: '0 16px'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '80px'
        }}>
          <h1 style={{
            fontFamily: 'serif',
            fontSize: '28px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}>
            VELMORA
          </h1>

          <nav style={{ display: 'flex', gap: '32px' }}>
            <button onClick={() => setCurrentPage('home')} style={navButtonStyle(currentPage === 'home')}>
              Home
            </button>
            <button onClick={() => setCurrentPage('shop')} style={navButtonStyle(currentPage === 'shop')}>
              Shop
            </button>
          </nav>

          <button onClick={() => setIsCartOpen(!isCartOpen)} style={{
            position: 'relative',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}>
            <span style={{ fontSize: '20px' }}>🛍️</span>
            {totalItems > 0 && (
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                backgroundColor: '#D4AF37',
                color: 'white',
                fontSize: '12px',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ paddingTop: '80px' }}>
        {currentPage === 'home' && (
          <div>
            {/* Hero Section */}
            <section style={{
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f5f5f5'
            }}>
              <div style={{ textAlign: 'center' }}>
                <h2 style={{
                  fontSize: '64px',
                  fontFamily: 'serif',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '24px'
                }}>
                  Velmora
                </h2>
                <p style={{ fontSize: '20px', marginBottom: '32px', color: '#666' }}>
                  Crafted to be Treasured
                </p>
                <button
                  onClick={() => setCurrentPage('shop')}
                  style={{
                    backgroundColor: 'black',
                    color: 'white',
                    padding: '12px 32px',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '14px',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}
                >
                  Shop the Collection
                </button>
              </div>
            </section>

            {/* Trust Bar */}
            <section style={{
              borderTop: '1px solid #e5e5e5',
              borderBottom: '1px solid #e5e5e5',
              padding: '16px 0'
            }}>
              <div style={{
                maxWidth: '1280px',
                margin: '0 auto',
                padding: '0 16px',
                display: 'flex',
                justifyContent: 'center',
                gap: '32px',
                fontSize: '14px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: '#666'
              }}>
                <span>Free Worldwide Shipping</span>
                <span>30-Day Returns</span>
                <span>18K Gold Plated</span>
                <span>Hypoallergenic</span>
              </div>
            </section>

            {/* Bestsellers */}
            <section style={{ padding: '64px 16px' }}>
              <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                <h3 style={{
                  fontSize: '36px',
                  fontFamily: 'serif',
                  textAlign: 'center',
                  marginBottom: '48px',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}>
                  Bestsellers
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '32px'
                }}>
                  {products.slice(0, 3).map(product => (
                    <div key={product.id} style={{ textAlign: 'center' }}>
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{
                          width: '100%',
                          height: '320px',
                          objectFit: 'cover',
                          marginBottom: '16px',
                          backgroundColor: '#f5f5f5'
                        }}
                      />
                      <h4 style={{
                        fontSize: '14px',
                        fontFamily: 'serif',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '8px'
                      }}>
                        {product.name}
                      </h4>
                      <p style={{ color: '#D4AF37', fontSize: '18px' }}>${product.price}</p>
                      <button
                        onClick={() => addToCart(product)}
                        style={{
                          marginTop: '12px',
                          padding: '8px 24px',
                          border: '1px solid black',
                          background: 'white',
                          cursor: 'pointer',
                          fontSize: '12px',
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase'
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {currentPage === 'shop' && (
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px 16px' }}>
            <h2 style={{
              fontSize: '48px',
              fontFamily: 'serif',
              textAlign: 'center',
              marginBottom: '48px',
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>
              Shop All
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px'
            }}>
              {products.map(product => (
                <div key={product.id} style={{ textAlign: 'center' }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '320px',
                      objectFit: 'cover',
                      marginBottom: '16px',
                      backgroundColor: '#f5f5f5'
                    }}
                  />
                  <h4 style={{
                    fontSize: '14px',
                    fontFamily: 'serif',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '8px'
                  }}>
                    {product.name}
                  </h4>
                  <p style={{ color: '#D4AF37', fontSize: '18px', marginBottom: '12px' }}>${product.price}</p>
                  <button
                    onClick={() => addToCart(product)}
                    style={{
                      padding: '8px 24px',
                      backgroundColor: 'black',
                      color: 'white',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '12px',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase'
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '400px',
          backgroundColor: 'white',
          boxShadow: '-2px 0 8px rgba(0,0,0,0.1)',
          zIndex: 100,
          padding: '24px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '20px', fontFamily: 'serif' }}>Your Cart</h3>
            <button onClick={() => setIsCartOpen(false)} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}>
              ×
            </button>
          </div>

          {cartItems.length === 0 ? (
            <p style={{ color: '#666' }}>Your cart is empty</p>
          ) : (
            <div>
              {cartItems.map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px 0',
                  borderBottom: '1px solid #e5e5e5'
                }}>
                  <div>
                    <p style={{ fontSize: '14px', fontFamily: 'serif' }}>{item.name}</p>
                    <p style={{ color: '#D4AF37' }}>${item.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(index)}
                    style={{ background: 'none', border: 'none', color: 'red', cursor: 'pointer' }}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '2px solid #e5e5e5' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span style={{ fontWeight: 'bold' }}>Total:</span>
                  <span style={{ color: '#D4AF37', fontWeight: 'bold' }}>${totalPrice}</span>
                </div>
                <button style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#D4AF37',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '14px',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}>
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      <footer style={{
        backgroundColor: '#f5f5f5',
        padding: '48px 16px',
        marginTop: '64px'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '32px'
        }}>
          <div>
            <h4 style={{ fontFamily: 'serif', fontSize: '20px', marginBottom: '16px' }}>VELMORA</h4>
            <p style={{ color: '#666', fontSize: '14px' }}>
              Crafting timeless jewelry pieces that celebrate life's precious moments.
            </p>
          </div>
          <div>
            <h5 style={{ fontWeight: 'bold', marginBottom: '12px' }}>Shop</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '8px' }}><button onClick={() => setCurrentPage('shop')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#666' }}>All Jewelry</button></li>
              <li style={{ marginBottom: '8px' }}><span style={{ color: '#666' }}>Earrings</span></li>
              <li style={{ marginBottom: '8px' }}><span style={{ color: '#666' }}>Necklaces</span></li>
              <li style={{ marginBottom: '8px' }}><span style={{ color: '#666' }}>Huggies</span></li>
            </ul>
          </div>
        </div>
        <div style={{ maxWidth: '1280px', margin: '32px auto 0', paddingTop: '32px', borderTop: '1px solid #e5e5e5', textAlign: 'center', color: '#666', fontSize: '14px' }}>
          © 2024 Velmora Fine Jewelry. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

const navButtonStyle = (isActive) => ({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: '14px',
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  color: '#333',
  fontWeight: isActive ? 'bold' : 'normal'
});

export default App;

import React from 'react'

function App() {
  const products = [
    { id: 1, name: 'VIVID AURA JEWELS', price: 42, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80' },
    { id: 2, name: 'MAJESTIC FLORA NECTAR', price: 68, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80' },
    { id: 3, name: 'GOLDEN SPHERE HUGGIES', price: 38, image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80' },
    { id: 4, name: 'AMBER LACE EARRINGS', price: 54, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80' },
    { id: 5, name: 'ROYAL HEIRLOOM SET', price: 95, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80' }
  ]

  return (
    <div style={{ backgroundColor: '#F5F1ED', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 50,
        backgroundColor: 'rgba(245, 241, 237, 0.98)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
      }}>
        <h1 style={{
          fontSize: '24px',
          fontFamily: 'Cormorant Garamond, serif',
          letterSpacing: '0.2em',
          color: '#2A201C',
          margin: 0
        }}>
          VELMORA
        </h1>
        <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          {['Shop', 'Collections', 'About', 'Journal'].map((link) => (
            <a 
              key={link} 
              href={`/${link.toLowerCase()}`} 
              style={{ 
                textDecoration: 'none', 
                color: '#2A201C', 
                fontSize: '14px',
                letterSpacing: '0.05em'
              }}
            >
              {link}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(rgba(42, 32, 28, 0.4), rgba(42, 32, 28, 0.4)), url("https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1920&q=80") center/cover no-repeat',
        paddingTop: '80px'
      }}>
        <div style={{ textAlign: 'center', color: 'white', padding: '0 20px' }}>
          <h2 style={{
            fontSize: '56px',
            fontFamily: 'Cormorant Garamond, serif',
            fontWeight: 300,
            marginBottom: '24px',
            lineHeight: 1.2
          }}>
            Crafted to be<br />Treasures
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '40px', fontStyle: 'italic' }}>
            Demi-fine jewelry for life's most meaningful moments
          </p>
          <a href="/shop" style={{
            display: 'inline-block',
            backgroundColor: '#C9A96E',
            color: 'white',
            padding: '16px 48px',
            textDecoration: 'none',
            fontSize: '13px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontWeight: 500
          }}>
            Shop the Collection
          </a>
        </div>
      </section>

      {/* Trust Bar */}
      <div style={{
        backgroundColor: 'white',
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'center',
        gap: '48px',
        borderBottom: '1px solid #E8E4E0',
        flexWrap: 'wrap'
      }}>
        {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((text) => (
          <span key={text} style={{ fontSize: '13px', color: '#8A8580', letterSpacing: '0.05em' }}>
            {text}
          </span>
        ))}
      </div>

      {/* Bestsellers Section */}
      <section style={{ padding: '80px 40px', maxWidth: '1400px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '36px',
          fontFamily: 'Cormorant Garamond, serif',
          textAlign: 'center',
          marginBottom: '48px',
          color: '#2A201C',
          fontWeight: 400
        }}>
          Bestsellers
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '32px'
        }}>
          {products.map((product) => (
            <div key={product.id} style={{
              backgroundColor: 'white',
              borderRadius: '4px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              overflow: 'hidden',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{
                height: '300px',
                overflow: 'hidden'
              }}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '20px' }}>
                <h3 style={{
                  fontSize: '13px',
                  fontFamily: 'Cormorant Garamond, serif',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                  color: '#2A201C',
                  fontWeight: 400
                }}>
                  {product.name}
                </h3>
                <p style={{ fontSize: '14px', color: '#8A8580', marginBottom: '16px' }}>
                  ${product.price}
                </p>
                <button style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#C9A96E',
                  color: 'white',
                  border: 'none',
                  fontSize: '13px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#B8945A'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#C9A96E'}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#2A201C',
        color: '#F5F1ED',
        padding: '60px 40px',
        textAlign: 'center'
      }}>
        <h3 style={{
          fontSize: '32px',
          fontFamily: 'Cormorant Garamond, serif',
          marginBottom: '16px',
          fontWeight: 400,
          letterSpacing: '0.1em'
        }}>
          VELMORA
        </h3>
        <p style={{ fontSize: '14px', color: '#8A8580', maxWidth: '600px', margin: '0 auto 30px' }}>
          Fine jewelry for life's most meaningful moments. Demi-fine pieces crafted with intention.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {['Instagram', 'Pinterest', 'Facebook'].map((social) => (
            <a key={social} href="#" style={{ color: '#8A8580', textDecoration: 'none', fontSize: '14px' }}>
              {social}
            </a>
          ))}
        </div>
        <div style={{ borderTop: '1px solid #8A8580', paddingTop: '30px', maxWidth: '400px', margin: '0 auto' }}>
          <p style={{ fontSize: '13px', color: '#8A8580', marginBottom: '16px', letterSpacing: '0.05em' }}>
            JOIN FOR 10% OFF YOUR FIRST ORDER
          </p>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
            <input 
              type="email" 
              placeholder="Your email"
              style={{
                padding: '12px 16px',
                border: '1px solid #8A8580',
                backgroundColor: 'transparent',
                color: '#F5F1ED',
                fontSize: '13px',
                flex: 1,
                maxWidth: '250px'
              }}
            />
            <button style={{
              padding: '12px 24px',
              backgroundColor: '#C9A96E',
              color: 'white',
              border: 'none',
              fontSize: '13px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer'
            }}>
              Subscribe
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

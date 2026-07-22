import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const bestsellers = [
    { id: 1, name: 'VIVID AURA JEWELS', price: 42, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800' },
    { id: 2, name: 'MAJESTIC FLORA NECTAR', price: 68, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800' },
    { id: 3, name: 'GOLDEN SPHERE HUGGIES', price: 38, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800' },
    { id: 4, name: 'AMBER LACE EARRINGS', price: 54, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800' },
    { id: 5, name: 'ROYAL HEIRLOOM SET', price: 95, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1a1a1a',
        color: 'white',
        textAlign: 'center',
        padding: '0 1.5rem'
      }}>
        <div>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '3.5rem',
            marginBottom: '1.5rem',
            fontWeight: 300,
            letterSpacing: '0.02em'
          }}>
            Crafted to be Treasured
          </h1>
          <p style={{
            fontSize: '1.125rem',
            marginBottom: '2.5rem',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 300
          }}>
            Demi-fine jewelry designed for everyday elegance
          </p>
          <Link
            to="/shop"
            style={{
              display: 'inline-block',
              backgroundColor: '#c9a96e',
              color: 'white',
              padding: '1rem 2.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontSize: '0.875rem',
              textDecoration: 'none',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              transition: 'all 0.3s ease'
            }}
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section style={{
        padding: '1.5rem 0',
        borderBottom: '1px solid #e5e7eb',
        backgroundColor: '#faf8f5'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          gap: '3rem',
          flexWrap: 'wrap',
          fontSize: '0.875rem',
          color: '#374151',
          fontFamily: 'Inter, sans-serif'
        }}>
          <span>Free Worldwide Shipping</span>
          <span>30-Day Returns</span>
          <span>18K Gold Plated</span>
          <span>Hypoallergenic</span>
        </div>
      </section>

      {/* Bestsellers */}
      <section style={{
        padding: '5rem 1.5rem',
        maxWidth: '1280px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '2.25rem',
          textAlign: 'center',
          marginBottom: '4rem',
          fontWeight: 400
        }}>
          Bestsellers
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {bestsellers.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ marginBottom: '1rem' }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: '100%',
                    aspectRatio: '3/4',
                    objectFit: 'cover',
                    backgroundColor: '#e5e7eb'
                  }}
                />
              </div>
              <h3 style={{
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontSize: '0.875rem',
                fontFamily: 'Cormorant Garamond, serif',
                marginBottom: '0.5rem'
              }}>
                {product.name}
              </h3>
              <p style={{
                color: '#6b7280',
                fontSize: '0.875rem',
                fontFamily: 'Inter, sans-serif'
              }}>
                ${product.price}.00
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section style={{
        padding: '5rem 1.5rem',
        backgroundColor: '#faf8f5'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '2.25rem',
            textAlign: 'center',
            marginBottom: '4rem',
            fontWeight: 400
          }}>
            Shop by Category
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {['Earrings', 'Necklaces', 'Huggies'].map((category) => (
              <Link
                key={category}
                to="/shop"
                style={{
                  position: 'relative',
                  display: 'block',
                  aspectRatio: '4/5',
                  backgroundColor: '#1a1a1a',
                  overflow: 'hidden',
                  textDecoration: 'none'
                }}
              >
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{
                    color: 'white',
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}>
                    {category}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section style={{
        padding: '5rem 1.5rem',
        maxWidth: '1280px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <div style={{
            aspectRatio: '4/5',
            backgroundColor: '#e5e7eb'
          }} />
          <div>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '2.25rem',
              marginBottom: '1.5rem',
              fontWeight: 400
            }}>
              Our Story
            </h2>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              lineHeight: 1.8,
              color: '#374151',
              marginBottom: '2rem'
            }}>
              At Velmora, we believe that fine jewelry should be accessible without compromising on quality. 
              Each piece is crafted with care, using 18K gold plating and hypoallergenic materials 
              that are designed to be worn and treasured every day.
            </p>
            <Link
              to="/about"
              style={{
                fontFamily: 'Inter, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontSize: '0.875rem',
                color: '#c9a96e',
                textDecoration: 'none',
                borderBottom: '1px solid #c9a96e',
                paddingBottom: '0.25rem'
              }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{
        padding: '5rem 1.5rem',
        backgroundColor: '#faf8f5'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '2.25rem',
            textAlign: 'center',
            marginBottom: '4rem',
            fontWeight: 400
          }}>
            What Our Customers Say
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { name: 'Sarah M.', initial: 'S', text: 'Absolutely love my new earrings! The quality is amazing for the price.' },
              { name: 'Emily R.', initial: 'E', text: 'Beautiful pieces that I wear every day. Truly demi-fine jewelry.' },
              { name: 'Jessica L.', initial: 'J', text: 'The perfect gift. Elegant packaging and stunning jewelry.' }
            ].map((review, index) => (
              <div
                key={index}
                style={{
                  padding: '2rem',
                  backgroundColor: 'white',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  fontSize: '1.5rem',
                  color: '#c9a96e',
                  marginBottom: '1rem'
                }}>
                  ★★★★★
                </div>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: 1.8,
                  color: '#374151',
                  marginBottom: '1.5rem',
                  fontStyle: 'italic'
                }}>
                  "{review.text}"
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem'
                }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    backgroundColor: '#e5e7eb',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.25rem'
                  }}>
                    {review.initial}
                  </div>
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.875rem',
                    fontWeight: 500
                  }}>
                    {review.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section style={{
        padding: '5rem 1.5rem',
        backgroundColor: '#c9a96e',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '2.25rem',
            marginBottom: '1rem',
            fontWeight: 400
          }}>
            Join for 10% Off
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            marginBottom: '2rem',
            fontWeight: 300
          }}>
            Subscribe to our newsletter and receive exclusive offers
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            maxWidth: '400px',
            margin: '0 auto',
            flexDirection: 'column'
          }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                padding: '0.75rem 1rem',
                border: 'none',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem'
              }}
            />
            <button style={{
              padding: '0.75rem 2rem',
              backgroundColor: 'white',
              color: '#c9a96e',
              border: 'none',
              fontFamily: 'Inter, sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontSize: '0.875rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}>
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;

import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus } from 'lucide-react';

const CartDrawer = () => {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 100 }}>
      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          onClick: () => setIsCartOpen(false)
        }}
      />
      
      {/* Drawer */}
      <div style={{
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: '400px',
        maxWidth: '100%',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.5rem',
          borderBottom: '1px solid #e5e7eb'
        }}>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1.5rem',
            fontWeight: 400
          }}>
            Your Cart ({cartItems.length})
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            style={{
              padding: '0.5rem',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem' }}>
          {cartItems.length === 0 ? (
            <p style={{
              textAlign: 'center',
              color: '#6b7280',
              marginTop: '2rem',
              fontFamily: 'Inter, sans-serif'
            }}>
              Your cart is empty
            </p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '1.5rem',
                paddingBottom: '1.5rem',
                borderBottom: '1px solid #e5e7eb'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#e5e7eb',
                  flexShrink: 0
                }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontFamily: 'Cormorant Garamond, serif',
                    marginBottom: '0.25rem'
                  }}>
                    {item.name}
                  </h3>
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#6b7280',
                    marginBottom: '0.75rem',
                    fontFamily: 'Inter, sans-serif'
                  }}>
                    ${item.price}.00
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      style={{
                        width: '1.5rem',
                        height: '1.5rem',
                        border: '1px solid #e5e7eb',
                        backgroundColor: 'transparent',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Minus size={12} />
                    </button>
                    <span style={{ fontSize: '0.875rem', minWidth: '1.5rem', textAlign: 'center' }}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      style={{
                        width: '1.5rem',
                        height: '1.5rem',
                        border: '1px solid #e5e7eb',
                        backgroundColor: 'transparent',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Plus size={12} />
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        marginLeft: 'auto',
                        fontSize: '0.75rem',
                        color: '#6b7280',
                        backgroundColor: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        textDecoration: 'underline'
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div style={{
            padding: '1.5rem',
            borderTop: '1px solid #e5e7eb'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '1rem',
              fontFamily: 'Inter, sans-serif'
            }}>
              <span style={{ fontWeight: 600 }}>Total</span>
              <span style={{ fontWeight: 600 }}>${cartTotal.toFixed(2)}</span>
            </div>
            <button style={{
              width: '100%',
              padding: '1rem',
              backgroundColor: '#c9a96e',
              color: 'white',
              border: 'none',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: 600,
              cursor: 'pointer'
            }}>
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;

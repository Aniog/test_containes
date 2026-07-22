import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

console.log('CartDrawer: Component loading...');

export default function CartDrawer() {
  const {
    isOpen,
    items,
    closeCart,
    removeItem,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
    clearCart,
  } = useCart();

  console.log('CartDrawer: isOpen =', isOpen, 'items =', items);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        style={{
          position: 'fixed',
          inset: '0',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 50,
        }}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div style={{
        position: 'fixed',
        right: '0',
        top: '0',
        height: '100%',
        width: '100%',
        maxWidth: '28rem',
        backgroundColor: 'white',
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.5rem',
          borderBottom: '1px solid #d1d5db',
        }}>
          <h2 style={{ fontFamily: 'serif', fontSize: '1.25rem', fontWeight: '300' }}>
            Your Cart ({getTotalItems()})
          </h2>
          <button
            onClick={closeCart}
            style={{ padding: '0.5rem', cursor: 'pointer', background: 'none', border: 'none' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        {items.length === 0 ? (
          <div style={{
            flexGrow: '1',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}>
            <ShoppingBag size={64} style={{ color: '#d1d5db', marginBottom: '1rem' }} />
            <p style={{ color: '#666', marginBottom: '1.5rem' }}>Your cart is empty</p>
            <Link
              to="/shop"
              onClick={closeCart}
              style={{
                padding: '0.75rem 2rem',
                backgroundColor: '#1a1a1a',
                color: 'white',
                textDecoration: 'none',
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div style={{ flexGrow: '1', overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} style={{ display: 'flex', gap: '1rem' }}>
                  {/* Product Image */}
                  <div style={{ width: '6rem', height: '6rem', flexShrink: '0', overflow: 'hidden', backgroundColor: '#f5f0eb' }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  {/* Product Info */}
                  <div style={{ flexGrow: '1', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <h3 style={{ fontSize: '0.875rem', fontWeight: '500' }}>{item.name}</h3>
                    <p style={{ fontSize: '0.75rem', color: '#666' }}>{item.variant}</p>
                    <p style={{ fontSize: '0.875rem', fontWeight: '500' }}>${item.price}</p>

                    {/* Quantity Controls */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        style={{ padding: '0.25rem', cursor: 'pointer', background: 'none', border: 'none' }}
                      >
                        <Minus size={14} />
                      </button>
                      <span style={{ width: '2rem', textAlign: 'center', fontSize: '0.875rem' }}>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        style={{ padding: '0.25rem', cursor: 'pointer', background: 'none', border: 'none' }}
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.id, item.variant)}
                    style={{ alignSelf: 'flex-start', padding: '0.25rem', cursor: 'pointer', background: 'none', border: 'none' }}
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div style={{ borderTop: '1px solid #d1d5db', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Subtotal */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '500' }}>Subtotal</span>
                <span style={{ fontSize: '1.125rem', fontWeight: '500' }}>${getTotalPrice().toFixed(2)}</span>
              </div>
              <p style={{ fontSize: '0.75rem', color: '#666' }}>
                Shipping calculated at checkout
              </p>

              {/* Checkout Button */}
              <button style={{
                width: '100%',
                padding: '0.75rem',
                backgroundColor: '#1a1a1a',
                color: 'white',
                border: 'none',
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontWeight: '500',
                cursor: 'pointer',
              }}>
                Proceed to Checkout
              </button>

              {/* Continue Shopping */}
              <Link
                to="/shop"
                onClick={closeCart}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  fontSize: '0.875rem',
                  color: '#666',
                  textDecoration: 'none',
                }}
              >
                Continue Shopping
              </Link>

              {/* Clear Cart */}
              <button
                onClick={clearCart}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'center',
                  fontSize: '0.875rem',
                  color: '#ef4444',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

import React from 'react';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 999,
          onClick: () => setIsCartOpen(false)
        }}
      />

      {/* Cart Drawer */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '400px',
          backgroundColor: 'white',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '-2px 0 8px rgba(0,0,0,0.1)'
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px', borderBottom: '1px solid #e5e5e5' }}>
          <h2 style={{ fontFamily: 'serif', fontSize: '24px' }}>Your Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}
          >
            ×
          </button>
        </div>

        {/* Cart Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
          {cartItems.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#999', marginTop: '48px' }}>Your cart is empty</p>
          ) : (
            cartItems.map(item => (
              <div key={item.id} style={{ display: 'flex', gap: '16px', marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid #e5e5e5' }}>
                <div style={{ width: '80px', height: '80px', backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: '12px', color: '#999' }}>{item.name}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>{item.name}</h3>
                  <p style={{ color: '#666', marginBottom: '8px' }}>${item.price}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      style={{ width: '28px', height: '28px', border: '1px solid #e5e5e5', backgroundColor: 'transparent', cursor: 'pointer' }}
                    >
                      -
                    </button>
                    <span style={{ minWidth: '24px', textAlign: 'center' }}>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      style={{ width: '28px', height: '28px', border: '1px solid #e5e5e5', backgroundColor: 'transparent', cursor: 'pointer' }}
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{ marginLeft: 'auto', background: 'none', border: 'none', color: '#999', cursor: 'pointer', fontSize: '14px' }}
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
          <div style={{ padding: '24px', borderTop: '1px solid #e5e5e5' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
              <span style={{ fontSize: '16px', fontWeight: '500' }}>Total</span>
              <span style={{ fontFamily: 'serif', fontSize: '20px' }}>${cartTotal.toFixed(2)}</span>
            </div>
            <button
              style={{
                width: '100%',
                padding: '16px',
                backgroundColor: '#d4a574',
                color: 'white',
                border: 'none',
                fontSize: '14px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                cursor: 'pointer'
              }}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;

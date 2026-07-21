import React from 'react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart } = useCart();
  
  if (!isCartOpen) return null;
  
  return (
    <div style={{position: 'fixed', inset: '0', zIndex: '50'}}>
      <div
        style={{position: 'absolute', inset: '0', backgroundColor: 'rgba(0,0,0,0.5)'}}
        onClick={() => setIsCartOpen(false)}
      />
      <div style={{position: 'absolute', right: '0', top: '0', height: '100%', width: '100%', maxWidth: '28rem', backgroundColor: 'white', boxShadow: '0 0 20px rgba(0,0,0,0.1)'}}>
        <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem', borderBottom: '1px solid #f5f0eb'}}>
            <h2 style={{fontFamily: 'serif', fontSize: '1.5rem', letterSpacing: '0.2em'}}>YOUR CART</h2>
            <button onClick={() => setIsCartOpen(false)} style={{background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.5rem'}}>✕</button>
          </div>
          <div style={{flex: '1', overflowY: 'auto', padding: '1.5rem'}}>
            {cartItems.length === 0 ? (
              <p style={{textAlign: 'center', color: '#8a8580', marginTop: '2rem'}}>Your cart is empty</p>
            ) : (
              <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                {cartItems.map(item => (
                  <div key={item.id} style={{display: 'flex', gap: '1rem'}}>
                    <div style={{width: '6rem', height: '6rem', backgroundColor: '#f5f0eb', flexShrink: '0'}} />
                    <div style={{flex: '1'}}>
                      <h3 style={{fontFamily: 'serif', fontSize: '0.875rem', letterSpacing: '0.1em'}}>{item.name}</h3>
                      <p style={{color: '#c9a96e', marginTop: '0.25rem'}}>${item.price}</p>
                      <p style={{fontSize: '0.875rem', color: '#8a8580', marginTop: '0.5rem'}}>Qty: {item.quantity}</p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        style={{fontSize: '0.875rem', color: '#8a8580', marginTop: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline'}}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {cartItems.length > 0 && (
            <div style={{borderTop: '1px solid #f5f0eb', padding: '1.5rem'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', fontWeight: '500'}}>
                <span>Total</span>
                <span>${cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</span>
              </div>
              <button style={{width: '100%', backgroundColor: '#1a1a1a', color: 'white', padding: '1rem', letterSpacing: '0.1em', marginTop: '1rem', border: 'none', cursor: 'pointer'}}>
                CHECKOUT
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

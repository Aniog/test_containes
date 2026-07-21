import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';

export default function Layout() {
  const { cartCount, setIsCartOpen } = useCart();
  
  return (
    <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#faf8f5'}}>
      <header style={{backgroundColor: '#faf8f5', borderBottom: '1px solid #f5f0eb', padding: '1rem 2rem'}}>
        <div style={{maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Link to="/" style={{fontFamily: 'serif', fontSize: '1.5rem', letterSpacing: '0.2em', color: '#1a1a1a', textDecoration: 'none'}}>
            VELMORA
          </Link>
          <nav style={{display: 'flex', gap: '2rem', alignItems: 'center'}}>
            <Link to="/shop" style={{color: '#1a1a1a', textDecoration: 'none', fontSize: '0.875rem', letterSpacing: '0.1em'}}>Shop</Link>
            <button
              onClick={() => setIsCartOpen(true)}
              style={{background: 'none', border: 'none', cursor: 'pointer', position: 'relative', fontSize: '1.5rem'}}
            >
              🛍️
              {cartCount > 0 && (
                <span style={{position: 'absolute', top: '-8px', right: '-8px', backgroundColor: '#c9a96e', color: 'white', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem'}}>
                  {cartCount}
                </span>
              )}
            </button>
          </nav>
        </div>
      </header>
      <main style={{flex: 1}}>
        <Outlet />
      </main>
      <CartDrawer />
      <footer style={{backgroundColor: '#111111', color: 'white', padding: '4rem 2rem'}}>
        <div style={{maxWidth: '1280px', margin: '0 auto', textAlign: 'center'}}>
          <h3 style={{fontFamily: 'serif', fontSize: '1.5rem', letterSpacing: '0.2em', marginBottom: '1rem'}}>VELMORA</h3>
          <p style={{fontSize: '0.875rem', letterSpacing: '0.1em', color: '#f5f0eb'}}>Crafted to be Treasured</p>
        </div>
      </footer>
    </div>
  );
}

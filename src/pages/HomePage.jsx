import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import products from '../data/products';

export default function HomePage() {
  const { addToCart } = useCart();
  
  return (
    <div style={{backgroundColor: '#faf8f5'}}>
      {/* Hero Section */}
      <section style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1a1a1a', color: 'white'}}>
        <div style={{textAlign: 'center'}}>
          <h1 style={{fontFamily: 'serif', fontSize: '4rem', letterSpacing: '0.2em', marginBottom: '2rem'}}>
            CRAFTED TO BE TREASURED
          </h1>
          <p style={{fontSize: '1.25rem', marginBottom: '3rem', letterSpacing: '0.1em'}}>
            Discover our collection of demi-fine gold jewelry
          </p>
          <Link
            to="/shop"
            style={{display: 'inline-block', backgroundColor: '#c9a96e', color: 'white', padding: '1rem 3rem', letterSpacing: '0.2em', fontSize: '0.875rem', textDecoration: 'none'}}
          >
            SHOP THE COLLECTION
          </Link>
        </div>
      </section>

      {/* Bestsellers */}
      <section style={{maxWidth: '1280px', margin: '0 auto', padding: '5rem 2rem'}}>
        <h2 style={{fontFamily: 'serif', fontSize: '2.5rem', textAlign: 'center', letterSpacing: '0.2em', marginBottom: '3rem'}}>
          BESTSELLERS
        </h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2rem'}}>
          {products.map(product => (
            <div key={product.id} style={{textAlign: 'center'}}>
              <Link to={`/product/${product.slug}`} style={{textDecoration: 'none', color: 'inherit'}}>
                <div style={{backgroundColor: '#f5f0eb', aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem'}}>
                  <span style={{color: '#8a8580'}}>Product Image</span>
                </div>
                <h3 style={{fontFamily: 'serif', fontSize: '0.875rem', letterSpacing: '0.1em', marginBottom: '0.5rem'}}>{product.name}</h3>
                <p style={{color: '#c9a96e', fontWeight: '600'}}>${product.price}</p>
              </Link>
              <button
                onClick={() => addToCart(product)}
                style={{marginTop: '1rem', width: '100%', backgroundColor: '#1a1a1a', color: 'white', padding: '0.75rem', letterSpacing: '0.1em', fontSize: '0.875rem', border: 'none', cursor: 'pointer'}}
              >
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

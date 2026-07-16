import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const BrandStory = () => {
  return (
    <section style={{ 
      display: 'grid', 
      gridTemplateColumns: '1fr 1fr', 
      gap: '0',
      maxWidth: '1400px',
      margin: '0 auto'
    }}>
      <div style={{ 
        backgroundColor: 'var(--color-bg-alt)',
        minHeight: '500px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <img 
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1000&q=80" 
          alt="Velmora craftsmanship"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      
      <div style={{ 
        padding: '4rem 3rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'var(--color-surface)'
      }}>
        <div style={{ maxWidth: '420px' }}>
          <div style={{ 
            fontSize: '0.75rem', 
            letterSpacing: '0.15em', 
            textTransform: 'uppercase',
            color: 'var(--color-gold)',
            marginBottom: '1rem'
          }}>
            Since 2018
          </div>
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
            Jewelry that feels like you.
          </h2>
          <p style={{ 
            color: 'var(--color-text-muted)', 
            fontSize: '0.9375rem',
            lineHeight: 1.8,
            marginBottom: '2rem'
          }}>
            Velmora was born from a simple belief: that beautiful jewelry should be worn every day, 
            not saved for special occasions. We craft demi-fine pieces in 18K gold plating that 
            feel as good as they look — refined, effortless, and made to last.
          </p>
          <Link to="/about">
            <Button variant="outline">Our Story</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
import React from 'react';
import Button from './ui/Button';

const ProductCard = ({ product, onInquire }) => {
  const { name, description, specs, capacity } = product;

  return (
    <div className="product-card">
      <div className="product-card-image">
        <div style={{ 
          textAlign: 'center', 
          color: 'rgba(255,255,255,0.9)',
          zIndex: 1,
          position: 'relative'
        }}>
          <div style={{ 
            fontSize: '3rem', 
            fontWeight: 700, 
            fontFamily: 'var(--font-heading)',
            marginBottom: '0.25rem'
          }}>
            {capacity}
          </div>
          <div style={{ fontSize: '0.875rem', letterSpacing: '0.1em', opacity: 0.8 }}>
            TON CAPACITY
          </div>
        </div>
      </div>
      <div className="product-card-content">
        <h3 className="product-card-title">{name}</h3>
        <p className="product-card-desc">{description}</p>
        
        <div style={{ 
          marginTop: '1.25rem', 
          paddingTop: '1.25rem', 
          borderTop: '1px solid var(--color-light-gray)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}>
          {specs.map((spec, index) => (
            <span 
              key={index}
              style={{
                fontSize: '0.75rem',
                padding: '0.25rem 0.625rem',
                background: 'var(--color-light-gray)',
                borderRadius: '3px',
                color: 'var(--color-steel)',
                fontWeight: 500
              }}
            >
              {spec}
            </span>
          ))}
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <Button 
            variant="secondary" 
            onClick={() => onInquire(product)}
            style={{ width: '100%' }}
          >
            Request Information
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
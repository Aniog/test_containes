import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="section" style={{ backgroundColor: '#f2ede6' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'center'
        }}>
          <div style={{ order: 2 }}>
            <img 
              src="https://picsum.photos/id/106/900/700" 
              alt="Velmora atelier" 
              style={{ width: '100%', display: 'block' }}
              loading="lazy"
            />
          </div>
          
          <div style={{ order: 1 }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Our Story</h2>
            <div style={{ maxWidth: '520px' }}>
              <p style={{ color: '#6b635c', lineHeight: 1.9, marginBottom: '1rem' }}>
                Velmora was born from a quiet obsession with the beauty of restraint. 
                We believe the most meaningful jewelry doesn't shout—it whispers.
              </p>
              <p style={{ color: '#6b635c', lineHeight: 1.9, marginBottom: '1.5rem' }}>
                Each piece is crafted in small batches using 18K gold plating over 
                hypoallergenic brass, designed to be worn daily and treasured for years.
              </p>
              <Link to="/about" className="btn btn-gold">
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;

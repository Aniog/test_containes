import React from 'react';

const About = () => {
  return (
    <div style={{ paddingTop: '5rem', minHeight: '70vh' }}>
      <div className="container" style={{ maxWidth: '720px', padding: '4rem 1.5rem' }}>
        <h1 style={{ marginBottom: '2rem' }}>Our Story</h1>
        
        <div style={{ color: '#6b635c', lineHeight: 1.9, fontSize: '1rem' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Velmora was founded in 2018 with a simple belief: that beautiful jewelry 
            should be accessible without compromise. We create demi-fine pieces that 
            feel as precious as fine jewelry, but designed for real life.
          </p>
          
          <p style={{ marginBottom: '1.5rem' }}>
            Every piece begins with a sketch and ends in the hands of skilled artisans 
            who share our commitment to quality. We use only 18K gold plating over 
            hypoallergenic brass, ensuring our jewelry is as kind to skin as it is to the eye.
          </p>
          
          <p style={{ marginBottom: '1.5rem' }}>
            We believe in thoughtful consumption. Our collections are intentionally 
            small, our production is limited, and each piece is made to last—not to trend.
          </p>
          
          <h3 style={{ fontSize: '1.25rem', marginTop: '2.5rem', marginBottom: '1rem', color: '#2c2522' }}>
            Our Promise
          </h3>
          
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Free worldwide shipping on all orders</li>
            <li style={{ marginBottom: '0.5rem' }}>30-day returns, no questions asked</li>
            <li style={{ marginBottom: '0.5rem' }}>Lifetime warranty on plating</li>
            <li style={{ marginBottom: '0.5rem' }}>Ethically sourced materials</li>
            <li>Carbon-negative shipping</li>
          </ul>
          
          <p>
            Thank you for choosing Velmora. We hope our pieces become part of your story.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

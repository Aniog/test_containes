import React from 'react';
import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';

const About = () => {
  return (
    <div>
      <Navigation />
      
      <div style={{ paddingTop: '6rem', maxWidth: '800px', margin: '0 auto', padding: '6rem 1.5rem 4rem' }}>
        <h1 className="section-title" style={{ textAlign: 'center', marginBottom: '1rem' }}>
          Our Story
        </h1>
        <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: '3rem' }}>
          Quiet luxury, made to be worn.
        </p>

        <div style={{ fontSize: '1rem', lineHeight: 1.9, color: 'var(--color-text-muted)' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Velmora was founded in 2018 with a simple conviction: that beautiful jewelry should not be reserved for special occasions. 
            We believe in pieces that become part of your daily ritual — worn to work, to dinner, to the market, to bed.
          </p>
          
          <p style={{ marginBottom: '1.5rem' }}>
            Our demi-fine collection is crafted from 18K gold plating over sterling silver, chosen for its warmth, durability, and 
            hypoallergenic properties. Each piece is designed in our studio and produced in small batches by skilled artisans 
            who share our commitment to quality over quantity.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            We source our materials responsibly and design with longevity in mind. Our pieces are meant to be passed down, 
            not replaced. From the initial sketch to the final polish, every detail is considered.
          </p>

          <div style={{ 
            margin: '3rem 0', 
            padding: '2rem', 
            background: 'var(--color-bg-alt)',
            fontFamily: 'var(--font-serif)',
            fontSize: '1.125rem',
            textAlign: 'center',
            color: 'var(--color-text)'
          }}>
            "Jewelry should feel like an extension of yourself — not a costume."
          </div>

          <p>
            Thank you for wearing Velmora. We hope our pieces bring you quiet joy, every single day.
          </p>
        </div>

        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border-light)' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>Our Promise</h3>
          <ul style={{ color: 'var(--color-text-muted)', lineHeight: 2 }}>
            <li>Free worldwide shipping on every order</li>
            <li>30-day returns, no questions asked</li>
            <li>1-year warranty on all pieces</li>
            <li>Ethically sourced materials</li>
            <li>Small-batch production</li>
          </ul>
        </div>
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default About;
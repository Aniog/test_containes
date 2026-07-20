import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CartDrawer from '../components/layout/CartDrawer';

const About = () => {
  return (
    <div className="min-h-screen bg-velmora-bg">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h1 className="heading-serif text-5xl md:text-6xl mb-12 tracking-[0.02em]">Our Story</h1>
        
        <div className="prose prose-lg max-w-none text-velmora-muted leading-relaxed space-y-6">
          <p className="text-xl text-velmora-text">
            Velmora was founded in 2018 with a simple conviction: that fine jewelry should feel 
            personal, not precious. We believe the pieces you wear every day should be as beautiful 
            as the ones you save for special occasions.
          </p>

          <div className="my-12 h-px bg-velmora-border" />

          <h2 className="heading-serif text-3xl text-velmora-text mt-12 mb-4">The Velmora Difference</h2>
          <p>
            Every piece in our collection is crafted from solid brass with 18K gold plating. 
            We source our crystals from trusted suppliers and work with small family-run ateliers 
            who share our commitment to quality and care.
          </p>
          <p>
            Our designs are intentionally understated. We don't chase trends. Instead, we create 
            pieces that feel like they belong to you from the moment you put them on.
          </p>

          <h2 className="heading-serif text-3xl text-velmora-text mt-12 mb-4">Our Promise</h2>
          <ul className="list-none space-y-2 pl-0">
            <li>✓ 18K gold plated over solid brass</li>
            <li>✓ Hypoallergenic and nickel-free</li>
            <li>✓ Tarnish-resistant finish</li>
            <li>✓ Free worldwide shipping</li>
            <li>✓ 30-day returns on unworn items</li>
          </ul>

          <div className="my-12 h-px bg-velmora-border" />

          <p>
            Thank you for choosing Velmora. We hope our pieces become part of your story.
          </p>
        </div>
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default About;

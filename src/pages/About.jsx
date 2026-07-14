import React from 'react';
import Navbar from '../components/Navbar';
import CartDrawer from '../components/CartDrawer';

const About = () => {
  return (
    <div className="min-h-screen bg-[#F8F5F1] pt-20">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.2em] text-[#8B7355] mb-3">EST. 2019</p>
          <h1 className="serif text-6xl mb-6">Our Story</h1>
        </div>

        <div className="prose prose-lg max-w-none text-[#6B6058]">
          <p className="text-xl mb-8">
            Velmora was born from a simple belief: that beautiful jewelry should be accessible, 
            not exclusive. We create demi-fine pieces that feel as special as the moments they mark.
          </p>
          
          <div className="my-12 h-px bg-[#E5DFD6]" />
          
          <h2 className="serif text-3xl text-[#2C2522] mb-6">The Velmora Difference</h2>
          <p>
            Every piece begins in our studio, where our designers draw inspiration from both 
            contemporary minimalism and timeless heirloom aesthetics. We source only the finest 
            materials—18K gold plating over solid brass, ethically sourced crystals, and 
            hypoallergenic findings.
          </p>
          
          <p>
            Each item is hand-finished by skilled artisans who take pride in their craft. 
            We inspect every piece multiple times before it reaches you, ensuring it meets 
            our exacting standards.
          </p>

          <div className="my-12 h-px bg-[#E5DFD6]" />

          <h2 className="serif text-3xl text-[#2C2522] mb-6">Our Promise</h2>
          <ul className="space-y-2">
            <li>18K gold plating that resists tarnish</li>
            <li>Hypoallergenic materials safe for sensitive skin</li>
            <li>Thoughtful packaging designed to be kept and treasured</li>
            <li>30-day returns and lifetime care guidance</li>
          </ul>
        </div>
      </div>

      <CartDrawer />
    </div>
  );
};

export default About;
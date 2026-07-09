import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-[var(--velmora-deep)]">
        <img 
          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1600&q=80" 
          alt="Velmora atelier" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-white text-4xl md:text-5xl tracking-[-0.02em]">Our Story</h1>
        </div>
      </div>

      <div className="container py-16 max-w-3xl">
        <div className="prose prose-lg">
          <p className="text-xl leading-relaxed mb-8">
            Velmora was founded in 2018 with a simple conviction: that fine jewelry should not 
            require compromise. We believe in pieces that feel like heirlooms — beautiful enough 
            to treasure, accessible enough to wear every day.
          </p>

          <h2 className="text-2xl mt-12 mb-4">The Philosophy</h2>
          <p className="body-text mb-6">
            "Demi-fine" is not a lesser category to us — it is a deliberate choice. We work with 
            18K gold plating over sterling silver, paired with carefully selected crystals. The 
            result is jewelry that looks and feels luxurious, without the fragility or price of 
            solid gold.
          </p>
          <p className="body-text mb-6">
            Every piece is designed to be worn, not stored. To layer, to stack, to become part of 
            your daily ritual. We design for women who value quality over quantity, and who 
            understand that true luxury is quiet.
          </p>

          <h2 className="text-2xl mt-12 mb-4">The Process</h2>
          <p className="body-text mb-6">
            Each Velmora piece begins with a sketch and ends in the hands of skilled artisans. 
            We work with small workshops that share our commitment to quality and care. Every 
            crystal is hand-set. Every surface is finished by hand. Nothing is rushed.
          </p>
          <p className="body-text mb-6">
            We test every design for comfort, durability, and wearability. If it doesn't feel 
            right on the body, it doesn't leave the studio.
          </p>

          <h2 className="text-2xl mt-12 mb-4">Our Promise</h2>
          <ul className="body-text space-y-2 mb-8">
            <li>• 18K gold plated over sterling silver</li>
            <li>• Hypoallergenic and nickel-free</li>
            <li>• Designed for daily wear</li>
            <li>• 30-day returns on unworn items</li>
            <li>• Free worldwide shipping</li>
          </ul>

          <div className="mt-12 pt-8 border-t border-[var(--velmora-border)]">
            <p className="text-sm text-[var(--velmora-muted)] mb-4">
              Questions? We're here to help.
            </p>
            <Link to="/shop" className="btn btn-outline">
              Explore the Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
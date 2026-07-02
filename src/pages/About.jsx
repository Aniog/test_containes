import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-taupe)] mb-4">Est. 2018</p>
        <h1 className="serif text-6xl mb-8">Our Story</h1>
        <div className="prose prose-lg mx-auto text-[var(--color-taupe)]">
          <p className="text-lg leading-relaxed mb-6">
            Velmora was founded with a simple belief: that fine jewelry should be accessible, 
            beautiful, and built to last. We create demi-fine pieces that bridge the gap between 
            precious heirlooms and everyday adornments.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Each piece in our collection is designed in our atelier and crafted with the highest 
            quality materials. We use 18K gold plating over solid brass, ensuring durability and 
            a lasting finish that won't tarnish with regular wear.
          </p>
          <p className="text-lg leading-relaxed">
            Our designs are inspired by quiet luxury—the kind of understated elegance that speaks 
            volumes without saying a word. From delicate ear cuffs to sculptural huggies, every 
            piece is made to be treasured for years to come.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-center">
        {[
          { number: "18K", label: "Gold Plating" },
          { number: "30", label: "Day Returns" },
          { number: "5", label: "Signature Collections" },
        ].map((stat, i) => (
          <div key={i} className="py-8 border border-[var(--color-border)]">
            <p className="serif text-5xl mb-2">{stat.number}</p>
            <p className="text-sm tracking-[0.12em] uppercase text-[var(--color-taupe)]">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="text-center py-16 border-t">
        <Link to="/shop" className="btn">Explore the Collection</Link>
      </div>
    </div>
  );
};

export default About;
import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center py-12">
        <h1 className="font-serif text-5xl uppercase tracking-widest mb-4">Our Story</h1>
        <div className="hairline w-24 mx-auto mb-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-gray-700">
            Velmora was born from a simple belief: that beautiful, high-quality jewelry should be 
            accessible to everyone. We saw a gap in the market between fast fashion accessories 
            and fine jewelry — and we set out to fill it.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Our demi-fine pieces are crafted with 18K gold plating over brass, ensuring each piece 
            has the look and feel of fine jewelry at a fraction of the cost. Every design is 
            thoughtfully created in our studio, with attention to detail that ensures each piece 
            is as durable as it is beautiful.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            We're committed to creating jewelry that's not just beautiful, but responsible. 
            Our pieces are hypoallergenic, nickel-free, and crafted with care for both people 
            and planet.
          </p>
        </div>
        <div className="bg-velmora-warm h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {[
          { title: 'Quality', description: '18K gold plated, hypoallergenic materials crafted to last.' },
          { title: 'Accessibility', description: 'Demi-fine jewelry that bridges the gap between costume and fine.' },
          { title: 'Responsibility', description: 'Ethically crafted with care for people and planet.' }
        ].map((value, index) => (
          <div key={index} className="text-center p-8 bg-velmora-warm">
            <h3 className="font-serif text-2xl uppercase tracking-wider mb-4">{value.title}</h3>
            <p className="text-gray-700 leading-relaxed">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
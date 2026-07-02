import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[420px] flex items-center justify-center bg-[#2C2522]">
        <img 
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=80" 
          alt="Velmora studio" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center px-6">
          <div className="text-white/70 text-xs tracking-[0.2em] mb-3">SINCE 2019</div>
          <h1 className="font-serif text-white text-5xl tracking-[0.06em]">Our Story</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="prose prose-neutral max-w-none">
          <p className="text-xl leading-relaxed text-[#2C2522]">
            Velmora was founded with a simple belief: that beautiful jewelry should be accessible, 
            not ostentatious. We design demi-fine pieces that feel personal, not performative.
          </p>

          <div className="my-12 h-px bg-[#E5DFD6]" />

          <h2 className="font-serif text-3xl tracking-[0.04em] mb-6">The Beginning</h2>
          <p className="text-[#6B6058] leading-relaxed">
            What started as a small collection of hand-finished pieces made in a Brooklyn studio 
            has grown into a considered line of everyday heirlooms. Each design is sketched, 
            prototyped, and refined until it feels just right.
          </p>

          <h2 className="font-serif text-3xl tracking-[0.04em] mt-12 mb-6">Our Approach</h2>
          <p className="text-[#6B6058] leading-relaxed">
            We work with small family-owned workshops that share our commitment to quality and 
            responsible practices. Our gold plating is thick and durable. Our stones are hand-selected. 
            Nothing is mass-produced.
          </p>

          <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div>
              <div className="font-medium mb-2">18K Gold Plated</div>
              <div className="text-[#6B6058]">Thicker plating for lasting beauty</div>
            </div>
            <div>
              <div className="font-medium mb-2">Hypoallergenic</div>
              <div className="text-[#6B6058]">Safe for sensitive skin</div>
            </div>
            <div>
              <div className="font-medium mb-2">Ethically Sourced</div>
              <div className="text-[#6B6058]">Responsible materials only</div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#E5DFD6]">
            <Link to="/shop" className="btn btn-gold">Shop the Collection</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

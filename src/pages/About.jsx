import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
      <div className="max-w-2xl">
        <p className="text-xs tracking-[0.12em] uppercase text-[#6B6359]">Est. 2018</p>
        <h1 className="serif text-5xl md:text-6xl tracking-[0.02em] mt-2 mb-8">Our Story</h1>
      </div>

      <div className="prose prose-neutral max-w-2xl text-[#6B6359] leading-relaxed space-y-6">
        <p>
          Velmora began in a small studio in Brooklyn, where our founder, a former fine jewelry 
          designer, grew frustrated with the gap between mass-produced fashion jewelry and the 
          unattainable prices of true fine jewelry.
        </p>
        <p>
          We set out to create something different: pieces that feel special enough for milestones, 
          but wearable enough for everyday. Demi-fine jewelry that doesn't ask you to choose between 
          beauty and practicality.
        </p>
        <p>
          Every piece is designed in-house and produced in small batches. We use 18K gold plating 
          over hypoallergenic brass, set with carefully sourced crystals. Nothing is mass-produced. 
          Nothing is disposable.
        </p>
        <p>
          We believe jewelry should tell a story — yours. Whether you're treating yourself or 
          gifting someone you love, we hope our pieces become part of your everyday rituals and 
          most meaningful moments.
        </p>
      </div>

      <div className="mt-16 pt-12 border-t border-[#E5DFD4] grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="font-medium mb-2">Thoughtful Design</h3>
          <p className="text-[#6B6359]">Each piece is sketched, prototyped, and refined by hand before it reaches you.</p>
        </div>
        <div>
          <h3 className="font-medium mb-2">Honest Materials</h3>
          <p className="text-[#6B6359]">18K gold plating, hypoallergenic brass, responsibly sourced crystals.</p>
        </div>
        <div>
          <h3 className="font-medium mb-2">Made to Last</h3>
          <p className="text-[#6B6359]">Designed for daily wear. Backed by our 30-day guarantee and lifetime care guidance.</p>
        </div>
      </div>
    </div>
  );
};

export default About;

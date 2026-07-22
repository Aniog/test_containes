import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.2em] uppercase text-[#6B6560] mb-3">Est. 2018</p>
        <h1 className="heading-serif text-5xl md:text-6xl mb-6">Our Story</h1>
        <p className="text-xl text-[#6B6560] max-w-2xl mx-auto">
          Quiet luxury, thoughtfully made.
        </p>
      </div>

      <div className="prose prose-lg max-w-none text-[#6B6560] space-y-8 text-[15px] leading-relaxed">
        <p>
          Velmora was founded with a simple conviction: that fine jewelry should not be reserved 
          for rare occasions or special milestones. We believe in the quiet power of wearing 
          something beautiful every day — a small act of self-respect, a daily reminder of what 
          you value.
        </p>

        <div className="my-12 aspect-[16/9] bg-[#F1EDE6] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=1200&q=80" 
            alt="Velmora studio" 
            className="w-full h-full object-cover"
          />
        </div>

        <p>
          Our name comes from the Latin "vel" (veil) and "mora" (delay) — a reminder to slow down, 
          to choose with intention, to let beauty unfold over time. Every piece we create is 
          designed to be worn, loved, and passed on.
        </p>

        <h2 className="heading-serif text-2xl text-[#2C2825] pt-8">The Velmora Difference</h2>
        
        <div className="grid md:grid-cols-2 gap-8 not-prose pt-4">
          <div className="border border-[#E8E2D9] p-8">
            <h3 className="font-medium mb-3 tracking-wide">18K Gold Plated</h3>
            <p className="text-sm">We use thick 18K gold plating over solid brass for lasting beauty and durability. Our pieces are designed to be worn daily without losing their luster.</p>
          </div>
          <div className="border border-[#E8E2D9] p-8">
            <h3 className="font-medium mb-3 tracking-wide">Hypoallergenic</h3>
            <p className="text-sm">All Velmora pieces are nickel-free and hypoallergenic. We test every batch to ensure comfort for even the most sensitive skin.</p>
          </div>
          <div className="border border-[#E8E2D9] p-8">
            <h3 className="font-medium mb-3 tracking-wide">Ethically Sourced</h3>
            <p className="text-sm">We work only with suppliers who meet our standards for fair labor and responsible material sourcing. Transparency matters to us.</p>
          </div>
          <div className="border border-[#E8E2D9] p-8">
            <h3 className="font-medium mb-3 tracking-wide">Designed to Last</h3>
            <p className="text-sm">Each piece is made to be treasured for years. We stand behind our craftsmanship with a 30-day return policy and lifetime repair program.</p>
          </div>
        </div>

        <p className="pt-8">
          Thank you for choosing Velmora. We hope our jewelry becomes part of your story — 
          worn on ordinary Tuesdays and extraordinary nights alike.
        </p>
      </div>
    </div>
  );
};

export default About;

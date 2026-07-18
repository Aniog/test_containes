import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-[#F8F5F1] pt-20">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[3px] text-[#B89778] mb-3">EST. 2018</p>
          <h1 className="font-serif text-5xl tracking-[1px] text-[#2C2825]">Our Story</h1>
        </div>

        <div className="prose prose-lg max-w-none text-[#6B665F] space-y-8 text-[15px] leading-relaxed">
          <p>
            Velmora began in a small studio in Brooklyn, where our founder, a former fine jewelry designer, 
            grew frustrated by the gap between mass-produced fashion jewelry and the unattainable prices of 
            solid gold.
          </p>
          
          <p>
            She believed there was a middle ground: pieces that felt substantial and precious, made with 
            care and intention, yet accessible enough to be worn daily—not tucked away for special occasions.
          </p>

          <div className="my-12 py-8 border-y border-[#E8E4DE] grid md:grid-cols-2 gap-8 text-center">
            <div>
              <p className="font-serif text-4xl tracking-[1px] text-[#2C2825] mb-2">18K</p>
              <p className="text-xs tracking-[2px]">GOLD PLATING</p>
            </div>
            <div>
              <p className="font-serif text-4xl tracking-[1px] text-[#2C2825] mb-2">5</p>
              <p className="text-xs tracking-[2px]">SIGNATURE COLLECTIONS</p>
            </div>
          </div>

          <p>
            Today, every Velmora piece is still designed in that same studio. We work with skilled artisans 
            who share our commitment to quality over quantity. Our gold plating is thicker than industry 
            standard. Our stones are hand-selected. Our chains are tested for strength.
          </p>

          <p>
            We design for the woman who appreciates beauty in the details—the soft curve of a huggie, 
            the way light catches a faceted crystal, the quiet confidence of wearing something that feels 
            just right.
          </p>
        </div>

        <div className="mt-16 pt-12 border-t border-[#E8E4DE] text-center">
          <p className="text-sm tracking-[1.5px] text-[#B89778]">Crafted with intention. Worn with love.</p>
        </div>
      </div>
    </div>
  );
};

export default About;

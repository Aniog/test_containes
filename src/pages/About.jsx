import React from 'react';

const About = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="py-16 text-center">
          <p className="text-xs tracking-[0.2em] text-[#B8976F] mb-3">EST. 2019 • NEW YORK</p>
          <h1 className="font-serif text-5xl tracking-[0.05em]">Our Story</h1>
        </div>

        <div className="prose prose-lg max-w-none text-[#6B665F] space-y-8 text-[15px] leading-relaxed">
          <p>
            Velmora was founded with a simple belief: that fine jewelry should be accessible without 
            compromising on quality or design. We create demi-fine pieces that bridge the gap between 
            precious heirlooms and everyday essentials.
          </p>
          <p>
            Each piece begins in our atelier, where our small team of designers and artisans work 
            together to bring ideas to life. We source only the finest materials—18K gold plating 
            over solid brass, premium crystals, and hypoallergenic findings that ensure comfort 
            for all-day wear.
          </p>
          <p>
            Our commitment to sustainability extends beyond materials. We produce in small batches 
            to minimize waste, use recycled packaging, and partner with suppliers who share our 
            values. Every Velmora piece is designed to last, to be passed down, and to be treasured.
          </p>
        </div>

        <div className="mt-16 pt-12 border-t border-[#E5DFD4] grid md:grid-cols-3 gap-8 text-center">
          {[
            { num: "18K", label: "Gold Plating" },
            { num: "5", label: "Signature Collections" },
            { num: "30", label: "Day Returns" },
          ].map((item, i) => (
            <div key={i}>
              <p className="font-serif text-4xl tracking-[0.05em] mb-2">{item.num}</p>
              <p className="text-xs tracking-[0.15em] text-[#6B665F]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
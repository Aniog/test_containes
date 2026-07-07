import React from 'react';

const About = () => {
  return (
    <div className="bg-[#F9F6F0] pt-20">
      <div className="max-w-[900px] mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="text-xs tracking-[3px] text-[#C5A26F] mb-3">EST. 2019</div>
          <h1 className="font-serif text-5xl tracking-[-1px] mb-6">Our Story</h1>
          <p className="text-lg text-[#5C5248]">Quiet luxury, thoughtfully made.</p>
        </div>

        <div className="prose prose-neutral max-w-none text-[#5C5248] leading-relaxed space-y-6">
          <p>
            Velmora was founded with a simple belief: that beautiful jewelry should be accessible without 
            compromising on quality or craftsmanship. We create demi-fine pieces that feel as special as 
            fine jewelry, designed to be worn every day and treasured for years.
          </p>
          <p>
            Each piece begins in our small studio, where we obsess over every detail—from the weight and 
            balance of an earring to the way light catches a crystal. We source the finest materials, 
            including 18K gold plating over solid brass, and work with skilled artisans who share our 
            commitment to excellence.
          </p>
          <p>
            Our collections are intentionally small and considered. We believe in fewer, better things—pieces 
            you'll reach for again and again, that become part of your story. From our signature huggies to 
            delicate layered necklaces, every design is meant to feel personal, not precious.
          </p>
        </div>

        <div className="mt-16 pt-12 border-t border-[#EDE9E3] grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="font-serif text-3xl tracking-wide mb-2">18K</div>
            <div className="text-sm tracking-[1px] text-[#8B7F6F]">Gold Plating</div>
          </div>
          <div>
            <div className="font-serif text-3xl tracking-wide mb-2">30</div>
            <div className="text-sm tracking-[1px] text-[#8B7F6F]">Day Returns</div>
          </div>
          <div>
            <div className="font-serif text-3xl tracking-wide mb-2">5</div>
            <div className="text-sm tracking-[1px] text-[#8B7F6F]">Countries Shipped</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
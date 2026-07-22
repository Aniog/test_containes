import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-20">
      <div className="max-w-[900px] mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[3px] text-[#C5A26F] mb-3">EST. 2019</p>
          <h1 className="font-serif text-5xl tracking-[-1px]">Our Story</h1>
        </div>

        <div className="prose prose-lg max-w-none text-[#6B655C] leading-relaxed space-y-6">
          <p>
            Velmora was born in a small atelier in Lisbon, where founder Elena Voss began experimenting
            with gold plating techniques that honored centuries-old craftsmanship while embracing modern sensibilities.
          </p>
          <p>
            We believe that beautiful jewelry should be worn, not stored away. Our demi-fine pieces are designed
            for real life—stacked, layered, and loved every day. Each piece is plated in 18K gold over solid brass,
            chosen for its durability and hypoallergenic properties.
          </p>
          <p>
            From our signature huggies to delicate necklaces, every design undergoes weeks of refinement before
            it reaches your hands. We source our crystals from ethical suppliers and package each order with care
            in our signature gift boxes.
          </p>
        </div>

        <div className="mt-16 pt-16 border-t border-[#EDE8DF] grid md:grid-cols-3 gap-10 text-center">
          <div>
            <p className="font-serif text-4xl tracking-[-1px] mb-2">18K</p>
            <p className="text-sm tracking-[1.5px] text-[#C5A26F]">GOLD PLATING</p>
          </div>
          <div>
            <p className="font-serif text-4xl tracking-[-1px] mb-2">5</p>
            <p className="text-sm tracking-[1.5px] text-[#C5A26F]">SIGNATURE COLLECTIONS</p>
          </div>
          <div>
            <p className="font-serif text-4xl tracking-[-1px] mb-2">30</p>
            <p className="text-sm tracking-[1.5px] text-[#C5A26F]">DAY RETURNS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
import React from 'react';

const AboutPage = () => {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="uppercase tracking-[0.2em] text-xs text-[#C5A26F] mb-3">Est. 2019</div>
          <h1 className="serif text-7xl tracking-[-0.02em]">Our Story</h1>
        </div>

        <div className="prose prose-lg max-w-none text-[#4A4A4A] leading-relaxed space-y-8">
          <p className="text-xl">Velmora was founded with a singular vision: to create demi-fine jewelry that feels as precious as fine jewelry, without the precious price tag.</p>
          
          <div className="aspect-video bg-[#F0EBE3] my-12" />
          
          <p>Every piece begins in our sunlit studio in New York's SoHo district. Our designers draw inspiration from vintage heirlooms, architectural forms, and the quiet confidence of the women who wear our jewelry.</p>
          
          <p>We work exclusively with 18K gold plating over solid brass, paired with ethically sourced crystals. Each item is hand-finished by artisans who have spent decades perfecting their craft.</p>
          
          <div className="grid md:grid-cols-3 gap-8 py-12 border-y border-[#E8E4DC] my-12 text-center">
            <div>
              <div className="serif text-4xl mb-2">18K</div>
              <div className="text-xs tracking-[0.15em] text-[#C5A26F]">GOLD PLATING</div>
            </div>
            <div>
              <div className="serif text-4xl mb-2">5</div>
              <div className="text-xs tracking-[0.15em] text-[#C5A26F]">ARTISANS</div>
            </div>
            <div>
              <div className="serif text-4xl mb-2">30</div>
              <div className="text-xs tracking-[0.15em] text-[#C5A26F]">DAY RETURNS</div>
            </div>
          </div>

          <p>Our commitment extends beyond craftsmanship. We source responsibly, package sustainably, and design pieces meant to be worn daily—not tucked away for special occasions.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
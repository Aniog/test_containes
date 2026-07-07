import React from 'react';
import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';

const About = () => {
  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#2C2522]">
      <Navigation />

      <div className="max-w-[900px] mx-auto px-6 pt-28 pb-20">
        <div className="text-center mb-16">
          <div className="font-serif text-5xl tracking-[2px] mb-4">Our Story</div>
          <p className="text-[#8B7355] tracking-wide">Est. 2018 • New York</p>
        </div>

        <div className="prose prose-neutral max-w-none text-[#5C5249] leading-relaxed space-y-6 text-[15px]">
          <p>
            Velmora was born from a simple belief: that beautiful, well-made jewelry should be accessible without compromise. We create demi-fine pieces that feel like heirlooms—thoughtfully designed, responsibly sourced, and made to last.
          </p>
          <p>
            Our founder, a former fine jewelry designer, noticed a gap in the market: pieces that were either too precious to wear daily or too disposable to cherish. Velmora bridges that divide with 18K gold-plated designs that withstand the test of time and everyday wear.
          </p>
          <p>
            Every piece is crafted in small batches by skilled artisans. We source premium materials, prioritize ethical production, and design with intention—so each piece feels personal, not mass-produced.
          </p>
        </div>

        <div className="mt-16 pt-12 border-t border-[#D4C5A9] grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="font-serif tracking-[1px] mb-2">ETHICAL SOURCING</div>
            <p className="text-[#8B7355]">We partner only with suppliers who meet our rigorous standards for responsible mining and fair labor.</p>
          </div>
          <div>
            <div className="font-serif tracking-[1px] mb-2">SMALL BATCH</div>
            <p className="text-[#8B7355]">Limited production runs ensure quality control and reduce waste. Each piece receives individual attention.</p>
          </div>
          <div>
            <div className="font-serif tracking-[1px] mb-2">DESIGNED TO LAST</div>
            <p className="text-[#8B7355]">Our pieces are made with tarnish-resistant plating and hypoallergenic materials for everyday wear.</p>
          </div>
        </div>
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default About;

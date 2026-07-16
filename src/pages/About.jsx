import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-12 text-center">
        <span className="text-xs tracking-[2px] text-[#C5A46E]">EST. 2018</span>
        <h1 className="font-serif text-4xl md:text-5xl tracking-[1.5px] mt-3 mb-6">The Velmora Story</h1>
        <p className="text-lg text-[#4A4640] max-w-2xl mx-auto">
          We believe that fine jewelry should be worn, not stored. 
          Every piece is designed to become part of your daily ritual.
        </p>
      </section>

      {/* Philosophy */}
      <section className="bg-white border-y border-[#EDE9E3] py-16">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-2xl tracking-[1px] mb-4">Our Philosophy</h2>
            <p className="text-[#4A4640] leading-relaxed">
              Velmora was founded on the principle that beauty and quality should not be reserved for the few. 
              We create demi-fine jewelry that feels as precious as solid gold, using the finest materials and 
              time-honored techniques.
            </p>
          </div>
          <div className="text-[#4A4640] leading-relaxed">
            <p>
              Each piece is hand-finished in small batches. We source responsibly, plate generously, 
              and design for longevity. Our jewelry is meant to be worn every day — in the shower, 
              to the gym, to sleep — and still look beautiful years from now.
            </p>
          </div>
        </div>
      </section>

      {/* Craft */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-2">
            <img 
              src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80" 
              alt="Craftsmanship" 
              className="w-full"
            />
          </div>
          <div className="md:col-span-3">
            <h3 className="font-serif text-2xl tracking-[1px] mb-6">The Making</h3>
            <div className="space-y-4 text-[#4A4640]">
              <p>Our process begins with sketches and wax models. Each design is cast, polished by hand, and plated in 18K gold or rhodium. Stones are hand-set. Every piece is inspected three times before it leaves our studio.</p>
              <p>We use only hypoallergenic, nickel-free metals. Our plating is thicker than industry standard, ensuring your jewelry retains its luster through years of daily wear.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#0A0806] text-[#EDE9E3] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="font-serif text-white text-2xl tracking-[1px] text-center mb-12">What We Value</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-[#C5A46E] text-xs tracking-[2px] mb-2">01</div>
              <h4 className="font-serif text-lg mb-3">Timeless Design</h4>
              <p className="text-sm text-[#9A9590]">We design for decades, not seasons. Quiet pieces that feel relevant year after year.</p>
            </div>
            <div>
              <div className="text-[#C5A46E] text-xs tracking-[2px] mb-2">02</div>
              <h4 className="font-serif text-lg mb-3">Honest Materials</h4>
              <p className="text-sm text-[#9A9590]">No shortcuts. We use real gold plating, real stones, and metals that are safe for sensitive skin.</p>
            </div>
            <div>
              <div className="text-[#C5A46E] text-xs tracking-[2px] mb-2">03</div>
              <h4 className="font-serif text-lg mb-3">Thoughtful Production</h4>
              <p className="text-sm text-[#9A9590]">Small batches. Fair labor. Responsible sourcing. We make less, but better.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-xl mx-auto px-6 py-20 text-center">
        <h3 className="font-serif text-2xl tracking-[1px] mb-4">Ready to find your piece?</h3>
        <p className="text-[#4A4640] mb-8">Explore our full collection of earrings, necklaces, and huggies.</p>
        <Link to="/shop" className="inline-block border border-[#C5A46E] text-[#C5A46E] px-8 py-3 text-sm tracking-[1.5px] hover:bg-[#C5A46E] hover:text-[#0A0806] transition-colors">
          SHOP THE COLLECTION
        </Link>
      </section>
    </div>
  );
};

export default About;

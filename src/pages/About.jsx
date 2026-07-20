import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-[#F8F5F1] pt-20">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[420px] flex items-center justify-center bg-[#0F0E0C]">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=80"
          alt="Velmora atelier"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center px-6">
          <div className="text-white/60 text-xs tracking-[0.2em] mb-3">ESTABLISHED 2018</div>
          <h1 className="font-serif text-white text-5xl md:text-6xl tracking-[0.02em]">Our Story</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-[#2C2823] leading-relaxed mb-8">
            Velmora was born from a simple belief: that beautiful jewelry should be worn every day, 
            not saved for special occasions.
          </p>

          <div className="my-12 h-px bg-[#E5DFD6]" />

          <div className="grid md:grid-cols-5 gap-x-10 gap-y-8 text-[#6B6359]">
            <div className="md:col-span-2">
              <h3 className="font-serif text-[#2C2823] text-2xl tracking-[0.02em] mb-3">The Beginning</h3>
            </div>
            <div className="md:col-span-3">
              <p className="leading-relaxed">
                Founder Elena Voss grew frustrated searching for jewelry that felt both elevated and wearable. 
                Most pieces were either too precious to touch or too cheap to last. She set out to create 
                something in between — demi-fine pieces crafted with intention, designed to become part of your daily ritual.
              </p>
            </div>

            <div className="md:col-span-2 mt-6 md:mt-0">
              <h3 className="font-serif text-[#2C2823] text-2xl tracking-[0.02em] mb-3">Our Approach</h3>
            </div>
            <div className="md:col-span-3 mt-6 md:mt-0">
              <p className="leading-relaxed">
                Every Velmora piece is designed in our New York studio and produced in small batches by 
                skilled artisans. We use 18K gold plating over hypoallergenic brass, set with carefully 
                selected crystals. Nothing is mass-produced. Each piece is inspected, packaged by hand, 
                and sent with a handwritten note.
              </p>
            </div>

            <div className="md:col-span-2 mt-6 md:mt-0">
              <h3 className="font-serif text-[#2C2823] text-2xl tracking-[0.02em] mb-3">Why Demi-Fine</h3>
            </div>
            <div className="md:col-span-3 mt-6 md:mt-0">
              <p className="leading-relaxed">
                Demi-fine sits between fine and fashion jewelry. It offers the beauty and craftsmanship 
                of fine jewelry at a price that allows you to collect and layer without hesitation. 
                Our pieces are made to be worn — in the shower, to the gym, while cooking dinner. 
                They are meant to become part of your story.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-[#E5DFD6] text-center">
          <p className="text-[#6B6359] mb-6">Have questions or want to learn more?</p>
          <Link
            to="/shop"
            className="btn-premium btn-premium-outline inline-block px-8 py-3 text-sm tracking-[0.08em]"
          >
            EXPLORE THE COLLECTION
          </Link>
        </div>
      </div>

      {/* Values */}
      <div className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          {[
            { title: "Thoughtful Design", desc: "Every curve, clasp, and crystal is considered. Nothing is added without purpose." },
            { title: "Responsible Sourcing", desc: "We work only with suppliers who share our commitment to ethical practices." },
            { title: "Lasting Quality", desc: "Pieces that withstand daily wear. Heirlooms in the making, not fleeting trends." },
          ].map((v, i) => (
            <div key={i}>
              <div className="font-serif text-xl tracking-[0.02em] mb-3">{v.title}</div>
              <p className="text-sm text-[#6B6359] leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

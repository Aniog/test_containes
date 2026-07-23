import React from 'react';
import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';

const About = () => {
  return (
    <div className="min-h-screen bg-[#F8F5F1]">
      <Navigation />

      <div className="pt-20">
        {/* Hero */}
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <p className="uppercase tracking-[0.2em] text-xs text-[#6B645C] mb-4">Est. 2018</p>
          <h1 className="font-serif text-5xl md:text-6xl tracking-[0.05em] mb-8">A quieter kind of luxury.</h1>
          <p className="text-lg text-[#6B645C] max-w-2xl mx-auto">
            Velmora creates demi-fine jewelry for the woman who values intention over excess. 
            Each piece is designed to be worn daily, treasured for years, and passed down with love.
          </p>
        </div>

        {/* Values */}
        <div className="bg-white py-16">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-12">
            {[
              { title: "Thoughtful Design", text: "Every curve, every clasp, every detail is considered. We design for real life, not just special occasions." },
              { title: "Honest Materials", text: "18K gold plating over solid brass. Hypoallergenic. Nickel-free. Beautiful without compromise." },
              { title: "Lasting Value", text: "Premium craftsmanship at an accessible price. Jewelry that feels special but can be worn every day." },
            ].map((v, i) => (
              <div key={i} className="text-center">
                <h3 className="font-serif text-2xl mb-4 tracking-[0.03em]">{v.title}</h3>
                <p className="text-[#6B645C] text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Story */}
        <div className="max-w-3xl mx-auto px-6 py-20">
          <div className="prose prose-neutral max-w-none text-[#6B645C]">
            <p className="text-lg leading-relaxed mb-6">
              Velmora began in a small studio in Brooklyn, where our founder, after years working in fine jewelry, 
              grew frustrated by the gap between luxury and accessibility.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              She wanted pieces that felt special enough to mark a moment, but wearable enough to become part of daily life. 
              Pieces that wouldn't tarnish after a season. Pieces that wouldn't break the bank.
            </p>
            <p className="text-lg leading-relaxed">
              Today, every Velmora piece is still designed in that same spirit — quiet, considered, and made to be treasured.
            </p>
          </div>
        </div>

        {/* Image Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#D9D2C7]">
          {[
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
            "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
            "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80",
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
          ].map((src, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden">
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default About;
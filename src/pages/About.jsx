import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-velmora-base">
        <img 
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=90" 
          alt="Velmora atelier" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 text-center px-6">
          <p className="text-velmora-gold tracking-[0.2em] text-sm mb-4">EST. 2018</p>
          <h1 className="serif text-5xl md:text-6xl text-velmora-white tracking-[0.08em]">Our Story</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        <div className="prose prose-lg max-w-none text-[15px] leading-relaxed text-velmora-text">
          <p className="text-xl text-velmora-base mb-8">Velmora was founded with a simple conviction: that fine jewelry should be worn, not stored away.</p>
          
          <p className="mb-6">We believe in the quiet power of beautiful objects. In pieces that become part of your daily ritual—worn to work, to dinner, to the market on a Sunday morning. Jewelry that feels personal, not precious.</p>

          <p className="mb-6">Our demi-fine collection is crafted from 18K gold plated brass, chosen for its warmth, durability, and hypoallergenic properties. Each piece is designed in our studio and produced in small batches by skilled artisans who share our commitment to quality over quantity.</p>

          <div className="my-12 py-8 border-y border-velmora-light">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-3xl serif tracking-widest mb-2">18K</p>
                <p className="text-xs tracking-[0.15em] text-velmora-text-light">GOLD PLATED</p>
              </div>
              <div>
                <p className="text-3xl serif tracking-widest mb-2">500+</p>
                <p className="text-xs tracking-[0.15em] text-velmora-text-light">PIECES CRAFTED</p>
              </div>
              <div>
                <p className="text-3xl serif tracking-widest mb-2">30</p>
                <p className="text-xs tracking-[0.15em] text-velmora-text-light">DAY RETURNS</p>
              </div>
            </div>
          </div>

          <p className="mb-6">We source our materials responsibly and work only with partners who meet our standards for ethical production. Our packaging is minimal and recyclable—designed to protect your jewelry, not overwhelm your home.</p>

          <p>Every Velmora piece comes with a lifetime guarantee against manufacturing defects. Because when something is made well, it should last.</p>
        </div>

        <div className="mt-16 pt-8 border-t border-velmora-light flex flex-col md:flex-row gap-4">
          <Link to="/shop" className="btn btn-primary flex-1 justify-center">SHOP THE COLLECTION</Link>
          <Link to="/journal" className="btn btn-outline flex-1 justify-center">READ THE JOURNAL</Link>
        </div>
      </div>

      {/* Values */}
      <div className="bg-velmora-cream py-16">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-xs tracking-[0.15em] text-velmora-gold mb-2">WHAT WE BELIEVE</p>
          <h2 className="serif text-center text-3xl tracking-[0.05em] mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Timeless Design", desc: "We create pieces that transcend trends. Jewelry you will reach for in five years, and ten." },
              { title: "Thoughtful Craft", desc: "Every detail is considered. From the clasp to the curve of a hoop, nothing is left to chance." },
              { title: "Honest Luxury", desc: "Premium materials at accessible prices. No markups for the sake of perception." },
            ].map((v, i) => (
              <div key={i} className="text-center">
                <h3 className="serif text-xl tracking-[0.05em] mb-3">{v.title}</h3>
                <p className="text-sm text-velmora-text leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
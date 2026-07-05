import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-[#F8F5F1] pt-20">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[420px] flex items-center justify-center bg-[#2C2522]">
        <img 
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=85" 
          alt="Velmora atelier"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center px-6">
          <span className="text-xs tracking-[0.2em] text-white/70">EST. 2018</span>
          <h1 className="font-serif text-white text-5xl md:text-6xl tracking-[0.05em] mt-2">Our Story</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        <div className="prose prose-lg text-[#2C2522] max-w-none">
          <p className="text-xl leading-relaxed text-[#6B6058]">
            Velmora was founded with a singular vision: to create demi-fine jewelry that feels as precious as solid gold, 
            but designed for the way women actually live today.
          </p>

          <div className="my-12 h-px bg-[#D4C9B8]" />

          <h2 className="font-serif text-3xl tracking-[0.02em] mt-10 mb-6">The Beginning</h2>
          <p>
            After years working in fine jewelry, our founder grew frustrated by the gap between what women wanted to wear 
            every day and what was available at accessible price points. Solid gold was too precious for daily wear. 
            Mass-market pieces lacked soul.
          </p>
          <p>
            We set out to bridge that gap — using traditional techniques and the highest quality 18K gold plating over 
            sterling silver, we create pieces that look and feel like heirlooms, but are designed to be worn, loved, 
            and lived in.
          </p>

          <h2 className="font-serif text-3xl tracking-[0.02em] mt-10 mb-6">Our Approach</h2>
          <p>
            Every Velmora piece is designed in our New York studio and hand-finished by skilled artisans. We source 
            responsibly and work only with partners who share our commitment to quality and ethics.
          </p>
          <p>
            We believe in fewer, better things. Each collection is intentionally small. We don't chase trends — 
            we design pieces that will feel as relevant in ten years as they do today.
          </p>

          <div className="my-12 p-8 bg-[#F1EDE6] text-center">
            <p className="font-serif text-2xl tracking-[0.05em] text-[#2C2522]">
              "Quiet luxury isn't about being seen.<br />It's about feeling something real."
            </p>
            <p className="mt-4 text-sm text-[#6B6058]">— Founder, Velmora</p>
          </div>

          <h2 className="font-serif text-3xl tracking-[0.02em] mt-10 mb-6">The Details</h2>
          <ul className="space-y-2 text-[#6B6058]">
            <li>• 18K gold plating over sterling silver</li>
            <li>• Hypoallergenic and nickel-free</li>
            <li>• Designed for everyday wear</li>
            <li>• Hand-finished in small batches</li>
            <li>• Packaged in our signature keepsake box</li>
          </ul>
        </div>

        <div className="mt-16 text-center">
          <Link to="/shop" className="btn btn-primary inline-block">
            Explore the Collection
          </Link>
        </div>
      </div>

      {/* Values */}
      <div className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          {[
            { title: 'Timeless Design', desc: 'We create pieces that transcend seasons and trends.' },
            { title: 'Responsible Craft', desc: 'Ethically sourced materials and fair labor practices.' },
            { title: 'Lasting Quality', desc: 'Built to be worn daily for years to come.' },
          ].map((v, i) => (
            <div key={i}>
              <h3 className="font-serif text-xl tracking-[0.05em] mb-3">{v.title}</h3>
              <p className="text-sm text-[#6B6058]">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

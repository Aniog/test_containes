import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 pt-16 pb-12 text-center">
        <p className="uppercase tracking-[0.15em] text-xs text-[#6B665F] mb-3">ESTABLISHED 2019</p>
        <h1 className="heading-serif text-5xl mb-6">The Velmora Way</h1>
        <p className="text-lg text-[#6B665F] max-w-xl mx-auto">
          We believe the most beautiful things are the ones you reach for every day.
        </p>
      </div>

      {/* Large Image */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="aspect-[16/9] bg-[#F5F2ED] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=1600&q=85" 
            alt="Velmora atelier" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Story Content */}
      <div className="max-w-3xl mx-auto px-6 pb-20">
        <div className="prose prose-neutral max-w-none text-[#6B665F] leading-relaxed space-y-6">
          <p>
            Velmora began in a small studio in Lisbon, where our founder spent months perfecting a single pair of earrings. 
            The goal was simple: create jewelry that felt like an extension of the self — not loud, not disposable, 
            but quietly essential.
          </p>
          <p>
            Today, every piece is still hand-finished in small batches. We use 18K gold plating over hypoallergenic 
            brass and sterling silver, chosen for its warmth, durability, and skin-friendly properties. 
            Our crystals are hand-set. Our chains are measured twice.
          </p>
          <p>
            We design for the woman who values intention over trend. The pieces that live on her nightstand, 
            travel with her, and become part of her daily ritual.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-[#E5DFD6] grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="font-medium mb-1">Small Batch</div>
            <p className="text-[#6B665F]">Each collection is produced in limited quantities to ensure quality and care.</p>
          </div>
          <div>
            <div className="font-medium mb-1">Hypoallergenic</div>
            <p className="text-[#6B665F]">Nickel-free metals safe for sensitive skin. No irritation, no compromise.</p>
          </div>
          <div>
            <div className="font-medium mb-1">Lifetime Polish</div>
            <p className="text-[#6B665F]">Complimentary polishing for the lifetime of your piece. Just reach out.</p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-[#F5F2ED] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="heading-serif text-3xl text-center mb-12">What We Value</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 text-sm">
            {[
              { title: "Quiet Luxury", desc: "We design for subtlety. Our pieces whisper, never shout." },
              { title: "Wearability", desc: "Jewelry should move with you — from morning coffee to evening light." },
              { title: "Honest Pricing", desc: "Premium materials at accessible prices. No markups for the sake of it." },
              { title: "Transparency", desc: "We share our sources, our process, and our imperfections." },
            ].map((v, i) => (
              <div key={i}>
                <div className="heading-serif text-xl mb-2">{v.title}</div>
                <p className="text-[#6B665F]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 text-center">
        <Link to="/shop" className="btn btn-primary">Explore the Collection</Link>
      </div>

      {/* Footer */}
      <footer className="footer pt-10 pb-8 border-t border-[#E5DFD6]">
        <div className="max-w-7xl mx-auto px-6 text-xs text-[#6B665F] flex flex-col md:flex-row gap-2 md:gap-4 md:items-center justify-between">
          <span>© {new Date().getFullYear()} Velmora Fine Jewelry</span>
          <div className="flex gap-4">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;

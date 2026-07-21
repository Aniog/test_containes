import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1600&q=90" 
          alt="Velmora atelier"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-6">
          <div className="uppercase tracking-[0.2em] text-xs text-white/70 mb-3">Est. 2018</div>
          <h1 className="font-serif text-5xl md:text-6xl text-white">Our Story</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-velmora-text-muted leading-relaxed mb-8">
            Velmora was founded with a simple conviction: that fine jewelry should feel personal, 
            not precious. We create pieces meant to be worn every day — not locked away for special occasions.
          </p>

          <div className="my-12 divider" />

          <h2 className="font-serif text-3xl mb-6">The Beginning</h2>
          <p className="body-text text-velmora-text-muted mb-6">
            Our founder, a former jewelry buyer for a luxury department store, grew frustrated by the 
            gap between mass-produced fashion jewelry and unattainable fine jewelry. She saw women 
            searching for pieces that felt special but were practical enough for daily life.
          </p>
          <p className="body-text text-velmora-text-muted mb-6">
            Velmora was born from that observation. We set out to create demi-fine jewelry — pieces 
            crafted with the care and quality of fine jewelry, but designed for real life. Our name 
            comes from the Latin "vel" (veil) and "mora" (delay) — a reminder to slow down and 
            appreciate the quiet beauty in everyday moments.
          </p>

          <div className="my-12 divider" />

          <h2 className="font-serif text-3xl mb-6">Our Craft</h2>
          <p className="body-text text-velmora-text-muted mb-6">
            Every Velmora piece begins in our studio with hand-drawn sketches and careful material 
            selection. We work exclusively with 18K gold plating over hypoallergenic brass, ensuring 
            our jewelry is as kind to skin as it is beautiful to behold.
          </p>
          <p className="body-text text-velmora-text-muted mb-6">
            Our crystals are hand-selected for their clarity and color. Each setting is inspected 
            multiple times. We believe the details matter — even those you can't see.
          </p>

          <div className="my-12 divider" />

          <h2 className="font-serif text-3xl mb-6">Our Promise</h2>
          <ul className="body-text text-velmora-text-muted space-y-2 mb-8">
            <li>• 18K gold plating that won't tarnish with proper care</li>
            <li>• Hypoallergenic materials safe for sensitive skin</li>
            <li>• Thoughtful packaging designed for gifting</li>
            <li>• 30-day returns, no questions asked</li>
            <li>• Lifetime repair program for manufacturing defects</li>
          </ul>

          <div className="pt-8">
            <Link to="/shop" className="btn btn-primary">
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-velmora-surface border-y border-velmora-border py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[0.15em] text-xs text-velmora-text-muted mb-2">What We Believe</div>
            <h3 className="font-serif text-3xl">Our Values</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Quality Over Quantity", desc: "We make fewer pieces, but each one is made with intention and care." },
              { title: "Wear It Daily", desc: "Jewelry should be part of your life, not saved for special occasions." },
              { title: "Honest Pricing", desc: "Premium materials at accessible prices. No markups for the sake of luxury." },
            ].map((value, idx) => (
              <div key={idx} className="text-center">
                <h4 className="font-serif text-xl mb-3">{value.title}</h4>
                <p className="text-sm text-velmora-text-muted">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

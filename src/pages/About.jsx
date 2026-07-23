import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
        <span className="text-xs tracking-[0.2em] uppercase text-[#8B7355]">Est. 2018</span>
        <h1 className="heading-serif text-5xl md:text-6xl mt-3 mb-6">The Velmora Story</h1>
        <p className="text-xl text-[#6B6058] max-w-2xl mx-auto">
          We believe that beautiful jewelry should feel like an heirloom from the first wear — 
          precious, personal, and made to last.
        </p>
      </section>

      {/* Philosophy */}
      <section className="bg-[#F1EDE6] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="heading-serif text-3xl mb-4">Our Philosophy</h2>
            <div className="space-y-4 text-[#6B6058] leading-relaxed">
              <p>
                Velmora was founded on a simple contradiction: that the most precious things in life 
                should be worn, not locked away. We design demi-fine jewelry that bridges the gap 
                between fine and fashion — pieces that feel special enough for milestones, 
                yet wearable enough for Tuesday.
              </p>
              <p>
                Every piece is crafted with intention. We source responsibly, plate generously, 
                and finish by hand. The result is jewelry that looks and feels like it costs more 
                than it does.
              </p>
            </div>
          </div>
          <div className="space-y-8 pt-2">
            <div>
              <div className="text-[#8B7355] text-sm tracking-[0.15em] uppercase mb-1">18K Gold Plated</div>
              <p className="text-[#6B6058]">Thicker plating for lasting brilliance. We use three times the industry standard.</p>
            </div>
            <div>
              <div className="text-[#8B7355] text-sm tracking-[0.15em] uppercase mb-1">Hypoallergenic</div>
              <p className="text-[#6B6058]">Solid brass bases, nickel-free. Safe for even the most sensitive skin.</p>
            </div>
            <div>
              <div className="text-[#8B7355] text-sm tracking-[0.15em] uppercase mb-1">Designed to Last</div>
              <p className="text-[#6B6058]">Tarnish-resistant coatings. Pieces that stay beautiful for years, not months.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "Thoughtful Design", text: "We design slowly. Each piece goes through dozens of iterations before it reaches you." },
            { title: "Honest Pricing", text: "No middlemen. No markups. Just beautiful jewelry at a price that feels fair." },
            { title: "Lasting Quality", text: "We stand behind every piece. If it doesn't last, we'll make it right." }
          ].map((v, i) => (
            <div key={i}>
              <h3 className="heading-serif text-2xl mb-3">{v.title}</h3>
              <p className="text-[#6B6058]">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Image + CTA */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1600&q=80" 
          alt="Velmora craftsmanship"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-6">
          <p className="text-white text-xl md:text-2xl max-w-lg mx-auto mb-8 font-light">
            "Jewelry should mark moments, not just fill space."
          </p>
          <Link to="/shop" className="btn btn-accent">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Team / Closing */}
      <section className="max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
        <p className="text-[#6B6058] leading-relaxed">
          Velmora is a small team of designers, makers, and dreamers based between New York and Lisbon. 
          We work with independent artisans who share our commitment to quality and care. 
          Every order is packed by hand, with a handwritten note.
        </p>
        <p className="mt-8 text-sm tracking-[0.1em] uppercase text-[#8B7355]">
          Thank you for wearing Velmora.
        </p>
      </section>
    </div>
  );
};

export default About;

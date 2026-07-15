import React from 'react';

const About = () => {
  return (
    <div className="pt-32 pb-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto space-y-16">
        <div className="space-y-6 text-center">
           <h1 className="text-5xl md:text-6xl font-serif italic lowercase">our story</h1>
           <p className="text-xs uppercase tracking-widest-extra text-velmora-charcoal/60">Designed for the modern woman</p>
        </div>

        <div className="aspect-video bg-velmora-sand">
           <img
             data-strk-img-id="about-hero"
             data-strk-img="jewelry workshop high end gold jewelry tools editorial"
             data-strk-img-ratio="16x9"
             data-strk-img-width="1200"
             className="w-full h-full object-cover"
             src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
             alt="Workshop"
           />
        </div>

        <div className="space-y-8 font-serif text-xl md:text-2xl leading-relaxed italic text-velmora-charcoal/80">
          <p>
            At Velmora, we believe that fine jewelry should be an everyday luxury, not a rare indulgence. Our journey started in a small studio with a simple mission: to create pieces that tell a story of quiet elegance.
          </p>
          <p>
            We focus on demi-fine materials—18k gold plating over sterling silver and brass—ensuring that every piece is both durable and accessible. Our designs are inspired by the timeless beauty of heirloom collections, reimagined for the contemporary wardrobe.
          </p>
          <p>
            From ethically sourced materials to plastic-free packaging, we are committed to building a brand that treats the planet with the same care we give to our jewelry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16">
           <div className="aspect-[4/5] bg-velmora-sand">
              <img
                data-strk-img-id="about-detail-1"
                data-strk-img="gold earrings close up on model"
                data-strk-img-ratio="4x5"
                data-strk-img-width="600"
                className="w-full h-full object-cover"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                alt="Detail 1"
              />
           </div>
           <div className="aspect-[4/5] bg-velmora-sand">
              <img
                data-strk-img-id="about-detail-2"
                data-strk-img="gold necklace layering on model"
                data-strk-img-ratio="4x5"
                data-strk-img-width="600"
                className="w-full h-full object-cover"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                alt="Detail 2"
              />
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import Newsletter from '../components/home/Newsletter';

const About = () => {
  return (
    <div className="pt-32 bg-white">
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.4em] text-accent mb-6 block">The Velmora Story</span>
          <h1 className="text-5xl md:text-6xl font-serif mb-10 leading-tight">Modern jewelry with a soulful heritage.</h1>
          <p className="text-muted text-lg font-serif italic leading-relaxed">
            "We believe that the jewelry you wear should be a reflection of your own timeless narrative."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center mb-32">
          <div 
            className="aspect-[4/5] bg-zinc-100"
            data-strk-bg-id="about-image-1"
            data-strk-bg="fine jewelry designer in studio crafting sketches elegant minimal"
            data-strk-bg-ratio="4x5"
            data-strk-bg-width="800"
          />
          <div className="space-y-8 max-w-md">
            <h2 className="text-3xl font-serif">A Commitment to Quality</h2>
            <p className="text-zinc-600 font-light leading-relaxed">
              Founded in 2024, Velmora was born out of a desire for jewelry that balanced high-end design with everyday wearability. We saw a gap between mass-market fashion jewelry and inaccessible fine jewelry.
            </p>
            <p className="text-zinc-600 font-light leading-relaxed">
              Our demi-fine collection is crafted using 18K gold vermeil—a thick layer of solid gold over sterling silver—ensuring longevity and a rich, warm glow that lasts for years, not weeks.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center mb-32">
          <div className="space-y-8 max-w-md order-2 md:order-1">
            <h2 className="text-3xl font-serif">Responsible Craftsmanship</h2>
            <p className="text-zinc-600 font-light leading-relaxed">
              We work exclusively with certified artisans who share our values of transparency and ethical production. Each piece is hand-finished, ensuring the human touch is present in every curve and clasp.
            </p>
            <p className="text-zinc-600 font-light leading-relaxed">
              Our packaging is 100% recyclable, designed to protect your treasures while honoring the environment. We believe luxury shouldn't come at a cost to the planet.
            </p>
          </div>
          <div 
            className="aspect-[4/5] bg-zinc-100 order-1 md:order-2"
            data-strk-bg-id="about-image-2"
            data-strk-bg="golden jewelry pieces laid out on white textured surface soft shadows"
            data-strk-bg-ratio="4x5"
            data-strk-bg-width="800"
          />
        </div>
      </section>
      
      < Newsletter />
    </div>
  );
};

export default About;

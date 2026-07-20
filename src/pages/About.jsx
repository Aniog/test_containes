import React from 'react';

const About = () => {
  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-brand-charcoal text-center">
          Our Story
        </h1>
        <div className="w-12 h-px bg-brand-gold mx-auto mt-4 mb-10" />

        <div className="space-y-6 font-sans text-sm text-brand-warm-gray leading-relaxed">
          <p>
            Born from a belief that fine jewelry should be accessible, Velmora crafts
            demi-fine pieces that bridge the gap between everyday wear and luxury.
          </p>
          <p>
            Each piece is designed in our studio and finished with 18K gold plating
            for lasting brilliance. We source only hypoallergenic materials, ensuring
            every piece is as gentle on your skin as it is beautiful.
          </p>
          <p>
            From sketch to final polish, every detail is considered — because you
            deserve jewelry that's crafted to be treasured. Our design philosophy
            centers on timeless elegance over fleeting trends, creating pieces that
            become part of your personal story.
          </p>
          <p>
            Based in New York, our small team of designers and artisans pour their
            passion into every collection. We believe that beautiful jewelry shouldn't
            come with a luxury markup, which is why we sell directly to you —
            cutting out the middlemen and passing the savings along.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="font-serif text-3xl text-brand-gold">18K</p>
            <p className="font-sans text-xs tracking-wide uppercase text-brand-warm-gray mt-1">Gold Plated</p>
          </div>
          <div>
            <p className="font-serif text-3xl text-brand-gold">30</p>
            <p className="font-sans text-xs tracking-wide uppercase text-brand-warm-gray mt-1">Day Returns</p>
          </div>
          <div>
            <p className="font-serif text-3xl text-brand-gold">100%</p>
            <p className="font-sans text-xs tracking-wide uppercase text-brand-warm-gray mt-1">Hypoallergenic</p>
          </div>
          <div>
            <p className="font-serif text-3xl text-brand-gold">Free</p>
            <p className="font-sans text-xs tracking-wide uppercase text-brand-warm-gray mt-1">Worldwide Shipping</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <div className="text-xs tracking-[0.2em] uppercase text-text-light mb-3">Est. 2018</div>
        <h1 className="serif text-6xl mb-6">Our Story</h1>
      </div>

      <div className="prose prose-lg max-w-none text-text-light">
        <p className="text-xl leading-relaxed mb-8">
          Velmora was founded with a singular vision: to create demi-fine jewelry that honors 
          the quiet luxury of everyday elegance. We believe that beautiful objects should be 
          worn, not stored away—that fine jewelry belongs in the rhythm of real life.
        </p>

        <div className="my-12 aspect-video bg-surface overflow-hidden rounded-sm">
          <img 
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1600&q=80" 
            alt="Our atelier" 
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="serif text-3xl text-text mt-12 mb-6">The Velmora Difference</h2>
        <p>
          Every piece begins in our atelier, where our designers draw inspiration from 
          architecture, nature, and the women who wear our jewelry. We source only the 
          finest materials—18K gold plating over solid brass, premium crystals, and 
          hypoallergenic findings that ensure comfort without compromise.
        </p>

        <p>
          Our commitment to craftsmanship means each item is inspected by hand before 
          it reaches you. We stand behind every piece with our 30-day guarantee and 
          lifetime care guidance.
        </p>

        <div className="my-12 grid md:grid-cols-3 gap-8 text-center">
          {[
            { num: "18K", label: "Gold Plating" },
            { num: "5", label: "Signature Collections" },
            { num: "30", label: "Day Returns" },
          ].map((item, i) => (
            <div key={i} className="py-6 border border-border">
              <div className="serif text-4xl mb-2">{item.num}</div>
              <div className="text-xs tracking-[0.15em] uppercase text-text-light">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
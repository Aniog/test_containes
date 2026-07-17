import React from 'react';

const About = () => {
  return (
    <div className="pt-20 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center pt-12 pb-16">
          <span className="text-xs tracking-[0.2em] text-[var(--color-gold)]">EST. 2018</span>
          <h1 className="font-serif text-5xl mt-4 mb-6">Our Story</h1>
          <p className="text-lg text-[var(--color-text-muted)]">Quiet luxury, made to last.</p>
        </div>

        <div className="prose prose-neutral max-w-none text-[15px] leading-relaxed text-[var(--color-text-muted)] space-y-6">
          <p>
            Velmora began in a small studio in Lisbon, where our founder, a former textile designer, 
            grew frustrated with the choice between disposable fast fashion and unattainable fine jewelry.
          </p>
          <p>
            We set out to create something in between: pieces that feel precious but are designed for 
            everyday wear. Demi-fine jewelry that doesn't ask you to choose between beauty and practicality.
          </p>
          <p>
            Every piece is plated in 18K gold or crafted from sterling silver, then hand-finished by 
            artisans who have spent decades perfecting their craft. We use responsibly sourced materials 
            and work only with partners who share our values.
          </p>
          <p>
            Our collections are intentionally small. We believe in fewer, better things—pieces you'll 
            reach for again and again, that become part of your daily rituals and your most meaningful moments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-[var(--color-border)]">
          {[
            { label: '18K Gold Plated', desc: 'Thick, durable plating that resists tarnish' },
            { label: 'Hypoallergenic', desc: 'Nickel-free and safe for sensitive skin' },
            { label: 'Lifetime Guarantee', desc: 'Against manufacturing defects, always' },
          ].map((item, i) => (
            <div key={i}>
              <div className="font-serif text-xl mb-2">{item.label}</div>
              <p className="text-sm text-[var(--color-text-muted)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

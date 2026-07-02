import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-24 pb-20">
      <div className="text-center mb-16">
        <div className="text-xs tracking-[0.15em] text-[var(--color-text-muted)] mb-3">EST. 2018 • NEW YORK</div>
        <h1 className="serif text-6xl mb-6">Our Story</h1>
      </div>

      <div className="prose prose-lg max-w-none text-[var(--color-text-muted)] space-y-8">
        <p className="text-xl leading-relaxed">
          Velmora was founded with a simple conviction: that exceptional jewelry should be accessible to every woman who values beauty, quality, and intention.
        </p>
        
        <div className="aspect-video bg-[var(--color-bg-dark)] my-12 rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80" 
            alt="Velmora atelier" 
            className="w-full h-full object-cover"
          />
        </div>

        <p>
          We began in a small studio in New York, where our founder, a former fine jewelry buyer, grew frustrated by the gap between mass-produced costume jewelry and unattainable luxury. There had to be a middle ground — pieces that felt special, looked beautiful, and lasted, without the markup.
        </p>

        <p>
          Today, Velmora works with a small network of artisans who share our commitment to thoughtful craftsmanship. Every piece is plated in 18K gold over hypoallergenic brass, set with hand-selected crystals, and finished with the same attention to detail you'd expect from houses charging three times the price.
        </p>

        <blockquote className="border-l-2 border-[var(--color-accent)] pl-8 italic text-xl my-12">
          "We don't believe in disposable jewelry. We believe in pieces you'll reach for every day, for years to come."
        </blockquote>

        <p>
          Our collections are intentionally small. We release new designs seasonally, and we retire styles when they no longer feel right. This approach allows us to focus on quality over quantity, and to ensure that every piece we send into the world is one we're proud to stand behind.
        </p>
      </div>

      <div className="mt-16 pt-12 border-t border-[var(--color-border)] grid md:grid-cols-3 gap-8 text-center">
        {[
          { num: "18K", label: "Gold Plating" },
          { num: "30", label: "Day Returns" },
          { num: "5", label: "Year Warranty" },
        ].map((item, i) => (
          <div key={i}>
            <div className="serif text-4xl mb-2">{item.num}</div>
            <div className="text-sm tracking-[0.1em] text-[var(--color-text-muted)]">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
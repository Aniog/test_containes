import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <div className="text-center mb-16">
        <span className="text-xs tracking-[0.15em] text-[var(--color-gold)] uppercase">Est. 2018</span>
        <h1 className="heading-display text-5xl md:text-6xl mt-2">Our Story</h1>
      </div>

      <div className="prose prose-lg max-w-none text-[var(--color-text-muted)] space-y-8 leading-relaxed">
        <p className="text-xl text-[var(--color-text)]">
          Velmora was founded with a simple conviction: that fine jewelry should feel personal, not precious.
        </p>

        <div className="my-12 aspect-video bg-[var(--color-surface-warm)] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1600&q=80" 
            alt="Velmora atelier" 
            className="w-full h-full object-cover"
          />
        </div>

        <p>
          We began in a small studio in Lisbon, where our founder, a former fine arts student, grew frustrated with the gap between mass-produced fashion jewelry and the unattainable prices of traditional fine jewelry.
        </p>

        <p>
          Working closely with family-run workshops in Portugal and Italy, we developed a collection of demi-fine pieces—crafted from solid brass, plated in 18K gold, and finished by hand. Each piece is designed to be worn daily, to develop a patina of its own, and to be passed down.
        </p>

        <blockquote className="border-l-2 border-[var(--color-gold)] pl-6 italic text-[var(--color-text)] my-10">
          "We don't believe in saving jewelry for special occasions. The special occasion is every day you choose to wear it."
        </blockquote>

        <p>
          Today, Velmora ships to over 40 countries. Our pieces are worn by women who value quiet luxury—those who appreciate the weight of real metal, the warmth of gold against skin, and the confidence that comes from wearing something beautiful that was made with care.
        </p>
      </div>

      <div className="mt-16 pt-12 border-t border-[var(--color-border)] grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="font-medium mb-2">Our Promise</div>
          <p className="text-[var(--color-text-muted)]">Every piece is inspected three times before it leaves our studio.</p>
        </div>
        <div>
          <div className="font-medium mb-2">Our Materials</div>
          <p className="text-[var(--color-text-muted)]">18K gold plating over solid brass. Nickel-free. Hypoallergenic.</p>
        </div>
        <div>
          <div className="font-medium mb-2">Our Impact</div>
          <p className="text-[var(--color-text-muted)]">We partner with artisans who are paid fairly and work in safe conditions.</p>
        </div>
      </div>
    </div>
  );
};

export default About;

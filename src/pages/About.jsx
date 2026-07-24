import React from 'react';

const About = () => {
  return (
    <div className="pt-20">
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <div className="text-xs tracking-[0.2em] text-[var(--color-gold)] mb-3">EST. 2018</div>
        <h1 className="serif text-6xl mb-8">Our Story</h1>
        <div className="prose prose-lg mx-auto text-[var(--color-text-muted)] space-y-6 text-left">
          <p>Velmora was founded with a simple conviction: that fine jewelry should not require compromise. We believe every woman deserves pieces that feel like heirlooms—beautiful enough for special moments, durable enough for everyday wear.</p>
          <p>Our demi-fine collection is crafted from 18K gold plated brass, chosen for its warmth, durability, and hypoallergenic properties. Each piece is designed in our studio and produced with care by artisans who share our commitment to quality.</p>
          <p>From our signature huggies to statement necklaces, every design undergoes weeks of refinement. We test for comfort, longevity, and that unmistakable feeling of quiet luxury.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-[var(--color-border)]">
        <div className="bg-[var(--color-bg)] p-12">
          <div className="max-w-md">
            <div className="text-xs tracking-[0.15em] text-[var(--color-gold)] mb-2">OUR PROMISE</div>
            <h3 className="serif text-3xl mb-4">Quality Without Compromise</h3>
            <p className="text-[var(--color-text-muted)]">Every piece is backed by our lifetime craftsmanship guarantee. If it ever breaks under normal wear, we'll repair or replace it.</p>
          </div>
        </div>
        <div className="bg-[var(--color-bg)] p-12">
          <div className="max-w-md">
            <div className="text-xs tracking-[0.15em] text-[var(--color-gold)] mb-2">SUSTAINABILITY</div>
            <h3 className="serif text-3xl mb-4">Thoughtfully Made</h3>
            <p className="text-[var(--color-text-muted)]">We source responsibly, minimize waste, and design pieces meant to last generations—not seasons.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
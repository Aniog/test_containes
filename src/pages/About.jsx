import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-background pt-24 md:pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4">About Velmora</p>
        <h1 className="font-serif text-4xl md:text-5xl font-light mb-8">Crafted with Intention</h1>
        <p className="text-muted leading-relaxed mb-6">
          Velmora was born from a simple belief: that beautiful jewelry should be accessible, wearable, and made to last. Founded in New York, we create demi-fine pieces using 18K gold plating and hypoallergenic materials — designed for women who want everyday elegance without the luxury markup.
        </p>
        <p className="text-muted leading-relaxed">
          Every piece in our collection is designed in-house, crafted in small batches, and inspected by hand. We are committed to sustainable practices, responsible sourcing, and creating jewelry you will reach for again and again.
        </p>
      </div>
    </div>
  );
}

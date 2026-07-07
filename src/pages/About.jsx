import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-cream-50 pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-xs uppercase tracking-extra-wide text-charcoal-400 mb-4">About</p>
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal-950 font-light">
          Our Story
        </h1>
        <p className="mt-8 text-charcoal-600 leading-relaxed">
          Velmora was founded with a simple belief: beautiful jewelry should not be reserved for special occasions alone. 
          It should be part of your everyday — a quiet confidence you carry with you.
        </p>
        <p className="mt-4 text-charcoal-600 leading-relaxed">
          We partner with skilled artisans to create demi-fine pieces using 18K gold plating, 
          hypoallergenic materials, and ethical practices. Every collection is designed in small batches 
          to ensure quality and reduce waste.
        </p>
        <p className="mt-4 text-charcoal-600 leading-relaxed">
          Thank you for being part of our story.
        </p>
      </div>
    </div>
  );
}

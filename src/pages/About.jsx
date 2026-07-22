import React from 'react';

export default function About() {
  return (
    <div className="pt-28 md:pt-32 pb-24 bg-cream min-h-screen">
      <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-taupe mb-4">Our Story</p>
        <h1 className="font-serif text-4xl md:text-5xl text-dark mb-8">
          Designed in New York, Worn Everywhere
        </h1>
        <p className="text-taupe leading-relaxed mb-6">
          Velmora was founded with a simple mission: to create demi-fine jewelry that feels as
          special as the moments you wear it for. We believe that luxury should not be loud — it
          should whisper. Every piece in our collection is designed to be versatile enough for
          daily wear, yet refined enough for life's most memorable occasions.
        </p>
        <p className="text-taupe leading-relaxed mb-6">
          Our design studio is based in New York, where we draw inspiration from the city's
          architecture, its energy, and the diverse women who call it home. We work closely
          with skilled artisans who share our commitment to quality, sustainability, and
          timeless design.
        </p>
        <p className="text-taupe leading-relaxed">
          From our signature huggies to our floral pendant necklaces, each Velmora piece is
          crafted using 18K gold plating on hypoallergenic bases. We are proud to offer
          jewelry that is as kind to your skin as it is beautiful to wear.
        </p>
      </div>
    </div>
  );
}

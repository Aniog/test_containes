import React from 'react';

export default function About() {
  return (
    <main className="pt-20 md:pt-24 bg-cream min-h-screen">
      <div className="mx-auto max-w-page px-4 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-4">
            Our Story
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-base mb-8 leading-[1.1]">
            Crafted with Intention
          </h1>
          <p className="text-muted font-sans leading-relaxed mb-6">
            Velmora was founded in 2019 with a simple mission: to create beautiful, wearable jewelry that does not compromise on quality or ethics. We believe that every woman deserves to feel elegant every day — not just on special occasions.
          </p>
          <p className="text-muted font-sans leading-relaxed mb-6">
            Our pieces are designed in New York and crafted by skilled artisans who share our commitment to excellence. We use 18K gold plating on hypoallergenic bases, ensuring that our jewelry is as kind to your skin as it is beautiful to wear.
          </p>
          <p className="text-muted font-sans leading-relaxed">
            Sustainability is at the heart of everything we do. From responsibly sourced materials to plastic-free packaging, we are committed to reducing our environmental footprint while delivering pieces you will treasure for years to come.
          </p>
        </div>
      </div>
    </main>
  );
}

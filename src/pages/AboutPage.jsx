import React from 'react';

export default function AboutPage() {
  return (
    <main className="pt-20 md:pt-24 bg-[var(--cream)] min-h-screen">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-medium mb-4">About Velmora</p>
        <h1 className="font-serif text-3xl md:text-5xl mb-8">Quiet Luxury, Made Accessible</h1>
        <div className="space-y-6 text-[var(--stone)] text-sm md:text-base leading-relaxed font-light text-left">
          <p>
            Velmora was founded on a belief that fine jewelry should not be reserved for special occasions alone. In a world of fast fashion and disposable accessories, we set out to create something different: demi-fine pieces that look and feel heirloom, priced for everyday.
          </p>
          <p>
            Every design begins in our studio, where we obsess over proportions, weight, and the way light catches a surface. We then partner with skilled artisans who bring these designs to life using 18K gold plating, nickel-free materials, and meticulous quality control.
          </p>
          <p>
            Our mission is simple — to help women feel effortlessly elegant, whether they are dressing for a meeting, a dinner, or a quiet morning at home. Because the best jewelry is the kind you never want to take off.
          </p>
        </div>
      </div>
    </main>
  );
}

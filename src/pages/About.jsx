import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24 bg-background">
      <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl md:text-5xl text-center">Our Story</h1>
        <div className="mt-10 md:mt-14 space-y-6 text-muted leading-relaxed text-sm md:text-base">
          <p>
            Velmora was founded with a simple belief: that fine jewelry should feel personal, not
            precious. In a world of fast fashion and disposable accessories, we set out to create
            something different — demi-fine pieces designed to be worn, loved, and passed down.
          </p>
          <p>
            Each collection begins with a mood, a memory, or a moment we want to capture. Our
            designers sketch by hand, selecting materials that balance beauty with responsibility.
            We use 18K gold plating, ethically sourced crystals, and nickel-free, hypoallergenic
            bases so that every piece feels as good as it looks.
          </p>
          <p>
            Our jewelry is made in small batches. This means less waste, more attention to detail,
            and pieces that feel rare in the best way. We believe in slow production, fair wages,
            and packaging that is as thoughtful as the product inside.
          </p>
          <p>
            Whether you are buying for yourself or someone you love, we hope Velmora becomes part
            of your story.
          </p>
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/shop"
            className="inline-block bg-accent text-white px-8 py-3.5 text-sm font-medium uppercase tracking-wide hover:bg-accent-hover transition-colors"
          >
            Explore the Collection
          </Link>
        </div>
      </div>
    </div>
  );
}

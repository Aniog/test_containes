import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Image */}
        <div className="aspect-[4/5] bg-gradient-to-br from-velmora-charcoal to-velmora-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,164,92,0.1)_0%,transparent_70%)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-velmora-gold/15 font-serif text-9xl tracking-widest select-none">
              V
            </span>
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-velmora-muted mb-4">
            Our Story
          </p>
          <h2 className="section-heading mb-8">
            Designed for<br />Real Life
          </h2>
          <div className="space-y-5 font-sans text-sm md:text-base text-velmora-charcoal/70 leading-relaxed">
            <p>
              Velmora was born from the belief that luxury should be effortless. 
              We create demi-fine jewelry that bridges the gap between fast fashion 
              and traditional fine jewelry — pieces that are made to be worn, loved, 
              and lived in.
            </p>
            <p>
              Each piece is crafted from 18K gold-plated brass with meticulous 
              attention to detail. From the weight of every earring to the clasp 
              of every necklace, we obsess over the details that make a piece 
              feel like it was made just for you.
            </p>
            <p>
              We believe jewelry is personal. It marks moments, carries memories, 
              and becomes part of your story. That's why every Velmora piece is 
              designed to be treasured — not just today, but for years to come.
            </p>
          </div>
          <Link
            to="/about"
            className="mt-8 btn-outline inline-flex"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
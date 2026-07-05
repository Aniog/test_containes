import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main className="pt-24 md:pt-28">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-velmora-muted mb-4">
            Our Story
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-velmora-dark leading-[1.15] mb-8">
            Jewelry Made<br />to Be Lived In
          </h1>
          <p className="font-sans text-base md:text-lg text-velmora-charcoal/70 leading-relaxed max-w-xl">
            Velmora was born from the belief that luxury should be effortless. 
            We create demi-fine jewelry that bridges the gap between fast fashion 
            and traditional fine jewelry.
          </p>
        </div>
      </section>

      {/* Image + text */}
      <section className="max-w-7xl mx-auto px-6 pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div className="aspect-[4/5] bg-gradient-to-br from-velmora-charcoal to-velmora-dark relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-velmora-gold/15 font-serif text-9xl tracking-widest select-none">V</span>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-2xl md:text-3xl text-velmora-dark mb-6">
              The Velmora Philosophy
            </h2>
            <div className="space-y-4 font-sans text-sm text-velmora-charcoal/70 leading-relaxed">
              <p>
                Our pieces are crafted from 18K gold-plated brass with meticulous attention 
                to detail. From the weight of every earring to the clasp of every necklace, 
                we obsess over the details that make a piece feel like it was made just for you.
              </p>
              <p>
                We believe jewelry is personal. It marks moments, carries memories, 
                and becomes part of your story. That's why every Velmora piece is 
                designed to be treasured — not just today, but for years to come.
              </p>
              <p>
                Sustainability is at the core of what we do. We produce in small batches, 
                use recycled metals where possible, and package every piece in 
                FSC-certified materials.
              </p>
            </div>
            <Link to="/shop" className="mt-8 btn-outline inline-flex">
              Explore the Collection
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
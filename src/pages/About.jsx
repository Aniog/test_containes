import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main>
      <section className="section-container py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-ultra text-accent">Our Story</p>
          <h1 className="mt-3 font-serif text-4xl md:text-5xl text-ink">Quiet luxury, made real</h1>
          <p className="mt-6 text-sm md:text-base text-ink-secondary leading-relaxed">
            Velmora Fine Jewelry was founded with a single idea: that beautiful jewelry should feel within reach. We design demi-fine pieces in 18K gold plating, using recycled metals and conflict-free crystals. Every piece is designed in New York and finished by hand in small batches.
          </p>
          <p className="mt-4 text-sm md:text-base text-ink-secondary leading-relaxed">
            From the first sketch to the final polish, we obsess over the details so you can treasure every piece for years to come.
          </p>
          <div className="mt-8">
            <Link to="/shop" className="btn-primary">Shop the collection</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

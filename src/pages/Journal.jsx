import React from 'react';

export default function Journal() {
  return (
    <main className="pt-20 md:pt-24">
      {/* Header */}
      <section className="section-padding py-10 md:py-16 text-center bg-charcoal/5">
        <p 
          className="text-xs uppercase tracking-widest text-charcoal/50 mb-2"
          style={{ letterSpacing: '0.3em' }}
        >
          Inspiration
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
          The Velmora Journal
        </h1>
        <p className="text-charcoal/60 max-w-lg mx-auto">
          Styling tips, care guides, and stories from our community.
        </p>
      </section>

      {/* Placeholder content */}
      <section className="section-padding section-margin">
        <div className="max-w-7xl mx-auto text-center py-16">
          <p className="font-serif text-2xl text-charcoal/40">
            Coming Soon
          </p>
          <p className="text-charcoal/30 mt-2">
            Our journal is being curated with love.
          </p>
        </div>
      </section>
    </main>
  );
}

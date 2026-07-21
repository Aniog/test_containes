import React from 'react';

const Journal = () => {
  return (
    <div className="section-padding bg-background">
      <div className="container-editorial max-w-3xl">
        <h1 className="font-serif text-3xl md:text-4xl text-ink">Journal</h1>
        <p className="mt-4 text-sm text-muted leading-relaxed">
          Stories about craftsmanship, styling, and the art of everyday luxury.
        </p>
        <div className="mt-8 space-y-6">
          {['How to layer gold jewelry', 'The meaning behind floral motifs', 'Gift guide for her'].map((title) => (
            <article key={title} className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="font-serif text-xl text-ink">{title}</h2>
              <p className="mt-2 text-sm text-muted">Coming soon.</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;

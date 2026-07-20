import React from 'react';

const Journal = () => {
  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center">
        <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-brand-charcoal">
          Journal
        </h1>
        <div className="w-12 h-px bg-brand-gold mx-auto mt-4 mb-10" />
        <p className="font-sans text-sm text-brand-warm-gray leading-relaxed">
          Stories, styling tips, and behind-the-scenes looks from the Velmora studio.
          Coming soon.
        </p>
      </div>
    </div>
  );
};

export default Journal;

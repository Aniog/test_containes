import React from 'react';

const EditorialStrip = () => {
  const logos = [
    'Vogue',
    'Harper\'s Bazaar',
    'Elle',
    'Refinery29',
    'Who What Wear',
  ];

  return (
    <section className="section-padding border-y border-brand-200/60">
      <div className="container-custom">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-ink-400 mb-8">
          As featured in
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-x-16">
          {logos.map((logo) => (
            <span
              key={logo}
              className="font-display text-2xl md:text-3xl text-ink-300 tracking-wide"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialStrip;

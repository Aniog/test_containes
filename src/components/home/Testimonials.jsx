import React from 'react';
import Stars from '@/components/ui/Stars';
import SectionHeading from '@/components/ui/SectionHeading';

const testimonials = [
  {
    quote:
      'The Sphere Huggies are the first earrings I reach for every morning. Three months of daily wear and they still look brand new.',
    name: 'Amelia R.',
    detail: 'Golden Sphere Huggies',
  },
  {
    quote:
      'I bought the Heirloom Set for my sister’s birthday — the gift box alone made her gasp. She has not taken the necklace off since.',
    name: 'Priya K.',
    detail: 'Royal Heirloom Set',
  },
  {
    quote:
      'Quiet, elegant, and so well made for the price. The ear cuff gets me compliments every single time I wear it.',
    name: 'Sofia M.',
    detail: 'Vivid Aura Jewels',
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-28">
      <SectionHeading eyebrow="Kind Words" title="Treasured by Many" />
      <div className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-3 md:gap-6">
        {testimonials.map((t, index) => (
          <blockquote
            key={t.name}
            className="reveal flex flex-col border border-umber bg-onyx/60 p-7 md:p-8"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Stars rating={5} />
            <p className="mt-5 flex-1 font-serif text-lg italic leading-relaxed text-ivory/90">
              “{t.quote}”
            </p>
            <footer className="mt-6 border-t border-umber pt-5">
              <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-gold">
                {t.name}
              </p>
              <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.14em] text-sand">
                {t.detail}
              </p>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

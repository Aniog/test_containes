import React from 'react';
import { TESTIMONIALS } from '@/data/products.js';
import StarRating from '@/components/ui/StarRating.jsx';

export default function Testimonials() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-widest text-gold">Reviews</p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
            Loved by You
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <article
              key={item.id}
              className="border border-warm-gray bg-white p-8 transition-shadow duration-500 hover:shadow-md"
            >
              <StarRating rating={item.rating} size={14} />
              <p className="mt-5 text-base leading-relaxed text-ink">
                “{item.text}”
              </p>
              <p className="mt-6 text-xs uppercase tracking-widest text-stone">
                {item.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

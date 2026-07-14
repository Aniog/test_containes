import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < rating ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-divider'}`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 px-5 md:px-8 max-w-[1400px] mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mb-3">
          What Our Customers Say
        </h2>
        <div className="w-12 h-px bg-velmora-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((review, i) => (
          <div
            key={i}
            className="bg-white border border-velmora-divider rounded-sm p-6 md:p-8 flex flex-col"
          >
            <StarRating rating={review.rating} />
            <p className="text-sm text-velmora-text-dark leading-relaxed mt-4 mb-5 flex-1">
              &ldquo;{review.text}&rdquo;
            </p>
            <div className="border-t border-velmora-divider pt-4">
              <p className="text-sm font-medium text-velmora-charcoal">{review.name}</p>
              <p className="text-xs text-velmora-muted mt-0.5">Purchased: {review.product}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophia M.',
    text: 'The quality exceeded my expectations. These earrings have become my everyday signature piece — they never tarnish and always get compliments.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Emily R.',
    text: 'I bought the Royal Heirloom Set as a gift for my sister and she absolutely loved it. The packaging felt like a luxury unboxing experience.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ava K.',
    text: 'Finally found demi-fine jewelry that does not irritate my sensitive skin. The huggies are lightweight, chic, and perfect for layering.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-extra-wide text-charcoal-400 mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-950 font-light">
            Loved by Our Community
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-cream-50 p-8 border border-charcoal-200/60"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-gold-500 text-gold-500"
                  />
                ))}
              </div>
              <p className="text-charcoal-700 leading-relaxed text-sm">
                "{review.text}"
              </p>
              <p className="mt-6 text-xs uppercase tracking-wide text-charcoal-500">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

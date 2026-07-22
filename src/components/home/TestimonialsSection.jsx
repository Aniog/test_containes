import React from 'react';
import { StarRating } from '@/components/ui/StarRating';

const REVIEWS = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is stunning for the price. I wear my huggies every single day and they still look brand new.',
  },
  {
    id: 2,
    name: 'Jenna K.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a birthday gift and she absolutely loved it. The packaging felt so premium.',
  },
  {
    id: 3,
    name: 'Alyssa R.',
    rating: 5,
    text: 'Quiet luxury exactly as described. Fast shipping and the earrings are so comfortable I sleep in them.',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-cream border-t border-stone">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-label text-accent mb-3">Reviews</p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso font-light">Loved by You</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white p-8 border border-stone flex flex-col"
            >
              <StarRating rating={review.rating} size={14} className="mb-4" />
              <p className="text-espresso leading-relaxed flex-1 mb-6">“{review.text}”</p>
              <p className="text-xs uppercase tracking-label text-taupe">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

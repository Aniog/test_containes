import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sarah M.',
    text: 'The quality exceeded my expectations. I wear my Golden Sphere Huggies every single day and they still look brand new after 6 months.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Amanda K.',
    text: 'Bought the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. Absolutely stunning.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Priya R.',
    text: 'Finally, demi-fine jewelry that does not turn my ears green. I have sensitive skin and these are genuinely hypoallergenic.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-velmora-gold text-xs tracking-[0.35em] uppercase font-medium mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-ink">
            Loved by Thousands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-velmora-bg p-6 md:p-8 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>
              <p className="text-sm md:text-base text-velmora-ink leading-relaxed flex-1 mb-6">
                "{review.text}"
              </p>
              <p className="text-xs tracking-widest uppercase text-velmora-stone font-medium">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

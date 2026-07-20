import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophia L.',
    text: 'The quality is stunning for the price. I get compliments every time I wear my Golden Sphere Huggies. They feel so much more expensive than they are.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Amara K.',
    text: 'Bought the Royal Heirloom Set as a birthday gift and it was perfect. The packaging alone made it feel so premium. She loved it.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Elena M.',
    text: 'Finally, jewelry that does not irritate my sensitive skin. I have worn the Amber Lace Earrings daily for two months and they still look brand new.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs font-medium tracking-superwide uppercase text-gold-600 mb-2">
            Reviews
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ink-900">
            Loved by Our Community
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col rounded-sm border border-cream-200 bg-cream-50 p-6 sm:p-8"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="text-sm sm:text-base text-ink-700 leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="mt-5 text-xs font-medium tracking-wider uppercase text-ink-500">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    text: 'Absolutely stunning quality for the price. The gold plating is thick and lustrous — looks far more expensive than it is.',
    name: 'Isabella',
    initial: 'M',
  },
  {
    text: 'I bought the Flora necklace for my sister\'s wedding and she hasn\'t taken it off since. The crystal detail is exquisite.',
    name: 'Sophia',
    initial: 'K',
  },
  {
    text: 'Finally, jewelry that feels luxe without the markup. The huggies are my new everyday staple. Already planning my next purchase.',
    name: 'Olivia',
    initial: 'R',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="text-center mb-14">
          <p className="text-stone text-xs tracking-widest uppercase mb-3">Love Notes</p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-medium">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[960px] mx-auto">
          {reviews.map((review) => (
            <div key={review.name} className="text-center">
              {/* Stars */}
              <div className="flex items-center justify-center gap-0.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-warm-500 text-warm-500" strokeWidth={1} />
                ))}
              </div>
              <p className="text-sm text-stone leading-relaxed italic mb-5">
                "{review.text}"
              </p>
              <p className="text-xs tracking-widest uppercase text-charcoal font-medium">
                {review.name} {review.initial}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

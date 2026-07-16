import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    text: 'Absolutely stunning quality. The gold has a beautiful warm tone and I\'ve worn my huggies every day for months — they still look brand new.',
    name: 'Rebecca',
    initial: 'M.',
    product: 'Golden Sphere Huggies',
  },
  {
    text: 'I bought the Amber Lace earrings for my sister\'s wedding and they caught the light so beautifully. Received so many compliments. Truly special.',
    name: 'Claire',
    initial: 'T.',
    product: 'Amber Lace Earrings',
  },
  {
    text: 'The packaging alone is an experience. The Royal Heirloom Set made the perfect anniversary gift — my wife was blown away. Will be back for more.',
    name: 'Sarah',
    initial: 'K.',
    product: 'Royal Heirloom Set',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-velmora-sand/50">
      <div className="velmora-container">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-[10px] tracking-widest uppercase text-velmora-taupe mb-3">
            Loved by You
          </p>
          <h2 className="velmora-heading text-3xl md:text-4xl lg:text-5xl font-light">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-velmora-gold/40 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {reviews.map((review) => (
            <div key={review.name} className="text-center">
              <div className="flex items-center justify-center gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>
              <p className="font-serif text-lg md:text-xl text-velmora-dark/80 italic leading-relaxed mb-5">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="font-sans text-sm font-medium text-velmora-dark">
                {review.name} {review.initial}
              </p>
              <p className="text-[11px] text-velmora-taupe mt-0.5 tracking-wide">
                on {review.product}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

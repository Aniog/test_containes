import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    text: 'I bought the Golden Sphere Huggies as a treat for myself and I haven\'t taken them off since. The quality is incredible for the price — they look and feel like solid gold.',
    rating: 5,
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Lauren T.',
    text: 'I ordered the Royal Heirloom Set for my best friend\'s birthday. The packaging was beautiful and she absolutely loved it. Will definitely be ordering more.',
    rating: 5,
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Priya K.',
    text: 'Finally, jewelry that doesn\'t irritate my sensitive skin! The Amber Lace Earrings are so elegant and lightweight. I get compliments every time I wear them.',
    rating: 5,
    product: 'Amber Lace Earrings',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream-100">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-headline md:text-display text-charcoal mb-2">
            What Our Customers Say
          </h2>
          <p className="font-sans text-body text-taupe">
            Real reviews from real women who love their Velmora pieces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-cream-50 p-6 md:p-8 rounded-lg border border-cream-200/60 hover:border-cream-300/80 transition-colors duration-300"
            >
              <Quote className="w-6 h-6 text-gold/30 mb-4" strokeWidth={1} />
              <p className="font-sans text-body text-charcoal-light leading-relaxed mb-6">
                {t.text}
              </p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < t.rating ? 'text-gold fill-gold' : 'text-cream-300'}`}
                  />
                ))}
              </div>
              <div>
                <p className="font-sans text-body font-medium text-charcoal">{t.name}</p>
                <p className="font-sans text-caption text-taupe">Verified Buyer · {t.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

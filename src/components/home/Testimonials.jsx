import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    text: 'I wear my Golden Sphere Huggies every single day. They are the perfect size — bold enough to make a statement but comfortable enough to sleep in. I have received so many compliments!',
    rating: 5,
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Emily R.',
    text: 'The Royal Heirloom Set was the most beautiful gift I have ever given. The packaging alone felt luxurious, and the jewelry inside was absolutely stunning. My sister cried happy tears.',
    rating: 5,
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Jessica L.',
    text: 'Finally, demi-fine jewelry that actually looks expensive. The Amber Lace Earrings have such intricate detail — people always ask if they are real gold. The quality is unmatched at this price.',
    rating: 5,
    product: 'Amber Lace Earrings',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-espresso mb-3">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-cream/50 border border-sand/50 rounded-sm p-6 md:p-8 relative"
            >
              <Quote className="w-6 h-6 text-gold/30 absolute top-4 right-4" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>

              <p className="text-sm text-espresso/80 leading-relaxed mb-6">
                "{t.text}"
              </p>

              <div className="border-t border-sand pt-4">
                <p className="font-serif text-base text-espresso">{t.name}</p>
                <p className="text-xs text-taupe mt-0.5">Verified Buyer — {t.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

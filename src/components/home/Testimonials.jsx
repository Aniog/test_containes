import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'I\'ve been wearing my Golden Sphere Huggies every single day for three months. They haven\'t tarnished, turned green, or lost their shine. Absolutely worth it — I\'ve already ordered two more pairs as gifts.',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Emma L.',
    rating: 5,
    text: 'The Majestic Flora Nectar necklace is even more beautiful in person. The crystals catch the light perfectly, and I get compliments every time I wear it. The packaging was gorgeous too — felt like opening a luxury gift.',
    product: 'Majestic Flora Nectar',
  },
  {
    id: 3,
    name: 'Jessica K.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set for my mom\'s birthday. She cried when she opened it. The quality is incredible for the price — looks and feels like fine jewelry. Velmora is now my go-to for gifts.',
    product: 'Royal Heirloom Set',
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-page">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-muted font-sans mb-3">
            Customer Love
          </p>
          <h2 className="heading-serif text-3xl md:text-5xl text-charcoal">
            What Our Customers Say
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-8 border border-stone-200/50 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote icon */}
              <Quote size={24} className="text-gold/30 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-gold-light text-gold-light"
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-stone-100 pt-4">
                <p className="font-medium text-charcoal text-sm">{testimonial.name}</p>
                <p className="text-xs text-stone-400 mt-0.5">
                  Verified Buyer — {testimonial.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

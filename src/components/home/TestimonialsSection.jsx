import React from 'react';
import StarRating from '@/components/StarRating';

const testimonials = [
  {
    id: 1,
    name: 'Sophia M.',
    text: 'The quality far exceeds the price. I have worn my huggies every day for three months and they still look brand new.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Emily R.',
    text: 'Beautiful packaging and even more beautiful jewelry. It felt like opening a luxury gift, even though I bought it for myself.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amanda K.',
    text: 'My go-to for gifts. The pieces are delicate, timeless, and always get compliments. Shipping was fast too.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-cream-100">
      <div className="mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-medium">
            Loved by Our Customers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-cream-50 p-8 md:p-10 border border-hairline text-center"
            >
              <StarRating rating={testimonial.rating} size={16} />
              <p className="mt-5 font-serif text-lg md:text-xl italic leading-relaxed text-ink">
                "{testimonial.text}"
              </p>
              <p className="mt-6 font-sans text-xs tracking-widest uppercase text-warmgray-500">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

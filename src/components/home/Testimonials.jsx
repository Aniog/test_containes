import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    text: 'The quality is incredible for the price. My Golden Sphere Huggies have become my everyday staple — I get compliments constantly!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Emily R.',
    text: 'I bought the Royal Heirloom Set as a gift for my sister and she was moved to tears. The packaging alone felt like a luxury experience.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Jessica L.',
    text: 'Finally, jewelry that looks expensive without the designer markup. The Amber Lace Earrings are absolutely stunning in person.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-velmora-cream">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase font-sans text-velmora-gold mb-3">
            Loved by Many
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-velmora-black">
            What Our Customers Say
          </h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto mt-6" />
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-velmora-gold fill-velmora-gold"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm sm:text-base text-velmora-charcoal leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <p className="text-xs tracking-[0.15em] uppercase font-sans font-medium text-velmora-stone">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

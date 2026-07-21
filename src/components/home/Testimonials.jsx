import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah',
    initial: 'S',
    rating: 5,
    text: "I absolutely love my Velmora pieces. The quality is exceptional and they've become my everyday go-to jewelry.",
    date: '2 weeks ago'
  },
  {
    id: 2,
    name: 'Emily',
    initial: 'E',
    rating: 5,
    text: "The perfect gift for myself. Elegant, timeless, and the gold plating has held up beautifully.",
    date: '1 month ago'
  },
  {
    id: 3,
    name: 'Jessica',
    initial: 'J',
    rating: 5,
    text: "Finally, jewelry that doesn't irritate my sensitive skin. Plus, they're gorgeous! Will definitely be ordering more.",
    date: '3 weeks ago'
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-[rgb(var(--color-surface))]">
      <div className="container-velmora">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">
            What Our Customers Say
          </h2>
          <div className="hairline w-24 mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 border border-[rgb(var(--color-border))]"
            >
              {/* Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-[rgb(var(--color-accent))] fill-current"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="font-sans text-base leading-relaxed mb-6 text-[rgb(var(--color-foreground))]/80">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[rgb(var(--color-surface))] flex items-center justify-center">
                  <span className="font-serif text-sm uppercase">
                    {testimonial.initial}
                  </span>
                </div>
                <div>
                  <p className="font-sans text-sm font-medium">
                    {testimonial.name}
                  </p>
                  <p className="font-sans text-xs text-[rgb(var(--color-muted))]">
                    {testimonial.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

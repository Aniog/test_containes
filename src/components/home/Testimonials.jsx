import React from 'react';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sophia M.',
    text: 'The quality of the Golden Sphere Huggies is incredible. They look exactly like the designer pairs I own at a fraction of the price. I haven\'t taken them off since I got them.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Emma R.',
    text: 'I bought the Royal Heirloom Set as a wedding gift for my sister and she cried. The packaging is beautiful and the pieces are even more stunning in person. Will be ordering again.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Olivia K.',
    text: 'The Vivid Aura ear cuff is my new go-to. It\'s lightweight, catches the light beautifully, and I\'ve gotten so many compliments. Velmora is my new favorite jewelry brand.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-gold font-sans font-medium mb-3">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-near-black">
            Loved by Thousands
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 border border-beige/60"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-taupe leading-relaxed mb-6 italic font-serif">
                "{testimonial.text}"
              </p>

              {/* Name */}
              <p className="text-xs uppercase tracking-wider text-near-black font-medium">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
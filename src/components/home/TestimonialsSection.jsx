import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-manrope text-xs tracking-[0.2em] uppercase text-champagne mb-3">Reviews</p>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-obsidian">What Our Customers Say</h2>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map(review => (
            <div key={review.id} className="flex flex-col">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={13} fill="#C9A96E" stroke="none" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-cormorant text-lg lg:text-xl font-light text-obsidian leading-relaxed italic flex-1">
                "{review.text}"
              </blockquote>

              {/* Divider */}
              <div className="h-px bg-stone-200 my-5" />

              {/* Author */}
              <p className="font-manrope text-xs tracking-wider uppercase text-stone-500">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

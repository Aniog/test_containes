import React from 'react';
import { Star } from 'lucide-react';
import { reviews } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="bg-velmora-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-velmora-muted mb-4">
            Love Notes
          </p>
          <h2 className="section-heading">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {reviews.map((review) => (
            <div key={review.id} className="text-center">
              <div className="flex items-center justify-center gap-0.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#C8A45C" className="text-velmora-gold" />
                ))}
              </div>
              <p className="font-serif text-lg md:text-xl text-velmora-dark italic leading-relaxed mb-5">
                "{review.text}"
              </p>
              <p className="font-sans text-xs tracking-[0.1em] uppercase text-velmora-muted">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
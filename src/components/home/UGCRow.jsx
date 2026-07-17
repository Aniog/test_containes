import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { testimonials, ugcPosts } from '../../data/products';

export default function UGCRow() {
  return (
    <section className="py-16 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-3">@velmorajewelry</p>
          <h2 className="velmora-heading text-3xl sm:text-4xl lg:text-5xl mb-4">As Worn By You</h2>
          <hr className="velmora-divider w-16 mx-auto" />
        </div>
      </div>
      <div className="flex gap-4 px-4 sm:px-6 lg:px-8 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-48 sm:w-56 snap-start"
          >
            <div className="relative aspect-[9/16] overflow-hidden rounded-sm">
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-sm italic velmora-heading">{post.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[var(--velmora-bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-3">Love Letters</p>
          <h2 className="velmora-heading text-3xl sm:text-4xl lg:text-5xl mb-4">What Our Customers Say</h2>
          <hr className="velmora-divider w-16 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-[var(--velmora-gold)] fill-[var(--velmora-gold)]"
                  />
                ))}
              </div>
              <blockquote className="velmora-heading text-lg sm:text-xl italic mb-6 leading-relaxed text-[var(--velmora-text)]">
                "{testimonial.text}"
              </blockquote>
              <p className="text-sm tracking-wider uppercase text-muted">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

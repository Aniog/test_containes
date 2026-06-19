import React from 'react';
import { Star } from 'lucide-react';
import { reviews } from '../../data/products';

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-cream-100/40">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-widest-2xl uppercase text-gold-400 font-sans font-medium mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal-800">
            Loved by Thousands
          </h2>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-cream-50 p-8 md:p-10 rounded-sm border border-charcoal-100/20"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-gold-400 text-gold-400"
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-charcoal-600 text-sm leading-relaxed mb-6 italic font-serif text-[15px]">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-charcoal-100/40 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium text-charcoal-600">
                    {review.name[0]}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-charcoal-800">
                    {review.name}
                  </p>
                  <p className="text-xs text-charcoal-400">
                    {review.product}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

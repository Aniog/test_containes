import React from 'react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-luxury">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-light mb-3"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Loved by Our Community
          </h2>
          <div className="w-12 h-px bg-[#C9A96E] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center px-4">
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#C9A96E]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-[#1A1A1A] leading-relaxed mb-6 italic font-light">
                "{t.text}"
              </p>

              {/* Customer */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F5F0EB] flex items-center justify-center">
                  <span className="text-[#C9A96E] text-sm font-medium">{t.initial}</span>
                </div>
                <span className="text-sm text-[#8A8580]">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

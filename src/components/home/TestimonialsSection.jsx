import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/products';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function TestimonialsSection() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="velmora-section" style={{ backgroundColor: 'var(--velmora-cream)' }}>
      <div className="velmora-container">
        {/* Section Header */}
        <div 
          ref={ref}
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p 
            className="text-xs uppercase tracking-[0.3em] mb-3"
            style={{ color: 'var(--velmora-gold)' }}
          >
            What They Say
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
            Loved by Many
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`relative p-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                backgroundColor: 'var(--velmora-warm-white)'
              }}
            >
              {/* Quote Icon */}
              <Quote 
                size={32} 
                className="absolute top-6 right-6 opacity-20"
                style={{ color: 'var(--velmora-gold)' }}
              />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="var(--velmora-gold)"
                    stroke="var(--velmora-gold)"
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              
              {/* Quote Text */}
              <p 
                className="font-serif text-lg md:text-xl italic leading-relaxed mb-6"
                style={{ color: 'var(--velmora-espresso)' }}
              >
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium"
                  style={{ 
                    backgroundColor: 'var(--velmora-sand)',
                    color: 'var(--velmora-walnut)'
                  }}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-sm">{testimonial.name}</p>
                  <p className="text-xs" style={{ color: 'var(--velmora-taupe)' }}>
                    {testimonial.product}
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

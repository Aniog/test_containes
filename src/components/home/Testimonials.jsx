import React from 'react'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream-200/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-heading">What Our Customers Say</h2>
          <p className="section-subheading">Real reviews from real Velmora lovers</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-cream-50 p-8 border border-cream-300/50 relative group hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote mark */}
              <Quote
                size={28}
                className="text-gold-400/20 absolute top-6 right-6"
                strokeWidth={1}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < testimonial.rating ? 'fill-gold-400 text-gold-400' : 'text-cream-400'}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="font-sans text-sm text-slate-850/70 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="divider-hairline pt-4">
                <p className="font-sans text-xs uppercase tracking-wider text-slate-850 font-medium">
                  {testimonial.name}
                </p>
                <p className="font-sans text-[10px] text-slate-850/40 uppercase tracking-wider mt-0.5">
                  Verified Buyer
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

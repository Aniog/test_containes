import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-surface border-t border-divider">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-textDark">
            What They're Saying
          </h2>
          <p className="font-sans text-sm text-textMuted mt-3">Real words from real customers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-warmCream p-6 md:p-8 rounded-sm">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" strokeWidth={0} />
                ))}
              </div>
              {/* Quote */}
              <p className="font-serif text-lg md:text-xl text-textDark leading-relaxed italic">
                "{testimonial.text}"
              </p>
              {/* Name */}
              <p className="font-sans text-sm tracking-wide text-textMuted mt-4 font-medium">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

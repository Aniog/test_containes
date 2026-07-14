import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const Testimonials = () => {
  const [sectionRef, isVisible] = useScrollAnimation()

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-cream-50">
      <div className="max-w-container mx-auto px-6">
        <div className={`text-center mb-10 md:mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal tracking-tight">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white p-8 md:p-10 text-center shadow-sm hover:shadow-md transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-sans text-sm md:text-base text-stone-600 leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Name */}
              <p className="mt-5 font-serif text-sm font-medium tracking-wide text-charcoal">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

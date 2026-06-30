import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const Testimonials = () => {
  const [sectionRef, revealed] = useScrollReveal()

  return (
    <section className="py-20 md:py-28">
      <div
        ref={sectionRef}
        className={`max-w-7xl mx-auto px-4 md:px-8 transition-all duration-700 ease-out ${
          revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-2xl md:text-4xl font-light text-cream tracking-wide">
            What Our Clients Say
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="text-center px-4 py-8 border border-pearl/10 hover:border-gold/20 transition-colors duration-500"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm md:text-base text-cream/80 font-light leading-relaxed italic font-serif">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Name */}
              <p className="mt-6 text-xs tracking-[0.15em] uppercase text-warm-gray font-sans">
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

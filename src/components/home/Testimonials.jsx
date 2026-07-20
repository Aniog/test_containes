import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-stone-50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-super-wide uppercase text-gold-500 mb-3">
            What They Say
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal-800">
            Customer Love
          </h2>
          <div className="w-12 h-px bg-gold-500 mx-auto mt-5" />
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.id}
              className="bg-cream-50 border border-charcoal-100 p-8 md:p-10 text-center animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="text-gold-500 fill-gold-500"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="font-sans text-sm text-charcoal-600 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div>
                <p className="font-sans text-sm font-semibold text-charcoal-800">
                  {testimonial.name}
                </p>
                <p className="font-sans text-xs text-charcoal-400 mt-0.5">
                  on {testimonial.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

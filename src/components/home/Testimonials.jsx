import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold text-xs uppercase tracking-[0.2em] font-medium mb-3">Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl text-cream-900">Loved by Customers</h2>
          <div className="w-12 h-[1px] bg-gold/40 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center p-8 border border-cream-200 bg-white">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-lg text-cream-700 leading-relaxed mb-4">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              {/* Author */}
              <p className="text-xs uppercase tracking-wider text-cream-500 font-medium">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
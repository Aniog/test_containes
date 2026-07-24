import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-velmora-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold-600 text-xs tracking-widest uppercase mb-3 font-sans">Reviews</p>
          <h2 className="section-title mb-4">What They're Saying</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="text-charcoal-700 leading-relaxed mb-6 italic font-serif text-lg">
                "{testimonial.text}"
              </p>
              <p className="text-sm text-charcoal-500 font-sans">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

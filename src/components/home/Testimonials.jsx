import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wider uppercase text-charcoal-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-charcoal-500 max-w-xl mx-auto">
            Real stories from women who love their Velmora pieces
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 border border-cream-200 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-gold-500 text-gold-500"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-charcoal-600 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-cream-200 pt-4">
                <p className="font-medium text-charcoal-800">
                  {testimonial.name}
                </p>
                <p className="text-sm text-charcoal-400">
                  Purchased: {testimonial.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

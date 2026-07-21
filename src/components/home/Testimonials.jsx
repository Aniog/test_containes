import { Star } from 'lucide-react'
import { testimonials } from '../../data/products'

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-warmgray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-gold-600 text-sm tracking-extra-wide uppercase mb-2">
            What Our Customers Say
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900">
            Love Letters from Our Community
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-cream-50 p-6 lg:p-8 rounded-lg shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-gold-500 text-gold-500"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-warmgray-600 leading-relaxed mb-4">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div>
                <p className="font-medium text-charcoal-900">
                  {testimonial.name}
                </p>
                <p className="text-xs text-warmgray-500 mt-1">
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

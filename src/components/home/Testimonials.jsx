import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal">What They Say</h2>
          <p className="text-muted-fg text-sm mt-2">Real reviews from our community</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(review => (
            <div
              key={review.id}
              className="bg-white p-8 border border-border hover:shadow-md transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-charcoal text-sm leading-relaxed mb-6 italic">
                "{review.text}"
              </p>

              <p className="text-muted-fg text-xs font-medium tracking-wide uppercase">
                — {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

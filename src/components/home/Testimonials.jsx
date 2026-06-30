import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-velmora-surface p-8 md:p-10 shadow-sm text-center">
      <div className="flex items-center justify-center gap-0.5 mb-5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            className="fill-velmora-gold text-velmora-gold"
            strokeWidth={1.5}
          />
        ))}
      </div>
      <p className="font-serif text-xl md:text-2xl text-velmora-ink leading-snug mb-6">
        “{testimonial.text}”
      </p>
      <p className="font-sans text-xs uppercase tracking-[0.16em] text-velmora-ink-muted">
        {testimonial.name}
      </p>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-velmora-bg">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-velmora-ink-muted mb-3">
            From Our Customers
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-ink">
            Loved by Many
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

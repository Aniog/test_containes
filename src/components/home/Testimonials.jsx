import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-velmora-gold-dark mb-3">Reviews</p>
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-dark">Loved by Our Community</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-velmora-warm p-8 md:p-10 text-center flex flex-col items-center"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-velmora-gold text-velmora-gold" />
                ))}
              </div>
              <blockquote className="font-serif text-xl md:text-2xl text-velmora-dark leading-snug mb-6 italic">
                "{testimonial.text}"
              </blockquote>
              <p className="font-sans text-xs tracking-widest uppercase text-velmora-muted">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

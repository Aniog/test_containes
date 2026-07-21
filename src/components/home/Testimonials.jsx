import { Star } from 'lucide-react'
import { TESTIMONIALS } from '@/data/products'

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-1 text-gold" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5" fill="currentColor" strokeWidth={0} />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="text-center mb-12 md:mb-16">
          <p className="eyebrow mb-3">From the community</p>
          <h2
            id="testimonials-title"
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso"
            style={{ fontWeight: 400 }}
          >
            Worn, loved, <span className="italic">treasured</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.id}
              className="bg-cream p-8 md:p-10 flex flex-col"
            >
              <Stars count={t.rating} />
              <blockquote
                id={`testimonial-${t.id}-body`}
                className="mt-6 font-serif italic text-xl md:text-2xl text-espresso leading-snug flex-1"
                style={{ fontWeight: 400 }}
              >
                "{t.body}"
              </blockquote>
              <figcaption
                id={`testimonial-${t.id}-name`}
                className="mt-7 pt-5 border-t border-line"
              >
                <span className="text-xs uppercase tracking-widest-2 text-muted">
                  {t.name}
                </span>
                <span className="block text-[11px] text-muted/70 mt-0.5">Verified customer</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

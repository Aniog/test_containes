import { Star } from 'lucide-react'
import { testimonials } from './data'

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
      <div className="text-center mb-14">
        <p className="font-sans text-xs tracking-widest uppercase text-velmora-taupe mb-4">
          Kind Words
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal">
          What Our Customers Say
        </h2>
        <div className="mx-auto mt-4 w-12 hairline-divider" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-velmora-sand/50 p-8 md:p-10 flex flex-col items-center text-center"
          >
            <div className="flex items-center mb-4">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} size={14} className="fill-velmora-gold text-velmora-gold" />
              ))}
            </div>
            <p className="font-serif text-sm text-velmora-charcoal leading-relaxed italic mb-6">
              &ldquo;{t.text}&rdquo;
            </p>
            <p className="font-sans text-xs tracking-wider uppercase text-velmora-taupe">
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
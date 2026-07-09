import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-velmora-gold mb-3 font-sans">
            Loved by You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-dark">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-velmora-gold/40 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 md:p-8 border border-velmora-warm-light"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-velmora-gold fill-velmora-gold"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-velmora-slate leading-relaxed mb-6 font-sans">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Customer */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-velmora-gold/20 flex items-center justify-center">
                  <span className="text-xs font-serif text-velmora-gold font-medium">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <span className="text-xs font-sans text-velmora-taupe uppercase tracking-[0.1em]">
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
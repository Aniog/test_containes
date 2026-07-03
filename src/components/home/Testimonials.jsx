import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-brand-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-brand-text-dark font-light">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-brand-accent mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center px-4">
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-accent fill-brand-accent" />
                ))}
              </div>
              <p className="text-sm md:text-base text-brand-text-dark font-light leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.12em] text-brand-muted font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

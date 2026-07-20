import { Star } from 'lucide-react'
import { testimonials } from '@/lib/data'

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 border-t border-border bg-muted">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl text-primary">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="bg-cream p-8 text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-charcoal leading-relaxed italic mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-xs uppercase tracking-widest font-medium text-muted-foreground">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

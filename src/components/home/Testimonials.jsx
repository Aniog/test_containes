import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

const Testimonials = () => {
  return (
    <section className="py-16 lg:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl text-text">What They're Saying</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="bg-surface border border-border rounded-sm p-6 lg:p-8">
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-text-muted leading-relaxed italic">
                "{t.text}"
              </p>
              <p className="mt-4 text-xs font-medium uppercase tracking-product text-text">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

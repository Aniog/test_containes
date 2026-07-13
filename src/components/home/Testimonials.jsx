import { Star } from 'lucide-react'
import { testimonials } from '../../data/products'

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 border-t border-warm-gray bg-stone">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal">What They're Saying</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="text-center">
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-charcoal leading-relaxed italic font-serif text-lg">
                "{t.text}"
              </p>
              <p className="mt-4 text-xs uppercase tracking-ultra-wide text-taupe font-medium">
                {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

import { testimonials } from '@/data/products'
import StarRating from '@/components/ui/StarRating'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-widest uppercase text-gold font-medium mb-2">Reviews</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-ink">What They're Saying</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-cream p-8 md:p-10 relative">
              {/* Quote mark */}
              <span className="font-serif text-6xl text-gold/20 leading-none absolute top-4 left-6 select-none">"</span>

              {/* Stars */}
              <div className="mb-5">
                <StarRating rating={t.rating} size={13} />
              </div>

              <p className="font-serif text-lg md:text-xl font-light text-ink leading-relaxed italic">
                "{t.text}"
              </p>

              <div className="mt-6 pt-5 border-t border-linen flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-linen flex items-center justify-center">
                  <span className="font-serif text-sm text-ink-muted">{t.name[0]}</span>
                </div>
                <span className="font-sans text-xs tracking-widest uppercase font-medium text-ink-muted">
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

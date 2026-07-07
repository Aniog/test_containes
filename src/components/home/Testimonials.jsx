import { testimonials } from '@/data/products'
import StarRating from '@/components/ui/StarRating'

export default function Testimonials() {
  return (
    <section className="bg-velmora-ivory py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-3">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-text">
            What They're Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-velmora-cream px-8 py-10 border border-velmora-border hover:border-velmora-gold transition-colors duration-300"
            >
              <StarRating rating={t.rating} size="md" />
              <blockquote className="font-cormorant text-lg italic text-velmora-text leading-relaxed mt-5 mb-6">
                "{t.text}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-velmora-gold/20 flex items-center justify-center">
                  <span className="font-cormorant text-sm font-medium text-velmora-gold">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <span className="font-manrope text-xs uppercase tracking-widest text-velmora-muted">
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

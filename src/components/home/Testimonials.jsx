import { testimonials } from '@/data/products'
import StarRating from '@/components/ui/StarRating'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-xs uppercase tracking-widest text-champagne mb-3">What our customers say</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ivory font-light">Loved by thousands</h2>
          <div className="w-12 h-px bg-champagne mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="bg-obsidian border border-champagne/15 p-8 space-y-5 hover:border-champagne/30 transition-colors duration-300"
            >
              <StarRating rating={t.rating} />
              <blockquote className="font-serif text-lg text-ivory/85 italic leading-relaxed">
                "{t.text}"
              </blockquote>
              <div className="flex items-center gap-3 pt-2 border-t border-champagne/10">
                <div className="w-8 h-8 rounded-full bg-champagne/20 flex items-center justify-center">
                  <span className="font-serif text-sm text-champagne">{t.name[0]}</span>
                </div>
                <span className="font-sans text-xs uppercase tracking-wider text-ivory/50">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

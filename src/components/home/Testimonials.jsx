import RatingStars from '@/components/ui/RatingStars'
import { testimonials } from '@/data/editorial'

export default function Testimonials() {
  return (
    <section className="bg-velmora-cream px-5 py-16 text-velmora-obsidian md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="font-sansBody text-xs font-bold uppercase tracking-nav text-velmora-gold">Customer notes</p>
          <h2 className="mt-3 font-serifDisplay text-5xl leading-none md:text-7xl">Quietly adored</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.name} className="rounded-[1.75rem] border border-velmora-espresso/10 bg-velmora-silk p-7 text-velmora-obsidian shadow-editorial">
              <RatingStars label={`Five star review from ${review.name}`} />
              <p className="mt-6 font-serifDisplay text-2xl leading-8 text-velmora-obsidian">“{review.quote}”</p>
              <p className="mt-6 font-sansBody text-xs font-bold uppercase tracking-nav text-velmora-muted">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

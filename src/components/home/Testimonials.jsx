import Stars from '@/components/ui/Stars'
import Reveal from '@/components/ui/Reveal'

const REVIEWS = [
  {
    quote:
      'The Golden Sphere Huggies have not left my ears since they arrived. They look three times the price.',
    name: 'Camille R.',
  },
  {
    quote:
      'Bought the Royal Heirloom Set for my sister’s birthday — the gift box alone made her gasp.',
    name: 'Priya S.',
  },
  {
    quote:
      'Finally, gold jewelry that survives my sensitive skin and my toddler. Quiet luxury, exactly as promised.',
    name: 'Morgan T.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="velmora-container">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow">Kind Words</p>
            <h2 className="mt-4 font-display text-4xl font-medium text-velmora-ink md:text-5xl">
              Treasured by Thousands
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-8">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.name} delay={i * 100}>
              <blockquote className="flex h-full flex-col border border-velmora-line bg-velmora-surface/50 p-8 transition-colors duration-300 hover:border-velmora-gold/40">
                <Stars rating={5} />
                <p className="mt-5 flex-1 font-display text-xl italic leading-relaxed text-velmora-ink/90">
                  “{review.quote}”
                </p>
                <footer className="hairline-t mt-7 pt-5">
                  <span className="text-[11px] font-bold uppercase tracking-[0.26em] text-velmora-gold">
                    {review.name}
                  </span>
                  <span className="mt-1 block text-[10px] uppercase tracking-[0.2em] text-velmora-muted">
                    Verified Buyer
                  </span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

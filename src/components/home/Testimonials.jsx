import Stars from '@/components/ui/Stars'
import { Reveal } from '@/hooks/useReveal'

const REVIEWS = [
  {
    quote: 'The huggies haven\u2019t left my ears since they arrived. They look three times the price.',
    name: 'Amelia R.',
    piece: 'Golden Sphere Huggies',
  },
  {
    quote: 'Bought the heirloom set for my sister\u2019s wedding — the gift box alone made her cry.',
    name: 'Priya S.',
    piece: 'Royal Heirloom Set',
  },
  {
    quote: 'Finally, gold jewelry that doesn\u2019t irritate my skin. Quiet, elegant, perfect.',
    name: 'Claire M.',
    piece: 'Amber Lace Earrings',
  },
]

export default function Testimonials() {
  return (
    <section className="border-y border-line bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="flex flex-col items-center text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-deep">Kind Words</p>
          <h2 className="mt-4 font-serif text-3xl font-medium tracking-wide text-ink md:text-5xl">
            Loved &amp; Lived In
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.name} delay={i * 100}>
              <blockquote className="flex h-full flex-col bg-cream p-8 shadow-soft transition-shadow duration-500 hover:shadow-soft-lg md:p-10">
                <Stars rating={5} />
                <p className="mt-6 flex-1 font-serif text-xl italic leading-relaxed text-ink">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <footer className="mt-8 border-t border-line pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink">{review.name}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-taupe">
                    on {review.piece}
                  </p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

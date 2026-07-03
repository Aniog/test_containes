import { Link } from 'react-router-dom'
import { useStrkImages } from '@/lib/useStrkImages'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function About() {
  const ref = useStrkImages([])

  return (
    <div ref={ref} className="bg-cream pt-24 md:pt-28">
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden bg-ink">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-velmora-2b8e"
          data-strk-bg="[about-hero-sub] [about-hero-title] gold jewelry atelier editorial warm"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-cream/80">Est. 2021</p>
          <h1
            id="about-hero-title"
            className="mt-4 font-serif text-5xl text-cream md:text-6xl"
          >
            Our Story
          </h1>
          <p
            id="about-hero-sub"
            className="mt-4 max-w-xl text-sm text-cream/85"
          >
            Quiet luxury, honestly made.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-[11px] uppercase tracking-widest2 text-gold-deep">The Velmora Promise</p>
        <h2 className="mt-4 font-serif text-4xl text-ink md:text-5xl">
          Jewelry made to live in, not lock away
        </h2>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-ink-soft">
          <p>
            Velmora began with a simple frustration: beautiful jewelry was either
            impossibly expensive or quickly lost its shine. We set out to make
            demi-fine pieces in 18K gold plate that feel considered, wear beautifully,
            and sit at an honest price.
          </p>
          <p>
            Every piece is designed in our studio and finished by hand, with
            hypoallergenic bases and materials chosen to last. We believe luxury
            should be quiet — never loud, never disposable.
          </p>
          <p>
            From the first sketch to the signature gift box, each step is an act of
            care. That is the Velmora standard, and it is non-negotiable.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { t: '18K Gold Plate', d: 'Over a sterling-silver base, for warmth that lasts.' },
            { t: 'Hypoallergenic', d: 'Kind to sensitive skin, safe for daily wear.' },
            { t: 'Hand Finished', d: 'Each piece polished and checked by hand.' },
          ].map((f) => (
            <div key={f.t} className="border border-sand p-6">
              <h3 className="font-serif text-xl text-ink">{f.t}</h3>
              <p className="mt-2 text-sm text-muted">{f.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center bg-gold px-9 py-4 text-xs uppercase tracking-wide2 text-cream transition-colors hover:bg-gold-deep"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  )
}

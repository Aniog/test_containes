import { Link } from 'react-router-dom'
import { useStrkImages } from '@/lib/useStrkImages'

export default function About() {
  const ref = useStrkImages([])

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] bg-ink overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-4d1f7b"
          data-strk-bg="[about-hero-subtitle] [about-hero-title] gold jewelry atelier warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-14">
          <p className="text-xs uppercase tracking-widest2 text-champagne mb-3">
            Our Story
          </p>
          <h1
            id="about-hero-title"
            className="font-serif text-4xl md:text-6xl text-cream leading-tight"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="about-hero-subtitle"
            className="mt-4 text-stone max-w-xl"
          >
            A studio built on the belief that fine jewelry belongs to everyday life.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <p className="text-xs uppercase tracking-widest2 text-champagne mb-4">
            The Velmora Philosophy
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight">
            Quiet luxury, made to last
          </h2>
          <div className="mt-6 space-y-5 text-mocha leading-relaxed">
            <p>
              Velmora began with a simple belief: fine jewelry shouldn’t demand
              a special occasion. Each piece is hand-finished in 18K gold plate
              over a hypoallergenic base, designed to be worn, layered, and
              lived in — then passed on.
            </p>
            <p>
              From the first sketch to the final polish, we obsess over the
              details you feel but rarely see: the weight of a huggie, the catch
              of a clasp, the warmth of the gold. We work in small runs, with
              materials chosen for their longevity and their kindness to skin.
            </p>
            <p>
              Our promise is simple — accessible luxury that doesn’t compromise
              on craft. Pieces you reach for every morning, and reach for again
              years from now.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 text-center border-y border-sand py-10">
            {[
              { n: '18K', l: 'Gold Plated' },
              { n: '30', l: 'Day Returns' },
              { n: '100%', l: 'Hypoallergenic' },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-serif text-3xl md:text-4xl text-champagne">
                  {s.n}
                </div>
                <div className="mt-2 text-xs uppercase tracking-widest2 text-taupe">
                  {s.l}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/shop"
              className="inline-block bg-champagne text-ink text-xs uppercase tracking-widest2 px-10 py-4 hover:bg-champagne-dark transition-colors"
            >
              Explore the Collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

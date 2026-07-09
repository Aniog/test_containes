import { Link } from 'react-router-dom'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function About() {
  const ref = useStrkImages([])

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <div
          data-strk-bg-id="about-hero-bg-2d9f1a"
          data-strk-bg="[about-hero-text] gold jewelry atelier craftsmanship warm"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-espresso/45" />
        <div className="relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-12">
          <p className="text-ivory/80 text-xs uppercase tracking-[0.3em] mb-3">Our Story</p>
          <h1 className="font-serif text-ivory text-5xl md:text-7xl font-light">
            Made to be lived in
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <p id="about-hero-text" className="sr-only">
            Velmora fine jewelry atelier crafting demi-fine gold pieces by hand
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight">
            We believe beautiful gold should not be reserved for special occasions.
          </h2>
          <p className="text-stone text-base md:text-lg mt-6 leading-relaxed">
            Velmora was founded on a simple idea: demi-fine jewelry that wears like a
            treasure and lives like a favourite. Every piece is 18K gold-plated,
            hypoallergenic, and finished by hand — honestly priced so you can reach
            for it every morning without a second thought.
          </p>
          <p className="text-stone text-base md:text-lg mt-4 leading-relaxed">
            From our studio to your jewelry box, we design with longevity in mind:
            secure closures, tarnish-resistant finishes, and forms that outlast trends.
          </p>
          <div className="mt-10">
            <Link
              to="/shop"
              className="inline-block bg-gold text-ivory text-xs uppercase tracking-[0.2em] px-10 py-4 hover:bg-gold-deep transition-colors duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            { t: '18K Gold Plated', d: 'A thick, lasting layer of 18K gold over a durable brass core.' },
            { t: 'Hypoallergenic', d: 'Nickel-free and gentle on sensitive skin, made for everyday wear.' },
            { t: 'Finished by Hand', d: 'Each piece is polished and inspected by hand before it reaches you.' },
          ].map((f) => (
            <div key={f.t}>
              <h3 className="font-serif text-2xl text-ink mb-3">{f.t}</h3>
              <p className="text-stone text-sm leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { useStrkImages } from '@/components/StrkImage'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function About() {
  const ref = useStrkImages([])

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden bg-ink">
        <img
          data-strk-img-id="about-hero-velmora-3a7b"
          data-strk-img="[about-hero-subtitle] [about-hero-title] gold jewelry atelier craftsmanship warm"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1600"
          src={PLACEHOLDER}
          alt="Velmora atelier"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-ink/20" />
        <div className="relative h-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-end pb-14">
          <p className="text-[11px] uppercase tracking-[0.3em] text-champagne mb-4">
            Est. for the Everyday
          </p>
          <h1
            id="about-hero-title"
            className="font-serif text-ivory text-5xl md:text-7xl font-light leading-tight"
          >
            Our Story
          </h1>
          <p
            id="about-hero-subtitle"
            className="mt-5 text-ivory/85 max-w-xl leading-relaxed"
          >
            Fine jewelry, made for living in — not locked away.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold mb-5">The Velmora Philosophy</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight mb-8">
            Quiet luxury, made personal.
          </h2>
          <div className="space-y-6 text-ink-soft leading-relaxed text-[17px]">
            <p>
              Velmora began with a simple belief: fine jewelry shouldn't wait for special
              occasions. We design demi-fine pieces in 18K gold plate that are
              hypoallergenic, durable, and made to be worn — and lived in — every single day.
            </p>
            <p>
              Each piece is hand-finished by skilled artisans, blending traditional
              techniques with a modern, editorial sensibility. The result is jewelry that
              feels considered, warm, and quietly luxurious — never loud, never disposable.
            </p>
            <p>
              We sell directly to you, which means exceptional materials and craft at an
              accessible price. No markups, no middlemen — just pieces crafted to be treasured.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 text-center border-y border-sand py-10">
            {[
              { n: '18K', l: 'Gold Plated' },
              { n: '30-Day', l: 'Easy Returns' },
              { n: '100%', l: 'Hypoallergenic' },
            ].map((stat) => (
              <div key={stat.l}>
                <p className="font-serif text-3xl md:text-4xl text-gold">{stat.n}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-ink-soft mt-2">
                  {stat.l}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/shop"
              className="inline-block bg-gold text-ivory text-[11px] uppercase tracking-[0.25em] px-9 py-4 hover:bg-gold-deep transition-colors duration-300"
            >
              Explore the Collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

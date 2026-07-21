import { Link } from 'react-router-dom'
import { useImageLoader } from '@/lib/useImageLoader'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function About() {
  const ref = useImageLoader([])

  return (
    <div ref={ref} className="bg-cream pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden bg-ink">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-bg-velmora-2b8e"
          data-strk-bg="[about-lead] [about-title] gold jewelry atelier warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-[11px] uppercase tracking-[0.3em] text-cream/80 mb-4">
            Est. for the everyday
          </p>
          <h1
            id="about-title"
            className="font-serif text-cream text-5xl md:text-7xl"
          >
            Our Story
          </h1>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-10 text-center">
          <p
            id="about-lead"
            className="font-serif text-2xl md:text-3xl text-ink leading-relaxed mb-8"
          >
            We believe fine jewelry should not wait for an occasion. It should be
            warm enough for a Tuesday, considered enough for a milestone.
          </p>
          <div className="text-stone leading-relaxed space-y-5 text-left">
            <p>
              Velmora was founded on a simple frustration: demi-fine jewelry that
              looked beautiful for a week, then tarnished, irritated, or broke. We
              set out to make pieces with the warmth and weight of fine jewelry,
              without the markup or the fragility.
            </p>
            <p>
              Every piece is hand-finished in 18K gold over sterling silver,
              hypoallergenic by design, and tested for real life — showers,
              sleep, sweat, and the occasional lost earring back.
            </p>
            <p>
              We sell direct to you, which means no retail markups, no middlemen,
              and a relationship that does not end at checkout. Every order ships
              free, returns within 30 days, and comes with our promise that it
              will look as good in a year as it does the day it arrives.
            </p>
          </div>
          <div className="mt-12">
            <Link
              to="/shop"
              className="inline-block bg-ink text-cream text-[11px] uppercase tracking-[0.2em] px-10 py-4 hover:bg-gold-deep transition-colors duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sand py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: 'Hand-Finished',
              body: 'Every piece is finished by hand in 18K gold over sterling silver, inspected before it reaches you.',
            },
            {
              title: 'Hypoallergenic',
              body: 'Nickel-free and lead-free, tested on sensitive skin. Comfort you can wear around the clock.',
            },
            {
              title: 'Made to Last',
              body: 'Built for daily wear with secure closures and a tarnish-resistant finish that holds its warmth.',
            },
          ].map((v) => (
            <div key={v.title} className="text-center">
              <h3 className="font-serif text-2xl text-ink mb-3">{v.title}</h3>
              <p className="text-sm text-stone leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

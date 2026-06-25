import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const timeline = [
  {
    year: '1996',
    title: 'A workshop is founded',
    body: 'Three engineers leave a large bender manufacturer to start a small studio in Brescia, with a stubborn idea: folding machines could be beautiful to use.',
  },
  {
    year: '2004',
    title: 'The first double folder',
    body: 'Our AF-1000D becomes the first true double folding machine in its class, eliminating sheet flipping for fabricators across Europe.',
  },
  {
    year: '2015',
    title: 'CNC, made human',
    body: 'We redesign our control panel from scratch with operators, not engineers. Adoption time drops to under an hour.',
  },
  {
    year: '2024',
    title: 'Serving 42 countries',
    body: 'ARTITECT machines now fold sheet metal in workshops from Oslo to Auckland, supported by a global service network.',
  },
]

const values = [
  {
    title: 'Make it elegant',
    body: 'A folding machine lives next to your team for decades. It should be beautiful to look at, quiet to work next to, and obvious to operate.',
  },
  {
    title: 'Engineer for honesty',
    body: 'We publish real specifications, not optimistic ones. Every machine ships with a printed factory test report.',
  },
  {
    title: 'Respect the operator',
    body: 'The shop floor is the most important room in our company. Every interface decision is reviewed by a working fabricator.',
  },
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative isolate bg-graphite-950 text-bone-50 overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-50"
          data-strk-bg-id="about-hero-bg-9a3c01"
          data-strk-bg="[about-hero-subtitle] [about-hero-title] precision metal workshop craftsmanship"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-graphite-950/60 via-graphite-950/85 to-graphite-950" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32">
          <p className="eyebrow eyebrow-light">Our Story</p>
          <h1
            id="about-hero-title"
            className="mt-4 font-serif font-light text-5xl md:text-7xl leading-[1.05] max-w-4xl"
          >
            Three decades<br />folding metal, refining the craft.
          </h1>
          <p
            id="about-hero-subtitle"
            className="mt-8 max-w-2xl text-steel-300 leading-relaxed"
          >
            ARTITECT was founded by engineers who believed industrial machinery
            deserved the same care as fine instruments. We still believe it.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-bone-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid gap-14 lg:grid-cols-5 items-start">
          <div className="lg:col-span-2">
            <p className="eyebrow">Manifesto</p>
            <h2 className="mt-4 font-serif font-light text-4xl md:text-5xl text-graphite-900 leading-tight">
              We build machines we would want next to us.
            </h2>
            <div className="hairline-brass mt-6" />
          </div>
          <div className="lg:col-span-3 space-y-6 text-graphite-900 leading-relaxed">
            <p>
              The metal folder is one of the quietest heroes of the modern
              workshop. It shapes the panels of buildings, the housings of
              machinery, and the smallest brackets that hold our world together.
              And yet for decades, it was treated as a commodity.
            </p>
            <p>
              We started ARTITECT to give folding machines the dignity they
              deserve. That meant rethinking everything — the frame, the beam,
              the control panel, the way the operator stands, even the sound a
              fold makes — until the entire machine felt right.
            </p>
            <p>
              Three decades later, our convictions have only sharpened.
              Engineering should feel honest. Operation should feel effortless.
              And a workshop should be a place people are proud to work.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-bone-100 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="eyebrow">What we believe</p>
            <h2 className="mt-4 font-serif font-light text-4xl md:text-5xl text-graphite-900 leading-tight">
              Three principles guide every design choice.
            </h2>
            <div className="hairline-brass mt-6" />
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {values.map((value, idx) => (
              <div key={value.title} className="bg-bone-50 border border-bone-200 p-8 md:p-10">
                <span className="font-serif text-3xl text-brass-500">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-serif text-2xl text-graphite-900">
                  {value.title}
                </h3>
                <p className="mt-4 text-steel-500 leading-relaxed">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-bone-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="eyebrow">Milestones</p>
            <h2 className="mt-4 font-serif font-light text-4xl md:text-5xl text-graphite-900 leading-tight">
              A quiet, steady arc of refinement.
            </h2>
            <div className="hairline-brass mt-6" />
          </div>

          <ol className="mt-14 relative border-l border-bone-200 ml-2">
            {timeline.map((item) => (
              <li key={item.year} className="pl-10 pb-12 last:pb-0 relative">
                <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-brass-500" />
                <div className="font-serif text-3xl text-brass-600">{item.year}</div>
                <h3 className="mt-2 font-serif text-2xl text-graphite-900">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-2xl text-steel-500 leading-relaxed">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-graphite-900 text-bone-50 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="eyebrow eyebrow-light">Visit Us</p>
          <h2 className="mt-4 font-serif font-light text-4xl md:text-5xl leading-tight">
            Come fold a piece of metal with us.
          </h2>
          <p className="mt-6 text-steel-300 leading-relaxed">
            Our Brescia workshop is open to fabricators by appointment. Bring a
            sample, and leave with a folded prototype the same afternoon.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center bg-brass-500 hover:bg-brass-600 text-graphite-950 px-8 py-4 text-xs uppercase tracking-[0.22em] font-medium transition-colors"
          >
            Arrange a Visit
          </Link>
        </div>
      </section>
    </div>
  )
}

import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const TIMELINE = [
  ['1987', 'A small atelier opens outside Manchester with a single double folder.'],
  ['1996', 'The Atelier line debuts. Hand-scraped beams become a signature.'],
  ['2008', 'Studio S1 launches — folding for ateliers and architectural studios.'],
  ['2017', 'Forge F3 introduces CNC-assisted folding for production lines.'],
  ['2024', 'Artitect ships to its 46th country, still hand-finishing every machine.'],
]

const VALUES = [
  {
    title: 'Slow craft',
    desc: 'We make fewer machines, more carefully. Every folder spends six weeks on the bench before shipping.',
  },
  {
    title: 'Honest engineering',
    desc: 'No hidden plastics, no painted-over welds. What you see and what you feel is what you bought.',
  },
  {
    title: 'A quiet workshop',
    desc: 'Belt drives, sealed gearboxes, balanced beams. Folding should feel composed, never aggressive.',
  },
  {
    title: 'Built to be repaired',
    desc: 'Every wear part is stocked, documented, and replaceable for the life of the machine.',
  },
]

export default function About() {
  const containerRef = useRef(null)
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-graphite text-paper overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          data-strk-bg-id="about-hero-bg-bd92e4"
          data-strk-bg="[about-hero-title] [about-hero-desc]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-graphite/50 to-graphite" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <p className="text-xs tracking-[0.35em] uppercase text-ember-soft mb-5">
            Our Story
          </p>
          <h1 id="about-hero-title" className="font-display font-light text-paper text-5xl md:text-6xl leading-[1.05] mb-6 max-w-3xl">
            A workshop, <span className="italic text-ember-soft">not a factory.</span>
          </h1>
          <p id="about-hero-desc" className="text-paper/75 text-lg max-w-2xl leading-relaxed">
            For thirty-eight years, Artitect Machinery has built folding machines
            the slow way — by hand, in small numbers, with the patience of an
            architect drafting a single line.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-paper py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="aspect-[3/4] bg-mist overflow-hidden sticky top-32">
              <img
                alt="Artitect founders at work"
                data-strk-img-id="about-story-img-4e2b9c"
                data-strk-img="[about-story-p1] [about-hero-title]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xs tracking-[0.35em] uppercase text-ember mb-5">Foundations</p>
            <h2 className="font-display font-light text-ink text-4xl md:text-5xl leading-tight mb-8">
              Folding, treated like <span className="italic text-ember">a discipline.</span>
            </h2>
            <p id="about-story-p1" className="text-steel text-lg leading-relaxed mb-6">
              Artitect was founded in 1987 by an architect and a metalsmith who
              wanted a folding machine that behaved like a fine instrument.
              Their first double folder, built in a converted barn, still folds
              panels for a Manchester roofing firm today.
            </p>
            <p className="text-steel leading-relaxed mb-6">
              We grew slowly, by referral. Architects and bespoke fabricators
              would walk into the workshop and order a machine after watching
              one fold a panel. Almost forty years later, that is still how
              most of our customers find us.
            </p>
            <p className="text-steel leading-relaxed">
              The philosophy has not changed. A folding machine should be quiet
              under your hand, exact to the eye, and present in the workshop
              for as long as you need it. We build to that brief, and to no
              other.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-mist py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs tracking-[0.35em] uppercase text-ember mb-5">What we believe</p>
            <h2 className="font-display font-light text-ink text-4xl md:text-5xl leading-tight">
              Four principles, <span className="italic text-ember">held closely.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className="bg-paper border border-ink/10 p-8 md:p-10 hover:border-ember/40 transition-colors duration-500"
              >
                <div className="font-display text-ember text-3xl mb-4">
                  0{i + 1}
                </div>
                <h3 className="font-display text-2xl text-ink mb-3">{v.title}</h3>
                <p className="text-steel leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-paper py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.35em] uppercase text-ember mb-5">Milestones</p>
            <h2 className="font-display font-light text-ink text-4xl md:text-5xl leading-tight">
              Thirty-eight years of <span className="italic text-ember">careful work.</span>
            </h2>
          </div>
          <ol className="relative border-l border-ink/15 ml-4 space-y-12">
            {TIMELINE.map(([year, text]) => (
              <li key={year} className="pl-8 relative">
                <span className="absolute -left-[7px] top-2 w-3 h-3 bg-ember rounded-full ring-4 ring-paper" />
                <div className="font-display text-ember text-3xl mb-2">{year}</div>
                <p className="text-ink/85 text-lg leading-relaxed max-w-2xl">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  )
}

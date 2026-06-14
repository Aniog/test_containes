import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const INDUSTRIES = [
  {
    id: 'hvac',
    name: 'HVAC & Ventilation',
    body: 'Ductwork, plenums, and architectural grilles folded in long, continuous runs with repeatable angles.',
    imgId: 'industry-hvac-9a01',
    titleId: 'industry-hvac-title',
    descId: 'industry-hvac-desc',
  },
  {
    id: 'automotive',
    name: 'Automotive & EV',
    body: 'Battery enclosures, chassis brackets, and body panels that demand tight tolerances and clean edges.',
    imgId: 'industry-automotive-9a02',
    titleId: 'industry-automotive-title',
    descId: 'industry-automotive-desc',
  },
  {
    id: 'aerospace',
    name: 'Aerospace & Defense',
    body: 'Light-alloy and stainless components for tier-1 suppliers, traceable to a fully documented process.',
    imgId: 'industry-aerospace-9a03',
    titleId: 'industry-aerospace-title',
    descId: 'industry-aerospace-desc',
  },
  {
    id: 'electronics',
    name: 'Electronics Enclosures',
    body: 'Server racks, control panels, and 19-inch cabinets folded in batch sizes from ten to ten thousand.',
    imgId: 'industry-electronics-9a04',
    titleId: 'industry-electronics-title',
    descId: 'industry-electronics-desc',
  },
  {
    id: 'architecture',
    name: 'Architecture & Cladding',
    body: 'Curtain wall panels, decorative screens, and bespoke facade elements with mirrored finish quality.',
    imgId: 'industry-architecture-9a05',
    titleId: 'industry-architecture-title',
    descId: 'industry-architecture-desc',
  },
  {
    id: 'furniture',
    name: 'Furniture & Lighting',
    body: 'Designer-grade steel furniture, lighting frames, and joinery where every fold is a design statement.',
    imgId: 'industry-furniture-9a06',
    titleId: 'industry-furniture-title',
    descId: 'industry-furniture-desc',
  },
]

const Industries = () => {
  return (
    <section id="industries" className="bg-bg py-20 md:py-28">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow">Industries Served</p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-ink leading-[1.1] tracking-tight text-balance">
              From ductwork to drone bays — we fold for every industry.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[15px] md:text-base text-muted leading-relaxed">
              A few of the sectors where ARTITECT machines are already on
              the shop floor. If your material, tolerance, or finish isn't
              listed, our applications team will happily design a custom
              tooling package.
            </p>
          </div>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {INDUSTRIES.map((ind) => (
            <article
              key={ind.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  alt={ind.name}
                  data-strk-img-id={ind.imgId}
                  data-strk-img={`[${ind.descId}] [${ind.titleId}] [industries-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/0" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-full bg-bg/90 px-3 py-1 text-[11px] font-medium uppercase tracking-eyebrow text-ink-soft backdrop-blur">
                    0{INDUSTRIES.indexOf(ind) + 1}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <h3
                  id={ind.titleId}
                  className="font-display text-xl md:text-2xl text-ink"
                >
                  {ind.name}
                </h3>
                <p
                  id={ind.descId}
                  className="mt-3 text-[15px] text-muted leading-relaxed"
                >
                  {ind.body}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent-strong transition-colors"
                >
                  Talk to a specialist
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries

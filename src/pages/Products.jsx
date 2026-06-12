import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Eyebrow from '@/components/Eyebrow'

const products = [
  {
    id: 'a-series',
    number: '01',
    name: 'A-Series Double Folding Machine',
    tagline: 'For architectural fabricators.',
    titleId: 'product-a-series-title',
    descId: 'product-a-series-desc',
    imgId: 'product-a-series-img-4f2',
    description:
      'The A-Series introduces twin upper and lower folding beams, allowing fabricators to bend in both directions without flipping the workpiece. Ideal for cladding, balustrades, and any panel work where every line must read as one.',
    specs: [
      { label: 'Working Length', value: '2,000 – 6,000 mm' },
      { label: 'Sheet Capacity', value: 'Up to 2.5 mm steel' },
      { label: 'Bend Tolerance', value: '± 0.1 mm' },
      { label: 'Drive', value: 'Servo-electric, double beam' },
    ],
    features: [
      'Up and down folding without re-positioning',
      'Programmable bend sequences (up to 99)',
      'Quick-change tooling system',
      'Whisper-quiet servo drive',
    ],
    align: 'right',
  },
  {
    id: 'm-series',
    number: '02',
    name: 'M-Series Sheet Metal Folder',
    tagline: 'A workshop staple.',
    titleId: 'product-m-series-title',
    descId: 'product-m-series-desc',
    imgId: 'product-m-series-img-7g9',
    description:
      'The M-Series is the manual sheet metal folder our customers inherit, restore, and pass on. A heavy cast iron frame and hand-fitted bearings deliver the same fold, today and three decades from now. The kind of machine you tune once, and trust forever.',
    specs: [
      { label: 'Working Length', value: '1,250 – 3,000 mm' },
      { label: 'Sheet Capacity', value: 'Up to 1.5 mm steel' },
      { label: 'Bend Tolerance', value: '± 0.2 mm' },
      { label: 'Drive', value: 'Manual, counterweighted' },
    ],
    features: [
      'Hand-scraped folding beam',
      'Cast iron frame with bronze bearings',
      'No electronics — zero downtime',
      'Lifetime spare parts availability',
    ],
    align: 'left',
  },
  {
    id: 'cnc-series',
    number: '03',
    name: 'CNC Metal Folding Machine',
    tagline: 'Precision, programmed.',
    titleId: 'product-cnc-series-title',
    descId: 'product-cnc-series-desc',
    imgId: 'product-cnc-series-img-1k3',
    description:
      'The CNC-Series brings programmable accuracy to the folding floor without sacrificing the tactile feel of a precision machine. Servo-driven beams, repeatable to within 0.1 mm, controlled through an interface designed by craftsmen — for craftsmen.',
    specs: [
      { label: 'Working Length', value: '3,000 – 8,000 mm' },
      { label: 'Sheet Capacity', value: 'Up to 4 mm steel' },
      { label: 'Bend Tolerance', value: '± 0.1 mm' },
      { label: 'Drive', value: 'Full servo CNC, 7-axis' },
    ],
    features: [
      '15" tactile control panel',
      '500-program memory with cloud backup',
      'Auto-compensation for material spring-back',
      'Remote diagnostics by ARTITECT engineers',
    ],
    align: 'right',
  },
]

const ProductsPage = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-ink text-bone py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Eyebrow tone="light" className="mb-6">
            The Collection
          </Eyebrow>
          <h1 className="font-serif font-light text-5xl md:text-7xl leading-[1.05] max-w-4xl">
            Three machines, each a study in
            <span className="italic text-brass-soft"> measured force.</span>
          </h1>
          <p className="text-bone/70 max-w-2xl mt-8 leading-relaxed text-lg font-light">
            From the elemental M-Series to the servo-driven CNC, every ARTITECT folder
            shares the same DNA: cast iron, hand-scraped beams, and a refusal to compromise.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="bg-bone py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-24 md:space-y-32">
          {products.map((p) => (
            <article
              key={p.id}
              id={p.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center scroll-mt-24"
            >
              <div
                className={`lg:col-span-7 ${
                  p.align === 'left' ? 'lg:order-2' : ''
                }`}
              >
                <div className="aspect-[4/3] overflow-hidden bg-mist">
                  <img
                    alt={p.name}
                    data-strk-img-id={p.imgId}
                    data-strk-img={`[${p.descId}] [${p.titleId}] industrial sheet metal folding machine`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="1000"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div
                className={`lg:col-span-5 ${
                  p.align === 'left' ? 'lg:order-1' : ''
                }`}
              >
                <div className="font-serif text-brass text-3xl mb-4">{p.number}</div>
                <Eyebrow className="mb-4">{p.tagline}</Eyebrow>
                <h2
                  id={p.titleId}
                  className="font-serif font-light text-3xl md:text-4xl text-ink leading-tight mb-6"
                >
                  {p.name}
                </h2>
                <p id={p.descId} className="text-steel leading-relaxed mb-8">
                  {p.description}
                </p>

                <dl className="grid grid-cols-2 gap-px bg-mist border border-mist mb-8">
                  {p.specs.map((s) => (
                    <div key={s.label} className="bg-bone p-5">
                      <dt className="text-[10px] tracking-[0.25em] uppercase text-steel mb-1">
                        {s.label}
                      </dt>
                      <dd className="font-serif text-lg text-ink">{s.value}</dd>
                    </div>
                  ))}
                </dl>

                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-ink">
                      <Check size={16} className="text-brass mt-1 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-ink text-bone px-7 py-3 text-xs tracking-[0.25em] uppercase hover:bg-brass hover:text-ink transition-colors"
                >
                  Request Specifications
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-ivory py-20 md:py-24 border-t border-mist">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-serif font-light text-3xl md:text-5xl text-ink leading-tight mb-6">
            Need a custom configuration?
          </h2>
          <p className="text-steel max-w-xl mx-auto leading-relaxed mb-8">
            Bespoke working lengths, specialty tooling, and integration with existing
            production lines — our engineering team is built for the unusual brief.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-brass text-ink px-8 py-4 text-sm tracking-[0.25em] uppercase hover:bg-ink hover:text-bone transition-colors"
          >
            Talk to Engineering
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ProductsPage

import { ArrowUpRight } from 'lucide-react'

const products = [
  {
    id: 'af-3200',
    eyebrow: 'Double Folder · Flagship',
    title: 'AF-3200 Double Folding Machine',
    desc: 'A CNC dual-beam double folder built for production lines that bend complex profiles in a single pass — up, down, and back again without flipping the sheet.',
    specs: ['3,200 mm fold length', '2.5 mm mild steel', '180° / 180° dual axis'],
  },
  {
    id: 'mf-2500',
    eyebrow: 'Sheet Metal Folder',
    title: 'MF-2500 Precision Folder',
    desc: 'The workshop favorite. A precision sheet metal folder for HVAC, architectural cladding, and bespoke fabrication where edge quality matters.',
    specs: ['2,500 mm fold length', '2.0 mm mild steel', 'Manual back-gauge stops'],
  },
  {
    id: 'tf-4000',
    eyebrow: 'Metal Folding Machine',
    title: 'TF-4000 Long-Bed Folder',
    desc: 'A long-bed metal folding machine engineered for facade panels, roofing trims and oversized sheet work. Stable. Quiet. Repeatable.',
    specs: ['4,000 mm fold length', '1.5 mm mild steel', 'Servo back-gauge'],
  },
  {
    id: 'cf-1600',
    eyebrow: 'Compact · Metal Folder',
    title: 'CF-1600 Studio Metal Folder',
    desc: 'A compact metal folder machine designed for prototyping studios, small fabrication shops, and finishing departments. Footprint of a workbench.',
    specs: ['1,600 mm fold length', '1.2 mm mild steel', 'Pedal-operated clamp'],
  },
]

export default function Products() {
  return (
    <section id="products" className="bg-stone-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <p
              id="products-eyebrow"
              className="text-xs uppercase tracking-[0.25em] font-medium text-amber-600 mb-4"
            >
              The Machines
            </p>
            <h2
              id="products-title"
              className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-neutral-900 leading-[1.05]"
            >
              A folder for every workshop.
            </h2>
            <p
              id="products-subtitle"
              className="mt-5 text-lg text-neutral-600 leading-relaxed"
            >
              From compact studio folders to long-bed double folding systems,
              every ARTITECT machine is built on the same uncompromising frame
              and finished by hand.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-amber-600 transition-colors self-start md:self-end"
          >
            Request full catalog
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {products.map((p) => (
            <article
              key={p.id}
              className="group rounded-2xl border border-neutral-200 bg-white overflow-hidden hover:border-neutral-300 transition-colors"
            >
              <div className="aspect-[4/3] bg-neutral-100 overflow-hidden">
                <img
                  alt={p.title}
                  data-strk-img-id={`product-${p.id}-img`}
                  data-strk-img={`[product-${p.id}-desc] [product-${p.id}-title] [product-${p.id}-eyebrow] [products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7 md:p-8">
                <p
                  id={`product-${p.id}-eyebrow`}
                  className="text-xs uppercase tracking-[0.2em] font-medium text-amber-600"
                >
                  {p.eyebrow}
                </p>
                <h3
                  id={`product-${p.id}-title`}
                  className="mt-3 font-serif text-2xl md:text-[1.65rem] font-medium text-neutral-900 leading-snug"
                >
                  {p.title}
                </h3>
                <p
                  id={`product-${p.id}-desc`}
                  className="mt-3 text-base text-neutral-600 leading-relaxed"
                >
                  {p.desc}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.specs.map((s) => (
                    <li
                      key={s}
                      className="text-xs font-medium text-neutral-700 bg-stone-100 border border-neutral-200 rounded-full px-3 py-1.5"
                    >
                      {s}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-neutral-900 group-hover:text-amber-600 transition-colors"
                >
                  Request specifications
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

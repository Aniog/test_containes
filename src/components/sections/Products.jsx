import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/lib/products'

const FILTERS = [
  { id: 'all', label: 'All Machines' },
  { id: 'double', label: 'Double Folders' },
  { id: 'sheet', label: 'Sheet Metal' },
  { id: 'metal', label: 'Metal Folders' },
]

function classify(productId) {
  if (productId.includes('double')) return 'double'
  if (productId.includes('sheet')) return 'sheet'
  return 'metal'
}

export default function Products() {
  const containerRef = useRef(null)
  const [filter, setFilter] = useState('all')

  const visible =
    filter === 'all'
      ? products
      : products.filter((p) => classify(p.id) === filter)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [filter])

  return (
    <section id="products" className="bg-[#F5F4F0] py-20 lg:py-28">
      <div ref={containerRef} className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#C8A85B]">
            Product Lineup
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0E1B2C] md:text-4xl lg:text-5xl">
            Seven folding platforms.
            <br />
            One obsession with precision.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#2C3E50] md:text-lg">
            From compact job-shop folders to lights-out production cells,
            every ARTITECT machine is engineered for repeatable accuracy and
            decades of service life.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-12 flex flex-wrap justify-center gap-2 lg:mt-16">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                filter === f.id
                  ? 'border-[#0E1B2C] bg-[#0E1B2C] text-white'
                  : 'border-[#E5E1D8] bg-white text-[#2C3E50] hover:border-[#0E1B2C] hover:text-[#0E1B2C]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {visible.map((p) => (
            <article
              key={p.id}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-[#E5E1D8] bg-white shadow-[0_2px_24px_-12px_rgba(14,27,44,0.18)] transition hover:-translate-y-1 hover:border-[#C8A85B]/60 hover:shadow-[0_24px_60px_-28px_rgba(14,27,44,0.45)]"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#0E1B2C]">
                <img
                  alt={p.name}
                  data-strk-img-id={p.imgId}
                  data-strk-img={`[${p.specId}] [${p.descId}] [${p.titleId}] [products-heading]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#0E1B2C]">
                  {p.shortName}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3
                  id={p.titleId}
                  className="text-xl font-semibold tracking-tight text-[#0E1B2C]"
                >
                  {p.name}
                </h3>
                <p
                  id={p.descId}
                  className="mt-2 text-sm leading-relaxed text-[#2C3E50]"
                >
                  {p.description}
                </p>

                <dl
                  id={p.specId}
                  className="mt-5 grid grid-cols-3 gap-3 border-y border-[#E5E1D8] py-4 text-xs"
                >
                  <div>
                    <dt className="text-[10px] uppercase tracking-widest text-[#6B7280]">
                      Capacity
                    </dt>
                    <dd className="mt-1 font-medium text-[#0E1B2C]">{p.capacity}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-widest text-[#6B7280]">
                      Speed
                    </dt>
                    <dd className="mt-1 font-medium text-[#0E1B2C]">{p.cycleSpeed}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-widest text-[#6B7280]">
                      Length
                    </dt>
                    <dd className="mt-1 font-medium text-[#0E1B2C]">{p.foldingLength}</dd>
                  </div>
                </dl>

                <ul className="mt-4 space-y-2 text-sm text-[#2C3E50]">
                  {p.applications.map((app) => (
                    <li key={app} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#C8A85B]" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    const el = document.getElementById('contact')
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0E1B2C] transition hover:text-[#C8A85B]"
                >
                  Request specs & pricing
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <p
          id="products-heading"
          className="sr-only"
        >
          ARTITECT MACHINERY product lineup — double folding machine, double
          folder, sheet metal folder, sheet metal folding machine, metal
          folder, metal folder machine, and metal folding machine.
        </p>
      </div>
    </section>
  )
}
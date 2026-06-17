import { useEffect, useRef, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Ruler, Layers3, Triangle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'

const filters = [
  'All',
  'Double Folding Machine',
  'Sheet Metal Folder',
  'Metal Folding Machine',
  'Double Folder',
  'Sheet Metal Folding Machine',
  'Metal Folder Machine',
]

const Products = () => {
  const containerRef = useRef(null)
  const [active, setActive] = useState('All')

  const filtered = useMemo(
    () => (active === 'All' ? products : products.filter((p) => p.category === active)),
    [active]
  )

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="bg-paper">
      {/* Page header */}
      <section className="bg-bone pt-36 pb-20 md:pt-44 md:pb-28 border-b border-mist">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <span className="block text-xs tracking-[0.3em] uppercase text-brass mb-6">
            The Collection
          </span>
          <h1 className="font-serif font-light text-5xl md:text-7xl text-ink leading-[1.05] max-w-4xl">
            Folding machines, considered in every detail.
          </h1>
          <p className="mt-8 text-lg text-steel max-w-2xl leading-relaxed">
            Explore our full range of double folding machines, sheet metal
            folders and CNC metal folding machines — each engineered for a
            specific way of working.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-mist sticky top-20 bg-paper/95 backdrop-blur z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 overflow-x-auto">
          <div className="flex gap-3 md:gap-2 min-w-max">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={`text-xs tracking-[0.2em] uppercase px-4 py-2 border transition whitespace-nowrap ${
                  active === f
                    ? 'bg-ink text-white border-ink'
                    : 'border-mist text-steel hover:text-ink hover:border-ink'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product list */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-20 md:space-y-28">
          {filtered.map((p, idx) => (
            <article
              key={p.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                idx % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
              }`}
            >
              <div className="lg:col-span-7 overflow-hidden bg-mist aspect-[4/3]">
                <img
                  alt={p.name}
                  data-strk-img-id={p.imgId}
                  data-strk-img={`[${p.descId}] [${p.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="lg:col-span-5">
                <span className="text-[10px] tracking-[0.3em] uppercase text-brass">
                  {p.category}
                </span>
                <h2
                  id={p.titleId}
                  className="font-serif font-light text-4xl md:text-5xl text-ink mt-3 leading-[1.1]"
                >
                  {p.name}
                </h2>
                <p
                  id={p.descId}
                  className="mt-5 text-steel text-lg leading-relaxed"
                >
                  {p.description}
                </p>

                <div className="mt-8 grid grid-cols-3 gap-6 border-y border-mist py-6">
                  <div>
                    <Ruler className="w-4 h-4 text-brass mb-2" strokeWidth={1.5} />
                    <p className="text-[10px] tracking-[0.25em] uppercase text-steel">Length</p>
                    <p className="text-ink font-medium mt-1">{p.capacity}</p>
                  </div>
                  <div>
                    <Layers3 className="w-4 h-4 text-brass mb-2" strokeWidth={1.5} />
                    <p className="text-[10px] tracking-[0.25em] uppercase text-steel">Gauge</p>
                    <p className="text-ink font-medium mt-1">{p.thickness}</p>
                  </div>
                  <div>
                    <Triangle className="w-4 h-4 text-brass mb-2" strokeWidth={1.5} />
                    <p className="text-[10px] tracking-[0.25em] uppercase text-steel">Angle</p>
                    <p className="text-ink font-medium mt-1">{p.bendAngle}</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-2">
                  {p.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-steel">
                      <span className="block w-1 h-1 bg-brass mt-2.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-brass text-white px-7 py-3 text-xs tracking-[0.2em] uppercase hover:bg-brass-dark transition group"
                  >
                    Inquire about {p.name}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}

          {filtered.length === 0 && (
            <p className="text-center text-steel py-20">
              No machines match this filter.
            </p>
          )}
        </div>
      </section>
    </div>
  )
}

export default Products

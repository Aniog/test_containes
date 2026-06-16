import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowUpRight, Search } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/catalog'

const familyFilters = ['All', 'Double Folder', 'Single Folder']

export default function Products() {
  const containerRef = useRef(null)
  const [activeFamily, setActiveFamily] = useState('All')
  const [query, setQuery] = useState('')

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesFamily =
        activeFamily === 'All' ? true : p.family === activeFamily
      const q = query.trim().toLowerCase()
      const matchesQuery =
        q === ''
          ? true
          : p.name.toLowerCase().includes(q) ||
            p.summary.toLowerCase().includes(q) ||
            p.family.toLowerCase().includes(q)
      return matchesFamily && matchesQuery
    })
  }, [activeFamily, query])

  return (
    <div ref={containerRef}>
      {/* Page header */}
      <section className="relative isolate overflow-hidden bg-ink pb-20 pt-36 text-white md:pb-24 md:pt-44">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          data-strk-bg-id="products-hero-bg-2c8d44"
          data-strk-bg="[products-eyebrow] [products-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-ink/80 via-ink/70 to-ink" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-15" />

        <div className="container-page">
          <p
            id="products-eyebrow"
            className="eyebrow eyebrow-line text-brass"
          >
            <span>The catalog</span>
          </p>
          <h1
            id="products-title"
            className="mt-6 max-w-3xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl"
          >
            Seven machines, one engineering standard.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel">
            Every ARTITECT machine shares the same frame, hydraulics, and
            control platform. The differences live in beam length, beam count,
            and the gauges they are built to fold.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="sticky top-16 z-30 border-b border-line-2 bg-paper/90 backdrop-blur md:top-20">
        <div className="container-page flex flex-col items-stretch gap-4 py-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {familyFilters.map((family) => (
              <button
                key={family}
                type="button"
                onClick={() => setActiveFamily(family)}
                className={
                  'rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-eyebrow transition-colors ' +
                  (activeFamily === family
                    ? 'border-ink bg-ink text-white'
                    : 'border-line-2 text-ash hover:border-brass hover:text-ink')
                }
              >
                {family}
              </button>
            ))}
          </div>
          <div className="relative md:w-80">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ash"
              strokeWidth={1.75}
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or capability"
              className="input-field pl-9 text-sm"
            />
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="bg-paper py-20 md:py-24">
        <div className="container-page">
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-line-2 bg-bone p-12 text-center">
              <p className="text-base text-ash">
                No machines match your filter. Try clearing the search.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-line-2 bg-bone transition-all duration-300 hover:-translate-y-1 hover:border-brass/50 hover:shadow-lift"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                    <img
                      alt={product.name}
                      data-strk-img-id={product.imgId}
                      data-strk-img={`[${product.descId}] [${product.titleId}] [products-title] [products-eyebrow]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bone via-bone/30 to-transparent" />
                    <div className="absolute left-4 top-4">
                      <span className="rounded-full border border-brass/40 bg-paper px-3 py-1 text-[10px] font-semibold uppercase tracking-eyebrow text-brass-2">
                        {product.eyebrow}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p
                      id={product.tagId}
                      className="text-xs font-medium uppercase tracking-eyebrow text-brass-2"
                    >
                      {product.family}
                    </p>
                    <h3
                      id={product.titleId}
                      className="mt-2 text-xl font-semibold tracking-tight text-ink"
                    >
                      {product.name}
                    </h3>
                    <p
                      id={product.descId}
                      className="mt-3 line-clamp-3 text-sm leading-relaxed text-ash"
                    >
                      {product.summary}
                    </p>
                    <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-eyebrow text-ash">
                      <span>View specifications</span>
                      <ArrowUpRight
                        className="h-4 w-4 text-brass-2 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        strokeWidth={1.75}
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-line-2 bg-bone py-20">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-line-2 bg-paper p-8 md:flex-row md:items-center md:p-12">
            <div className="max-w-xl">
              <p className="eyebrow eyebrow-line text-brass-2">Not sure which one?</p>
              <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
                Send us a sample part. We will fold it on three machines and
                send you the report.
              </h2>
            </div>
            <Link to="/contact" className="btn-primary">
              Request a sample folding
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

import { useEffect, useMemo, useRef } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import {
  ArrowUpRight,
  ArrowLeft,
  Check,
  Phone,
  Mail,
} from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import { products, relatedMachines } from '@/data/catalog'

export default function ProductDetail() {
  const { productId } = useParams()
  const containerRef = useRef(null)

  const product = useMemo(
    () => products.find((p) => p.id === productId),
    [productId],
  )

  useEffect(() => {
    if (!product) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [product])

  if (!product) {
    return <Navigate to="/products" replace />
  }

  const others = useMemo(
    () => {
      const list = relatedMachines.filter((p) => p.id !== product.id)
      return list.length > 0 ? list : relatedMachines.slice(0, 3)
    },
    [product],
  )

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink pb-20 pt-36 text-white md:pb-24 md:pt-44">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          data-strk-bg-id="detail-bg-sheet-metal-folding-a4e1d2"
          data-strk-bg="ARTITECT MACHINERY precision sheet metal folding machine industrial steel fabrication workshop"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-15" />

        <div className="container-page">
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-eyebrow text-steel transition-colors hover:text-brass"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.75} />
            All machines
          </Link>

          <div className="mt-8 grid items-end gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <p
                id={`${product.id}-eyebrow`}
                className="eyebrow eyebrow-line text-brass"
              >
                <span>{product.eyebrow} · {product.family}</span>
              </p>
              <h1
                id={product.titleId}
                className="mt-5 text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl"
              >
                {product.name}
              </h1>
              <p
                id={`${product.id}-subtitle`}
                className="mt-6 max-w-2xl text-lg leading-relaxed text-steel"
              >
                {product.summary}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact" className="btn-primary">
                  Request a quote
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                </Link>
                <a href="tel:+15551234567" className="btn-secondary-dark">
                  <Phone className="h-4 w-4" strokeWidth={1.75} />
                  Talk to engineering
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-ink-2">
                <img
                  alt={product.name}
                  data-strk-img-id="detail-img-sheet-metal-folding-9c5a73"
                  data-strk-img="ARTITECT MACHINERY precision sheet metal folding machine industrial steel fabrication workshop"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1000"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-2 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Long description + capabilities */}
      <section className="bg-paper py-20 text-ink md:py-28">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="eyebrow eyebrow-line text-brass-2">Overview</p>
              <h2
                id="detail-overview-title"
                className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl"
              >
                Engineered for the way you fabricate.
              </h2>
              <p
                id="detail-overview-body"
                className="mt-6 text-base leading-relaxed text-ash md:text-lg"
              >
                {product.description}
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-line-2 bg-bone p-6 md:p-8">
                <p className="eyebrow eyebrow-line text-brass-2">Core capabilities</p>
                <ul className="mt-5 space-y-3">
                  {product.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-brass/40 bg-paper text-brass-2">
                        <Check className="h-3 w-3" strokeWidth={2} />
                      </span>
                      <span className="text-sm leading-relaxed text-ink">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs + ideal for */}
      <section className="bg-bone py-20 text-ink md:py-28">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="eyebrow eyebrow-line text-brass-2">Technical specifications</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
                Numbers you can quote on a print.
              </h2>
              <dl className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line-2 bg-line-2 sm:grid-cols-2">
                {Object.entries(product.specs).map(([label, value]) => (
                  <div
                    key={label}
                    className="flex flex-col gap-1 bg-paper px-5 py-4"
                  >
                    <dt className="text-[10px] font-medium uppercase tracking-eyebrow text-ash">
                      {label}
                    </dt>
                    <dd className="text-sm font-semibold text-ink">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="lg:col-span-5">
              <p className="eyebrow eyebrow-line text-brass-2">Ideal for</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
                Built for these applications.
              </h2>
              <ul className="mt-8 space-y-3">
                {product.idealFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-line-2 bg-paper px-4 py-3 text-sm font-medium text-ink"
                  >
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brass-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related machines */}
      <section className="bg-paper py-20 text-ink md:py-28">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow eyebrow-line text-brass-2">Compare and choose</p>
              <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
                Other machines in the family
              </h2>
            </div>
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 text-sm font-medium text-brass-2 transition-colors hover:text-ink"
            >
              View all
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.75}
              />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {others.map((p) => (
              <Link
                key={p.id}
                to={`/products/${p.id}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-line-2 bg-bone transition-all duration-300 hover:-translate-y-1 hover:border-brass/40 hover:shadow-lift"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                  <img
                    alt={p.name}
                    data-strk-img-id={`related-card-${p.id}-b7e2a9`}
                    data-strk-img={`[${p.descId}] [${p.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-medium uppercase tracking-eyebrow text-brass-2">
                    {p.family}
                  </p>
                  <h3
                    id={p.titleId}
                    className="mt-2 text-lg font-semibold tracking-tight text-ink"
                  >
                    {p.name}
                  </h3>
                  <p
                    id={p.descId}
                    className="mt-3 line-clamp-2 text-sm leading-relaxed text-ash"
                  >
                    {p.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative isolate overflow-hidden bg-ink py-20 text-white md:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-15" />
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-ink-2 p-8 md:flex-row md:items-center md:p-12">
            <div className="max-w-xl">
              <p className="eyebrow eyebrow-line text-brass">Ready to spec this machine?</p>
              <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Get a firm quote and a part-folding report.
              </h2>
              <p className="mt-3 text-sm text-steel">
                Send a sample. We will fold it on the {product.name}, send you
                the report, and quote a firm price.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Request a quote
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
              </Link>
              <a
                href="mailto:sales@artitect-machinery.com"
                className="btn-secondary-dark"
              >
                <Mail className="h-4 w-4" strokeWidth={1.75} />
                Email engineering
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

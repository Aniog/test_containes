import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, PackageSearch } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import CtaBand from '@/components/shared/CtaBand'
import { PRODUCT_CATEGORIES } from '@/data/site'

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="relative overflow-hidden bg-primary-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          data-strk-bg-id="products-hero-bg-p7q8r9"
          data-strk-bg="[products-hero-subtitle] [products-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-200">Products We Source</p>
          <h1 id="products-hero-title" className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Product Categories with Established Factory Networks
          </h1>
          <p id="products-hero-subtitle" className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            We focus on consumer and light industrial products where we have verified factory relationships and real QC experience. Don't see your product? Ask us — we'll tell you honestly if we can help.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_CATEGORIES.map((cat) => (
              <article
                key={cat.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    alt={cat.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    data-strk-img-id={`products-cat-${cat.id}`}
                    data-strk-img={`[products-cat-desc-${cat.id}] [products-cat-title-${cat.id}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 id={`products-cat-title-${cat.id}`} className="text-lg font-semibold text-slate-900">
                    {cat.title}
                  </h2>
                  <p id={`products-cat-desc-${cat.id}`} className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {cat.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cat.examples.map((ex) => (
                      <span key={ex} className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:flex-row md:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
              <PackageSearch className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-slate-900">Sourcing something not listed here?</h2>
              <p className="mt-2 leading-relaxed text-slate-600">
                Category lists are never complete. If your product fits consumer or light industrial manufacturing in China, there is a good chance we can source it. Send us the details — if we are not the right partner, we will say so and suggest an alternative.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-accent-500 px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-accent-600"
            >
              Ask Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  )
}

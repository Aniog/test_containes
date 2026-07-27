import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import PageHero from '@/components/shared/PageHero'
import CTABand from '@/components/shared/CTABand'
import { PRODUCT_CATEGORIES } from '@/data/content'
import strkImgConfig from '@/strk-img-config.json'

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
  <div ref={containerRef}>
    <PageHero eyebrow="Products we source" title="Product categories we source from verified Chinese factories">
      <p>
        These are categories we source regularly, with audited factories and recent
        inspection experience. If your product is not listed, ask — if we cannot
        handle it well, we will tell you honestly.
      </p>
    </PageHero>

    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCT_CATEGORIES.map((category) => (
            <article
              key={category.id}
              className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="aspect-[3/2] w-full overflow-hidden bg-slate-100">
                <img
                  alt={category.name}
                  className="h-full w-full object-cover"
                  data-strk-img-id={`prod-${category.id}-d4`}
                  data-strk-img={`[prod-desc-${category.id}] [prod-name-${category.id}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 id={`prod-name-${category.id}`} className="text-lg font-semibold text-slate-900">
                  {category.name}
                </h2>
                <p id={`prod-desc-${category.id}`} className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {category.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.examples.map((example) => (
                    <span
                      key={example}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-xl border border-blue-100 bg-blue-50 p-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Sourcing something else?</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
              We regularly take on new categories after a feasibility check. Send us
              your specification and we will tell you honestly whether we are the
              right partner for it.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-blue-800 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-900"
          >
            Ask about your product <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>

    <CTABand />
  </div>
  )
}

export default Products

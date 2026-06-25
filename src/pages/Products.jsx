import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { PRODUCTS } from '@/data/products'

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page header */}
      <section className="bg-graphite-900 text-bone-50 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="eyebrow eyebrow-light">The Range</p>
          <h1 className="mt-4 font-serif font-light text-5xl md:text-7xl leading-[1.05] max-w-4xl">
            Machines for every fold,<br />from prototype to production.
          </h1>
          <div className="hairline-brass mt-8" />
          <p className="mt-8 max-w-2xl text-steel-300 leading-relaxed">
            Six refined families of sheet metal folders — manual and CNC, single
            and double folding — each engineered around a different workshop
            reality. Compare specifications below, or talk to us about a
            tailored configuration.
          </p>
        </div>
      </section>

      {/* Product list */}
      <section className="bg-bone-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-24 md:space-y-32">
          {PRODUCTS.map((product, index) => {
            const isReversed = index % 2 === 1
            return (
              <article
                key={product.id}
                className="grid gap-10 lg:gap-16 lg:grid-cols-2 items-center"
              >
                <div
                  className={
                    'aspect-[4/3] overflow-hidden bg-bone-100 border border-bone-200 ' +
                    (isReversed ? 'lg:order-2' : '')
                  }
                >
                  <img
                    alt={product.name}
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}] ${product.category} industrial workshop`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="1000"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className={isReversed ? 'lg:order-1' : ''}>
                  <p className="eyebrow">{product.category}</p>
                  <h2
                    id={product.titleId}
                    className="mt-4 font-serif font-light text-3xl md:text-5xl text-graphite-900 leading-tight"
                  >
                    {product.name}
                  </h2>
                  <div className="hairline-brass mt-5" />
                  <p
                    id={product.descId}
                    className="mt-6 text-steel-500 leading-relaxed"
                  >
                    {product.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {product.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-graphite-900">
                        <Check className="w-4 h-4 mt-1 text-brass-600" strokeWidth={2} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-bone-200 pt-6">
                    {product.specs.map((spec) => (
                      <div key={spec.label}>
                        <dt className="text-[11px] uppercase tracking-[0.2em] text-steel-500">
                          {spec.label}
                        </dt>
                        <dd className="mt-1 font-serif text-lg text-graphite-900">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <Link
                    to={`/contact?product=${product.id}`}
                    className="mt-10 inline-flex items-center gap-3 bg-brass-500 hover:bg-brass-600 text-graphite-950 px-7 py-4 text-xs uppercase tracking-[0.22em] font-medium transition-colors"
                  >
                    Request a Quote
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}

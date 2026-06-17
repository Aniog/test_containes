import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'

const Products = () => {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <div ref={ref}>
      <section className="bg-neutral-950 text-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-500 mb-6">
            Products
          </p>
          <h1 className="font-serif font-light text-5xl md:text-6xl tracking-tight max-w-4xl">
            Sheet metal folders, double folders, and metal folding machines &mdash; engineered in-house.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-neutral-300 leading-relaxed">
            Choose a machine by capacity, working length, or control type. Every Artitect folder is
            backed by full lifetime parts availability and a 36-month mechanical warranty.
          </p>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28 space-y-24 md:space-y-32">
          {products.map((product, idx) => {
            const imageRight = idx % 2 === 0
            return (
              <article
                key={product.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                <div
                  className={`lg:col-span-7 ${imageRight ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className="relative aspect-[3/2] bg-neutral-200 overflow-hidden">
                    <img
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      data-strk-img-id={product.imgId}
                      data-strk-img={`[${product.descId}] [${product.titleId}] heavy duty industrial sheet metal folding machine`}
                      data-strk-img-ratio="3x2"
                      data-strk-img-width="1200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                </div>

                <div
                  className={`lg:col-span-5 ${imageRight ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <p className="text-[11px] uppercase tracking-[0.25em] text-amber-600">
                    {product.category}
                  </p>
                  <h2
                    id={product.titleId}
                    className="mt-4 font-serif font-light text-3xl md:text-4xl text-neutral-950 tracking-tight"
                  >
                    {product.name}
                  </h2>
                  <p
                    id={product.descId}
                    className="mt-5 text-lg text-neutral-700 leading-relaxed"
                  >
                    {product.description}
                  </p>

                  <dl className="mt-8 grid grid-cols-2 gap-y-5 gap-x-6 border-t border-neutral-200 pt-6">
                    {product.specs.map((spec) => (
                      <div key={spec.label}>
                        <dt className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                          {spec.label}
                        </dt>
                        <dd className="mt-1 font-serif text-xl text-neutral-950">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <ul className="mt-8 space-y-3">
                    {product.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-neutral-700">
                        <Check className="h-4 w-4 mt-1 text-amber-600 shrink-0" strokeWidth={2.5} />
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="mt-10 inline-flex items-center gap-2 bg-neutral-950 text-neutral-50 px-7 py-3.5 text-xs uppercase tracking-[0.2em] hover:bg-neutral-800 transition"
                  >
                    Request a quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-24 text-center">
          <h2 className="font-serif font-light text-3xl md:text-4xl tracking-tight text-neutral-950 max-w-3xl mx-auto">
            Need something custom? We build to your folding requirement.
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-neutral-700 leading-relaxed">
            Special bed lengths, alternative tooling, automation integration, or non-standard
            controls &mdash; our engineering team can configure a machine around your process.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 bg-amber-500 text-neutral-950 px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-amber-400 transition"
          >
            Talk to an engineer
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Products

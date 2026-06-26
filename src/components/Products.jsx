import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" className="py-20 md:py-28 bg-slate-50">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-amber-600 font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Our Products
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Folding Machines for Every Workshop
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A complete range of sheet metal folding equipment, from compact
            metal folders to heavy-duty double folding machines.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col rounded-xl bg-white border border-slate-200 shadow-sm overflow-hidden transition hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  alt={product.name}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col flex-1 p-6">
                <p className="text-xs font-semibold tracking-wider uppercase text-amber-600">
                  {product.tagline}
                </p>
                <h3
                  id={product.titleId}
                  className="mt-2 text-xl font-bold text-slate-900"
                >
                  {product.name}
                </h3>
                <p
                  id={product.descId}
                  className="mt-3 text-sm text-slate-600 leading-relaxed"
                >
                  {product.description}
                </p>

                <dl className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                  {product.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-center justify-between text-sm"
                    >
                      <dt className="text-slate-500">{spec.label}</dt>
                      <dd className="font-semibold text-slate-900">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-amber-600"
                >
                  Request a quote
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

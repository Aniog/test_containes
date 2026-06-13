import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Check, ArrowRight } from 'lucide-react'
import products from './products.js'

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" className="py-16 md:py-24 bg-slate-50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-amber-600 font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Our Product Line
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Industrial Folding Machinery
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            From versatile metal folders to advanced double folding machines, find the
            perfect solution for your fabrication needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <article
              key={product.titleId}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col"
            >
              {/* Product image */}
              <div className="relative h-52 bg-slate-200 overflow-hidden">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-1">
                <span className="text-amber-600 text-xs font-semibold tracking-wider uppercase mb-1">
                  {product.tagline}
                </span>
                <h3
                  id={product.titleId}
                  className="text-xl font-bold text-slate-900 mb-3"
                >
                  {product.title}
                </h3>
                <p
                  id={product.descId}
                  className="text-slate-600 text-sm leading-relaxed mb-4"
                >
                  {product.description}
                </p>

                <ul className="space-y-2 mb-6 flex-1">
                  {product.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-slate-600">
                      <Check size={16} className="text-amber-500 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-500 font-semibold text-sm transition-colors mt-auto"
                >
                  Inquire Now <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
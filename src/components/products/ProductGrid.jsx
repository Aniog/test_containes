import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from './productsData'

export default function ProductGrid({ items, columns = 3, showHeader = true }) {
  const containerRef = useRef(null)
  const list = items || products

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [list])

  const gridCols =
    columns === 2 ? 'md:grid-cols-2' : columns === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2 lg:grid-cols-3'

  return (
    <section ref={containerRef} className="bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        {showHeader && (
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div className="max-w-2xl">
              <p
                id="products-section-eyebrow"
                className="text-xs uppercase tracking-[0.2em] text-amber-600 font-semibold"
              >
                The Collection
              </p>
              <h2
                id="products-section-title"
                className="mt-4 font-serif text-3xl md:text-4xl font-medium text-slate-900 leading-snug"
              >
                A folding machine for every shop floor.
              </h2>
              <p
                id="products-section-subtitle"
                className="mt-4 text-slate-600 leading-relaxed"
              >
                From compact studio folders to long architectural double folders —
                every Artitect machine shares the same DNA: precision, durability,
                and quiet confidence.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 border-b border-slate-900 pb-1 self-start md:self-auto hover:text-amber-600 hover:border-amber-600 transition"
            >
              View all machines
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>
        )}

        <div className={`grid gap-8 ${gridCols}`}>
          {list.map((product) => (
            <article
              key={product.id}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col hover:shadow-lg hover:border-slate-300 transition"
            >
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  alt={product.name}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute top-4 left-4 bg-white/95 text-slate-900 text-xs uppercase tracking-[0.18em] font-semibold px-3 py-1.5 rounded-full">
                  {product.accent}
                </span>
              </div>

              <div className="p-7 flex flex-col flex-1">
                <p className="text-xs uppercase tracking-[0.2em] text-amber-600 font-semibold">
                  {product.category}
                </p>
                <h3
                  id={product.titleId}
                  className="mt-3 font-serif text-2xl text-slate-900 leading-tight"
                >
                  {product.name}
                </h3>
                <p
                  id={product.descId}
                  className="mt-3 text-sm text-slate-600 leading-relaxed flex-1"
                >
                  {product.tagline}
                </p>

                <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 text-sm border-t border-slate-100 pt-5">
                  {product.specs.slice(0, 2).map((spec) => (
                    <div key={spec.label}>
                      <dt className="text-xs uppercase tracking-[0.16em] text-slate-500">
                        {spec.label}
                      </dt>
                      <dd className="mt-1 text-slate-900 font-medium">{spec.value}</dd>
                    </div>
                  ))}
                </dl>

                <Link
                  to="/contact"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-amber-600 transition"
                >
                  Enquire about this machine
                  <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

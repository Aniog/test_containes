import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'

const ProductsPreview = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-paper">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p
              id="products-eyebrow"
              className="text-xs uppercase tracking-[0.3em] text-bronze"
            >
              The Collection
            </p>
            <h2
              id="products-section-title"
              className="mt-5 font-serif text-3xl md:text-5xl leading-tight text-ink"
            >
              Folding machines, considered.
            </h2>
            <p
              id="products-section-subtitle"
              className="mt-6 text-base md:text-lg text-steel leading-relaxed"
            >
              Four machines, one philosophy: surface, precision, and a
              well-mannered interface. Choose by length, thickness, or the
              quiet you need on the shop floor.
            </p>
          </div>
          <Link
            to="/products"
            className="text-ink hover:text-bronze inline-flex items-center gap-2 text-sm font-medium tracking-wide whitespace-nowrap"
          >
            View all machines
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {products.slice(0, 4).map((p) => (
            <article
              key={p.id}
              className="group bg-paper border border-line hover:border-ink transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden bg-mist">
                <img
                  alt={p.name}
                  data-strk-img-id={p.imgId}
                  data-strk-img={`[${p.descId}] [${p.titleId}] [products-section-title] sheet metal folding machine industrial`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-7 md:p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-bronze">
                  {p.tagline}
                </p>
                <h3
                  id={p.titleId}
                  className="mt-3 font-serif text-2xl md:text-3xl text-ink"
                >
                  {p.name}
                </h3>
                <p
                  id={p.descId}
                  className="mt-4 text-sm md:text-base text-steel leading-relaxed"
                >
                  {p.summary}
                </p>
                <Link
                  to="/products"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-bronze transition-colors"
                >
                  Learn more
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsPreview

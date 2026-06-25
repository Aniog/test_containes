import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { PRODUCTS } from '@/data/products'

export default function HomeProducts() {
  const containerRef = useRef(null)
  const featured = PRODUCTS.slice(0, 4)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-bone-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <p className="eyebrow">Our Machines</p>
            <h2 className="mt-4 font-serif font-light text-4xl md:text-5xl text-graphite-900 max-w-2xl leading-tight">
              A complete family of folders, refined for every workshop.
            </h2>
            <div className="hairline-brass mt-6" />
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-graphite-900 hover:text-brass-600 transition-colors"
          >
            View all products
            <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {featured.map((product) => (
            <article
              key={product.id}
              className="group bg-white border border-bone-200 hover:border-brass-500 transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden bg-bone-100">
                <img
                  alt={product.name}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] sheet metal folding machine industrial`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 md:p-10">
                <p className="eyebrow">{product.category}</p>
                <h3
                  id={product.titleId}
                  className="mt-3 font-serif text-2xl md:text-3xl font-light text-graphite-900"
                >
                  {product.name}
                </h3>
                <p
                  id={product.descId}
                  className="mt-4 text-steel-500 leading-relaxed"
                >
                  {product.tagline}
                </p>
                <Link
                  to="/products"
                  className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-brass-600 hover:text-graphite-900 transition-colors"
                >
                  Specifications
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

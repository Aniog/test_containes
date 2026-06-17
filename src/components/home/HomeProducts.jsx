import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'

const HomeProducts = () => {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p
              id="products-eyebrow"
              className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-5"
            >
              The Range
            </p>
            <h2
              id="products-title"
              className="font-serif font-light text-4xl md:text-5xl tracking-tight text-neutral-950"
            >
              Folding machines for every workshop.
            </h2>
            <p
              id="products-subtitle"
              className="mt-6 text-lg text-neutral-700 leading-relaxed"
            >
              From compact manual folders to fully programmable double folders, every Artitect machine
              is built around the same principle: clean, repeatable bends, day after day.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-neutral-950 border-b border-neutral-950 pb-1 hover:text-amber-600 hover:border-amber-600 transition self-start"
          >
            View all products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-white border border-neutral-200 hover:border-neutral-400 transition flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                <img
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] sheet metal folding machine`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <p className="text-[11px] uppercase tracking-[0.25em] text-amber-600">
                  {product.category}
                </p>
                <h3
                  id={product.titleId}
                  className="mt-4 font-serif text-2xl md:text-3xl font-light text-neutral-950"
                >
                  {product.name}
                </h3>
                <p
                  id={product.descId}
                  className="mt-3 text-neutral-700 leading-relaxed"
                >
                  {product.tagline}
                </p>

                <dl className="mt-6 grid grid-cols-2 gap-y-3 gap-x-6 text-sm border-t border-neutral-200 pt-6">
                  {product.specs.slice(0, 4).map((spec) => (
                    <div key={spec.label}>
                      <dt className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                        {spec.label}
                      </dt>
                      <dd className="mt-1 text-neutral-950">{spec.value}</dd>
                    </div>
                  ))}
                </dl>

                <Link
                  to="/products"
                  className="mt-8 inline-flex items-center gap-2 text-sm tracking-wide text-neutral-950 hover:text-amber-600 transition self-start"
                >
                  See full specifications
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeProducts

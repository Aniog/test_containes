import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/components/products/productsData'

const categories = [
  'Double folding machine',
  'Sheet metal folder',
  'Metal folder',
  'Metal folding machine',
  'Sheet metal folding machine',
  'Double folder',
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-stone-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <p
            id="products-hero-eyebrow"
            className="text-xs uppercase tracking-[0.2em] text-amber-600 font-semibold"
          >
            Machines
          </p>
          <h1
            id="products-hero-title"
            className="mt-4 font-serif text-4xl md:text-6xl font-medium text-slate-900 leading-[1.05]"
          >
            The Artitect collection
          </h1>
          <p
            id="products-hero-subtitle"
            className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl"
          >
            Six machines, one philosophy: every fold should look like the engineer
            who made it cared. Browse the full range of Artitect folders below.
          </p>

          <ul className="mt-10 flex flex-wrap gap-2">
            {categories.map((c) => (
              <li
                key={c}
                className="text-xs uppercase tracking-[0.15em] text-slate-600 font-semibold border border-slate-300 rounded-full px-3 py-1.5 bg-white"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-24 space-y-20 md:space-y-28">
          {products.map((product, index) => {
            const reverse = index % 2 === 1
            return (
              <article
                key={product.id}
                id={product.slug}
                className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center"
              >
                <div
                  className={`lg:col-span-7 ${reverse ? 'lg:order-2' : ''}`}
                >
                  <div className="relative">
                    <div className={`absolute -inset-3 md:-inset-5 bg-amber-500/10 rounded-3xl ${reverse ? '-rotate-1' : 'rotate-1'}`} aria-hidden />
                    <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-slate-200 ring-1 ring-slate-900/5">
                      <img
                        alt={product.name}
                        data-strk-img-id={`detail-${product.imgId}`}
                        data-strk-img={`[${product.descId}] [${product.titleId}]`}
                        data-strk-img-ratio="16x9"
                        data-strk-img-width="1200"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className={`lg:col-span-5 ${reverse ? 'lg:order-1' : ''}`}>
                  <p className="text-xs uppercase tracking-[0.2em] text-amber-600 font-semibold">
                    {product.category}
                  </p>
                  <h2
                    id={product.titleId}
                    className="mt-4 font-serif text-3xl md:text-4xl font-medium text-slate-900 leading-tight"
                  >
                    {product.name}
                  </h2>
                  <p
                    id={product.descId}
                    className="mt-5 text-slate-600 leading-relaxed"
                  >
                    {product.description}
                  </p>

                  <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-slate-200 pt-6">
                    {product.specs.map((spec) => (
                      <div key={spec.label}>
                        <dt className="text-xs uppercase tracking-[0.16em] text-slate-500">
                          {spec.label}
                        </dt>
                        <dd className="mt-1 text-slate-900 font-medium">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <ul className="mt-8 space-y-2.5">
                    {['Servo-driven backgauge', 'Hardened tool steel beams', 'Touchscreen control'].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                        <span className="h-5 w-5 rounded-full bg-amber-500/15 text-amber-700 flex items-center justify-center">
                          <Check className="w-3 h-3" strokeWidth={2} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="mt-9 inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-800 transition"
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

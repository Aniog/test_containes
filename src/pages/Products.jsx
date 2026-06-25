import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="bg-paper">
      {/* Page header */}
      <section className="border-b border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-16 md:pb-20">
          <p
            id="products-page-eyebrow"
            className="text-xs uppercase tracking-[0.3em] text-bronze"
          >
            The Collection
          </p>
          <h1
            id="products-page-title"
            className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-ink max-w-4xl"
          >
            Folding machines for every panel, every workshop.
          </h1>
          <p
            id="products-page-subtitle"
            className="mt-6 text-base md:text-lg text-steel max-w-2xl leading-relaxed"
          >
            From compact studio folders to heavy-duty industrial systems, the
            Artitect range covers double folding machines, sheet metal folders,
            and metal folding solutions — all built on the same principle:
            precision you can feel.
          </p>
        </div>
      </section>

      {/* Product list */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {products.map((p, i) => {
          const reverse = i % 2 === 1
          return (
            <section
              key={p.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center py-20 md:py-28 ${
                i === 0 ? '' : 'border-t border-line'
              }`}
            >
              <div
                className={`lg:col-span-7 ${
                  reverse ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="aspect-[4/3] bg-mist overflow-hidden">
                  <img
                    alt={p.name}
                    data-strk-img-id={p.imgId}
                    data-strk-img={`[${p.descId}] [${p.titleId}] [products-page-title] sheet metal folding machine industrial workshop`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="1200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div
                className={`lg:col-span-5 ${
                  reverse ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-bronze">
                  {p.tagline}
                </p>
                <h2
                  id={p.titleId}
                  className="mt-3 font-serif text-3xl md:text-4xl text-ink"
                >
                  {p.name}
                </h2>
                <p
                  id={p.descId}
                  className="mt-5 text-base md:text-lg text-steel leading-relaxed"
                >
                  {p.summary}
                </p>

                <ul className="mt-6 space-y-3">
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm text-ink"
                    >
                      <Check className="w-4 h-4 mt-0.5 text-bronze shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <dl className="mt-8 grid grid-cols-2 gap-y-5 gap-x-6 border-t border-line pt-6">
                  {p.specs.map((s) => (
                    <div key={s.label}>
                      <dt className="text-xs uppercase tracking-[0.2em] text-steel">
                        {s.label}
                      </dt>
                      <dd className="mt-1.5 font-serif text-lg text-ink">
                        {s.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 bg-ink text-white hover:bg-bronze transition-colors px-6 py-3 text-sm font-medium tracking-wide"
                >
                  Request a quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </section>
          )
        })}
      </div>

      {/* Tailored CTA */}
      <section className="bg-mist border-t border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-24 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-bronze">
            Custom solutions
          </p>
          <h2 className="mt-5 font-serif text-3xl md:text-5xl leading-tight text-ink max-w-3xl mx-auto">
            Have a panel that does not fit a catalogue? Neither do we.
          </h2>
          <p className="mt-6 text-base md:text-lg text-steel max-w-2xl mx-auto leading-relaxed">
            We routinely engineer bespoke folding lines for architectural,
            aerospace, and design clients. Tell us what you need to fold and
            we will build the right machine for it.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 border border-ink text-ink hover:bg-ink hover:text-white transition-colors px-6 py-3.5 text-sm font-medium tracking-wide"
          >
            Talk to an engineer
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Products

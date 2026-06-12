import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import { products } from '../lib/products'

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page header */}
      <section className="border-b border-mist/50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <p
              id="products-eyebrow"
              className="text-xs uppercase tracking-[0.2em] text-steel mb-5"
            >
              The collection
            </p>
            <h1
              id="products-title"
              className="font-serif text-4xl md:text-6xl font-medium text-ink leading-[1.05]"
            >
              Folding machines,<br />
              <span className="italic text-accent">end to end.</span>
            </h1>
          </div>
          <div className="md:col-span-5">
            <p
              id="products-subtitle"
              className="text-base md:text-lg text-steel leading-relaxed"
            >
              From a 1.6 m bench-top metal folder to a 4 m fully automated
              double folding machine, every Artitect is built to the same
              standard of frame, control and finish.
            </p>
          </div>
        </div>
      </section>

      {/* Product list */}
      <section className="bg-bone">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 space-y-20 md:space-y-28">
          {products.map((p, idx) => (
            <article
              key={p.id}
              className="grid md:grid-cols-12 gap-10 md:gap-14 items-center"
            >
              <div
                className={`md:col-span-7 ${
                  idx % 2 === 1 ? 'md:order-2' : ''
                }`}
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-graphite border border-mist/60">
                  <img
                    alt={p.name}
                    className="w-full h-full object-cover"
                    data-strk-img-id={p.imgId}
                    data-strk-img={`[${p.descId}] [${p.titleId}] sheet metal folding machine industrial workshop`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="1100"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
              </div>

              <div
                className={`md:col-span-5 ${
                  idx % 2 === 1 ? 'md:order-1' : ''
                }`}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-accent">
                  {p.tagline}
                </p>
                <h2
                  id={p.titleId}
                  className="mt-3 font-serif text-3xl md:text-4xl text-ink leading-tight"
                >
                  {p.name}
                </h2>
                <p
                  id={p.descId}
                  className="mt-5 text-base text-steel leading-relaxed"
                >
                  {p.summary}
                </p>

                <dl className="mt-8 grid grid-cols-2 gap-y-5 gap-x-6 border-t border-mist/60 pt-6">
                  <Spec label="Capacity" value={p.capacity} />
                  <Spec label="Bend type" value={p.bendType} />
                  <Spec label="Productivity" value={p.productivity} />
                  <Spec label="Control" value={p.cncAxes} />
                </dl>

                <ul className="mt-8 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-ink">
                      <Check
                        className="w-4 h-4 text-accent shrink-0 mt-0.5"
                        strokeWidth={2}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-ink text-bone px-6 py-3 text-sm tracking-wide hover:bg-graphite transition"
                  >
                    Request specs &amp; pricing
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

function Spec({ label, value }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-[0.2em] text-steel">{label}</dt>
      <dd className="mt-1.5 text-sm text-ink">{value}</dd>
    </div>
  )
}

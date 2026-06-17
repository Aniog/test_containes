import { useEffect, useRef } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { getProductBySlug, PRODUCTS } from '@/data/products'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [slug])

  if (!product) {
    return <Navigate to="/products" replace />
  }

  const titleId = `detail-${product.slug}-title`
  const shortId = `detail-${product.slug}-short`

  const others = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3)

  const highlights = [
    'Servo-driven folding beams for repeatable accuracy',
    'Tool-free workpiece backgauge adjustment',
    'Programmable cycles with operator-friendly HMI',
    'Hardened tooling, factory-calibrated alignment',
  ]

  return (
    <div ref={containerRef}>
      <section className="bg-bone pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-steel hover:text-ink transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to catalogue
          </Link>
        </div>
      </section>

      <section className="bg-bone pt-6 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <div className="aspect-[4/3] bg-mist border border-silver/40 overflow-hidden">
              <img
                alt={product.name}
                data-strk-img-id={`detail-${product.imgId}`}
                data-strk-img={`[${shortId}] [${titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.3em] text-ember font-medium">{product.line}</div>
            <h1 id={titleId} className="mt-4 font-serif text-4xl md:text-5xl text-ink font-light leading-tight">
              {product.name}
            </h1>
            <p id={shortId} className="mt-5 text-lg text-steel leading-relaxed">
              {product.short}
            </p>
            <p className="mt-5 text-steel leading-relaxed">
              {product.description}
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-y-5 border-t border-silver/40 pt-6">
              <dt className="text-xs uppercase tracking-[0.2em] text-silver">Capacity</dt>
              <dd className="text-ink">{product.capacity}</dd>
              <dt className="text-xs uppercase tracking-[0.2em] text-silver">Accuracy</dt>
              <dd className="text-ink">{product.accuracy}</dd>
              <dt className="text-xs uppercase tracking-[0.2em] text-silver">Drive</dt>
              <dd className="text-ink">{product.drive}</dd>
              <dt className="text-xs uppercase tracking-[0.2em] text-silver">Application</dt>
              <dd className="text-ink">{product.application}</dd>
            </dl>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-ink text-paper px-7 py-4 text-xs uppercase tracking-[0.2em] hover:bg-graphite transition-colors"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 border border-ink text-ink px-7 py-4 text-xs uppercase tracking-[0.2em] hover:bg-ink hover:text-paper transition-colors"
              >
                Compare Machines
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28 border-t border-silver/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-ember" />
              <span className="text-xs uppercase tracking-[0.3em] text-ember font-medium">Highlights</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-ink font-light leading-tight">
              Designed around the operator's day.
            </h2>
            <p className="mt-5 text-steel leading-relaxed">
              Every detail is considered for the people who actually run the machine —
              from beam stiffness to the curve of the control handle.
            </p>
          </div>
          <ul className="space-y-5">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-4 border-b border-silver/40 pb-5">
                <span className="mt-1 inline-flex items-center justify-center w-6 h-6 bg-ember/10 text-ember rounded-full">
                  <Check className="w-4 h-4" strokeWidth={2} />
                </span>
                <span className="text-ink">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-bone py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-ink font-light">
              Other machines
            </h2>
            <Link
              to="/products"
              className="text-sm uppercase tracking-[0.2em] text-ink hover:text-ember transition-colors"
            >
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {others.map((p) => {
              const tId = `related-${p.slug}-title`
              const sId = `related-${p.slug}-short`
              return (
                <Link
                  to={`/products/${p.slug}`}
                  key={p.slug}
                  className="group bg-paper border border-silver/40 hover:border-ink transition-colors block"
                >
                  <div className="aspect-[4/3] bg-mist overflow-hidden">
                    <img
                      alt={p.name}
                      data-strk-img-id={`related-${p.imgId}`}
                      data-strk-img={`[${sId}] [${tId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-xs uppercase tracking-[0.2em] text-ember">{p.line}</div>
                    <h3 id={tId} className="mt-2 font-serif text-xl text-ink font-medium">{p.name}</h3>
                    <p id={sId} className="mt-2 text-steel text-sm leading-relaxed">{p.short}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

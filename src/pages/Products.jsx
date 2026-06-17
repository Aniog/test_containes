import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { PRODUCTS } from '@/data/products'

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-ink text-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-ember" />
            <span className="text-xs uppercase tracking-[0.3em] text-ember font-medium">The Catalogue</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-light leading-tight max-w-3xl">
            Folding machines, considered.
          </h1>
          <p className="mt-6 text-lg text-silver max-w-2xl leading-relaxed">
            Six machine families. One philosophy: precise, durable, and a pleasure
            to operate. Browse our double folders, sheet metal folders, and metal
            folding machines below.
          </p>
        </div>
      </section>

      <section className="bg-bone py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((p) => {
              const titleId = `catalog-${p.slug}-title`
              const shortId = `catalog-${p.slug}-short`
              return (
                <article
                  key={p.slug}
                  className="group bg-paper border border-silver/40 hover:border-ink transition-colors flex flex-col"
                >
                  <div className="relative aspect-[4/3] bg-mist overflow-hidden">
                    <img
                      alt={p.name}
                      data-strk-img-id={`catalog-${p.imgId}`}
                      data-strk-img={`[${shortId}] [${titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <div className="text-xs uppercase tracking-[0.2em] text-ember">{p.line}</div>
                    <h2 id={titleId} className="mt-3 font-serif text-2xl text-ink font-medium leading-snug">
                      {p.name}
                    </h2>
                    <p id={shortId} className="mt-3 text-steel leading-relaxed flex-1">
                      {p.short}
                    </p>

                    <dl className="mt-6 grid grid-cols-2 gap-y-3 gap-x-4 text-sm border-t border-silver/40 pt-5">
                      <dt className="text-silver uppercase tracking-wider text-xs">Capacity</dt>
                      <dd className="text-ink">{p.capacity}</dd>
                      <dt className="text-silver uppercase tracking-wider text-xs">Accuracy</dt>
                      <dd className="text-ink">{p.accuracy}</dd>
                    </dl>

                    <Link
                      to={`/products/${p.slug}`}
                      className="mt-7 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-ink hover:text-ember transition-colors"
                    >
                      View specs
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

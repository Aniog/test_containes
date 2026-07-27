import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHeader from '@/components/common/PageHeader'
import CtaBand from '@/components/common/CtaBand'
import { productCategories } from '@/data/site'

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Products We Source"
        title="Categories we source across China"
        description="We work across the major manufacturing clusters of China. Below are the categories we source most often — if yours is not listed, ask us."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((p) => (
              <article
                key={p.id}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:border-brand-blue/40 hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    alt={p.title}
                    data-strk-img-id={p.imgId}
                    data-strk-img={`[${p.descId}] [${p.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 id={p.titleId} className="text-lg font-bold text-brand-ink">
                    {p.title}
                  </h3>
                  <p id={p.descId} className="mt-2 text-sm leading-relaxed text-brand-muted">
                    {p.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-slate-200 bg-brand-slate p-8 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-brand-ink">
              Don&apos;t see your product category?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base text-brand-muted">
              We source across most manufactured goods. Send us your product
              details and we will confirm whether we can help — usually within
              one business day.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  )
}

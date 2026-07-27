import { useEffect, useRef } from 'react'
import { productCategories } from '@/data/content'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHeader from '@/components/sections/PageHeader'
import CtaBanner from '@/components/sections/CtaBanner'

export default function Products() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Products We Source"
        title="Categories we source from China"
        subtitle="We work across a broad range of consumer and light industrial products. If your category is not listed below, contact us — we likely have experience with it."
      />

      <section ref={ref} className="bg-surface">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((p) => (
              <article
                key={p.id}
                className="overflow-hidden rounded-xl border border-border-base bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    alt={p.name}
                    data-strk-img-id={p.imgId}
                    data-strk-img={`[${p.descId}] [${p.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 id={p.titleId} className="text-lg font-semibold text-ink">
                    {p.name}
                  </h3>
                  <p id={p.descId} className="mt-2 text-sm leading-relaxed text-slate-body">
                    {p.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-border-base bg-white p-8 text-center">
            <h3 className="text-xl font-semibold text-ink">
              Don’t see your product category?
            </h3>
            <p className="mt-2 text-sm text-slate-body max-w-xl mx-auto">
              We source many product types beyond this list. Send us your
              product details and we will let you know if we can help.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Have a product to source?"
        subtitle="Share your product details and requirements. We will check feasibility and come back with a free quote."
      />
    </>
  )
}

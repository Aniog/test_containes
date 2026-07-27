import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { PRODUCT_CATEGORIES } from "@/data/content"
import PageHeader from "@/components/common/PageHeader"
import CtaBanner from "@/components/common/CtaBanner"

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
        eyebrow="Products we source"
        title="Product categories we source from China"
        description="We match each product category to factories with the right capabilities, certifications, and export experience."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_CATEGORIES.map((product) => {
              const Icon = product.icon
              return (
                <article
                  key={product.id}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <img
                      alt={product.title}
                      className="h-full w-full object-cover"
                      data-strk-img-id={product.imgId}
                      data-strk-img={`[${product.descId}] [${product.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-brand" />
                      <h3
                        id={product.titleId}
                        className="text-lg font-semibold text-ink"
                      >
                        {product.title}
                      </h3>
                    </div>
                    <p
                      id={product.descId}
                      className="mt-2 text-sm leading-relaxed text-slate-600"
                    >
                      {product.description}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>

          <div className="mt-12 rounded-xl border border-slate-200 bg-surface p-8">
            <h2 className="text-xl font-semibold text-ink">
              Don't see your product category?
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              We source across many categories beyond those listed. If your
              product is made in China, we can usually find and verify a
              suitable supplier. Tell us what you need and we will confirm
              feasibility.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}

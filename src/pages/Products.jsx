import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import PageHeader from "@/components/shared/PageHeader"
import { Section, SectionContainer } from "@/components/ui/Section"
import CtaBand from "@/components/shared/CtaBand"
import { PRODUCT_CATEGORIES } from "@/data/content"

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Products We Source"
        title="Categories we source with confidence"
        description="We focus on the product clusters where China has real manufacturing depth, so you get factories that actually know your category."
      />

      <Section className="bg-white">
        <SectionContainer>
          <div ref={containerRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_CATEGORIES.map((product) => (
              <article
                key={product.id}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-200 hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    alt={product.title}
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h2 id={product.titleId} className="text-lg font-semibold text-slate-900">
                    {product.title}
                  </h2>
                  <p id={product.descId} className="mt-2 text-sm leading-relaxed text-slate-600">
                    {product.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6 md:p-8">
            <h2 className="text-xl font-semibold text-slate-900">
              Don't see your category?
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
              We source across many more product types beyond this list. If your
              product is made in China, we can almost certainly find a vetted
              factory for it. Send us the details and we'll confirm feasibility.
            </p>
          </div>
        </SectionContainer>
      </Section>

      <CtaBand
        title="Looking for a specific product?"
        description="Share your product details and target price. We'll confirm whether we can source it and send a free quote."
      />
    </>
  )
}

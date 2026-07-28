import { useEffect, useRef } from "react"
import { productCategories } from "@/data/products"
import PageHeader from "@/components/shared/PageHeader"
import { Container, SectionHeader } from "@/components/shared/Section"
import CtaBanner from "@/components/shared/CtaBanner"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function Products() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Products We Source"
        title="Industries we source with confidence"
        description="We focus on categories where we have established supplier networks, quality benchmarks, and compliance experience."
      />

      <section ref={ref} className="py-16 md:py-24 bg-bg">
        <Container>
          <SectionHeader
            eyebrow="Categories"
            title="Where we add the most value"
            description="If your product falls outside these categories, ask us — we will be honest about whether we can help."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-xl border border-border bg-surface shadow-card transition hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="overflow-hidden">
                  <img
                    alt={product.title}
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 id={product.titleId} className="text-lg font-bold text-ink">
                    {product.title}
                  </h3>
                  <p id={product.descId} className="mt-2 text-sm text-slate-ink leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Sourcing a product in one of these categories?"
        description="Tell us your specifications and target price. We will identify verified suppliers and prepare a sourcing plan."
        secondaryLabel="See how it works"
        secondaryTo="/how-it-works"
      />
    </>
  )
}

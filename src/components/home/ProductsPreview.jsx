import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { Section, SectionContainer, SectionHeading } from "@/components/ui/Section"
import Button from "@/components/ui/Button"
import { PRODUCT_CATEGORIES } from "@/data/content"

export default function ProductsPreview() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <Section id="products" className="bg-white">
      <SectionContainer>
        <div ref={containerRef}>
          <SectionHeading
            eyebrow="Products We Source"
            title="Categories we know well"
            description="We work across the product clusters where China leads, with factories we've built relationships with over years."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                  <h3 id={product.titleId} className="text-lg font-semibold text-slate-900">
                    {product.title}
                  </h3>
                  <p id={product.descId} className="mt-2 text-sm leading-relaxed text-slate-600">
                    {product.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button to="/products" variant="secondary">
              View All Categories
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </SectionContainer>
    </Section>
  )
}

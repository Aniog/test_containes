import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"
import { productCategories } from "@/data/content"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function ProductsSection() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <SectionHeading
          eyebrow="Products We Source"
          title="Categories we source every day"
          description="We work across China's major manufacturing hubs to source a wide range of consumer and industrial products."
        />

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {productCategories.slice(0, 8).map((cat) => (
            <div
              key={cat.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[products-${cat.id}-desc] [products-${cat.id}-title] [products-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-4">
                <h3
                  id={`products-${cat.id}-title`}
                  className="text-sm font-bold text-ink"
                >
                  {cat.title}
                </h3>
                <p
                  id={`products-${cat.id}-desc`}
                  className="mt-1 text-xs leading-relaxed text-muted"
                >
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p id="products-section-title" className="sr-only">
          Products we source from China
        </p>

        <div className="mt-10 text-center">
          <Button as={Link} to="/products" variant="secondary">
            View all categories
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

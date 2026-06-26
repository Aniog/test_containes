import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import SectionHeader from "../shared/SectionHeader"
import { productCategories } from "../../data/siteData"

export default function ProductsSection() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  const items = productCategories.slice(0, 6)

  return (
    <section ref={ref} className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Products We Source"
            title="Categories we know inside out"
            description="A focused list of product categories where we have established factory networks, QC protocols and shipping experience."
          />
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent hover:text-brand-accent-dark"
          >
            See all categories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <article
              key={p.id}
              className="group overflow-hidden rounded-xl border border-brand-line bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-accent/40 hover:shadow-md"
            >
              <div className="aspect-[3/2] w-full overflow-hidden bg-brand-soft">
                <img
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  data-strk-img-id={`product-${p.id}-img`}
                  data-strk-img={`[product-${p.id}-desc] [product-${p.id}-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-6">
                <h3
                  id={`product-${p.id}-title`}
                  className="text-lg font-semibold text-brand-ink"
                >
                  {p.title}
                </h3>
                <p
                  id={`product-${p.id}-desc`}
                  className="mt-2 text-sm leading-relaxed text-brand-body"
                >
                  {p.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

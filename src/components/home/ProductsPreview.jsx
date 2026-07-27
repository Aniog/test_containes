import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { productCategories } from "@/data/content"
import Section from "@/components/ui/Section"

const featured = productCategories.slice(0, 6)

export default function ProductsPreview() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <Section background="white" id="products">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent-500">
          Products We Source
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy-600 tracking-tight">
          Sourcing across the main product categories
        </h2>
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
          We work with Chinese factories across most consumer and light
          industrial categories. Here are six of the most common — and the
          full list is on our Products page.
        </p>
      </div>

      <div
        ref={ref}
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {featured.map((cat) => (
          <article
            key={cat.id}
            className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card hover:shadow-cardHover transition-shadow"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
              <img
                alt={`${cat.title} production in a Chinese factory`}
                data-strk-img-id={`products-preview-${cat.id}-c4d1e8`}
                data-strk-img={`[${cat.id}-items] [${cat.id}-title] products factory production`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3
                id={`${cat.id}-title`}
                className="text-lg font-semibold text-navy-600"
              >
                {cat.title}
              </h3>
              <ul
                id={`${cat.id}-items`}
                className="mt-3 space-y-1.5 text-sm text-slate-600"
              >
                {cat.items.slice(0, 3).map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-accent-500 flex-shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm font-semibold text-navy-600 hover:text-accent-500"
        >
          See all product categories
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  )
}

import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { PRODUCT_CATEGORIES } from "@/data/content"
import { Section, SectionHeader } from "@/components/shared/Section"

export default function ProductsOverview() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <Section id="products" className="bg-white">
      <div className="container-x" ref={ref}>
        <SectionHeader
          eyebrow="Products we source"
          title="Six product categories, hundreds of sub-categories"
          subtitle="We focus on six verticals where we have real factory relationships. If your product fits, we will already know where to start looking."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCT_CATEGORIES.map((cat) => (
            <article
              key={cat.id}
              id={`prod-${cat.id}`}
              className="card flex flex-col overflow-hidden"
            >
              <div
                className="relative aspect-[16/9] bg-slate-100"
                data-strk-bg-id={`prod-${cat.id}-bg`}
                data-strk-bg={`[prod-${cat.id}-title] [prod-${cat.id}-items] [products-section-title]`}
                data-strk-bg-ratio="16x9"
                data-strk-bg-width="600"
              >
                <img
                  alt={`${cat.title} sourced from China`}
                  className="h-full w-full object-cover"
                  data-strk-img-id={`prod-${cat.id}-img`}
                  data-strk-img={`[prod-${cat.id}-title] [prod-${cat.id}-items] [products-section-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3
                  id={`prod-${cat.id}-title`}
                  className="text-lg font-semibold text-ink-900"
                >
                  {cat.title}
                </h3>
                <ul
                  id={`prod-${cat.id}-items`}
                  className="flex flex-wrap gap-1.5"
                >
                  {cat.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-ink-700"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <p id="products-section-title" className="sr-only">
          Products We Source
        </p>

        <div className="mt-10 text-center">
          <Link to="/products" className="btn-ghost">
            See full list of products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Section>
  )
}

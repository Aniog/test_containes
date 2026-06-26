import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import PageHeader from "../components/shared/PageHeader"
import { productCategories } from "../data/siteData"

export default function Products() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Products We Source"
        title="Categories with proven factory networks"
        description="We focus on categories where we have established supplier networks, QC protocols and shipping experience. If your product fits one of these, we can move quickly."
      />

      <section ref={ref} className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((p) => (
              <article
                key={p.id}
                className="group overflow-hidden rounded-xl border border-brand-line bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-accent/40 hover:shadow-md"
              >
                <div className="aspect-[3/2] w-full overflow-hidden bg-brand-soft">
                  <img
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    data-strk-img-id={`products-page-${p.id}-img`}
                    data-strk-img={`[products-page-${p.id}-desc] [products-page-${p.id}-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6">
                  <h3
                    id={`products-page-${p.id}-title`}
                    className="text-lg font-semibold text-brand-ink"
                  >
                    {p.title}
                  </h3>
                  <p
                    id={`products-page-${p.id}-desc`}
                    className="mt-2 text-sm leading-relaxed text-brand-body"
                  >
                    {p.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-brand-line bg-brand-soft p-8 md:p-10">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h3 className="text-xl font-semibold text-brand-ink md:text-2xl">
                  Don't see your product category?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-body md:text-base">
                  We have sourced across more than 40 categories. Tell us what you need
                  and we will let you know if we can help.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-brand-accent px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-accent-dark"
              >
                Ask about your product
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

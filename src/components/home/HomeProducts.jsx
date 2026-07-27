import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { PRODUCT_CATEGORIES } from "@/data/content"
import SectionHeading from "@/components/common/SectionHeading"

export default function HomeProducts() {
  const featured = PRODUCT_CATEGORIES.slice(0, 6)
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Products we source"
          title="Categories we know how to source well"
          description="We work across a range of product categories, matching each to factories with the right capabilities and export experience."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => {
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

        <div className="mt-10 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-accent"
          >
            View all categories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

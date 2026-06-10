import { useEffect, useMemo, useRef, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { ArrowRight, ArrowUpRight, Filter } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { useReveal } from "@/hooks/useReveal"
import { productCategories, products } from "@/data/products"
import { cn } from "@/lib/utils"

function ProductCard({ product, index }) {
  const [ref, visible] = useReveal()
  const innerRef = useRef(null)

  useEffect(() => {
    if (!innerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, innerRef.current)
  }, [])

  return (
    <Link
      ref={ref}
      to={`/products/${product.id}`}
      className={cn(
        "group block transition-all duration-700",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
      )}
      style={{ transitionDelay: `${(index % 4) * 70}ms` }}
    >
      <article
        ref={innerRef}
        className="card card-hover flex h-full flex-col bg-paper"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-ink-soft">
          <img
            alt={`${product.name} — ${product.tagline}`}
            data-strk-img-id={`catalog-img-${product.id}`}
            data-strk-img={`[catalog-product-${product.id}-name] [catalog-product-${product.id}-tagline] [catalog-title] [catalog-eyebrow]`}
            data-strk-img-ratio="16x10"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 10'/%3E"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
          <span className="absolute left-4 top-4 inline-flex items-center bg-bone/95 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-eyebrow text-ink">
            {product.series}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6 md:p-8">
          <h3
            id={`catalog-product-${product.id}-name`}
            className="font-serif text-2xl text-ink md:text-[1.5rem]"
          >
            {product.name}
          </h3>
          <p
            id={`catalog-product-${product.id}-tagline`}
            className="mt-2 text-sm text-steel-soft"
          >
            {product.tagline}
          </p>

          <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-hairline pt-5 text-sm">
            <div>
              <dt className="text-[0.65rem] uppercase tracking-eyebrow text-steel-soft">
                Max thickness
              </dt>
              <dd className="mt-1 font-medium text-ink num-tabular">
                {product.maxThicknessMm} mm
              </dd>
            </div>
            <div>
              <dt className="text-[0.65rem] uppercase tracking-eyebrow text-steel-soft">
                Bend length
              </dt>
              <dd className="mt-1 font-medium text-ink num-tabular">
                {product.maxLengthMm} mm
              </dd>
            </div>
            <div>
              <dt className="text-[0.65rem] uppercase tracking-eyebrow text-steel-soft">
                Bend angle
              </dt>
              <dd className="mt-1 font-medium text-ink num-tabular">
                {product.bendAngleDeg}°
              </dd>
            </div>
            <div>
              <dt className="text-[0.65rem] uppercase tracking-eyebrow text-steel-soft">
                Automation
              </dt>
              <dd className="mt-1 font-medium text-ink">{product.automation}</dd>
            </div>
          </dl>

          <div className="mt-6 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-eyebrow text-ink group-hover:text-brass-deep">
              View model
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </span>
            <ArrowUpRight
              className="h-4 w-4 text-steel-soft transition-colors group-hover:text-brass-deep"
              strokeWidth={1.5}
            />
          </div>
        </div>
      </article>
    </Link>
  )
}

export function ProductsCatalog() {
  const [params, setParams] = useSearchParams()
  const [active, setActive] = useState(params.get("category") ?? "all")

  useEffect(() => {
    setActive(params.get("category") ?? "all")
  }, [params])

  const visible = useMemo(() => {
    if (active === "all") return products
    return products.filter((p) => p.category === active)
  }, [active])

  return (
    <section className="bg-bone section-pad-lg">
      <div className="container-content">
        <SectionHeader
          eyebrow="The full range"
          title="Eight machines. One engineering standard."
          description="Filter by folding type to find the right machine family. From the bench-top Forge M100 to the 6-metre Titan H600 plate folder, every model is calibrated on the same laser reference at our Stuttgart facility."
        />
        <span id="catalog-eyebrow" className="hidden">
          The full range
        </span>
        <span id="catalog-title" className="hidden">
          Eight machines one engineering standard
        </span>

        <div className="mt-12 flex flex-wrap items-center gap-3 border-y border-hairline py-5">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-eyebrow text-steel-soft">
            <Filter className="h-3.5 w-3.5" strokeWidth={1.5} />
            Filter
          </span>
          {productCategories.map((cat) => {
            const isActive = active === cat.id
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActive(cat.id)
                  if (cat.id === "all") {
                    setParams({})
                  } else {
                    setParams({ category: cat.id })
                  }
                }}
                className={cn(
                  "border px-4 py-2 text-xs font-medium uppercase tracking-eyebrow transition-all duration-200",
                  isActive
                    ? "border-ink bg-ink text-bone"
                    : "border-hairline bg-paper text-steel-soft hover:border-ink hover:text-ink",
                )}
              >
                {cat.label}
              </button>
            )
          })}
          <span className="ml-auto text-xs text-steel-soft">
            Showing {visible.length} of {products.length} models
          </span>
        </div>

        {visible.length === 0 ? (
          <div className="mt-16 border border-hairline bg-paper p-12 text-center">
            <p className="font-serif text-2xl text-ink">No models match this filter yet.</p>
            <p className="mt-3 text-sm text-steel-soft">
              Get in touch and we will recommend a configuration from a
              neighbouring series.
            </p>
            <Link
              to="/contact?topic=quote"
              className="btn-accent mt-6 inline-flex"
            >
              Talk to engineering
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {visible.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

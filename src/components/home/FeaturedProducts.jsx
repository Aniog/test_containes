import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { useReveal } from "@/hooks/useReveal"
import { products } from "@/data/products"
import { cn } from "@/lib/utils"

const featuredIds = ["atlas-d320", "meridian-s250", "forge-m200", "titan-h600"]

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
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <article
        ref={innerRef}
        className="card card-hover flex h-full flex-col bg-paper"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-ink-soft">
          <img
            alt={`${product.name} — ${product.tagline}`}
            data-strk-img-id={`featured-img-${product.id}`}
            data-strk-img={`[featured-product-${product.id}-name] [featured-product-${product.id}-tagline] [featured-eyebrow] [featured-title]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
          <span className="absolute left-4 top-4 inline-flex items-center bg-bone/95 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-eyebrow text-ink">
            {product.series}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6 md:p-8">
          <h3
            id={`featured-product-${product.id}-name`}
            className="font-serif text-2xl font-medium text-ink md:text-[1.6rem]"
          >
            {product.name}
          </h3>
          <p
            id={`featured-product-${product.id}-tagline`}
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

export function FeaturedProducts() {
  const featured = products.filter((p) => featuredIds.includes(p.id))

  return (
    <section
      id="machines"
      className="bg-bone section-pad-lg"
      aria-label="Featured machines"
    >
      <div className="container-content">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Featured machines"
            title="A range that grows with your shop."
            description="Four series, eight models — from a 420 kg bench-top folder to a 21-tonne plate folder. Every machine shares the same engineering standard, even when the scale changes."
          />
          <Link
            to="/products"
            className="link-underline self-start text-sm font-medium md:self-end"
          >
            See the full range
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </div>

        <span id="featured-eyebrow" className="hidden">
          Featured machines
        </span>
        <span id="featured-title" className="hidden">
          A range that grows with your shop
        </span>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

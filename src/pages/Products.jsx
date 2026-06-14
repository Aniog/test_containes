import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { Link } from "react-router-dom"
import { ArrowRight, Check } from "lucide-react"
import { products, productListIntro } from "@/data/products"

function ProductCard({ product, imageId, withImage = true }) {
  const ref = useRef(null)
  useEffect(() => {
    if (!withImage) return
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [withImage])

  return (
    <article
      id={product.slug}
      ref={ref}
      className="grid gap-10 lg:gap-16 lg:grid-cols-12 py-16 md:py-20 border-t border-hairline first:border-t-0"
    >
      <div className="lg:col-span-6">
        {withImage ? (
          <div className="aspect-[4/3] bg-ink-soft overflow-hidden">
            <img
              alt={product.name}
              className="w-full h-full object-cover"
              data-strk-img-id={imageId}
              data-strk-img={`[product-${product.slug}-name] [product-${product.slug}-tagline] [products-list-title]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        ) : (
          <div className="aspect-[4/3] bg-hairline" aria-hidden="true" />
        )}
      </div>

      <div className="lg:col-span-6 flex flex-col">
        <p className="eyebrow">Sheet metal folding</p>
        <h3
          id={`product-${product.slug}-name`}
          className="mt-4 font-display text-3xl md:text-4xl text-ink"
        >
          {product.name}
        </h3>
        <p
          id={`product-${product.slug}-tagline`}
          className="mt-2 text-base text-goldDeep italic font-display"
        >
          {product.tagline}
        </p>
        <p className="mt-6 text-base text-steel leading-relaxed">
          {product.description}
        </p>

        <ul className="mt-8 space-y-3">
          {product.highlights.map((h) => (
            <li key={h} className="flex items-start gap-3 text-sm text-ink">
              <Check className="w-4 h-4 mt-0.5 text-gold shrink-0" strokeWidth={2} />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <dl className="mt-8 grid grid-cols-3 gap-6 border-t border-hairline pt-6">
          <div>
            <dt className="text-[0.65rem] uppercase tracking-eyebrow text-muted">Capacity</dt>
            <dd className="mt-1 text-sm text-ink">{product.specs.capacity}</dd>
          </div>
          <div>
            <dt className="text-[0.65rem] uppercase tracking-eyebrow text-muted">Lengths</dt>
            <dd className="mt-1 text-sm text-ink">{product.specs.length}</dd>
          </div>
          <div>
            <dt className="text-[0.65rem] uppercase tracking-eyebrow text-muted">Power</dt>
            <dd className="mt-1 text-sm text-ink">{product.specs.power}</dd>
          </div>
        </dl>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/contact" className="btn-primary">
            Request a quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default function Products() {
  const heroRef = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, heroRef.current)
  }, [])

  return (
    <>
      <section ref={heroRef} className="relative overflow-hidden bg-ink text-cream">
        <div
          className="absolute inset-0 opacity-30"
          data-strk-bg-id="products-hero-bg-12ae48"
          data-strk-bg="[products-hero-subtitle] [products-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-ink/80" aria-hidden="true" />
        <div className="container-page relative z-10 py-28 md:py-36">
          <p className="eyebrow text-gold">{productListIntro.eyebrow}</p>
          <h1
            id="products-hero-title"
            className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl text-cream max-w-4xl"
          >
            {productListIntro.title}
          </h1>
          <p
            id="products-hero-subtitle"
            className="mt-8 max-w-2xl text-base md:text-lg text-cream/70 leading-relaxed"
          >
            {productListIntro.subtitle}
          </p>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="eyebrow">The full lineup</p>
            <h2
              id="products-list-title"
              className="mt-4 font-display text-3xl md:text-4xl text-ink"
            >
              Seven machines. One standard of quality.
            </h2>
          </div>

          <div className="mt-6">
            {products.map((p, idx) => (
              <ProductCard
                key={p.id}
                product={p}
                withImage={idx < 5}
                imageId={`products-card-${p.id}-d57e1a`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

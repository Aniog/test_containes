import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import SectionHeader from '@/components/shared/SectionHeader'
import CTAButton from '@/components/shared/CTAButton'
import { productCategories } from '@/data/siteContent'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductsSection({ showCta = true }) {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-brand-mist py-16 text-brand-ink md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Products we source"
          title="Support for custom, industrial, and consumer product categories"
          description="We focus on understanding your exact product specification and supplier fit rather than sending generic factory lists."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((product) => (
            <article key={product.id} className="overflow-hidden rounded-2xl border border-brand-line bg-white text-brand-ink shadow-sm">
              <img
                className="h-44 w-full object-cover"
                alt={`${product.title} sourcing in China`}
                data-strk-img-id={product.imgId}
                data-strk-img={`[${product.descId}] [${product.titleId}] [products-section-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="p-6">
                <h3 id={product.titleId} className="text-lg font-semibold text-brand-navy">
                  {product.title}
                </h3>
                <p id={product.descId} className="mt-3 text-sm leading-6 text-brand-muted">
                  {product.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        <h2 id="products-section-title" className="sr-only">China product sourcing categories</h2>
        {showCta && (
          <div className="mt-10">
            <CTAButton href="/products" variant="secondary">See Product Categories</CTAButton>
          </div>
        )}
      </div>
    </section>
  )
}

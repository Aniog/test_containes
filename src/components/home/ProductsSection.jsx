import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../strk-img-config.json'
import SectionHeader from '../site/SectionHeader'

function ProductsSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, sectionRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [])

  return (
    <section ref={sectionRef} className="bg-brand-bg py-16 text-brand-ink lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Products we source"
          title="Support across common B2B product categories"
          description="We help buyers source finished goods, components, packaging, and custom products. For specialized categories, we first review feasibility and supplier availability."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article className="overflow-hidden rounded-2xl border border-brand-line bg-white text-brand-ink shadow-sm">
            <img alt="Consumer goods sourcing in China" className="h-48 w-full object-cover" data-strk-img-id="product-consumer-goods-0f3a21" data-strk-img="[product-consumer-goods-desc] [product-consumer-goods-title] [products-section-desc] [products-section-title]" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
            <div className="p-6">
              <h3 id="product-consumer-goods-title" className="text-xl font-semibold text-brand-navy">Consumer Goods</h3>
              <p id="product-consumer-goods-desc" className="mt-3 text-sm leading-7 text-brand-ink/70">Home items, gifts, lifestyle products, promotional items, and retail-ready packaging.</p>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-brand-line bg-white text-brand-ink shadow-sm">
            <img alt="Industrial parts sourcing in China" className="h-48 w-full object-cover" data-strk-img-id="product-industrial-parts-68b1c4" data-strk-img="[product-industrial-parts-desc] [product-industrial-parts-title] [products-section-desc] [products-section-title]" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
            <div className="p-6">
              <h3 id="product-industrial-parts-title" className="text-xl font-semibold text-brand-navy">Industrial Parts</h3>
              <p id="product-industrial-parts-desc" className="mt-3 text-sm leading-7 text-brand-ink/70">Machined parts, metal components, plastic injection items, hardware, and custom assemblies.</p>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-brand-line bg-white text-brand-ink shadow-sm">
            <img alt="Electronics accessories sourcing in China" className="h-48 w-full object-cover" data-strk-img-id="product-electronics-accessories-9d32f0" data-strk-img="[product-electronics-accessories-desc] [product-electronics-accessories-title] [products-section-desc] [products-section-title]" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
            <div className="p-6">
              <h3 id="product-electronics-accessories-title" className="text-xl font-semibold text-brand-navy">Electronics Accessories</h3>
              <p id="product-electronics-accessories-desc" className="mt-3 text-sm leading-7 text-brand-ink/70">Cables, chargers, enclosures, smart accessories, small devices, and component sourcing support.</p>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-brand-line bg-white text-brand-ink shadow-sm">
            <img alt="Packaging and printing sourcing in China" className="h-48 w-full object-cover" data-strk-img-id="product-packaging-printing-2ba6ef" data-strk-img="[product-packaging-printing-desc] [product-packaging-printing-title] [products-section-desc] [products-section-title]" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
            <div className="p-6">
              <h3 id="product-packaging-printing-title" className="text-xl font-semibold text-brand-navy">Packaging & Printing</h3>
              <p id="product-packaging-printing-desc" className="mt-3 text-sm leading-7 text-brand-ink/70">Custom boxes, labels, manuals, inserts, retail packaging, and export carton coordination.</p>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-brand-line bg-white text-brand-ink shadow-sm">
            <img alt="Outdoor and tools sourcing in China" className="h-48 w-full object-cover" data-strk-img-id="product-outdoor-tools-5c7e91" data-strk-img="[product-outdoor-tools-desc] [product-outdoor-tools-title] [products-section-desc] [products-section-title]" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
            <div className="p-6">
              <h3 id="product-outdoor-tools-title" className="text-xl font-semibold text-brand-navy">Outdoor & Tools</h3>
              <p id="product-outdoor-tools-desc" className="mt-3 text-sm leading-7 text-brand-ink/70">Garden tools, hand tools, camping goods, storage products, and hardware-related categories.</p>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-brand-line bg-white text-brand-ink shadow-sm">
            <img alt="Apparel and textiles sourcing in China" className="h-48 w-full object-cover" data-strk-img-id="product-apparel-textiles-a80d45" data-strk-img="[product-apparel-textiles-desc] [product-apparel-textiles-title] [products-section-desc] [products-section-title]" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
            <div className="p-6">
              <h3 id="product-apparel-textiles-title" className="text-xl font-semibold text-brand-navy">Apparel & Textiles</h3>
              <p id="product-apparel-textiles-desc" className="mt-3 text-sm leading-7 text-brand-ink/70">Workwear, bags, fabrics, accessories, textile labels, and production follow-up for soft goods.</p>
            </div>
          </article>
        </div>
        <div className="sr-only">
          <h2 id="products-section-title">Products We Source</h2>
          <p id="products-section-desc">Common B2B product categories sourced from China with supplier verification and quality control support.</p>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection

import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import ContactCTASection from '../components/sections/ContactCTASection'
import ProductsSection from '../components/sections/ProductsSection'
import strkImgConfig from '../strk-img-config.json'

export default function Products() {
  const containerRef = useRef(null)
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), [])
  return (
    <main ref={containerRef}>
      <section className="bg-white px-4 py-20 text-brand-ink sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">Products we source</p><h1 id="products-page-title" className="mt-4 text-4xl font-bold tracking-tight text-brand-navy md:text-5xl">China supplier sourcing for consumer, industrial, and custom product categories</h1><p id="products-page-desc" className="mt-6 text-lg leading-8 text-brand-subtle">We help buyers define requirements, compare suitable suppliers, check samples, and prepare quality checkpoints for categories where supplier selection matters.</p></div>
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-brand-muted shadow-xl"><img alt="Warehouse and product sourcing in China" className="h-full w-full object-cover" data-strk-img-id="products-warehouse-sourcing-53ed10" data-strk-img="[products-page-desc] [products-page-title]" data-strk-img-ratio="4x3" data-strk-img-width="900" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" /></div>
        </div>
      </section>
      <ProductsSection />
      <ContactCTASection />
    </main>
  )
}

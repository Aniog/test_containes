import SectionHeader from '@/components/site/SectionHeader.jsx'
import StockImage from '@/components/site/StockImage.jsx'
import { productCategories } from '@/content.js'

const ProductsSection = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="Products we source" title="Common categories for importers, distributors, and brand owners" description="We work from your specifications and help identify suppliers that can match the required quality, quantity, packaging, and delivery expectations." />
      <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="overflow-hidden rounded-3xl border border-brand-border bg-white p-3 shadow-card">
          <StockImage imgId="products-warehouse-categories-p5r82" query="[products-image-caption] [products-section-title]" ratio="3x4" width="900" alt="Warehouse shelves with export products ready for shipment" className="h-full min-h-[520px] w-full rounded-2xl object-cover" />
        </div>
        <div id="products-section-title" className="grid gap-4 sm:grid-cols-2">
          {productCategories.map(({ title, desc, icon: Icon }, index) => (
            <article key={title} className="rounded-2xl border border-brand-border bg-brand-mist p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand-blue"><Icon className="h-5 w-5" /></div>
              <h3 id={`product-title-${index}`} className="font-semibold text-brand-navy">{title}</h3>
              <p id={`product-desc-${index}`} className="mt-2 text-sm leading-7 text-brand-muted">{desc}</p>
            </article>
          ))}
          <p id="products-image-caption" className="sm:col-span-2 rounded-2xl border border-brand-border bg-white p-6 text-sm leading-7 text-brand-slate">If your product is not listed, send the specification or photo. We can review whether it is suitable for China sourcing and what checks are needed.</p>
        </div>
      </div>
    </div>
  </section>
)

export default ProductsSection

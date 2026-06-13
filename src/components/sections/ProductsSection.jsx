import { products } from '../../data/siteContent'
import SectionHeading from '../common/SectionHeading'

export default function ProductsSection() {
  return (
    <section className="bg-brand-surface px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Products we source" title="Product categories with practical China supplier coverage" text="We focus on categories where supplier comparison, specification control, and inspection planning can meaningfully reduce sourcing risk." />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white text-brand-ink shadow-sm">
            <div className="h-56 bg-brand-muted"><img alt="Consumer products sourcing" className="h-full w-full object-cover" data-strk-img-id="category-consumer-products-6b37ac" data-strk-img="[category-consumer-desc] [category-consumer-title]" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" /></div>
            <div className="p-6"><h3 id="category-consumer-title" className="text-xl font-bold text-brand-navy">Consumer products</h3><p id="category-consumer-desc" className="mt-3 text-sm leading-6 text-brand-subtle">Home goods, lifestyle items, packaging, promotional products, and ecommerce-ready merchandise.</p></div>
          </article>
          <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white text-brand-ink shadow-sm">
            <div className="h-56 bg-brand-muted"><img alt="Industrial hardware sourcing" className="h-full w-full object-cover" data-strk-img-id="category-industrial-hardware-8e19af" data-strk-img="[category-industrial-desc] [category-industrial-title]" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" /></div>
            <div className="p-6"><h3 id="category-industrial-title" className="text-xl font-bold text-brand-navy">Industrial and hardware</h3><p id="category-industrial-desc" className="mt-3 text-sm leading-6 text-brand-subtle">Tools, components, metal or plastic parts, workshop supplies, and selected OEM manufacturing projects.</p></div>
          </article>
          <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white text-brand-ink shadow-sm">
            <div className="h-56 bg-brand-muted"><img alt="Custom branded orders" className="h-full w-full object-cover" data-strk-img-id="category-custom-orders-3f49bd" data-strk-img="[category-custom-desc] [category-custom-title]" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" /></div>
            <div className="p-6"><h3 id="category-custom-title" className="text-xl font-bold text-brand-navy">Branded and custom orders</h3><p id="category-custom-desc" className="mt-3 text-sm leading-6 text-brand-subtle">Supplier matching, sample coordination, packaging checks, and production follow-up for customized goods.</p></div>
          </article>
        </div>
        <div className="mt-10 grid gap-3 rounded-3xl border border-slate-200 bg-white p-6 md:grid-cols-2 lg:grid-cols-4">{products.map((product) => (<div className="rounded-2xl bg-brand-surface px-4 py-3 text-sm font-semibold text-brand-navy" key={product}>{product}</div>))}</div>
      </div>
    </section>
  )
}

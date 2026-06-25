import SectionShell from '../components/SectionShell.jsx'
import { ProductsGrid } from '../components/DataSections.jsx'

const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
const categories = [
  ['products-card-electronics-title', 'Electronics accessories', 'Factory sourcing and QC for accessories, chargers, cables, and connected consumer items.'],
  ['products-card-packaging-title', 'Packaging and promotional goods', 'Custom packaging, branded merchandise, sample follow-up, and shipment coordination.'],
  ['products-card-home-title', 'Home and lifestyle products', 'Home goods, furniture, decor, kitchenware, and private label consumer products.'],
]

export default function Products() {
  return (
    <>
      <SectionShell className="bg-slate-950 text-white" eyebrow="Products we source" title="Manufactured products for global B2B buyers" intro="We review product requirements and help match them with suitable China suppliers and practical quality control steps.">
        <ProductsGrid />
      </SectionShell>
      <SectionShell eyebrow="Typical categories" title="Realistic product sourcing support">
        <div className="grid gap-6 lg:grid-cols-3">
          {categories.map(([titleId, title, desc], index) => (
            <article key={title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-950 shadow-sm">
              <img className="h-56 w-full object-cover" alt={title} data-strk-img-id={`products-category-${index}-b71d9f`} data-strk-img={`[${titleId}]`} data-strk-img-ratio="4x3" data-strk-img-width="700" src={placeholder} />
              <div className="p-6">
                <h3 id={titleId} className="text-xl font-black text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>
    </>
  )
}

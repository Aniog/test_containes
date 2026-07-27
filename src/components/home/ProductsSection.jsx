import SectionHeader from '@/components/SectionHeader'
import { productCategories } from '@/data/siteData'

export default function ProductsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <SectionHeader
          label="Products We Source"
          title="Wide range of product categories"
          subtitle="We source across many industries and can usually adapt to specialized or custom product requirements."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {productCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-brand/30 hover:bg-brand-light/40 transition"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-2">{category.name}</h3>
              <p className="text-sm text-slate-600">{category.examples}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

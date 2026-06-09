import { PackageCheck } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'
import VisualPanel from '../components/VisualPanel.jsx'
import { products } from '../content.js'

const categoryNotes = [
  'Product complexity and factory specialization',
  'MOQ, tooling, packaging, and labeling requirements',
  'Target market compliance and certification needs',
  'Inspection criteria and acceptable quality limits',
]

const Products = () => (
  <>
    <section className="bg-brand-cloud py-16 text-brand-ink lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
        <div>
          <p id="products-eyebrow" className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">Products we source</p>
          <h1 id="products-title" className="mt-4 text-4xl font-bold tracking-tight text-brand-navy md:text-5xl">Product categories we commonly support</h1>
          <p id="products-desc" className="mt-6 text-lg leading-8 text-brand-slate">
            SSourcing China works across practical B2B product categories where supplier screening, sample review, inspection, and shipping coordination make a measurable difference.
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl shadow-soft">
          <VisualPanel
            id="products-packaging-warehouse-51f0aa"
            query="[products-desc] [products-title] [products-eyebrow]"
            ratio="4x3"
            width="900"
            alt="Warehouse packaging and sourced products in China"
            className="aspect-[4/3]"
          />
        </div>
      </div>
    </section>

    <section className="bg-white py-16 text-brand-ink lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Categories"
          title="Sourcing categories for importers, brands, and distributors"
          description="If your product is not listed, send the details. We will review whether it fits our supplier network and sourcing process."
          align="center"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article key={product} className="rounded-3xl border border-brand-steel bg-brand-cloud p-6 text-brand-ink shadow-sm">
              <PackageCheck className="h-8 w-8 text-brand-blue" />
              <h2 className="mt-5 text-lg font-bold text-brand-navy">{product}</h2>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-brand-navy py-16 text-white lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Evaluation"
          title="How we assess a product sourcing request"
          description="Not every project needs the same supplier type or inspection plan. We review the practical details before recommending next steps."
          align="center"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {categoryNotes.map((note) => (
            <div key={note} className="rounded-2xl bg-white p-5 text-sm font-semibold leading-6 text-brand-navy">{note}</div>
          ))}
        </div>
      </div>
    </section>
  </>
)

export default Products

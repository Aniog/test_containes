import { CheckCircle2 } from 'lucide-react'
import { productCategories } from '@/data/siteData'
import SectionHeading from './SectionHeading'

export default function ProductsSection() {
  return (
    <section className="bg-white py-16 text-slate-900 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Products we source"
            title="Practical sourcing support across common B2B categories"
            text="We help buyers evaluate supplier fit, production requirements, packaging, and export details for a wide range of product categories."
          />
          <p className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-slate-800">
            For highly regulated products, we help clarify documentation needs and supplier capabilities before buyers commit to orders.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {productCategories.map((category) => (
            <div key={category} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-900">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-blue-700" aria-hidden="true" />
              <span className="text-sm font-semibold text-slate-800">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Package, AlertCircle } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import { productGroups } from '../content.js'

export default function Products() {
  return (
    <main>
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Products we source" title="B2B product categories supported by SSourcing China">
            We focus on categories where clear specifications, supplier capability, packaging, quality control, and shipment coordination are important.
          </SectionHeader>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {productGroups.map((item) => (
              <article key={item} className="rounded-3xl border border-brand-border bg-brand-page p-6 text-brand-ink shadow-sm">
                <Package className="h-8 w-8 text-brand-blue" aria-hidden="true" />
                <h2 className="mt-5 text-xl font-semibold text-brand-navy">{item}</h2>
                <p className="mt-3 text-sm leading-7 text-brand-muted">Supplier search, quotation comparison, sample coordination, quality checkpoints, and export communication can be arranged depending on the project scope.</p>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-3xl border border-brand-border bg-brand-soft p-6 text-brand-ink md:p-8">
            <div className="flex gap-4">
              <AlertCircle className="mt-1 h-6 w-6 flex-none text-brand-amber" aria-hidden="true" />
              <div>
                <h2 className="text-xl font-semibold text-brand-navy">Regulated or high-risk products require extra review</h2>
                <p className="mt-2 leading-8 text-brand-muted">Products involving safety standards, food contact, medical use, batteries, chemicals, children’s goods, or strict certification requirements need careful documentation review before sourcing begins.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  )
}

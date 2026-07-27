import PageHero from '@/components/shared/PageHero.jsx'
import ProductsSection from '@/components/home/ProductsSection.jsx'
import CtaBand from '@/components/home/CtaBand.jsx'

const examples = [
  'OEM and ODM parts',
  'Retail packaging and displays',
  'Home and kitchen goods',
  'Industrial hardware',
  'Promotional products',
  'Assembled consumer products',
  'Private label accessories',
  'Export cartons and labels',
]

export default function ProductsWeSource() {
  return (
    <main>
      <PageHero
        eyebrow="Products we source"
        title="Supplier sourcing for practical B2B product categories"
        description="SSourcing China can help when the product requires supplier comparison, sample review, specification checks, packaging details, quality inspection, and export coordination."
      />
      <ProductsSection showAll />
      <section className="bg-sourcing-soft py-16 text-sourcing-ink md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 rounded-3xl border border-sourcing-line bg-white p-6 shadow-sm md:grid-cols-[0.9fr_1.1fr] md:p-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-sourcing-blue">Product scope</p>
              <h2 className="mt-3 text-3xl font-bold text-sourcing-navy">Not sure if your product is a fit?</h2>
              <p className="mt-4 leading-7 text-sourcing-muted">Send your product brief, photos, drawings, or supplier links. We will review whether sourcing, verification, inspection, or production follow-up support is suitable.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {examples.map((item) => (
                <p key={item} className="rounded-xl bg-sourcing-sky px-4 py-3 text-sm font-semibold text-sourcing-navy">{item}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  )
}

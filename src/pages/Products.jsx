import CtaSection from '@/components/sections/CtaSection'
import PageHero from '@/components/sections/PageHero'
import ProductsSection from '@/components/sections/ProductsSection'
import VisualBand from '@/components/sections/VisualBand'
import { productCategories } from '@/data/siteData'

export default function Products() {
  return (
    <main>
      <PageHero
        eyebrow="Products we source"
        title="Supplier sourcing across common export categories"
        text="We support overseas buyers sourcing manufactured goods from China, with attention to supplier fit, quality expectations, packaging, and shipment details."
      />
      <ProductsSection />
      <section className="bg-slate-50 py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category) => (
              <article key={category} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-950">{category}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  We can help compare supplier options, check basic capability, coordinate samples, and define inspection points for this category.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <VisualBand />
      <CtaSection />
    </main>
  )
}

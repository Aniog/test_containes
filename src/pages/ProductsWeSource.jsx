import PageIntro from '../components/common/PageIntro'
import ProductsGrid from '../components/sections/ProductsGrid'
import CTASection from '../components/sections/CTASection'

export default function ProductsWeSource() {
  return (
    <>
      <PageIntro eyebrow="Products we source" title="China sourcing support for defined product categories" text="We focus on products where supplier capability, quality expectations, packaging, compliance, and shipping requirements can be reviewed clearly." />
      <ProductsGrid />
      <section className="bg-stone-50 py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">Have a product not listed?</h2>
          <p className="mt-5 text-base leading-7 text-slate-600">Send the product details, target quantity, specifications, and destination. We will review whether it is suitable for China sourcing support.</p>
        </div>
      </section>
      <CTASection />
    </>
  )
}

import { CheckCircle2 } from 'lucide-react'
import CTAButton from '../components/CTAButton.jsx'
import PageHero from '../components/PageHero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { productCategories } from '../data/siteData.js'

const Products = () => {
  return (
    <main>
      <PageHero
        heroId="products-hero"
        eyebrow="Products we source"
        title="Product sourcing for physical goods and custom manufacturing"
        description="We help overseas buyers source finished goods, packaging, components, and custom products where supplier selection, samples, specifications, QC, and shipment details matter."
        imageId="products-samples-packaging-factory-62ac90"
        visualHint="product samples packaging components on factory table sourcing inspection China"
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Categories"
            title="Common product areas"
            description="If your category is not listed, send details. We will assess whether our supplier network and sourcing process fit the request."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category) => (
              <div key={category} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-blue-700" aria-hidden="true" />
                <span className="text-sm font-semibold leading-6 text-slate-800">{category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Better RFQs"
              title="What helps us source more accurately"
              description="Good supplier matching depends on clear requirements. Even rough information is useful at the first step."
            />
            <div className="mt-8">
              <CTAButton />
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {['Product photos, drawings, or sample links', 'Materials, dimensions, function, and packaging', 'Target quantity, MOQ expectations, and budget range', 'Compliance, certificates, or market requirements', 'Preferred shipping destination or warehouse', 'Current supplier problems or quality concerns'].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 text-sm font-medium leading-6 text-slate-800 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Products

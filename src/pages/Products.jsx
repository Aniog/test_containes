import { PackageCheck } from 'lucide-react'
import PageHero from '../components/common/PageHero.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import { productCategories } from '../data/siteContent.js'

const Products = () => (
  <main className="bg-white text-slate-950">
    <PageHero
      eyebrow="Products we source"
      title="China product sourcing for finished goods, packaging, and components"
      description="We support overseas buyers across many categories where supplier capability, sample quality, packaging, certifications, and export coordination need careful attention."
    />

    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Categories"
          title="Common categories we help buyers source"
          description="If your product is not listed, send the details. We will review whether the category is suitable for our supplier network and sourcing process."
          align="center"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((category) => (
            <article key={category} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-slate-950">
              <PackageCheck className="h-7 w-7 text-blue-700" />
              <h2 className="mt-5 text-lg font-bold leading-7 text-slate-950">{category}</h2>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-slate-50 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        {[
          { title: 'Custom products', text: 'For custom orders, we help clarify drawings, samples, packaging, tolerances, and production requirements before supplier comparison.' },
          { title: 'Private label goods', text: 'For branded products, we pay close attention to logo placement, labeling, packaging files, carton marks, and approved samples.' },
          { title: 'Multi-supplier projects', text: 'For orders involving several suppliers, we coordinate timelines, inspection windows, carton details, and shipping handover.' },
        ].map((item) => (
          <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  </main>
)

export default Products

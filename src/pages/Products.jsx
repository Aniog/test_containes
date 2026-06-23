import { CheckCircle2 } from 'lucide-react'
import CTASection from '../components/site/CTASection'
import PageHero from '../components/site/PageHero'
import SectionHeader from '../components/site/SectionHeader'
import VisualCard from '../components/site/VisualCard'
import { productCategories } from '../data/siteContent'

const Products = () => (
  <main className="bg-white text-slate-900">
    <PageHero
      eyebrow="Products we source"
      title="Product sourcing support across practical B2B and consumer categories"
      description="SSourcing China helps overseas buyers search, compare, verify, and follow up with suppliers for product categories where China has strong manufacturing capability."
    />
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Categories"
          title="Common product categories"
          description="If your product is not listed, send your specifications and we can review whether the project is a good fit."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((category) => (
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-900" key={category}>
              <CheckCircle2 className="h-6 w-6 text-teal-700" />
              <h2 className="mt-4 text-lg font-semibold text-slate-950">{category}</h2>
            </article>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          align="center"
          eyebrow="Visual sourcing areas"
          title="Factory, QC, packaging, and logistics checks"
          description="Product sourcing is not only finding a name on a supplier list. The details around production, quality, packaging, and shipping matter."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <VisualCard
            imageId="products-factory-floor-31e8dd"
            query="[products-factory-desc] [products-factory-title]"
            title="Factory capability"
            description="Check whether supplier production capability matches your product, quantity, and export expectations."
          />
          <VisualCard
            imageId="products-qc-inspection-02bb94"
            query="[products-qc-desc] [products-qc-title]"
            title="Quality inspection"
            description="Review samples, production details, packaging, labeling, and pre-shipment inspection points."
          />
          <VisualCard
            imageId="products-logistics-container-a9c0e2"
            query="[products-logistics-desc] [products-logistics-title]"
            title="Logistics coordination"
            description="Coordinate supplier delivery timing, export documents, cargo handover, and consolidation when needed."
          />
        </div>
        <h3 id="products-factory-title" className="sr-only">Factory capability</h3>
        <p id="products-factory-desc" className="sr-only">China factory production floor and manufacturing capability for overseas buyers</p>
        <h3 id="products-qc-title" className="sr-only">Quality inspection</h3>
        <p id="products-qc-desc" className="sr-only">Quality control inspection of products, packaging, labels, and shipment readiness</p>
        <h3 id="products-logistics-title" className="sr-only">Logistics coordination</h3>
        <p id="products-logistics-desc" className="sr-only">Shipping containers, export logistics, freight handover, and China supplier delivery coordination</p>
      </div>
    </section>
    <CTASection />
  </main>
)

export default Products

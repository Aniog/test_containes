import PageHeader from '@/components/common/PageHeader.jsx?ssourcing=20260728'
import FinalCTA from '@/components/common/FinalCTA.jsx?ssourcing=20260728'
import ProductsSection from '@/components/home/ProductsSection.jsx?ssourcing=20260728'
import SectionHeading from '@/components/common/SectionHeading.jsx?ssourcing=20260728'
import { products } from '@/data/siteContent.js'

const Products = () => (
  <>
    <PageHeader
      eyebrow="Products we source"
      title="Product categories supported by SSourcing China"
      description="We support practical China sourcing across consumer goods, packaging, components, soft goods, furniture, and custom OEM projects where supplier checks and QC matter."
      imageId="products-export-cartons-56ac2d"
      caption="Product sourcing support includes specifications, packaging details, labels, carton marks, and shipment readiness."
    />
    <ProductsSection />
    <section className="bg-white py-16 text-slate-950 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Category fit"
          title="Best suited for specification-driven B2B purchases"
          description="If your product requires supplier comparison, material checks, packaging confirmation, or factory follow-up, local sourcing support can be useful."
          align="center"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {products.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm font-semibold leading-6 text-slate-800">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
    <FinalCTA />
  </>
)

export default Products

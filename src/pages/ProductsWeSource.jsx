import CTASection from '../components/shared/CTASection'
import ImageLoadPage from '../components/shared/ImageLoadPage'
import PageHero from '../components/shared/PageHero'
import ProductsSection from '../components/shared/ProductsSection'
import SectionHeader from '../components/shared/SectionHeader'
import { productCategories } from '../data/siteContent'

const ProductsWeSource = () => (
  <ImageLoadPage>
    <PageHero
      alt="China product sourcing categories and factory production"
      description="SSourcing China supports overseas buyers across consumer goods, packaging, electronics accessories, industrial parts, textiles, bags, and custom promotional products."
      eyebrow="Products we source"
      imageId="products-page-hero-factory-categories-23ad7c"
      title="China product sourcing for practical B2B categories"
    />
    <ProductsSection />
    <section className="bg-slate-50 py-16 text-slate-950 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          align="center"
          eyebrow="Product fit"
          title="What helps us evaluate your product request"
          description="Detailed product information helps us approach suitable factories and compare supplier responses more effectively."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {['Specifications or reference photos', 'Target quantity and market', 'Packaging and labeling needs', 'Quality standard or inspection points'].map((item) => (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm" key={item}>
              <p className="text-lg font-semibold text-slate-950">{item}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">Include this in your inquiry so we can review supplier fit and sourcing feasibility.</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 text-slate-700 shadow-sm md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Examples</p>
          <p className="mt-4 text-base leading-7">
            Common categories include {productCategories.map((item) => item.title.toLowerCase()).join(', ')}. We review each request based on product complexity, available supplier options, quality requirements, and export coordination needs.
          </p>
        </div>
      </div>
    </section>
    <CTASection />
  </ImageLoadPage>
)

export default ProductsWeSource

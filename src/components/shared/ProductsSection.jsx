import { productCategories } from '../../data/siteContent'
import SectionHeader from './SectionHeader'
import StockImage from './StockImage'

const ProductsSection = () => (
  <section className="bg-white py-16 text-slate-950 md:py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <SectionHeader
        eyebrow="Products we source"
        title="Common product categories for China sourcing projects"
        description="We support buyers across many practical B2B categories. If your product is not listed, send details and we will review whether we can help."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {productCategories.map((product) => (
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-950 shadow-sm" key={product.id}>
            <StockImage
              alt={product.title}
              className="h-52 w-full object-cover"
              id={product.imgId}
              query={`[${product.descId}] [${product.titleId}] [products-section-title]`}
              ratio="4x3"
              width="700"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold tracking-tight text-slate-950" id={product.titleId}>{product.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600" id={product.descId}>{product.description}</p>
            </div>
          </article>
        ))}
      </div>
      <h2 className="sr-only" id="products-section-title">China sourcing product categories factory production</h2>
    </div>
  </section>
)

export default ProductsSection

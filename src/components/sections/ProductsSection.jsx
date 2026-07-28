import { products } from '@/data/siteData'
import SectionHeader from '@/components/shared/SectionHeader'

const ProductsSection = () => (
  <section className="bg-white py-16 text-brand-navy md:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Products we source"
        title="Sourcing support across common B2B product categories"
        description="We focus on products where supplier qualification, specification clarity, sampling, and quality inspection can reduce purchasing risk."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <article key={product.id} className="overflow-hidden rounded-3xl border border-brand-line bg-white text-brand-navy shadow-soft">
            <img
              alt={product.title}
              className="h-48 w-full object-cover"
              data-strk-img-id={product.imgId}
              data-strk-img={`[${product.descId}] [${product.titleId}] [products-section-title]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="p-5">
              <h3 id={product.titleId} className="text-lg font-bold text-brand-navy">{product.title}</h3>
              <p id={product.descId} className="mt-3 text-sm leading-6 text-brand-slate">{product.description}</p>
            </div>
          </article>
        ))}
      </div>
      <h2 id="products-section-title" className="sr-only">Products We Source</h2>
    </div>
  </section>
)

export default ProductsSection

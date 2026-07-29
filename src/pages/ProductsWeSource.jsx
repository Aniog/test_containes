import PageHero from '@/components/site/PageHero'
import SectionHeading from '@/components/site/SectionHeading'
import ProductGrid from '@/components/site/ProductGrid'
import { productCategories } from '@/content/siteContent'

const ProductsWeSource = () => {
  return (
    <div>
      <PageHero
        eyebrow="Products we source"
        title="Export-oriented product categories supported by our sourcing team"
        description="We help global buyers source practical consumer, industrial, and packaging-related product categories with supplier screening and factory-side follow-up."
      />

      <section className="py-16 md:py-20">
        <div className="container-shell space-y-10">
          <SectionHeading
            eyebrow="Categories"
            title="Product sourcing support across multiple sectors"
            description="If your product needs custom specifications, packaging requirements, or production follow-up, we can assess whether it fits our sourcing scope."
          />
          <ProductGrid items={productCategories} />
        </div>
      </section>

      <section className="bg-brand-surface py-16 md:py-20">
        <div className="container-shell grid gap-6 lg:grid-cols-3">
          {[
            'Private label and brand packaging projects',
            'Standard catalog products with supplier comparison needs',
            'Repeat purchase programs requiring consistent follow-up',
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-brand-line bg-white p-6 shadow-card text-base leading-7 text-brand-slate md:p-7">
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductsWeSource

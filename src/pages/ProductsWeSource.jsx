import PageHero from '@/components/shared/PageHero'
import { primaryCta, productCategories } from '@/content/siteContent'

const ProductsWeSource = () => {
  return (
    <div>
      <PageHero
        eyebrow="Products We Source"
        title="Product categories where buyers often need dependable sourcing support"
        description="We support a range of practical consumer and industrial categories, especially where supplier fit, quality consistency, packaging, and execution need closer attention."
        primaryAction={{ label: primaryCta, to: '/contact#inquiry-form' }}
        secondaryAction={{ label: 'Discuss your product', to: '/contact#inquiry-form' }}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 md:grid-cols-2 xl:grid-cols-4 lg:px-8">
          {productCategories.map((category, index) => (
            <article key={category.title} className="rounded-[2rem] border border-site-border bg-white p-6 shadow-sm md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Category {String(index + 1).padStart(2, '0')}</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-site-ink">{category.title}</h2>
              <p className="mt-4 text-base leading-7 text-site-muted">{category.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-site-border bg-site-surface py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="rounded-[2rem] border border-site-border bg-white p-6 shadow-sm md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Need a fit check?</p>
            <h2 id="products-title" className="mt-4 text-3xl font-semibold tracking-tight text-site-ink">Some projects are straightforward. Others need closer supplier evaluation.</h2>
            <p id="products-desc" className="mt-4 text-base leading-7 text-site-muted">
              If your product has custom packaging, tight quality requirements, export compliance needs, or multiple supplier options, it usually benefits from a more structured sourcing process.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-site-border bg-white shadow-sm">
            <img
              alt="Sample room and sourced consumer products"
              className="h-full w-full object-cover"
              data-strk-img-id="products-image-01"
              data-strk-img="[products-desc] [products-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductsWeSource

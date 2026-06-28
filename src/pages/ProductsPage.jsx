import PageHero from '@/components/PageHero.jsx'
import SectionHeading from '@/components/SectionHeading.jsx'
import { products } from '@/data/siteContent.js'

function ProductsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Products we source"
        title="Product categories commonly sourced through China supply networks"
        description="SSourcing China supports product categories where supplier comparison, factory credibility, inspection, and order coordination are important."
      >
        <div className="space-y-4 text-sm leading-7 text-ink">
          <p>
            Product fit depends on specifications, compliance needs, order volume, packaging requirements, and delivery timing.
          </p>
          <p className="text-muted">
            The categories below are examples of the types of products buyers commonly ask us to review.
          </p>
        </div>
      </PageHero>

      <section className="bg-canvas py-16 md:py-24">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Categories"
            title="Examples of sourcing categories"
            description="If your product is not listed, you can still send your brief for a feasibility review."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <article key={product.id} className="overflow-hidden rounded-3xl border border-border-soft bg-surface shadow-sm">
                <img
                  alt={product.title}
                  className="h-60 w-full object-cover"
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="space-y-3 p-6">
                  <h2 id={product.titleId} className="text-xl font-semibold tracking-tight text-ink">
                    {product.title}
                  </h2>
                  <p id={product.descId} className="text-sm leading-7 text-muted">
                    {product.description}
                  </p>
                  <p className="text-sm leading-7 text-ink">{product.notes}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProductsPage

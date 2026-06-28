import CallToActionBanner from '@/components/CallToActionBanner'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import { productCategories } from '@/data/siteContent'

const sourcingNotes = [
  'Product feasibility depends on specifications, target price, quantity, compliance needs, and packaging complexity.',
  'Custom projects often require sampling, supplier comparison, and packaging review before production is confirmed.',
  'If your product category is not listed, send your requirements and we can review whether it fits our sourcing scope.',
]

const Products = () => {
  return (
    <main>
      <PageHero
        slug="products"
        eyebrow="Products we source"
        title="Product categories we commonly support from China"
        description="We help overseas buyers source practical product categories as well as custom projects that need supplier identification, quality checks, and production follow-up."
        secondaryTo="/contact"
        secondaryLabel="Request product sourcing support"
        imageAlt="Products sourced from China, packaging, and supplier coordination"
        imageCaption="Consumer goods, packaging projects, household items, and custom sourcing requirements supported from China."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Categories"
            title="Examples of what buyers ask us to source"
            description="The list below reflects common categories, not a fixed catalog. Most inquiries are reviewed based on commercial fit and operational feasibility."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productCategories.map((category, index) => {
              const titleId = `product-card-${index}-title`
              const descriptionId = `product-card-${index}-desc`

              return (
                <article key={category.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                  <img
                    alt={category.title}
                    className="h-56 w-full object-cover"
                    data-strk-img-id={`product-card-image-${index}-n8z4wq`}
                    data-strk-img={`[${descriptionId}] [${titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="900"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="p-6">
                    <h2 id={titleId} className="text-xl font-semibold text-slate-900">
                      {category.title}
                    </h2>
                    <p id={descriptionId} className="mt-3 text-sm leading-7 text-slate-600">
                      {category.description}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {sourcingNotes.map((note) => (
            <div key={note} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-base leading-7 text-slate-700">
              {note}
            </div>
          ))}
        </div>
      </section>

      <CallToActionBanner />
    </main>
  )
}

export default Products

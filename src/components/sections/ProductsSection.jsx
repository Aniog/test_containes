import SectionHeader from '../SectionHeader'
import { productCategories } from '../../data/siteContent'

export default function ProductsSection({ compact = false }) {
  const categories = compact ? productCategories.slice(0, 4) : productCategories

  return (
    <section id="products" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Products we source"
          id="products-section-title"
          title="Product categories handled with supplier screening and QC awareness"
          description="We work across many B2B and consumer categories where supplier fit, specification clarity, and production control matter."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <article key={category.title} className="group overflow-hidden rounded-3xl border border-sourcing-mist bg-sourcing-cloud text-sourcing-ink">
              <img
                alt={category.title}
                className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
                data-strk-img-id={category.imageId}
                data-strk-img={`[${category.descId}] [${category.titleId}] [products-section-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="p-6">
                <h3 id={category.titleId} className="text-xl font-bold text-sourcing-navy">{category.title}</h3>
                <p id={category.descId} className="mt-3 text-sm leading-6 text-sourcing-muted">{category.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

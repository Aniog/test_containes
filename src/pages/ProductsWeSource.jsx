import { Link } from 'react-router-dom'
import PageHero from '@/components/site/PageHero'
import ProductCard from '@/components/site/ProductCard'
import SectionHeading from '@/components/site/SectionHeading'
import { primaryCtaLabel, productCategories } from '@/data/siteContent'

const ProductsWeSource = () => {
  return (
    <>
      <PageHero
        eyebrow="Products we source"
        title="Product categories where buyers often need stronger supplier screening and QC support"
        description="We support a range of common B2B sourcing categories where supplier verification, packaging control, production visibility, and shipment readiness matter."
        actions={[
          <Link
            key="contact"
            to="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-teal-600 px-6 text-sm font-semibold text-white transition hover:bg-teal-700"
          >
            {primaryCtaLabel}
          </Link>,
        ]}
        visual={
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <img
              alt="Factory production and packaging line"
              className="h-full min-h-[340px] w-full object-cover"
              data-strk-img-id="products-hero-image-59d2ac"
              data-strk-img="[products-hero-visual-context] [products-hero-description] [products-hero-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="p-6">
              <p id="products-hero-visual-context" className="sr-only">
                China factory production packaging line cartons export preparation and finished goods
              </p>
              <h2 id="products-hero-title" className="text-lg font-semibold text-slate-900">
                Category fit is discussed before supplier outreach starts
              </h2>
              <p id="products-hero-description" className="mt-3 text-sm leading-7 text-slate-600">
                Share the product details first so we can confirm whether the sourcing
                scope fits the category and supply situation.
              </p>
            </div>
          </div>
        }
      />

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Categories"
            title="Examples of product groups buyers commonly ask us about"
            description="These categories are examples rather than strict limits. The best approach is to send your product brief and sourcing objective."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productCategories.map((category) => (
              <ProductCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            {
              title: 'Best fit',
              description:
                'Categories with several supplier options, clear production processes, and standard QC checkpoints are usually the most efficient to support.',
            },
            {
              title: 'Needs discussion first',
              description:
                'Specialized or highly regulated products may require more review before confirming the sourcing approach.',
            },
            {
              title: 'What helps most',
              description:
                'Reference photos, target specs, quantity estimates, and market requirements make it easier to evaluate supplier fit.',
            },
          ].map((item) => (
            <article key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default ProductsWeSource

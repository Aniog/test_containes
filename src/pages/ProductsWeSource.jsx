import { Link } from 'react-router-dom'
import PageHero from '../components/shared/PageHero.jsx'
import ContentCard from '../components/shared/ContentCard.jsx'
import SectionHeading from '../components/shared/SectionHeading.jsx'
import SectionShell from '../components/shared/SectionShell.jsx'
import { productCategories } from '../siteContent.js'

const ProductsWeSource = () => {
  return (
    <main>
      <PageHero
        eyebrow="Products We Source"
        title="Product categories where supplier fit and execution matter"
        description="SSourcing China supports overseas buyers across selected consumer, packaging, industrial, and project-based categories where supplier screening and follow-up are commercially important."
        secondaryHref="/case-studies"
        secondaryLabel="View Case Studies"
      />

      <SectionShell>
        <SectionHeading
          eyebrow="Categories"
          title="Representative categories we help buyers source from China"
          description="The list below shows the types of product lines we commonly support. Final supplier selection still depends on your product brief, quality requirements, compliance needs, and order profile."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {productCategories.map((category, index) => {
            const Icon = category.icon
            const titleId = `products-category-title-${index + 1}`
            const descId = `products-category-desc-${index + 1}`

            return (
              <ContentCard key={category.title} className="overflow-hidden">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 id={titleId} className="text-xl font-semibold text-brand-navy">{category.title}</h2>
                    <p id={descId} className="mt-3 text-sm leading-7 text-slate-600">{category.description}</p>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-sky text-brand-blue">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <img
                  className="mt-6 h-56 w-full rounded-2xl object-cover"
                  alt={category.title}
                  data-strk-img-id={`products-category-image-${index + 1}-a3c5e7`}
                  data-strk-img={`[${descId}] [${titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </ContentCard>
            )
          })}
        </div>
        <div className="mt-12 rounded-3xl border border-surface-border bg-surface-muted p-8 md:p-10">
          <h3 className="text-2xl font-semibold tracking-tight text-brand-navy">
            Need help assessing whether your product is a fit?
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Share your item details, target market, expected volumes, and the level of support you need. We can advise on the most relevant sourcing, verification, quality, or shipping steps.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-navy"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>
      </SectionShell>
    </main>
  )
}

export default ProductsWeSource

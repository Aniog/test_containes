import CTASection from '../components/common/CTASection.jsx'
import PageHero from '../components/common/PageHero.jsx'
import SectionIntro from '../components/common/SectionIntro.jsx'
import { productCategories } from '../siteContent.js'
import { usePageMeta } from '../lib/usePageMeta.js'

const ProductsWeSource = () => {
  usePageMeta(
    'Products We Source | SSourcing China',
    'Review representative product categories that SSourcing China supports for supplier sourcing, verification, inspection, and order coordination.',
  )

  return (
    <>
      <PageHero
        eyebrow="Products We Source"
        title="Representative product categories we help overseas buyers source"
        description="We support product categories that require practical supplier matching, verification, quality oversight, and export coordination rather than generic catalog buying."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Category examples"
            title="Product sourcing support across multiple B2B categories"
            description="If your product is not listed, contact us with the item details. We can review fit based on sourcing complexity, supplier landscape, and quality requirements."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productCategories.map((category, index) => {
              const titleId = `products-page-title-${index}`
              const descId = `products-page-desc-${index}`

              return (
                <article key={category.title} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={category.title}
                    className="h-56 w-full object-cover"
                    data-strk-img-id={`products-page-img-${index}-b1q7`}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="900"
                  />
                  <div className="p-6">
                    <h2 id={titleId} className="text-xl font-semibold text-slate-900">{category.title}</h2>
                    <p id={descId} className="mt-3 text-base leading-7 text-slate-600">{category.description}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

export default ProductsWeSource

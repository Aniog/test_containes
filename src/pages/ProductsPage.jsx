import CTASection from '@/components/site/CTASection'
import PageIntro from '@/components/site/PageIntro'
import { productCategories } from '@/data/siteContent'
import { usePageMeta } from '@/lib/usePageMeta'

const ProductsPage = () => {
  usePageMeta(
    'Products We Source | SSourcing China',
    'See common product categories sourced through SSourcing China, including packaging, consumer goods, soft goods, hardware, and custom OEM projects.'
  )

  return (
    <main>
      <PageIntro
        description="We support projects across a range of export-oriented product categories. The right approach depends on the product, order size, specifications, and compliance needs."
        eyebrow="Products we source"
        idPrefix="products-page"
        points={[
          'Export-oriented product categories',
          'Supplier qualification where capability matters',
          'Useful for repeat-buy and custom OEM projects',
        ]}
        title="Product categories commonly sourced through China supplier networks"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 xl:grid-cols-3 lg:px-8">
          {productCategories.map((category) => (
            <article
              className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 text-slate-900 shadow-sm"
              key={category.slug}>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                {category.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {category.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {category.examples.map((example) => (
                  <span
                    className="rounded-full bg-white px-3 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200"
                    key={example}>
                    {example}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
            Product fit matters
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            If your project is highly customized, the key question is usually supplier capability, not only unit price
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
            Custom tooling, branding, packaging, certifications, and tolerance requirements should be checked early so the sourcing path is realistic from the start.
          </p>
        </div>
      </section>

      <CTASection />
    </main>
  )
}

export default ProductsPage

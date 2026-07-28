import { productCategories } from '@/content/siteContent'
import PageHero from '@/components/shared/PageHero'
import SectionHeading from '@/components/shared/SectionHeading'

const ProductsWeSource = () => {
  return (
    <div className="bg-slate-50 text-slate-900">
      <PageHero
        eyebrow="Products We Source"
        title="Product categories often sourced for overseas buyers"
        description="We help buyers across practical B2B product categories where supplier fit, packaging, quality consistency, and production follow-up matter."
        titleId="products-hero-title"
        descriptionId="products-hero-description"
        visualId="products-hero-bg-74df50"
        visualBadge="Product sourcing, factory screening, packaging, and export preparation"
        visualNote="Different product categories require different supplier screening criteria, quality checkpoints, and packaging follow-up."
        chips={productCategories.map((item) => item.title)}
        primaryCta={{ label: 'Get a Free Sourcing Quote', to: '/contact' }}
        secondaryCta={{ label: 'View Services', to: '/services' }}
      />

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <SectionHeading
          eyebrow="Categories"
          title="Examples of product groups we commonly support"
          description="The list below is intended to show sourcing range rather than limit it. We can also review adjacent categories when requirements are clear."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {productCategories.map((category) => (
            <article
              key={category.id}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <img
                alt={category.title}
                className="h-56 w-full object-cover"
                data-strk-img-id={`${category.imgId}-page`}
                data-strk-img={`[${category.descId}] [${category.titleId}] [products-page-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="space-y-4 p-6">
                <h2 id={category.titleId} className="text-xl font-semibold text-slate-900">
                  {category.title}
                </h2>
                <p id={category.descId} className="text-base leading-7 text-slate-600">
                  {category.description}
                </p>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                    Examples
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {category.examples.map((example) => (
                      <span
                        key={example}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <h2 id="products-page-title" className="sr-only">
          Product categories often sourced for overseas buyers
        </h2>
      </section>
    </div>
  )
}

export default ProductsWeSource

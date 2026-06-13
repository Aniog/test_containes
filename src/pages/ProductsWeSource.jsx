import PageHero from '@/components/common/PageHero'
import SectionHeader from '@/components/common/SectionHeader'
import { productCategories } from '@/data/siteContent'
import { usePageMeta } from '@/hooks/usePageMeta'

const ProductsWeSource = () => {
  usePageMeta({
    title: 'Products We Source | SSourcing China',
    description:
      'Review common product categories sourced with supplier verification, quality inspection, and shipping support from SSourcing China.',
  })

  return (
    <div>
      <PageHero
        eyebrow="Products we source"
        title="Product categories commonly sourced with our support"
        description="We help buyers source a wide range of products from China, with attention to supplier fit, quality expectations, and shipment readiness."
        titleId="products-page-title"
        descriptionId="products-page-description"
        visual={
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 p-4 shadow-sm">
            <div
              className="absolute inset-0 opacity-0"
              data-strk-bg-id="products-page-bg-d51f84"
              data-strk-bg="[products-page-description] [products-page-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="1200"
            />
            <div className="relative min-h-[360px] rounded-[1.5rem] bg-slate-900/35 p-8">
              <div className="flex h-full items-end">
                <p className="max-w-md text-sm leading-7 text-white/90">
                  Consumer goods, industrial components, packaging, furniture, and custom products supported with sourcing follow-up in China.
                </p>
              </div>
            </div>
          </div>
        }
      />

      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Categories"
            title="Examples of sourcing coverage"
            description="These examples illustrate the types of products buyers often ask us to support."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productCategories.map((category, index) => (
              <article key={category.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <img
                  alt={category.title}
                  className="h-56 w-full object-cover"
                  data-strk-img-id={`products-page-item-${index}-q7${index}`}
                  data-strk-img={`[products-page-item-${index}-desc] [products-page-item-${index}-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-slate-950" id={`products-page-item-${index}-title`}>
                    {category.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600" id={`products-page-item-${index}-desc`}>
                    {category.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Need support with a more specialized product?</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Buyers often contact us with custom or niche products that require supplier research, specification clarification, and closer production control.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">What helps us review a product inquiry</h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-700">
              <li>Product photos, drawings, or links</li>
              <li>Materials, size, finish, and packaging requirements</li>
              <li>Estimated order volume and target market</li>
              <li>Relevant compliance or testing expectations</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductsWeSource

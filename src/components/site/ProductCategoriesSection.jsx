import { productCategories } from '@/data/siteContent'
import SectionHeading from '@/components/site/SectionHeading'

const ProductCategoriesSection = () => {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Products we source"
          title="Typical product categories we help buyers source from China"
          description="Projects vary by buyer and product complexity, but these are common sourcing areas where supplier assessment and production follow-up are especially important."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {productCategories.map((category) => (
            <article
              className="rounded-[2rem] border border-slate-200 bg-white p-6 text-slate-900 shadow-sm"
              key={category.slug}>
              <h3 className="text-xl font-semibold text-slate-950">{category.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {category.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.examples.map((example) => (
                  <span
                    className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700"
                    key={example}>
                    {example}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductCategoriesSection

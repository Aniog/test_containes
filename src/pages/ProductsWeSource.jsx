import PageHeader from '@/components/common/PageHeader'
import SectionHeading from '@/components/common/SectionHeading'
import { productCategories } from '@/data/siteContent'

const ProductsWeSource = () => {
  return (
    <>
      <PageHeader
        baseId="products-page"
        eyebrow="Products we source"
        title="Practical product categories buyers commonly source through China"
        description="From everyday consumer goods to packaging and OEM projects, support is tailored to the sourcing task and product complexity."
      />

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Categories"
            title="Product types frequently requested by overseas buyers"
            description="These are representative categories rather than a fixed limit. If your project is more specialized, the inquiry can still be reviewed case by case."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {productCategories.map((category) => (
              <article
                key={category.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h2 className="text-xl font-semibold text-slate-900">{category.title}</h2>
                <p className="mt-4 text-sm leading-6 text-slate-600">{category.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.examples.map((example) => (
                    <span
                      key={example}
                      className="rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductsWeSource

import SectionHeader from '@/components/SectionHeader'
import CtaBanner from '@/components/CtaBanner'
import { productCategories } from '@/data/siteData'

export default function Products() {
  return (
    <>
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="section-container text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Products We Source</h1>
          <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            We source a wide range of products from verified manufacturers across China. If you do not see your category, contact us.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <SectionHeader
            title="Industries and product categories"
            subtitle="From components to finished goods, we help you find the right factory."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category) => (
              <article key={category.id} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition">
                <div className="h-40 bg-slate-200 relative">
                  <img
                    data-strk-img-id={`product-cat-${category.id}-4b8e1d`}
                    data-strk-img={`[product-cat-title-${category.id}] [product-cat-examples-${category.id}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 id={`product-cat-title-${category.id}`} className="text-lg font-bold text-slate-900 mb-1">{category.name}</h3>
                  <p id={`product-cat-examples-${category.id}`} className="text-sm text-slate-600">{category.examples}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-4 text-center">Can not find your product?</h2>
            <p className="text-slate-600 leading-relaxed text-center mb-8">
              We regularly source custom and niche products outside these categories. Share your specs and we will let you know if we can help.
            </p>
            <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8">
              <ul className="space-y-3 text-slate-700">
                {[
                  'Custom OEM and ODM projects',
                  'Private-label products',
                  'Components and assemblies',
                  'Eco-friendly or certified materials',
                  'Low-volume test orders',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Tell us what product you need"
        subtitle="We will check our network and get back to you with options."
      />
    </>
  )
}

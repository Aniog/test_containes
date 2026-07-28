import SectionHeader from '@/components/common/SectionHeader'
import VisualImage from '@/components/common/VisualImage'
import { productCategories } from '@/data/siteContent'

export default function ProductsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Products we source"
          title="Support for industrial, consumer, packaging, and component sourcing"
          description="We focus on products where supplier capability, specifications, quality control, and export coordination need careful management."
          align="center"
          id="products-section-title"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((category) => (
            <article key={category.id} className="overflow-hidden rounded-3xl border border-brand-line bg-white text-slate-900 shadow-sm">
              <div className="h-48 bg-brand-sky">
                <VisualImage
                  alt={category.title}
                  imgId={category.imageId}
                  query={`[${category.descId}] [${category.titleId}] [products-section-title]`}
                  ratio="4x3"
                  width="700"
                />
              </div>
              <div className="p-6">
                <h3 id={category.titleId} className="text-lg font-semibold text-brand-navy">{category.title}</h3>
                <p id={category.descId} className="mt-3 text-sm leading-6 text-slate-600">{category.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

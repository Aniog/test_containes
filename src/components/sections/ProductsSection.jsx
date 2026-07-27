import { productCategories } from '@/data/siteData'
import SectionIntro from './SectionIntro'

export default function ProductsSection() {
  return (
    <section className="bg-brand-mist py-16 text-brand-navy md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Products we source"
          title="Practical support across common China sourcing categories"
          description="SSourcing China focuses on categories where supplier screening, sample control, production follow-up, and inspection planning make a meaningful difference."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((product) => (
            <article key={product.id} className="overflow-hidden rounded-2xl border border-brand-line bg-white text-brand-navy shadow-sm">
              <img
                alt={product.title}
                className="h-52 w-full object-cover"
                data-strk-img-id={product.imgId}
                data-strk-img={`[${product.descId}] [${product.titleId}] [products-section-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="p-6">
                <h3 id={product.titleId} className="text-xl font-bold tracking-tight">{product.title}</h3>
                <p id={product.descId} className="mt-3 text-sm leading-7 text-brand-slate">{product.description}</p>
              </div>
            </article>
          ))}
        </div>
        <p id="products-section-title" className="sr-only">Products sourced from reliable China suppliers with quality control and export coordination</p>
      </div>
    </section>
  )
}

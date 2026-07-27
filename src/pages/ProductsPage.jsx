import PageHero from '@/components/shared/PageHero.jsx'
import SectionHeading from '@/components/shared/SectionHeading.jsx'
import { productCategories } from '@/content/siteContent.js'

function ProductsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Products We Source"
        title="Product categories where sourcing support matters"
        titleId="products-hero-title"
        description="We help B2B buyers source a range of products from China, especially when supplier selection, quality visibility, and follow-up are important."
        descriptionId="products-hero-desc"
        primaryAction={{ label: 'Get a Free Sourcing Quote', to: '/contact#inquiry-form' }}
        secondaryAction={{ label: 'Contact Us', to: '/contact' }}
        imageId="products-hero-bg-f2d1a7"
      />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Categories"
          title="Examples of products we commonly help buyers source"
          description="The right sourcing approach depends on the product type, quality expectations, packaging, quantity, and shipment requirements."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {productCategories.map((category) => (
            <article key={category.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-950">{category.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-700">{category.note}</p>
              <ul className="mt-6 space-y-3">
                {category.examples.map((example) => (
                  <li key={example} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800 ring-1 ring-slate-200">
                    {example}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductsPage

import CTASection from '@/components/site/CTASection'
import ProductGrid from '@/components/site/ProductGrid'
import PageHero from '@/components/shared/PageHero'
import SectionHeader from '@/components/shared/SectionHeader'
import { productCategories } from '@/data/siteContent'

const notes = [
  {
    title: 'Best fit projects',
    description:
      'Products that need supplier comparison, sample review, production follow-up, or inspection support before shipment.',
  },
  {
    title: 'Information to share',
    description:
      'Product specs, materials, target quantity, packaging needs, target market, and any compliance or quality requirements.',
  },
  {
    title: 'If your category is not listed',
    description:
      'You can still send the inquiry. We will review the product scope and confirm whether it fits our sourcing network and workflow.',
  },
]

const ProductsWeSource = () => {
  return (
    <div>
      <PageHero
        eyebrow="Products we source"
        title="Product categories we commonly support"
        description="SSourcing China works across practical B2B sourcing categories where supplier reliability, process control, and communication quality matter to overseas buyers."
        points={['Consumer goods', 'Packaging', 'Light industrial items']}
        imageId="products-hero-a72f4b"
        titleId="products-hero-title"
        descriptionId="products-hero-description"
        imagePrompt="organized China factory sample room with export housewares packaging and consumer products"
        imagePromptId="products-hero-image-prompt"
        imageQuery="[products-hero-image-prompt]"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProductGrid items={productCategories} />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Category fit"
            title="What helps us assess supplier and project fit faster"
            description="A stronger first brief helps narrow supplier search and identify verification or inspection priorities earlier."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {notes.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure whether your product category is a good fit?"
        description="Send us the product details and buying context. We will review the sourcing scope and confirm the next step."
      />
    </div>
  )
}

export default ProductsWeSource

import CTASection from '@/components/common/CTASection.jsx'
import ImageCard from '@/components/common/ImageCard.jsx'
import PageHero from '@/components/common/PageHero.jsx'
import SectionHeading from '@/components/common/SectionHeading.jsx'
import { usePageSEO } from '@/hooks/usePageSEO.js'
import { useStrkImages } from '@/hooks/useStrkImages.js'
import { productCategories } from '@/data/site-content.js'

const ProductsWeSource = () => {
  usePageSEO(
    'Products We Source | China Product Sourcing Categories | SSourcing China',
    'Discover the product categories SSourcing China helps buyers source from China, including home goods, packaging, accessories, promotional products, and OEM items.',
  )

  const containerRef = useStrkImages()

  return (
    <main ref={containerRef}>
      <PageHero
        eyebrow="Products we source"
        title="Product categories commonly sourced with support from China"
        description="We work across practical buyer categories, from consumer goods and packaging to custom OEM items and light industrial products."
        titleId="products-hero-title"
        descriptionId="products-hero-desc"
        backgroundId="products-hero-bg-7d5e0a"
      />

      <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Categories"
            title="Examples of product areas buyers ask us to help source"
            description="Category fit affects supplier search, sampling, inspection scope, packaging review, and shipping preparation."
            titleId="products-grid-title"
            descriptionId="products-grid-desc"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productCategories.map((item) => (
              <ImageCard key={item.id} item={item} sectionTitleId="products-grid-title" />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}

export default ProductsWeSource

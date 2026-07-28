import PageHero from '@/components/layout/PageHero'
import SectionIntro from '@/components/layout/SectionIntro'
import ImageShowcase from '@/components/sections/ImageShowcase'
import InquiryForm from '@/components/sections/InquiryForm'
import ProductGrid from '@/components/sections/ProductGrid'
import { useStrkImages } from '@/lib/useStrkImages'

const ProductsWeSource = () => {
  const containerRef = useStrkImages([])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Products we source"
        title="Product categories and sourcing programs we commonly support"
        description="We help buyers source across consumer goods, packaging, selected industrial products, and custom OEM or ODM projects requiring close supplier coordination."
      />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <SectionIntro
          eyebrow="Category overview"
          title="Support across practical sourcing categories"
          description="The exact sourcing approach depends on product complexity, compliance needs, supplier capability, and your required order timeline."
        />
        <div className="mt-10">
          <ProductGrid />
        </div>
      </section>

      <section className="border-y border-line bg-brand-sky/50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-8 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionIntro
              eyebrow="What buyers usually need"
              title="Not just supplier names, but product-fit and execution support"
              description="Product sourcing often depends on packaging standards, quality tolerance, repeat-order stability, and how clearly a supplier communicates throughout production."
            />
            <div className="mt-8">
              <InquiryForm />
            </div>
          </div>
          <ImageShowcase
            idPrefix="products-visual"
            title="Factory production, packaging review, and export preparation"
            description="Many sourcing programs succeed or fail on details such as packaging consistency, labeling, and shipment readiness, not only price."
            imageAlt="China product sourcing and packaging coordination"
            ratio="3x4"
          />
        </div>
      </section>
    </div>
  )
}

export default ProductsWeSource

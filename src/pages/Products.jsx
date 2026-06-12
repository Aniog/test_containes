import PageHeader from '@/components/sections/PageHeader'
import ProductsGrid from '@/components/sections/ProductsGrid'
import CTASection from '@/components/sections/CTASection'

export default function Products() {
  return (
    <>
      <PageHeader
        kicker="Products we source"
        title="Categories where we have a track record"
        subtitle="We focus on consumer goods and light industrial categories where we already know the factory landscape, materials and certifications."
      />
      <ProductsGrid kicker="Categories" title="Browse by category" showCTA={false} />
      <CTASection
        title="Don't see your product?"
        subtitle="We work across many sub-categories. Send us your spec sheet and we'll tell you honestly whether we're a good fit."
      />
    </>
  )
}

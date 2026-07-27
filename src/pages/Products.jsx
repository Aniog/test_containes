import InquirySection from '@/components/home/InquirySection'
import ProductsSection from '@/components/home/ProductsSection'
import PageHero from '@/components/shared/PageHero'

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products we source"
        title="Product sourcing support across practical B2B and consumer categories"
        description="SSourcing China helps overseas buyers source custom parts, packaging, home goods, electronics accessories, textiles, and building materials from suitable China suppliers."
        imageId="products-page-warehouse-packaging-visual-8b32fa"
        titleId="products-page-title"
        descId="products-page-desc"
      />
      <ProductsSection showCta={false} />
      <InquirySection />
    </>
  )
}

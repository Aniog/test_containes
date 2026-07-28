import PageHero from '@/components/shared/PageHero'
import ProductsSection from '@/components/sections/ProductsSection'
import InquirySection from '@/components/sections/InquirySection'

const ProductsWeSource = () => (
  <main>
    <PageHero
      eyebrow="Products we source"
      title="Product sourcing support for importers, distributors, and brands"
      description="SSourcing China helps buyers source consumer goods, industrial parts, electronics accessories, building materials, packaging, and other B2B product categories from Chinese suppliers."
      imageId="products-page-warehouse-products-65fd11"
      titleId="products-page-title"
      descId="products-page-desc"
    />
    <ProductsSection />
    <InquirySection />
  </main>
)

export default ProductsWeSource

import PageHero from '@/components/common/PageHero'
import ProductsSection from '@/components/products/ProductsSection'
import TrustSection from '@/components/home/TrustSection'
import InquiryForm from '@/components/contact/InquiryForm'

export default function Products() {
  return (
    <main>
      <PageHero
        eyebrow="Products we source"
        title="Product sourcing support across common China manufacturing categories"
        description="We help buyers source industrial parts, consumer goods, electronics accessories, packaging, printed materials, and related products where supplier selection and QC matter."
      />
      <ProductsSection />
      <TrustSection />
      <InquiryForm />
    </main>
  )
}

import PageHero from '../components/PageHero'
import ProductsSection from '../components/sections/ProductsSection'
import InquirySection from '../components/sections/InquirySection'

export default function ProductsWeSource() {
  return (
    <main>
      <PageHero
        eyebrow="Products we source"
        title="Find suitable China suppliers for industrial, consumer, and custom products"
        description="SSourcing China helps buyers clarify specifications, identify supplier options, compare quotations, and plan verification or inspection for a wide range of product categories."
        imageQueryId="products-page-title"
      />
      <ProductsSection />
      <InquirySection />
    </main>
  )
}

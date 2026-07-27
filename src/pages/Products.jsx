import PageHero from '../components/site/PageHero'
import ProductsSection from '../components/home/ProductsSection'

function Products() {
  return (
    <main>
      <PageHero
        eyebrow="Products we source"
        title="Product sourcing support for common China manufacturing categories"
        description="We review each category based on product details, quality expectations, order quantity, compliance requirements, and supplier availability."
      />
      <ProductsSection />
    </main>
  )
}

export default Products

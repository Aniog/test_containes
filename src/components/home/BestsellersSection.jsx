import { products } from '@/data/products.js'
import SectionIntro from '@/components/common/SectionIntro.jsx'
import ProductCard from '@/components/product/ProductCard.jsx'

const BestsellersSection = () => {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionIntro
          eyebrow="Bestsellers"
          title="The signature pieces our clients come back for"
          description="A curated edit of Velmora favorites designed to feel polished, giftable, and instantly wearable."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} context="home" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestsellersSection

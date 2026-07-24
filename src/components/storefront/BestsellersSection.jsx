import { products } from '@/data/storeData'
import ProductCard from './ProductCard'
import SectionHeading from './SectionHeading'

const BestsellersSection = ({ onAddToCart }) => {
  return (
    <section className="velmora-shell space-y-8 py-16 sm:py-20" id="bestsellers">
      <SectionHeading
        eyebrow="Bestsellers"
        title="Velmora signatures, chosen on repeat"
        description="A five-piece edit of quietly striking favorites designed for gifting and self-purchase alike."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  )
}

export default BestsellersSection

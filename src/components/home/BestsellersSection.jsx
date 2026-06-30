import SectionHeading from '@/components/ui/SectionHeading'
import ProductCard from '@/components/shop/ProductCard'
import { products } from '@/data/products'

const BestsellersSection = ({ onAddToCart }) => (
  <section className="section-space bg-stone-50">
    <div className="page-shell">
      <SectionHeading
        eyebrow="Bestsellers"
        title="Pieces our customers keep reaching for."
        description="A considered edit of warm gold shapes, crystal accents, and giftable signatures — all priced to feel accessible without losing polish."
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            scope="home"
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  </section>
)

export default BestsellersSection

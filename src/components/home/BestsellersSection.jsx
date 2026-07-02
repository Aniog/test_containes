import ProductCard from '@/components/shop/ProductCard'
import SectionHeading from '@/components/ui/SectionHeading'
import { products } from '@/data/catalog'
import { useCart } from '@/components/cart/CartContext'

const BestsellersSection = () => {
  const { addToCart } = useCart()

  return (
    <section id="bestsellers" className="bg-stone-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Bestsellers"
          title="The pieces our customers reach for on repeat"
          description="Five elevated favorites designed to move from weekday polish to after-dark plans with ease."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              sectionId="bestsellers-title"
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestsellersSection

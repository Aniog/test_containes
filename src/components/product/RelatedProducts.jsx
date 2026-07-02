import ProductCard from '@/components/shop/ProductCard'
import SectionHeading from '@/components/ui/SectionHeading'
import { useCart } from '@/components/cart/CartContext'

const RelatedProducts = ({ products }) => {
  const { addToCart } = useCart()

  return (
    <section className="bg-stone-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="You may also like"
          title="More pieces to complete the look"
          description="A few complementary styles chosen to layer, gift, or wear on repeat."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              sectionId="related-products-title"
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RelatedProducts

import ProductCard from '@/components/shop/ProductCard'
import SectionHeading from '@/components/ui/SectionHeading'

const RelatedProducts = ({ products, onAddToCart }) => (
  <section className="section-space border-t border-stone-200 bg-stone-50">
    <div className="page-shell">
      <SectionHeading
        eyebrow="You May Also Like"
        title="A few more Velmora favorites."
        description="Designed to layer beautifully, gift easily, and keep your everyday stack feeling polished."
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            scope="related"
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  </section>
)

export default RelatedProducts

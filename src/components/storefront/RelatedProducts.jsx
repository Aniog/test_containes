import ProductCard from './ProductCard'
import SectionHeading from './SectionHeading'

export default function RelatedProducts({ products, onAddToCart }) {
  return (
    <section className="section-shell py-20 sm:py-24">
      <SectionHeading
        eyebrow="Curated for you"
        title="You may also like"
        description="More pieces with the same warm finish, gifting ease, and polished everyday presence."
      />
      <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  )
}

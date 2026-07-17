import ProductCard from '@/components/common/ProductCard'
import SectionHeading from '@/components/common/SectionHeading'

const HomeBestsellers = ({ products, onAddToCart }) => {
  return (
    <section className="bg-velmora-pearl py-16 md:py-24">
      <div className="page-shell space-y-10">
        <SectionHeading
          eyebrow="Bestsellers"
          title="A polished edit of Velmora favorites"
          description="Designed to layer beautifully, gift effortlessly, and become the pieces you reach for every day."
        />
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard
              key={product.slug}
              product={product}
              onAddToCart={onAddToCart}
              priority={index < 2}
              className={index === 0 ? 'xl:col-span-2' : ''}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeBestsellers

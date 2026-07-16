import ProductCard from '@/components/product/ProductCard.jsx'
import { useCart } from '@/context/CartContext.jsx'
import { products } from '@/data/store.js'

function BestsellersSection() {
  const { addItem } = useCart()

  return (
    <section className="velmora-container py-16 md:py-24">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="velmora-eyebrow">Bestsellers</p>
          <h2 className="mt-4 font-display text-5xl text-velmora-ink sm:text-6xl">
            The pieces customers keep closest
          </h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-velmora-truffle">
          A refined edit of Velmora signatures designed for gifting, collecting, and effortless everyday wear.
        </p>
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-5">
        {products.map((product) => (
          <ProductCard
            key={product.slug}
            product={product}
            imagePrefix="bestseller"
            onAddToCart={(selectedProduct) => addItem(selectedProduct, 'Gold', 1)}
          />
        ))}
      </div>
    </section>
  )
}

export default BestsellersSection

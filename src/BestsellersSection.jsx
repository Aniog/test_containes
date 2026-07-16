import products from './data'
import ProductCard from './ProductCard'

export default function BestsellersSection() {
  const bestsellers = products.filter((p) => p.bestseller).slice(0, 5)

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
      <div className="text-center mb-14">
        <p className="font-sans text-xs tracking-widest uppercase text-velmora-taupe mb-4">
          Most Loved
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal">
          Bestsellers
        </h2>
        <div className="mx-auto mt-4 w-12 hairline-divider" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
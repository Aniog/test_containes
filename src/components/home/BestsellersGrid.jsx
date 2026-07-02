import products, { bestsellerIds } from '@/data/products'
import ProductCard from './ProductCard'

export default function BestsellersGrid() {
  const bestsellers = bestsellerIds.map((id) => products.find((p) => p.id === id)).filter(Boolean)

  return (
    <section className="section-padding py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-velmora-gold font-sans text-xs tracking-widest uppercase mb-4">Curated For You</p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide">Our Bestsellers</h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
import ProductCard from '@/components/ui/ProductCard'
import { products } from '@/data/products'

export default function Bestsellers() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-800 font-light">
            Bestsellers
          </h2>
          <div className="w-12 h-[1px] bg-velmora-gold mx-auto mt-4" />
          <p className="text-velmora-500 text-sm mt-3 max-w-md mx-auto">
            Our most-loved pieces, chosen by women like you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              priority={index < 2}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
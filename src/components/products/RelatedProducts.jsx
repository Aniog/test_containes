import { Link } from 'react-router-dom'
import ProductCard from '@/components/products/ProductCard'

export default function RelatedProducts({ products }) {
  if (!products || products.length === 0) return null

  return (
    <section className="bg-velmora-cream py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <h2 className="mb-8 font-serif text-2xl font-medium text-velmora-espresso md:mb-12 md:text-3xl">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} showQuickAdd={false} />
          ))}
        </div>
      </div>
    </section>
  )
}

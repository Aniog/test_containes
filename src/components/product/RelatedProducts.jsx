import { products } from '@/data/products'
import ProductCard from './ProductCard'

export default function RelatedProducts({ currentId }) {
  const related = products.filter((product) => product.id !== currentId).slice(0, 4)

  return (
    <section className="border-t border-velmora-stone bg-velmora-ivory px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-velmora-goldDark">
              Curated Pairings
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-velmora-espresso md:text-5xl">
              You may also like
            </h2>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((product) => (
            <ProductCard key={product.id} product={product} compact />
          ))}
        </div>
      </div>
    </section>
  )
}

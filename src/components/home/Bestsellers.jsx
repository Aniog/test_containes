import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

export default function Bestsellers() {
  const bestsellers = products.filter((p) => p.bestseller)

  return (
    <section className="bg-[#F6F3EF] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-[#C49A6C]">
              Most Loved
            </p>
            <h2 className="font-serif text-3xl text-[#1A1512] md:text-4xl lg:text-5xl">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-xs font-medium uppercase tracking-[0.15em] text-[#6B6259] underline-offset-4 transition-colors hover:text-[#C49A6C] hover:underline"
          >
            Shop All
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

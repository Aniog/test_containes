import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import { ProductCard } from '@/components/product/ProductCard'

export function Bestsellers() {
  const bestsellers = products.filter((p) => p.featured).slice(0, 5)

  return (
    <section className="bg-[#F9F7F2] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.2em] text-[#B9975B]">
              Most Loved
            </p>
            <h2 className="font-serif text-3xl font-light uppercase tracking-[0.08em] text-[#1A1614] md:text-4xl">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden font-sans text-xs font-medium uppercase tracking-[0.14em] text-[#6B625B] underline-offset-4 hover:text-[#B9975B] hover:underline sm:block"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 text-center sm:hidden">
          <Link
            to="/shop"
            className="font-sans text-xs font-medium uppercase tracking-[0.14em] text-[#6B625B] underline-offset-4 hover:text-[#B9975B] hover:underline"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}

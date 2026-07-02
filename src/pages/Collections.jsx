import { Link } from 'react-router-dom'
import { categories } from '@/data/products'

export default function Collections() {
  return (
    <div className="min-h-screen bg-[#F6F3EF] pb-20 pt-28 text-[#1A1512]">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-[#C49A6C]">
          Collections
        </p>
        <h1 className="font-serif text-4xl md:text-5xl">Curated for Every Moment</h1>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group border border-[#E4DDD4] bg-white p-12 transition-shadow hover:shadow-sm"
            >
              <h3 className="font-serif text-2xl uppercase tracking-[0.15em] transition-colors group-hover:text-[#C49A6C]">
                {cat.label}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { categories } from '@/data/products.js'

const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function CategoryTiles() {
  return (
    <section id="collections" className="bg-[#F7F1E8] px-5 py-20 text-[#17110D] md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#B9853B]">Shop by category</p>
            <h2 className="mt-3 font-serif text-4xl text-[#17110D] md:text-5xl">Find your signature glow.</h2>
          </div>
          <Link to="/shop" className="text-xs font-bold uppercase tracking-[0.2em] text-[#5D3A1E] underline-offset-4 hover:text-[#B9853B] hover:underline">
            View all jewelry
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.slug} to={`/shop?category=${category.name}`} className="group relative aspect-[3/4] overflow-hidden bg-[#17110D] text-[#FBF8F2]">
              <img
                alt={category.name}
                className="h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-65"
                data-strk-img-id={category.imgId}
                data-strk-img={`[${category.descId}] [${category.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="760"
                src={placeholder}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17110D]/75 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p id={category.descId} className="mb-3 text-xs uppercase tracking-[0.2em] text-[#E9D8BE]">{category.description}</p>
                <h3 id={category.titleId} className="font-serif text-4xl text-[#FBF8F2]">{category.name}</h3>
                <span className="mt-5 inline-flex translate-y-2 text-xs font-bold uppercase tracking-[0.2em] text-[#B9853B] opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  Shop now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

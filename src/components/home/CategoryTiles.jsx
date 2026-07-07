import { Link } from 'react-router-dom'
import { categories, placeholderSrc } from '@/data/products'

export default function CategoryTiles() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mb-10 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-bronze">Shop by category</p>
        <h2 id="category-section-title" className="mt-3 font-serif text-4xl font-semibold tracking-[-0.03em] text-velmora-espresso sm:text-5xl">A piece for every ritual</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {categories.map((category) => (
          <Link key={category.id} to={`/shop?category=${category.name}`} className="group relative min-h-[26rem] overflow-hidden rounded-[2rem] bg-velmora-champagne shadow-soft">
            <img
              alt={category.name}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              data-strk-img-id={category.imgId}
              data-strk-img={`[${category.descId}] [${category.titleId}] [category-section-title]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
              src={placeholderSrc}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/85 via-velmora-espresso/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-velmora-porcelain transition duration-500 group-hover:translate-y-[-0.5rem]">
              <h3 id={category.titleId} className="font-serif text-4xl font-semibold">{category.name}</h3>
              <p id={category.descId} className="mt-2 text-sm leading-6 text-velmora-champagne">{category.description}</p>
              <span className="mt-5 inline-flex text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-gold opacity-0 transition duration-500 group-hover:opacity-100">
                Shop {category.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'
import { categories, placeholderImage } from '@/data/storeData'

function CategoryTiles() {
  return (
    <section id="collections" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mb-10 space-y-3">
        <p className="text-xs uppercase tracking-luxe text-champagne">Shop by category</p>
        <h2 id="category-title" className="text-4xl sm:text-5xl">
          Jewelry for every kind of glow
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.slug}
            to={`/shop?category=${encodeURIComponent(category.label)}`}
            className="group relative overflow-hidden rounded-[2rem] border border-mist/70 bg-obsidian shadow-card"
          >
            <img
              src={placeholderImage}
              alt={category.label}
              className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
              data-strk-img-id={`category-${category.slug}-img-a8f25c`}
              data-strk-img={`[category-${category.slug}-desc] [category-${category.slug}-title] [category-title]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-ivory">
              <h3 id={`category-${category.slug}-title`} className="text-4xl text-ivory">
                {category.label}
              </h3>
              <p id={`category-${category.slug}-desc`} className="mt-2 text-sm leading-7 text-ivory/80">
                {category.description}
              </p>
              <span className="mt-4 inline-flex border-b border-champagne pb-1 text-xs uppercase tracking-[0.22em] text-champagne transition group-hover:text-ivory">
                Discover
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default CategoryTiles

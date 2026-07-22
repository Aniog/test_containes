import { Link } from 'react-router-dom'

import { categories } from '@/data/products'

const CategoryTiles = () => {
  return (
    <section id="collections" className="grid gap-6 md:grid-cols-3">
      {categories.map((category) => {
        const titleId = `category-${category.title.toLowerCase()}-title`
        const copyId = `category-${category.title.toLowerCase()}-copy`

        return (
          <Link
            key={category.title}
            to={`/shop?category=${encodeURIComponent(category.title)}`}
            className="group relative overflow-hidden rounded-[2rem] bg-velmora-cacao shadow-card"
          >
            <img
              alt={category.title}
              className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
              data-strk-img-id={category.imageId}
              data-strk-img={`[${copyId}] [${titleId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-velmora-ink via-velmora-ink/20 to-transparent p-6 text-velmora-parchment">
              <div className="translate-y-3 space-y-2 transition duration-300 group-hover:translate-y-0">
                <p id={titleId} className="font-display text-4xl">
                  {category.title}
                </p>
                <p id={copyId} className="max-w-xs text-sm leading-6 text-velmora-champagne opacity-0 transition duration-300 group-hover:opacity-100">
                  {category.copy}
                </p>
              </div>
            </div>
          </Link>
        )
      })}
    </section>
  )
}

export default CategoryTiles

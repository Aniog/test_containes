import { Link } from 'react-router-dom'
import { categoryTiles } from '@/data/products.js'

const CategoryTilesSection = () => {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-3">
          {categoryTiles.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop?category=${encodeURIComponent(tile.title)}`}
              className="group relative isolate overflow-hidden rounded-[2rem] border border-hairline-dark bg-base-muted shadow-editorial"
            >
              <div
                className="absolute inset-0 transition duration-500 group-hover:scale-[1.03]"
                data-strk-bg-id={`${tile.id}-bg`}
                data-strk-bg={`[${tile.id}-desc] [${tile.id}-title]`}
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="900"
              />
              <div className="absolute inset-0 bg-category-overlay" />
              <div className="relative flex aspect-[4/5] items-end p-6 sm:p-8">
                <div className="space-y-3 transition duration-300 group-hover:-translate-y-1">
                  <p id={`${tile.id}-title`} className="font-display text-4xl text-foreground-strong sm:text-5xl">
                    {tile.title}
                  </p>
                  <p id={`${tile.id}-desc`} className="max-w-xs text-sm leading-7 text-foreground/85">
                    {tile.subtitle}
                  </p>
                  <span className="inline-flex text-xs uppercase tracking-[0.22em] text-accent">Explore Category</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryTilesSection

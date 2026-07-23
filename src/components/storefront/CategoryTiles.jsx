import { Link } from 'react-router-dom'
import { categories, imagePlaceholder } from '@/data/storefront'

export default function CategoryTiles() {
  return (
    <section className="section-shell py-20 sm:py-24">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Shop by category</p>
          <h2 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">Curated around how you wear jewelry</h2>
        </div>
        <p className="max-w-lg text-sm leading-7 text-muted">
          Pieces designed to slip effortlessly into your everyday wardrobe, with enough polish for gifting and going out.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/shop?category=${encodeURIComponent(category.name)}`}
            className="group relative overflow-hidden rounded-3xl"
          >
            <img
              src={imagePlaceholder}
              alt={category.name}
              className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
              data-strk-img-id={category.imageId}
              data-strk-img={`[${category.descId}] [${category.titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-mist">
              <h3 id={category.titleId} className="font-serif text-3xl transition group-hover:-translate-y-1">
                {category.name}
              </h3>
              <p id={category.descId} className="mt-2 max-w-xs text-sm leading-6 text-mist/80 opacity-0 transition duration-300 group-hover:opacity-100">
                {category.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

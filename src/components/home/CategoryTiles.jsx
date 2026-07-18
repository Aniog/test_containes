import { Link } from 'react-router-dom'
import { categories } from '@/data/store.js'
import SectionHeading from '@/components/shared/SectionHeading.jsx'

function CategoryTiles() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="Shop by Category"
        title="Designed for stacking, gifting, and keeping"
        description="Explore the silhouettes that define the Velmora wardrobe."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/shop?category=${category.id}`}
            className="group relative overflow-hidden rounded-[2rem] bg-stone-100 shadow-[0_18px_55px_rgba(28,25,23,0.08)]"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                alt={category.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                data-strk-img-id={category.imageId}
                data-strk-img={`[${category.descId}] [${category.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-stone-100">
              <div>
                <h3
                  id={category.titleId}
                  className="font-display text-4xl"
                >
                  {category.name}
                </h3>
                <p id={category.descId} className="mt-2 max-w-xs text-sm leading-7 text-stone-200 opacity-0 transition duration-300 group-hover:opacity-100">
                  {category.description}
                </p>
              </div>
              <span className="text-xs uppercase tracking-[0.3em] text-stone-200">
                Explore
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default CategoryTiles

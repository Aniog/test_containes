import { Link } from 'react-router-dom'

export default function CategoryTilesSection({ categories }) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-editorial text-velmora-muted">Shop by category</p>
          <h2 id="category-title" className="mt-3 font-serif text-4xl text-velmora-ink sm:text-5xl">
            Jewelry designed around how you wear it
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {categories.map((category) => {
            const titleId = `category-${category.slug}-title`
            const descId = `category-${category.slug}-desc`

            return (
              <Link
                key={category.slug}
                to={`/shop?category=${encodeURIComponent(category.filterValue)}`}
                className="group relative overflow-hidden rounded-[2rem] border border-velmora-line/70 bg-velmora-paper text-velmora-paper"
              >
                <img
                  alt={category.name}
                  className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  data-strk-img-id={`category-${category.slug}-image`}
                  data-strk-img={`[${descId}] [${titleId}] [category-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,23,20,0.06),rgba(31,23,20,0.68))]" />
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <p id={titleId} className="font-serif text-4xl text-velmora-paper transition duration-500 group-hover:-translate-y-1">
                      {category.name}
                    </p>
                    <p id={descId} className="mt-2 max-w-xs text-sm leading-6 text-velmora-paper/80 opacity-0 transition duration-500 group-hover:opacity-100">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

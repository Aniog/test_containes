import { Link } from 'react-router-dom'

export default function CategoryTiles({ categories }) {
  return (
    <section className="bg-velmora-ivory py-16 text-velmora-ink sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-ui text-velmora-gold">Find your signature</p>
          <h2 id="category-title" className="mt-3 font-serif text-5xl leading-none text-velmora-ink sm:text-6xl">
            Shop by Category
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/shop?category=${category.name}`}
              className="group relative block aspect-[4/5] overflow-hidden bg-velmora-espresso text-velmora-ivory shadow-velmora"
            >
              <div
                className="h-full w-full bg-cover bg-center opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-95"
                style={{ backgroundImage: `url(${category.image})` }}
                role="img"
                aria-label={`${category.name} jewelry category`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/80 via-velmora-ink/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-velmora-ivory">
                <h3 id={`category-${category.slug}-title`} className="font-serif text-4xl leading-none">
                  {category.name}
                </h3>
                <p id={`category-${category.slug}-desc`} className="mt-3 max-w-xs translate-y-2 text-sm leading-6 text-velmora-sand opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

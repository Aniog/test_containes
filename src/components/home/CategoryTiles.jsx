import { Link } from 'react-router-dom'

const categories = [
  {
    id: 'earrings',
    label: 'Earrings',
    description: 'Gold cuffs, drops, and everyday studs styled on ear',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    description: 'Delicate gold pendant necklaces with crystal details on collarbone',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    description: 'Chunky gold dome huggie earrings close up warm editorial',
  },
]

export default function CategoryTiles() {
  return (
    <section className="bg-velmora-cream py-16 text-velmora-ink md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold-dark">Shop by category</p>
          <h2 id="category-title" className="mt-3 font-serif text-5xl leading-none text-velmora-ink md:text-6xl">
            Find Your Signature
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} to={`/shop?category=${category.label}`} className="group relative aspect-[4/5] overflow-hidden bg-velmora-mist text-velmora-porcelain">
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                data-strk-bg-id={`category-${category.id}-3c8a4d`}
                data-strk-bg={`[category-desc-${category.id}] [category-label-${category.id}] [category-title]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
                role="img"
                aria-label={category.label}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/70 via-velmora-ink/10 to-transparent transition duration-500 group-hover:from-velmora-ink/85" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-7 transition duration-500 group-hover:translate-y-0">
                <p id={`category-label-${category.id}`} className="font-serif text-4xl text-velmora-porcelain">
                  {category.label}
                </p>
                <p id={`category-desc-${category.id}`} className="mt-2 max-h-0 overflow-hidden text-sm leading-6 text-velmora-mist opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100">
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

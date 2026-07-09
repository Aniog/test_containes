import { Link } from 'react-router-dom'

const tiles = [
  { title: 'Earrings', desc: 'gold earrings on model warm editorial portrait', ratio: '3x4' },
  { title: 'Necklaces', desc: 'gold necklace close up on neck warm neutral background', ratio: '3x4' },
  { title: 'Huggies', desc: 'gold huggie earrings ear stack warm luxury close up', ratio: '3x4' },
]

export default function CategoryTiles() {
  return (
    <section className="bg-stone-50 py-16 text-stone-950 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
            Shop by category
          </p>
          <h2 className="mt-3 font-serif text-5xl text-stone-950 md:text-7xl">
            Find your signature
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {tiles.map((tile) => (
            <Link key={tile.title} to={`/shop?category=${tile.title}`} className="group relative aspect-[3/4] overflow-hidden bg-amber-200 text-stone-50 shadow-sm">
              <img
                data-strk-img-id={`category-${tile.title.toLowerCase()}-2fc7ad`}
                data-strk-img={`[category-${tile.title.toLowerCase()}-desc] [category-${tile.title.toLowerCase()}-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="760"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={tile.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-stone-950/20 transition group-hover:bg-stone-950/45" />
              <div className="absolute inset-x-0 bottom-0 translate-y-3 p-7 opacity-90 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 id={`category-${tile.title.toLowerCase()}-title`} className="font-serif text-5xl text-stone-50">
                  {tile.title}
                </h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">
                  Discover the edit
                </p>
                <p id={`category-${tile.title.toLowerCase()}-desc`} className="sr-only">{tile.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

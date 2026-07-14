import { Link } from 'react-router-dom'

const tiles = [
  { id: 'earrings', label: 'Earrings', copy: 'Polished drops, cuffs, and daily shimmer.' },
  { id: 'necklaces', label: 'Necklaces', copy: 'Fine chains and keepsake pendants.' },
  { id: 'huggies', label: 'Huggies', copy: 'Low-effort gold with a sculptural glow.' },
]

const CategoryTiles = () => (
  <section className="bg-velmora-parchment px-5 py-16 text-velmora-ink sm:px-8 lg:px-10 lg:py-24">
    <div className="mx-auto max-w-7xl">
      <div className="mb-10 text-center">
        <p className="text-xs font-extrabold uppercase tracking-widerLuxury text-velmora-bronze">Shop by category</p>
        <h2 id="category-title" className="mt-3 font-serif text-5xl font-medium text-velmora-ink sm:text-6xl">A piece for every ritual</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {tiles.map((tile) => {
          const titleId = `category-${tile.id}-title`
          const copyId = `category-${tile.id}-copy`
          return (
            <Link key={tile.id} to={`/shop?category=${tile.label}`} className="group relative aspect-[4/5] overflow-hidden bg-velmora-ink shadow-soft focus:outline-none focus:ring-2 focus:ring-velmora-champagne">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-86 transition duration-700 group-hover:scale-105 group-hover:opacity-76"
                data-strk-bg-id={`category-${tile.id}-bg-b71`}
                data-strk-bg={`[${copyId}] [${titleId}] [category-title]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="900"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/80 via-velmora-ink/12 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-velmora-ivory transition duration-500 group-hover:translate-y-[-6px]">
                <h3 id={titleId} className="font-serif text-4xl font-semibold text-velmora-ivory">{tile.label}</h3>
                <p id={copyId} className="mt-3 max-w-xs text-sm leading-6 text-velmora-ivory/76 opacity-90 transition group-hover:opacity-100">{tile.copy}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  </section>
)

export default CategoryTiles

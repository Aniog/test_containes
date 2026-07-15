import { Link } from 'react-router-dom'

const tiles = [
  { id: 'earrings', label: 'Earrings', copy: 'Gold accents that frame the face.' },
  { id: 'necklaces', label: 'Necklaces', copy: 'Soft shimmer for every neckline.' },
  { id: 'huggies', label: 'Huggies', copy: 'Polished pairs for daily stacking.' },
]

export default function CategoryTiles() {
  return (
    <section className="bg-velmora-cream px-5 py-16 text-velmora-ink md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.36em] text-velmora-bronze">Shop by category</p>
            <h2 className="mt-4 font-serif text-5xl text-velmora-ink md:text-6xl">Find your signature glow</h2>
          </div>
          <Link to="/shop" className="text-sm font-bold uppercase tracking-[0.28em] text-velmora-bronze underline-offset-8 transition hover:text-velmora-ink hover:underline">
            View all pieces
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {tiles.map((tile) => {
            const labelId = `category-${tile.id}-label`
            const copyId = `category-${tile.id}-copy`
            return (
              <Link key={tile.id} to={`/shop?category=${tile.label}`} className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-velmora-linen text-velmora-pearl shadow-soft">
                <div
                  className="absolute inset-0 transition duration-700 group-hover:scale-105"
                  data-strk-bg-id={`velmora-category-${tile.id}`}
                  data-strk-bg={`[${copyId}] [${labelId}]`}
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="900"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/80 via-velmora-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-7 transition duration-500 group-hover:translate-y-0">
                  <p id={copyId} className="mb-2 text-sm leading-6 text-velmora-linen opacity-0 transition duration-500 group-hover:opacity-100">{tile.copy}</p>
                  <h3 id={labelId} className="font-serif text-5xl text-velmora-pearl">{tile.label}</h3>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

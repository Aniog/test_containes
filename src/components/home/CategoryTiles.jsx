import { Link } from 'react-router-dom'

const tiles = [
  { label: 'Earrings', query: '/shop?category=Earrings', imgId: 'category-earrings-21cc7e', desc: 'gold earrings close up editorial' },
  { label: 'Necklaces', query: '/shop?category=Necklaces', imgId: 'category-necklaces-a381ff', desc: 'gold necklace on model neckline' },
  { label: 'Huggies', query: '/shop?category=Huggies', imgId: 'category-huggies-f1480d', desc: 'gold huggie earrings ear stack' },
]

export default function CategoryTiles() {
  return (
    <section className="bg-velmora-cream py-16 text-velmora-ink md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-velmora-clay">Shop by category</p>
          <h2 id="category-title" className="mt-3 font-serif text-5xl text-velmora-ink">Find your signature</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {tiles.map((tile) => {
            const titleId = `category-${tile.label.toLowerCase()}-title`
            const descId = `category-${tile.label.toLowerCase()}-desc`
            return (
              <Link key={tile.label} to={tile.query} className="group relative block overflow-hidden bg-velmora-linen" aria-label={`Shop ${tile.label}`}>
                <span id={descId} className="sr-only">{tile.desc}</span>
                <div
                  className="aspect-[4/5] bg-cover bg-center transition duration-700 group-hover:scale-105"
                  data-strk-bg-id={tile.imgId}
                  data-strk-bg={`[${descId}] [${titleId}] [category-title]`}
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="900"
                />
                <div className="absolute inset-0 bg-velmora-ink/18 transition group-hover:bg-velmora-ink/35" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p id={titleId} className="translate-y-2 font-serif text-4xl text-velmora-cream transition group-hover:translate-y-0">{tile.label}</p>
                  <span className="mt-3 block translate-y-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-gold opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">Shop now</span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

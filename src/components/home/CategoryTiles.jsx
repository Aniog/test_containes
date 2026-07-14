import { Link } from 'react-router-dom'
import EditorialImage from '@/components/common/EditorialImage.jsx'

const tiles = [
  { label: 'Earrings', desc: 'Sculptural gold, crystals, and filigree for the ear.', to: '/shop?category=Earrings' },
  { label: 'Necklaces', desc: 'Delicate chains and soft crystal pendants for layering.', to: '/shop?category=Necklaces' },
  { label: 'Huggies', desc: 'Close-fitting golden curves made for everyday polish.', to: '/shop?category=Huggies' },
]

export default function CategoryTiles() {
  return (
    <section className="bg-velmora-parchment px-4 py-20 text-velmora-ink sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-luxury text-velmora-antique">Shop by category</p>
          <h2 id="category-title" className="mt-3 font-serif text-5xl font-semibold leading-none sm:text-6xl">
            Find your golden signature.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {tiles.map((tile) => {
            const titleId = `category-${tile.label.toLowerCase()}-title`
            const descId = `category-${tile.label.toLowerCase()}-desc`

            return (
              <Link key={tile.label} to={tile.to} className="group relative aspect-[4/5] overflow-hidden bg-velmora-espresso text-velmora-cream shadow-soft">
                <EditorialImage
                  id={`category-${tile.label.toLowerCase()}-img-d7`}
                  query={`[${descId}] [${titleId}] [category-title]`}
                  ratio="3x4"
                  width="800"
                  alt={tile.label}
                  className="opacity-90 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/85 via-velmora-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 translate-y-8 p-7 transition-transform duration-500 group-hover:translate-y-0">
                  <h3 id={titleId} className="font-serif text-4xl font-semibold text-velmora-cream">
                    {tile.label}
                  </h3>
                  <p id={descId} className="mt-3 max-w-xs text-sm leading-6 text-velmora-parchment opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {tile.desc}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

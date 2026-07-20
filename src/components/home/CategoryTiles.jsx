import { Link } from 'react-router-dom'
import SectionHeader from './SectionHeader.jsx'

const tiles = [
  { label: 'Earrings', id: 'earrings', desc: 'Gold earrings, cuffs, and drops styled in warm editorial light.', titleId: 'category-earrings-title', descId: 'category-earrings-desc' },
  { label: 'Necklaces', id: 'necklaces', desc: 'Layered gold necklaces and floral crystal pendants on neutral silk.', titleId: 'category-necklaces-title', descId: 'category-necklaces-desc' },
  { label: 'Huggies', id: 'huggies', desc: 'Chunky gold dome huggie earrings worn close to the ear.', titleId: 'category-huggies-title', descId: 'category-huggies-desc' },
]

export default function CategoryTiles() {
  return (
    <section className="bg-velmora-cream px-5 py-16 text-velmora-ink md:px-8 md:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Shop by category" title="Choose your signature glow" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {tiles.map((tile) => (
            <Link key={tile.id} to={`/shop?category=${tile.label}`} className="group relative block aspect-[4/5] overflow-hidden bg-velmora-forest text-velmora-cream">
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                data-strk-bg-id={`category-${tile.id}-bg-34f7`}
                data-strk-bg={`[${tile.descId}] [${tile.titleId}]`}
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="900"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/70 via-velmora-ink/10 to-transparent transition group-hover:bg-velmora-ink/25" />
              <p id={tile.descId} className="sr-only">{tile.desc}</p>
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 transition duration-300 group-hover:translate-y-0 md:p-8">
                <h3 id={tile.titleId} className="font-serif text-4xl text-velmora-cream md:text-5xl">{tile.label}</h3>
                <span className="mt-4 inline-flex border-b border-velmora-bronze pb-1 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-velmora-champagne opacity-0 transition group-hover:opacity-100">Shop now</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

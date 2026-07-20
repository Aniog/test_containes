import { Link } from 'react-router-dom'
import SectionHeading from './SectionHeading'

const tiles = [
  { label: 'Earrings', query: 'sculptural gold earrings on model warm editorial' },
  { label: 'Necklaces', query: 'gold necklace close up collarbone warm light' },
  { label: 'Huggies', query: 'chunky gold huggie earrings close up ear' },
]

export default function CategoryTiles() {
  return (
    <section className="bg-velmora-porcelain px-5 py-16 text-velmora-ink sm:px-8 md:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Shop by category" title="Choose your golden ritual" />
        <div className="grid gap-5 md:grid-cols-3">
          {tiles.map((tile) => {
            const labelId = `category-${tile.label.toLowerCase()}-title`
            const queryId = `category-${tile.label.toLowerCase()}-query`
            return (
              <Link key={tile.label} to={`/shop?category=${tile.label}`} className="group relative overflow-hidden bg-velmora-blush shadow-soft">
                <img
                  alt={tile.label}
                  className="aspect-[4/5] h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  data-strk-img-id={`category-img-${tile.label.toLowerCase()}`}
                  data-strk-img={`[${queryId}] [${labelId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
                />
                <p id={queryId} className="sr-only">{tile.query}</p>
                <div className="absolute inset-0 bg-velmora-ink/15 transition group-hover:bg-velmora-ink/36" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-velmora-cream">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">Explore</p>
                  <h3 id={labelId} className="font-serif text-4xl text-velmora-cream">{tile.label}</h3>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

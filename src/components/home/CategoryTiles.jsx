import { Link } from 'react-router-dom'

const tiles = [
  { label: 'Earrings', href: '/shop?category=Earrings', id: 'cat-earrings' },
  { label: 'Necklaces', href: '/shop?category=Necklaces', id: 'cat-necklaces' },
  { label: 'Huggies', href: '/shop?category=Huggies', id: 'cat-huggies' },
]

export default function CategoryTiles() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {tiles.map((tile) => (
          <Link
            key={tile.id}
            to={tile.href}
            className="group relative aspect-[4/5] md:aspect-[3/4] bg-velmora-sand rounded-sm overflow-hidden"
          >
            <img
              data-strk-img-id={`cat-${tile.id}`}
              data-strk-img={`[cat-label-${tile.id}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={tile.label}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
            <span id={`cat-label-${tile.id}`} className="hidden">{tile.label}</span>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-lg md:text-2xl tracking-widest text-white uppercase">
                {tile.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

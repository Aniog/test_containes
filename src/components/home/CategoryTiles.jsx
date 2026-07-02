import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const tiles = [
  { name: 'Earrings', slug: 'earrings', desc: 'From huggies to drops' },
  { name: 'Necklaces', slug: 'necklaces', desc: 'Layers of elegance' },
  { name: 'Huggies', slug: 'huggies', desc: 'The everyday essential' },
]

export default function CategoryTiles() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <p className="text-[11px] tracking-widest-plus uppercase text-gold-600 mb-4 font-medium">
          Collections
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-deep font-medium">
          Shop by Category
        </h2>
        <div className="mt-6 w-16 h-[1px] bg-velvet-300 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiles.map((tile) => (
          <Link
            key={tile.slug}
            to={`/shop?category=${tile.slug}`}
            className="group relative aspect-[4/5] bg-velvet-200 overflow-hidden"
          >
            {/* Placeholder image */}
            <div className="absolute inset-0 flex items-center justify-center bg-velvet-200 group-hover:scale-105 transition-transform duration-700">
              <span className="text-sm text-velvet-400 font-serif italic">
                {tile.name} Image
              </span>
            </div>

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-white font-serif text-3xl tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                {tile.name}
              </span>
              <span className="mt-2 text-white/80 text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 translate-y-2 group-hover:translate-y-0 flex items-center gap-1.5">
                {tile.desc}
                <ArrowRight size={12} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
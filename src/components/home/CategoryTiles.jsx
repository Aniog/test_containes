import { Link } from 'react-router-dom'

const tiles = [
  {
    label: 'EARRINGS',
    href: '/shop?category=earrings',
    hex: '#D4A853',
    sub: 'Cuffs, drops & studs',
  },
  {
    label: 'NECKLACES',
    href: '/shop?category=necklaces',
    hex: '#C9A96E',
    sub: 'Pendants & chains',
  },
  {
    label: 'HUGGIES',
    href: '/shop?category=huggies',
    hex: '#DFB347',
    sub: 'Everyday gold essentials',
  },
]

export default function CategoryTiles() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28">
      <div className="text-center mb-14">
        <p className="font-sans text-[10px] tracking-[0.35em] text-velvet-500 uppercase mb-3">
          Explore
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-velvet-950 font-medium tracking-tight">
          Shop by Category
        </h2>
        <div className="hairline-divider w-16 mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
        {tiles.map((tile) => (
          <Link
            key={tile.label}
            to={tile.href}
            className="group relative aspect-[4/5] overflow-hidden"
          >
            {/* Image placeholder */}
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundColor: tile.hex }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-velvet-950/60 via-velvet-950/10 to-transparent transition-opacity duration-500 group-hover:opacity-70" />
            {/* Label */}
            <div className="absolute inset-x-0 bottom-8 text-center">
              <h3 className="font-serif text-2xl md:text-3xl text-cream-50 tracking-[0.12em] uppercase">
                {tile.label}
              </h3>
              <p className="mt-2 font-sans text-xs text-cream-300 tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tile.sub}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

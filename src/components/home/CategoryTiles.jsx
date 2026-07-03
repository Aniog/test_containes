import { Link } from 'react-router-dom'

const tiles = [
  {
    id: 'earrings',
    name: 'Earrings',
    query: '?category=Earrings',
    bg: 'linear-gradient(135deg, #e8d9c7, #d4c2a8)',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    query: '?category=Necklaces',
    bg: 'linear-gradient(135deg, #d9c7b0, #c4af92)',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    query: '?tag=huggies',
    bg: 'linear-gradient(135deg, #e5d4bd, #d0bda4)',
  },
]

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <h2 className="section-title text-center mb-10">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop${tile.query}`}
              className="group relative aspect-[4/3] rounded-sm overflow-hidden"
              style={{ background: tile.bg }}
            >
              <div className="absolute inset-0 bg-velvet-950/0 group-hover:bg-velvet-950/30 transition-all duration-500 flex items-center justify-center" />
              <span className="absolute bottom-6 left-6 font-serif text-2xl md:text-3xl text-velvet-900 font-light tracking-wide group-hover:text-velvet-800 transition-colors duration-300">
                {tile.name}
              </span>
              <span className="absolute bottom-6 left-6 font-serif text-2xl md:text-3xl text-velvet-900 opacity-0 group-hover:opacity-100 transition-all duration-300 font-light tracking-wide translate-y-2 group-hover:translate-y-0">
                {tile.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
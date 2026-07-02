import { Link } from 'react-router-dom'

const categories = [
  {
    label: 'Earrings',
    href: '/shop?category=earrings',
    gradient: 'from-amber-900/80 via-amber-700/60 to-amber-950/80',
  },
  {
    label: 'Necklaces',
    href: '/shop?category=necklaces',
    gradient: 'from-stone-800/80 via-amber-800/60 to-stone-900/80',
  },
  {
    label: 'Huggies',
    href: '/shop?category=earrings',
    gradient: 'from-yellow-800/80 via-amber-700/60 to-yellow-950/80',
  },
]

export default function CategoryTiles() {
  return (
    <section className="section-padding page-container py-20 md:py-28">
      <div className="text-center mb-14">
        <p className="text-xs tracking-[0.2em] uppercase text-velmora-text-muted mb-4">
          Shop By
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-text">
          Category
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {categories.map((cat) => (
          <Link
            key={cat.label}
            to={cat.href}
            className="group relative aspect-[4/5] md:aspect-[3/4] rounded-sm overflow-hidden"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} transition-transform duration-700 group-hover:scale-105`}
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors duration-500" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <span className="font-serif text-2xl md:text-3xl text-white tracking-wider">
                {cat.label}
              </span>
              <div className="w-8 h-px bg-white/40 mt-3 transition-all duration-500 group-hover:w-16" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
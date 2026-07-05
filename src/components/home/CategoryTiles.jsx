import { Link } from 'react-router-dom'

const categories = [
  {
    label: 'Earrings',
    filter: 'earrings',
    query: 'gold earrings collection flat lay warm editorial dark background',
  },
  {
    label: 'Necklaces',
    filter: 'necklaces',
    query: 'gold necklaces collection flat lay warm editorial dark background',
  },
  {
    label: 'Huggies',
    filter: 'huggies',
    query: 'gold huggie earrings collection flat lay warm editorial dark background',
  },
]

export default function CategoryTiles() {
  return (
    <section className="section-padding py-16 md:py-24 bg-vbg">
      <div className="text-center mb-10 md:mb-14">
        <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-vmuted mb-3">
          Explore
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-vtext">
          Shop by Category
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat, idx) => (
          <Link
            key={cat.label}
            to={`/shop?category=${cat.filter}`}
            className="group relative aspect-[4/5] rounded-sm overflow-hidden"
            data-strk-bg-id={`cat-bg-${idx}`}
            data-strk-bg={`[cat-label-${idx}]`}
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="800"
          >
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={cat.label}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                id={`cat-label-${idx}`}
                className="font-serif text-xl md:text-2xl text-white tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                {cat.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

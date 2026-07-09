import { Link } from 'react-router-dom'

const cats = [
  { name: 'Earrings', slug: 'earrings', id: 'category-earrings' },
  { name: 'Necklaces', slug: 'necklaces', id: 'category-necklaces' },
  { name: 'Huggies', slug: 'huggies', id: 'category-huggies' },
]

export default function CategoryTiles() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-4xl tracking-tight">Shop by Category</h2>
        <p className="mt-3 text-sm text-velmora-taupe">Find your perfect piece</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {cats.map((cat) => (
          <Link
            key={cat.slug}
            to={`/shop?category=${cat.slug}`}
            className="group relative aspect-[4/5] bg-velmora-sand overflow-hidden"
          >
            <img
              data-strk-img-id={cat.id}
              data-strk-img={`[cat-name-${cat.slug}] gold jewelry category`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 1000'/%3E`}
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-velmora-deep/20 transition-opacity duration-300 group-hover:bg-velmora-deep/35" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                id={`cat-name-${cat.slug}`}
                className="font-serif text-2xl md:text-3xl text-white tracking-[0.08em] px-4 py-2 border-b border-white/60"
              >
                {cat.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

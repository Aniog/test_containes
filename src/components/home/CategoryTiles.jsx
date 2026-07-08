import { Link } from 'react-router-dom'
import { categoryImages } from '@/data/products'

const categoryData = [
  { id: 'earrings', name: 'Earrings' },
  { id: 'necklaces', name: 'Necklaces' },
  { id: 'huggies', name: 'Huggies' },
]

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-8 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-espresso font-medium text-center mb-12">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryData.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden"
            >
              <img
                src={categoryImages[cat.id]}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-noir/20 group-hover:bg-noir/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-serif text-2xl md:text-3xl text-cream font-medium tracking-wide">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

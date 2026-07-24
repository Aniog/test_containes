import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    slug: 'earrings',
    image:
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    slug: 'necklaces',
    image:
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    slug: 'huggies',
    image:
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
  },
]

export default function CategoryTiles() {
  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-gold-600">
              Categories
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-midnight-900 mt-2 font-light">
              Shop by Category
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm bg-ivory"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/60 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="font-serif text-2xl lg:text-3xl text-cream font-light">
                  {cat.name}
                </h3>
                <span className="inline-flex items-center gap-1 text-[10px] tracking-widest uppercase text-cream/70 mt-2 group-hover:text-cream transition-colors">
                  Shop Now
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
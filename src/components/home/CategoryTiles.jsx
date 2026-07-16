import { Link } from 'react-router-dom'

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&h=800&fit=crop',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    image: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=600&h=800&fit=crop',
  },
]

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold text-xs font-medium tracking-[0.25em] uppercase mb-3">
            Explore
          </p>
          <h2 className="font-serif text-heading-lg text-warm-black">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-warm-black/20 group-hover:bg-warm-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end p-6 md:p-8">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-white tracking-wide">
                    {cat.name}
                  </h3>
                  <span className="inline-block mt-2 text-xs text-white/80 tracking-[0.1em] uppercase border-b border-white/40 pb-0.5 group-hover:border-gold group-hover:text-gold transition-colors">
                    Explore
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

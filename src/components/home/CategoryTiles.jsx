import { Link } from 'react-router-dom'
import { useInView } from '@/hooks/useInView'

const categories = [
  {
    id: 'earrings',
    label: 'Earrings',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=600&h=800&fit=crop',
  },
]

export default function CategoryTiles() {
  const [ref, isInView] = useInView({ threshold: 0.05 })

  return (
    <section ref={ref} className={`py-16 md:py-24 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-velmora-gold mb-3">Explore</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <img
                src={cat.image}
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-serif text-2xl md:text-3xl text-velmora-cream tracking-wider">
                    {cat.label}
                  </h3>
                  <div className="w-8 h-px bg-velmora-cream/60 mx-auto mt-3 group-hover:w-12 transition-all duration-500" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

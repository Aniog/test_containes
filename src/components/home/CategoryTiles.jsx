import { Link } from 'react-router-dom'

const tiles = [
  {
    id: 'cat-earrings',
    name: 'Earrings',
    slug: 'earrings',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop&q=80',
    imgId: 'category-earrings-img-e6f7g8',
    titleId: 'category-earrings-title-e6f7g8',
  },
  {
    id: 'cat-necklaces',
    name: 'Necklaces',
    slug: 'necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop&q=80',
    imgId: 'category-necklaces-img-h9i0j1',
    titleId: 'category-necklaces-title-h9i0j1',
  },
  {
    id: 'cat-huggies',
    name: 'Huggies',
    slug: 'huggies',
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&h=800&fit=crop&q=80',
    imgId: 'category-huggies-img-k2l3m4',
    titleId: 'category-huggies-title-k2l3m4',
  },
]

const CategoryTiles = () => {
  return (
    <section className="py-16 md:py-24 border-t border-warm-gray">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiles.map(tile => (
            <Link
              key={tile.id}
              to={`/shop/${tile.slug}`}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <img
                src={tile.image}
                alt={tile.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={tile.titleId}
                  className="font-serif text-2xl md:text-3xl text-cream tracking-wide"
                >
                  {tile.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryTiles

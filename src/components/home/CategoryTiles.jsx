import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    count: 2
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    count: 1
  },
  {
    id: 'huggies',
    name: 'Huggies',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80',
    count: 1
  }
];

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-[#d4af37] text-xs tracking-[0.3em] uppercase">
            Curated Collections
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mt-3">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-[#d4af37] mx-auto mt-6" />
        </div>

        {/* Category Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="font-serif text-2xl md:text-3xl tracking-[0.2em] mb-2">
                  {category.name.toUpperCase()}
                </h3>
                <span className="text-xs tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity">
                  {category.count} {category.count === 1 ? 'PIECE' : 'PIECES'}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

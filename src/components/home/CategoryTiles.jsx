import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&auto=format&fit=crop',
    path: '/shop?category=earrings',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop',
    path: '/shop?category=necklaces',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&auto=format&fit=crop',
    path: '/shop?category=huggies',
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold text-xs tracking-[0.2em] uppercase mb-3">Browse by</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velvet-900 font-light">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(category => (
            <Link
              key={category.id}
              to={category.path}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-velvet-100"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-white text-2xl md:text-3xl tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
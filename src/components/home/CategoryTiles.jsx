import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Earrings',
    image:
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
    slug: 'earrings',
  },
  {
    name: 'Necklaces',
    image:
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    slug: 'necklaces',
  },
  {
    name: 'Huggies',
    image:
      'https://images.unsplash.com/photo-1635767798638-3e2523c0188b?w=800&q=80',
    slug: 'huggies',
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container-main">
        <h2 className="font-serif text-3xl md:text-4xl text-base text-center mb-12">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="relative aspect-[4/5] overflow-hidden group"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-base/20 group-hover:bg-base/40 transition-colors duration-400" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-sans text-sm uppercase tracking-[0.2em] font-medium text-text-inverse bg-base/60 px-6 py-3 backdrop-blur-sm group-hover:bg-gold group-hover:text-base transition-all duration-300">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

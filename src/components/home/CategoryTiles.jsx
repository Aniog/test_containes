import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop',
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto section-padding">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-label text-brand mb-3">Browse By</p>
          <h2 className="heading-serif text-3xl lg:text-4xl text-charcoal-800">
            Shop by Category
          </h2>
          <div className="w-12 h-[1px] bg-brand mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[3/4] overflow-hidden block"
              style={{ textDecoration: 'none' }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-charcoal-900/20 group-hover:bg-charcoal-900/35 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-white tracking-wide mb-2">
                  {cat.name}
                </h3>
                <span className="text-label text-white/80 border-b border-white/40 pb-0.5 group-hover:border-brand group-hover:text-brand transition-colors duration-300">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

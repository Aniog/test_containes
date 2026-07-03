import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

const categoryImages = {
  earrings: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
  necklaces: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
  huggies: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
};

export default function CategoryTiles() {
  return (
    <section className="section bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="label-uppercase text-xs tracking-[0.2em] mb-3" style={{ color: 'var(--color-gold)' }}>
            Shop By Category
          </p>
          <h2 className="heading-2" style={{ color: 'var(--color-text)' }}>
            Find Your Style
          </h2>
        </div>

        {/* Category Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-[#E8E4DC]"
            >
              {/* Background Image */}
              <img
                src={categoryImages[category.id]}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center">
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-2 tracking-wide">
                  {category.name}
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  {category.description}
                </p>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-white border border-white/40 px-4 py-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
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

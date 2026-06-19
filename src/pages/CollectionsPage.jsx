import { Link } from 'react-router-dom';
import { categories } from '../data/products';

export default function CollectionsPage() {
  return (
    <div className="pt-[var(--header-height)]">
      {/* Header */}
      <div className="bg-[#F5F0E8] py-16">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl tracking-wide text-center mb-3">
            Collections
          </h1>
          <p className="text-[#6B6B6B] text-center max-w-md mx-auto">
            Explore our curated collections, each designed to bring effortless elegance to your everyday.
          </p>
        </div>
      </div>

      {/* Collections Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative aspect-[16/9] overflow-hidden bg-[#F5F0E8]"
              >
                <img
                  src={
                    category.id === 'earrings'
                      ? 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&h=450&fit=crop'
                      : category.id === 'necklaces'
                      ? 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=450&fit=crop'
                      : category.id === 'huggies'
                      ? 'https://images.unsplash.com/photo-1635767798638-3e252a018695?w=800&h=450&fit=crop'
                      : 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=450&fit=crop'
                  }
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="font-serif text-3xl md:text-4xl text-white tracking-wider mb-2">
                      {category.name}
                    </h2>
                    <span className="text-white/70 text-sm tracking-widest uppercase">
                      {category.count} {category.count === 1 ? 'Piece' : 'Pieces'}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
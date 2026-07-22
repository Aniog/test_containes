import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    name: 'Earrings',
    slug: 'earrings',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop',
  },
  {
    name: 'Necklaces',
    slug: 'necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop',
  },
  {
    name: 'Huggies',
    slug: 'huggies',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&h=1000&fit=crop',
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C8A45C] font-medium mb-3">
            Find Your Piece
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] font-light">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-[#C8A45C] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-500" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center transform transition-all duration-500 group-hover:translate-y-[-8px]">
                  <h3 className="font-serif text-2xl md:text-3xl text-white font-light tracking-wide">
                    {cat.name}
                  </h3>
                  <div className="flex items-center justify-center gap-2 mt-3 text-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 text-xs tracking-[0.2em] uppercase">
                    <span>Shop Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
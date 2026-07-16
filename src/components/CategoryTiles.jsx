import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c8ab60908?w=800&q=85',
    description: 'Cuffs, drops, and huggies',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=85',
    description: 'Pendants, chains, and sets',
  },
  {
    id: 'huggies',
    name: 'Huggies', 
    image: 'https://images.unsplash.com/photo-1629224316810-9d6d07f79a5b?w=800&q=85',
    description: 'Classic and contemporary',
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="section-heading">Shop by Category</h2>
        <p className="section-subheading">Find your perfect piece</p>

        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative h-64 md:h-80 rounded overflow-hidden bg-velvet-surface"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velvet-deep/80 via-velvet-deep/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="font-serif text-xl md:text-2xl text-velvet-cream">{cat.name}</h3>
                <p className="text-velvet-taupe text-xs md:text-sm mt-1">{cat.description}</p>
                <span className="inline-flex items-center gap-1 text-velvet-gold text-xs tracking-wider uppercase mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Shop Now <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
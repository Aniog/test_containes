import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryTiles() {
  const categories = [
    {
      name: 'Earrings',
      path: '/shop?category=Earrings',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80'
    },
    {
      name: 'Necklaces',
      path: '/shop?category=Necklaces',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80'
    },
    {
      name: 'Huggies',
      path: '/shop?category=Huggies',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">
          Shop by Category
        </h2>
        <div className="divider w-20 mx-auto my-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.path}
            className="relative group overflow-hidden aspect-[4/5] cursor-pointer"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/40 transition-colors duration-500" />
            
            {/* Label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h3 className="font-serif text-3xl text-white tracking-widest uppercase">
                  {category.name}
                </h3>
                <div className="w-12 h-px bg-white/70 mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="text-white/80 mt-4 text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Shop Now →
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

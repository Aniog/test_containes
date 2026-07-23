import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    {
      id: 'earrings',
      name: 'Earrings',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      path: '/shop?category=earrings',
    },
    {
      id: 'necklaces',
      name: 'Necklaces',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      path: '/shop?category=necklaces',
    },
    {
      id: 'huggies',
      name: 'Huggies',
      image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
      path: '/shop?category=huggies',
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-padding">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Explore</p>
          <h2 className="font-serif text-3xl md:text-5xl font-light">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.path}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${cat.image})` }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="font-serif text-3xl md:text-4xl tracking-wider mb-2">{cat.name}</h3>
                  <span className="text-sm uppercase tracking-wider border-b border-white/60 pb-1 group-hover:border-white transition-colors">
                    Discover
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;

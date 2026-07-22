import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Earrings', id: 'cat-earrings', slug: 'Earrings' },
  { name: 'Necklaces', id: 'cat-necklaces', slug: 'Necklaces' },
  { name: 'Huggies', id: 'cat-huggies', slug: 'Huggies' },
];

const CategoryTiles = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link 
              key={cat.id} 
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[4/5] overflow-hidden bg-neutral-100"
            >
              <img 
                data-strk-img-id={cat.id}
                data-strk-img={`minimalist gold ${cat.name} editorial photography on clean background`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                alt={cat.name}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="text-white text-3xl font-serif opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 tracking-wider">
                  {cat.name}
                </h3>
              </div>
              <div className="absolute bottom-10 left-10 md:hidden">
                 <h3 className="text-white text-2xl font-serif tracking-wider shadow-sm">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;

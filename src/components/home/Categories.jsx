import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    { name: 'Earrings', id: 'earrings', image: 'gold earrings' },
    { name: 'Necklaces', id: 'necklaces', image: 'gold necklaces' },
    { name: 'Huggies', id: 'huggies', image: 'gold huggies' },
  ];

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat) => (
            <Link 
              key={cat.id} 
              to={`/shop/${cat.id}`}
              className="relative aspect-[4/5] overflow-hidden group bg-neutral-100"
            >
              <img
                data-strk-img-id={`cat-tile-${cat.id}`}
                data-strk-img={`[cat-name-${cat.id}] aesthetic jewelry luxury`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                <h3 id={`cat-name-${cat.id}`} className="text-white text-2xl font-serif tracking-[0.2em] translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {cat.name}
                </h3>
                <span className="w-12 h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

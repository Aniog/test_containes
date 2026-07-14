import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    { name: 'Earrings', link: '/shop?category=Earrings', imgId: 'cat-earrings' },
    { name: 'Necklaces', link: '/shop?category=Necklaces', imgId: 'cat-necklaces' },
    { name: 'Huggies', link: '/shop?category=Huggies', imgId: 'cat-huggies' }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <Link 
            key={cat.name} 
            to={cat.link}
            className="group relative h-[500px] overflow-hidden bg-velmora-bg"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
              data-strk-bg-id={cat.imgId}
              data-strk-bg={`luxury gold ${cat.name} isolated clean product photography`}
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <div className="bg-white/95 px-10 py-5">
                <span className="text-xs uppercase tracking-[0.4em] font-medium text-velmora-fg">
                  {cat.name}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;

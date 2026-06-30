import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    { name: 'Earrings', path: '/collections/earrings', query: 'minimalist gold hoop earrings jewelry lifestyle' },
    { name: 'Necklaces', path: '/collections/necklaces', query: 'dainty gold necklace pendant jewelry lifestyle' },
    { name: 'Huggies', path: '/collections/huggies', query: 'small gold huggie earrings jewelry close-up' },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/80">Fine Essentials</p>
            <h2 className="text-3xl md:text-4xl font-serif">Shop by Category</h2>
          </div>
          <Link to="/shop" className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-muted-foreground/30 pb-1 hover:border-foreground transition-all">
            View All Jewelry
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link key={cat.name} to={cat.path} className="group relative aspect-[3/4] overflow-hidden bg-neutral-100">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" 
                alt={cat.name}
                data-strk-img-id={`cat-tile-${cat.name.toLowerCase()}`}
                data-strk-img={cat.query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-all duration-700" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <h3 className="text-white text-2xl font-serif tracking-widest mb-4 group-hover:-translate-y-2 transition-transform duration-700">
                  {cat.name}
                </h3>
                <span className="text-white text-[9px] font-bold uppercase tracking-[0.4em] opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                  Shop Now
                </span>
                <div className="absolute bottom-12 w-8 h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-200" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;

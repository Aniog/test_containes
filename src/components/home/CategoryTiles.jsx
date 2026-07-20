import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop',
    link: '/shop/earrings'
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1515562141207-7a18b5ce7142?q=80&w=800&auto=format&fit=crop',
    link: '/shop/necklaces'
  },
  {
    id: 'huggies',
    name: 'Huggies',
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=800&auto=format&fit=crop',
    link: '/shop/huggies'
  }
];

const CategoryTiles = () => {
  return (
    <section className="py-24 px-6 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <h2 id="category-title" className="text-2xl font-serif text-center mb-16 uppercase tracking-[0.3em]">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link 
              key={cat.id} 
              to={cat.link}
              className="group relative aspect-[4/5] overflow-hidden bg-zinc-200"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-soft duration-1000 group-hover:scale-105"
                data-strk-img-id={`cat-${cat.id}`}
                data-strk-img={`luxury gold ${cat.name} jewelry model [category-title]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-soft" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                   <span className="block text-white uppercase tracking-[0.4em] text-xs font-semibold mb-2 opacity-0 group-hover:opacity-100 transition-soft translate-y-2 group-hover:translate-y-0">Explore</span>
                   <h3 className="text-white text-3xl font-serif uppercase tracking-widest">{cat.name}</h3>
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

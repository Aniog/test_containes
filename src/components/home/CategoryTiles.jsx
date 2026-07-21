import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const categories = [
  { name: 'Earrings', slug: 'Earrings', image: 'https://placehold.co/600x800/d4af37/ffffff?text=Earrings' },
  { name: 'Necklaces', slug: 'Necklaces', image: 'https://placehold.co/600x800/e6c875/ffffff?text=Necklaces' },
  { name: 'Huggies', slug: 'Huggies', image: 'https://placehold.co/600x800/c5a028/ffffff?text=Huggies' },
];

export default function CategoryTiles() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-velmora-accent mb-2">Explore</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-dark">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <motion.div
              key={cat.slug}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={`/shop?category=${cat.slug}`}
                className="group relative block aspect-[3/4] overflow-hidden bg-velmora-bg"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-in-out-expo group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-2xl md:text-3xl text-white tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {cat.name}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-medium tracking-widest uppercase text-white/90 bg-black/40 px-3 py-1.5 backdrop-blur-sm group-hover:opacity-0 transition-opacity">
                    {cat.name}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

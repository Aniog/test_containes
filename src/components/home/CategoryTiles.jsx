import React from 'react';
import { motion } from 'framer-motion';

const CategoryTiles = () => {
  const categories = [
    { id: 'earrings', name: 'Earrings', imgId: 'cat-earrings-v1' },
    { id: 'necklaces', name: 'Necklaces', imgId: 'cat-necklaces-v1' },
    { id: 'huggies', name: 'Huggies', imgId: 'cat-huggies-v1' },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-background">
      <div className="max-w-screen-2xl mx-auto">
        <div id="cat-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative aspect-[3/4] overflow-hidden bg-secondary/10 cursor-pointer shadow-sm"
            >
              <img 
                data-strk-img-id={cat.imgId}
                data-strk-img={`[cat-label-${cat.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.1]" 
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-90 group-hover:scale-100">
                <div className="border border-white/40 px-10 py-4 backdrop-blur-sm">
                   <h3 className="font-serif text-2xl text-white tracking-[0.2em] uppercase font-light">
                    {cat.name}
                  </h3>
                </div>
              </div>
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 group-hover:opacity-0 transition-opacity duration-300">
                <h3 id={`cat-label-${cat.id}`} className="font-serif text-xl text-white tracking-[0.2em] uppercase font-light drop-shadow-md">
                  {cat.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;

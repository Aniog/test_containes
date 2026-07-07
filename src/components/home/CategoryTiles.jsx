import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const tiles = [
  {
    label: 'Earrings',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
    href: '/shop?category=Earrings',
  },
  {
    label: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    href: '/shop?category=Necklaces',
  },
  {
    label: 'Huggies',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
    href: '/shop?category=Huggies',
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-14 md:py-20 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs tracking-ultra uppercase text-velmora-gold font-medium mb-3">
            Explore
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-espresso">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiles.map((tile, idx) => (
            <motion.div
              key={tile.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link
                to={tile.href}
                className="group relative block aspect-[4/5] overflow-hidden bg-velmora-sand"
              >
                <img
                  src={tile.image}
                  alt={tile.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-400" />
                <div className="absolute inset-0 flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-400">
                  <span className="font-serif text-2xl md:text-3xl text-white tracking-widest uppercase">
                    {tile.label}
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 md:hidden">
                  <span className="font-serif text-xl text-white tracking-widest uppercase">
                    {tile.label}
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

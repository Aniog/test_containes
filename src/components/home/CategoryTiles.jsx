import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    subtitle: 'Studs, drops & ear cuffs',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
    imgId: 'cat-tile-earrings-9d3f2a',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    subtitle: 'Chains, pendants & chokers',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
    imgId: 'cat-tile-necklaces-7b4e1c',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    subtitle: 'Chunky & dainty huggie hoops',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
    imgId: 'cat-tile-huggies-5a8c3d',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="text-caption uppercase tracking-[0.25em] text-gold-500 mb-3">
            Explore
          </p>
          <h2 className="heading-section text-charcoal-800">Shop by Category</h2>
          <div className="divider mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/shop?category=${cat.id}`}
                className="group relative block aspect-[4/5] overflow-hidden bg-charcoal-100"
              >
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-charcoal-900/20 group-hover:bg-charcoal-900/40 transition-all duration-500" />
                {/* Label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <h3
                    id={cat.titleId}
                    className="font-serif text-3xl lg:text-4xl text-cream-50 tracking-wider mb-1"
                  >
                    {cat.name}
                  </h3>
                  <p
                    id={cat.descId}
                    className="text-body-sm text-cream-200/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0"
                  >
                    {cat.subtitle}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

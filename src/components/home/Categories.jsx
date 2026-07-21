import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { motion } from 'framer-motion';

const Categories = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    { name: 'Earrings', path: '/shop?category=earrings', query: 'gold earrings jewelry aesthetic' },
    { name: 'Necklaces', path: '/shop?category=necklaces', query: 'gold necklace jewelry aesthetic' },
    { name: 'Huggies', path: '/shop?category=huggies', query: 'gold huggie jewelry aesthetic' },
  ];

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat, idx) => (
          <motion.div 
            key={cat.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group relative h-[600px] overflow-hidden bg-[#E5E2DA]"
          >
            <div 
              className="w-full h-full transition-transform duration-1000 group-hover:scale-110"
              data-strk-bg-id={`cat-bg-${cat.name}`}
              data-strk-bg={`[cat-name-${idx}] luxury jewelry`}
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
            
            <Link to={cat.path} className="absolute inset-0 flex items-center justify-center">
              <span 
                id={`cat-name-${idx}`}
                className="text-white text-3xl font-serif uppercase tracking-[0.3em] font-light translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
              >
                {cat.name}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Categories;

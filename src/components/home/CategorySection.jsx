import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CategorySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    { id: 'earrings', name: 'Earrings', query: 'gold earrings woman elegant jewelry', link: '/shop?category=earrings' },
    { id: 'necklaces', name: 'Necklaces', query: 'gold necklace woman delicate jewelry', link: '/shop?category=necklaces' },
    { id: 'huggies', name: 'Huggies', query: 'gold huggie earrings hoop jewelry', link: '/shop?category=huggies' },
  ];

  return (
    <section ref={containerRef} className="py-16 lg:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-velmora-gold text-xs tracking-super-wide uppercase mb-2">Explore</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-light text-velmora-base">Shop by Category</h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        {/* Category Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.link}
              className="group relative aspect-[4/5] bg-velmora-warm overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={`cat-${cat.id}`}
                data-strk-bg={cat.query}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-velmora-base/30 group-hover:bg-velmora-base/40 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="font-serif text-2xl lg:text-3xl text-white tracking-wide mb-3 group-hover:mb-4 transition-all duration-300">
                  {cat.name}
                </h3>
                <div className="flex items-center gap-2 text-white/80 text-xs tracking-ultra-wide uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Shop Now
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;

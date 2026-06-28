import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const HomeCategories = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    { name: "Earrings", id: "cat-earrings", icon: "earring" },
    { name: "Necklaces", id: "cat-necklaces", icon: "necklace" },
    { name: "Huggies", id: "cat-huggies", icon: "gold ring" },
  ];

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link 
              key={cat.id}
              to={`/shop?category=${cat.name.toLowerCase()}`}
              className="group relative overflow-hidden aspect-[4/5] bg-brand-sand"
            >
              <img
                data-strk-img-id={cat.id}
                data-strk-img={`luxury [cat-name-${cat.id}] fine gold jewelry macro`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3C/svg%3E"
                alt={cat.name}
              />
              
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <div className="bg-white/90 backdrop-blur-sm p-8 flex flex-col items-center space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <h3 
                    id={`cat-name-${cat.id}`}
                    className="text-2xl font-serif uppercase tracking-[0.2em]"
                  >
                    {cat.name}
                  </h3>
                  <div className="w-10 h-[1px] bg-brand-charcoal opacity-30" />
                  <span className="text-[10px] font-sans uppercase tracking-[0.3em] flex items-center gap-2">
                    Shop Now <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCategories;
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    const loadImages = async () => {
      const { ImageHelper } = await import('@strikingly/sdk');
      const config = await import('../../strk-img-config.json');
      if (containerRef.current) {
        ImageHelper.loadImages(config.default, containerRef.current);
      }
    };
    loadImages();
  }, []);

  const categories = [
    { 
      name: 'Earrings', 
      query: 'elegant gold earrings jewelry collection',
      link: '/shop?category=Earrings'
    },
    { 
      name: 'Necklaces', 
      query: 'gold necklace jewelry elegant style',
      link: '/shop?category=Necklaces'
    },
    { 
      name: 'Huggies', 
      query: 'gold huggie earrings jewelry close up',
      link: '/shop?category=Huggies'
    },
  ];

  return (
    <section className="section-padding" ref={containerRef}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">
            Shop by Category
          </h2>
          <div className="hairline w-24 mx-auto mb-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={category.link}
              className="relative group overflow-hidden rounded-lg aspect-[4/5] block"
            >
              <img
                data-strk-img-id={`category-${index + 1}`}
                data-strk-img={category.query}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-velmora-charcoal/20 group-hover:bg-velmora-charcoal/40 transition-colors duration-500" />
              
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-serif text-3xl md:text-4xl text-white font-light mb-2
                               transform translate-y-4 group-hover:translate-y-0 
                               transition-transform duration-500">
                    {category.name}
                  </h3>
                  <div className="flex items-center justify-center gap-2 text-white uppercase tracking-widest text-sm
                                opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0
                                transition-all duration-500">
                    <span>Shop Now</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

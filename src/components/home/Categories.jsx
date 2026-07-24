import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Categories = () => {
  const containerRef = useRef(null);

  const cats = [
    { title: "Earrings", path: "/shop?category=Earrings" },
    { title: "Necklaces", path: "/shop?category=Necklaces" },
    { title: "Huggies", path: "/shop?category=Huggies" },
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cats.map((cat) => (
          <Link
            key={cat.title}
            to={cat.path}
            className="group relative aspect-square overflow-hidden bg-muted"
          >
            <img
              data-strk-img-id={`cat-tile-${cat.title.toLowerCase()}`}
              data-strk-img={`[cat-title-${cat.title}] gold jewelry close-up`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={cat.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                id={`cat-title-${cat.title}`}
                className="text-white text-3xl md:text-4xl font-serif tracking-widest uppercase transition-transform duration-500 group-hover:scale-110"
              >
                {cat.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;

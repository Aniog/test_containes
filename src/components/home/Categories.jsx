import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

export function Categories() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    { title: "Earrings", id: "cat-earrings", imgId: "cat-img-earrings" },
    { title: "Necklaces", id: "cat-necklaces", imgId: "cat-img-necklaces" },
    { title: "Huggies", id: "cat-huggies", imgId: "cat-img-huggies" }
  ];

  return (
    <section ref={containerRef} className="py-20 bg-background">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/shop?category=${category.title.toLowerCase()}`}
              className="group relative aspect-square overflow-hidden block bg-secondary"
            >
              <img
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                data-strk-img-id={category.imgId}
                data-strk-img={`[${category.id}-title] female model jewelry`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
              
              <div className="absolute inset-x-0 bottom-10 flex justify-center">
                <span 
                  id={`${category.id}-title`}
                  className="bg-background/95 backdrop-blur px-8 py-3 font-serif uppercase tracking-widest text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  {category.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
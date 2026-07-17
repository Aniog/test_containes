import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// import { ImageHelper } from '@strikingly/sdk';
// import strkImgConfig from '@/strk-img-config.json';

const categories = [
  { id: 'cat-earrings', label: 'Earrings', query: 'gold earrings editorial jewelry flat lay', href: '/shop?category=Earrings' },
  { id: 'cat-necklaces', label: 'Necklaces', query: 'gold necklace editorial jewelry flat lay', href: '/shop?category=Necklaces' },
  { id: 'cat-huggies', label: 'Huggies', query: 'gold huggie earrings editorial jewelry flat lay', href: '/shop?category=Huggies' },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return // ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding py-20 md:py-28">
      <div className="text-center mb-14">
        <p className="font-sans text-xs tracking-widest uppercase text-taupe mb-4">
          Explore
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso">
          Shop by Category
        </h2>
        <div className="w-12 h-px bg-gold mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={cat.href}
            className="group relative aspect-[4/5] overflow-hidden rounded-sm"
          >
            <img
              data-strk-img-id={cat.id}
              data-strk-img={cat.query}
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={cat.label}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/40 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-2xl md:text-3xl text-cream tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {cat.label}
              </span>
            </div>
            <span className="absolute bottom-5 left-5 font-sans text-xs tracking-widest uppercase text-cream font-medium md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {cat.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

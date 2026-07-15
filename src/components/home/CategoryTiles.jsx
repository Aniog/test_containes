import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useNavigate } from 'react-router-dom';

const categories = [
  { id: 'earrings', label: 'Earrings', imgId: 'cat-earrings' },
  { id: 'necklaces', label: 'Necklaces', imgId: 'cat-necklaces' },
  { id: 'huggies', label: 'Huggies', imgId: 'cat-huggies' },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
      <div className="text-center mb-14">
        <h2 className="section-heading">Shop by Category</h2>
        <p className="section-subhead">Curated collections for every occasion.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="group relative aspect-[4/5] bg-velmora-sand overflow-hidden cursor-pointer"
            onClick={() => navigate(`/shop?category=${cat.id}`)}
          >
            <img
              alt={cat.label}
              data-strk-img-id={`${cat.imgId}-7d3fa1`}
              data-strk-img={`[cat-label-${cat.id}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-velmora-espresso/30 group-hover:bg-velmora-espresso/50 transition-colors duration-500 flex items-center justify-center">
              <span
                id={`cat-label-${cat.id}`}
                className="font-serif text-2xl md:text-3xl text-white tracking-wide"
              >
                {cat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

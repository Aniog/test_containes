import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    { name: 'Earrings', id: 'cat-earrings', slug: 'earrings' },
    { name: 'Necklaces', id: 'cat-necklaces', slug: 'necklaces' },
    { name: 'Huggies', id: 'cat-huggies', slug: 'huggies' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="relative aspect-[4/5] overflow-hidden group"
            >
              <div
                className="absolute inset-0 bg-[#E5E1DA] transition-transform duration-1000 group-hover:scale-110"
                data-strk-bg-id={`cat-bg-${cat.slug}`}
                data-strk-bg={`[cat-label-${cat.slug}] jewelry category display`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`cat-label-${cat.slug}`}
                  className="text-white font-serif text-3xl uppercase tracking-widest transition-transform duration-500 transform group-hover:scale-110"
                >
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
EOF && cat <<EOF > src/components/home/ReelSection.jsx
import React from 'react';

const ReelSection = () => {
  const reels = [
    { id: 'reel-1', caption: 'Everyday stacking' },
    { id: 'reel-2', caption: 'Golden hour glow' },
    { id: 'reel-3', caption: 'The statement piece' },
    { id: 'reel-4', caption: 'Effortless luxury' },
    { id: 'reel-5', caption: 'Handcrafted details' }
  ];

  return (
    <section className="py-32 bg-[#FAF9F6] overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex items-center justify-between">
         <h2 className="font-serif text-3xl font-medium tracking-wide">Seen on You</h2>
         <p className="font-sans text-[10px] uppercase tracking-[0.2em] opacity-40">#VelmoraSociety</p>
      </div>
      <div className="flex space-x-4 overflow-x-auto no-scrollbar px-6 md:px-[calc((100vw-min(1280px,calc(100vw-48px)))/2)] pb-4">
        {reels.map((reel) => (
          <div key={reel.id} className="relative w-64 md:w-80 flex-shrink-0 aspect-[9/16] bg-[#E5E1DA] group overflow-hidden">
            <img
              data-strk-img-id={`reel-img-${reel.id}`}
              data-strk-img={`[reel-cap-${reel.id}] woman wearing jewelry lifestyle`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
              <p id={`reel-cap-${reel.id}`} className="text-white font-serif italic text-lg opacity-90">
                "{reel.caption}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReelSection;
EOF > src/components/home/CategoryTiles.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    { name: 'Earrings', id: 'cat-earrings', slug: 'earrings' },
    { name: 'Necklaces', id: 'cat-necklaces', slug: 'necklaces' },
    { name: 'Huggies', id: 'cat-huggies', slug: 'huggies' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="relative aspect-[4/5] overflow-hidden group"
            >
              <div
                className="absolute inset-0 bg-[#E5E1DA] transition-transform duration-1000 group-hover:scale-110"
                data-strk-bg-id={`cat-bg-${cat.slug}`}
                data-strk-bg={`[cat-label-${cat.slug}] jewelry category display`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`cat-label-${cat.slug}`}
                  className="text-white font-serif text-3xl uppercase tracking-widest transition-transform duration-500 transform group-hover:scale-110"
                >
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
EOF && cat <<EOF > src/components/home/ReelSection.jsx
import React from 'react';

const ReelSection = () => {
  const reels = [
    { id: 'reel-1', caption: 'Everyday stacking' },
    { id: 'reel-2', caption: 'Golden hour glow' },
    { id: 'reel-3', caption: 'The statement piece' },
    { id: 'reel-4', caption: 'Effortless luxury' },
    { id: 'reel-5', caption: 'Handcrafted details' }
  ];

  return (
    <section className="py-32 bg-[#FAF9F6] overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex items-center justify-between">
         <h2 className="font-serif text-3xl font-medium tracking-wide">Seen on You</h2>
         <p className="font-sans text-[10px] uppercase tracking-[0.2em] opacity-40">#VelmoraSociety</p>
      </div>
      <div className="flex space-x-4 overflow-x-auto no-scrollbar px-6 md:px-[calc((100vw-min(1280px,calc(100vw-48px)))/2)] pb-4">
        {reels.map((reel) => (
          <div key={reel.id} className="relative w-64 md:w-80 flex-shrink-0 aspect-[9/16] bg-[#E5E1DA] group overflow-hidden">
            <img
              data-strk-img-id={`reel-img-${reel.id}`}
              data-strk-img={`[reel-cap-${reel.id}] woman wearing jewelry lifestyle`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
              <p id={`reel-cap-${reel.id}`} className="text-white font-serif italic text-lg opacity-90">
                "{reel.caption}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReelSection;

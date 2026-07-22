import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categoryData = [
  {
    id: 'earrings',
    name: 'Earrings',
    imgId: 'cat-earrings-a1b2c3',
    title: 'Gold earrings collection',
    desc: 'Velmora earrings category',
    link: '/shop?category=earrings',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    imgId: 'cat-necklaces-d4e5f6',
    title: 'Gold necklaces collection',
    desc: 'Velmora necklaces category',
    link: '/shop?category=necklaces',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    imgId: 'cat-huggies-g7h8i9',
    title: 'Gold huggie earrings collection',
    desc: 'Velmora huggies category',
    link: '/shop?category=huggies',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="serif-heading text-4xl md:text-5xl mb-3">Shop by Category</h2>
          <div className="w-12 h-px bg-accent mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryData.map(cat => (
            <Link
              key={cat.id}
              to={cat.link}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <div
                className="absolute inset-0"
                data-strk-bg-id={cat.imgId}
                data-strk-bg={`[${cat.desc}] [${cat.title}]`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="serif-heading text-3xl md:text-4xl text-white tracking-widest group-hover:tracking-[0.3em] transition-all duration-500">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

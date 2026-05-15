import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const butterVarieties = [
  {
    id: 'butter-1',
    name: 'Cultured Butter',
    description: 'Slow-churned from cream that has been gently fermented, giving a rich, tangy depth of flavour.',
    tag: 'Bestseller',
    imgId: 'butter-img-b1c2d3',
  },
  {
    id: 'butter-2',
    name: 'Sea Salt Butter',
    description: 'Our classic churned butter finished with hand-harvested fleur de sel for a perfect savoury balance.',
    tag: 'Classic',
    imgId: 'butter-img-e4f5a6',
  },
  {
    id: 'butter-3',
    name: 'Brown Butter',
    description: 'Slowly cooked until the milk solids turn golden, unlocking a deep, nutty, caramel-like aroma.',
    tag: 'Chef\'s Pick',
    imgId: 'butter-img-g7h8i9',
  },
];

const ButterSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="butter" ref={containerRef} className="py-24 bg-parchment">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="uppercase tracking-widest text-sm font-semibold text-sage mb-3 block">
            Pure &amp; Creamy
          </span>
          <h2
            id="butter-section-title"
            className="font-playfair text-4xl md:text-5xl font-bold text-brown-dark mb-4"
          >
            Our Butter Collection
          </h2>
          <p className="text-warm-gray text-lg max-w-xl mx-auto leading-relaxed">
            Made from the cream of grass-fed cows, each variety is crafted to bring out
            a unique character — from silky smooth to boldly nutty.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {butterVarieties.map((item) => (
            <div key={item.id} className="bg-cream rounded-2xl shadow-md overflow-hidden group">
              <div className="relative overflow-hidden h-52">
                <img
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.id}-desc] [${item.id}-name] [butter-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <span className="absolute top-3 left-3 bg-butter text-brown-dark text-xs font-semibold px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 id={`${item.id}-name`} className="font-playfair text-xl font-bold text-brown-dark mb-2">
                  {item.name}
                </h3>
                <p id={`${item.id}-desc`} className="text-warm-gray text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Feature strip */}
        <div className="mt-16 bg-brown-dark rounded-2xl px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { stat: '100%', label: 'Grass-Fed Cream' },
            { stat: '48h', label: 'Slow Churned' },
            { stat: 'No', label: 'Artificial Additives' },
          ].map(({ stat, label }) => (
            <div key={label}>
              <p className="font-playfair text-4xl font-bold text-butter mb-1">{stat}</p>
              <p className="text-parchment text-sm uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ButterSection;

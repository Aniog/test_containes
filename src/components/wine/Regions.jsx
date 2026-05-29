import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const regions = [
  {
    id: 'bordeaux',
    name: 'Bordeaux',
    country: 'France',
    description: 'The undisputed capital of fine wine, known for its legendary Cabernet Sauvignon and Merlot blends.',
    wines: 'Cabernet Sauvignon, Merlot, Sauvignon Blanc',
  },
  {
    id: 'burgundy',
    name: 'Burgundy',
    country: 'France',
    description: 'Home to the world\'s most coveted Pinot Noir and Chardonnay, shaped by centuries of monastic tradition.',
    wines: 'Pinot Noir, Chardonnay',
  },
  {
    id: 'tuscany',
    name: 'Tuscany',
    country: 'Italy',
    description: 'Rolling hills and ancient estates produce Italy\'s most iconic wines, from Chianti to Brunello di Montalcino.',
    wines: 'Sangiovese, Vernaccia, Super Tuscans',
  },
  {
    id: 'rioja',
    name: 'Rioja',
    country: 'Spain',
    description: 'Spain\'s most celebrated wine region, producing age-worthy Tempranillo with remarkable depth and elegance.',
    wines: 'Tempranillo, Garnacha, Viura',
  },
];

const Regions = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="regions" ref={containerRef} className="bg-wine-deep py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-wine-gold uppercase tracking-widest text-sm font-semibold mb-4">Wine Regions</p>
          <h2 id="regions-title" className="font-serif text-4xl md:text-5xl text-wine-cream font-bold mb-4">
            From the World's Great Terroirs
          </h2>
          <p id="regions-subtitle" className="text-wine-muted text-lg max-w-xl mx-auto">
            We source exclusively from regions where climate, soil, and tradition converge to produce wines of extraordinary character.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {regions.map((region) => (
            <div
              key={region.id}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="h-64 relative">
                <img
                  alt={region.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={`region-img-${region.id}`}
                  data-strk-img={`[region-desc-${region.id}] [region-name-${region.id}] [regions-subtitle] [regions-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wine-deep via-wine-deep/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-wine-gold text-xs uppercase tracking-widest font-semibold mb-1">{region.country}</p>
                <h3 id={`region-name-${region.id}`} className="font-serif text-2xl text-wine-cream font-bold mb-2">
                  {region.name}
                </h3>
                <p id={`region-desc-${region.id}`} className="text-wine-muted text-sm leading-relaxed mb-3">
                  {region.description}
                </p>
                <p className="text-wine-gold/70 text-xs font-medium">
                  {region.wines}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Regions;

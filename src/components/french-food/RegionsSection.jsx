import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const regions = [
  {
    id: 'region-img-1',
    titleId: 'region-title-1',
    subtitleId: 'region-sub-1',
    name: 'Provence',
    tagline: 'Sun-drenched flavours of the south',
    dishes: ['Ratatouille', 'Bouillabaisse', 'Tapenade', 'Socca'],
    description: 'Provençal cuisine is defined by olive oil, garlic, tomatoes, and the fragrant herbs of the garrigue — thyme, rosemary, and lavender.',
  },
  {
    id: 'region-img-2',
    titleId: 'region-title-2',
    subtitleId: 'region-sub-2',
    name: 'Burgundy',
    tagline: 'Wine country and hearty classics',
    dishes: ['Coq au Vin', 'Boeuf Bourguignon', 'Escargots', 'Gougères'],
    description: 'Burgundy is synonymous with rich, wine-based braises and world-class Pinot Noir. Its cuisine is robust, earthy, and deeply satisfying.',
  },
  {
    id: 'region-img-3',
    titleId: 'region-title-3',
    subtitleId: 'region-sub-3',
    name: 'Normandy',
    tagline: 'Cream, apples, and the sea',
    dishes: ['Moules Marinières', 'Tarte Tatin', 'Camembert', 'Calvados'],
    description: 'Normandy\'s lush pastures produce exceptional dairy and apples. Its cuisine celebrates cream, butter, cider, and fresh Atlantic seafood.',
  },
  {
    id: 'region-img-4',
    titleId: 'region-title-4',
    subtitleId: 'region-sub-4',
    name: 'Alsace',
    tagline: 'Franco-German border flavours',
    dishes: ['Choucroute Garnie', 'Flammekueche', 'Baeckeoffe', 'Kugelhopf'],
    description: 'Alsatian cuisine reflects its unique cultural heritage — hearty Germanic influences blended with French finesse, paired with exceptional Riesling.',
  },
];

const RegionCard = ({ region }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-[#E8E0D5] shadow-md hover:shadow-xl transition-shadow group">
      <div className="relative h-56 overflow-hidden">
        <img
          alt={region.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-strk-img-id={region.id}
          data-strk-img={`[${region.subtitleId}] [${region.titleId}] France region landscape food`}
          data-strk-img-ratio="3x2"
          data-strk-img-width="700"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <h3 id={region.titleId} className="font-['Playfair_Display'] text-2xl font-bold text-white">
            {region.name}
          </h3>
          <p id={region.subtitleId} className="text-white/80 text-sm italic">{region.tagline}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-[#6B6560] text-sm leading-relaxed mb-4">{region.description}</p>
        <div>
          <p className="text-xs font-semibold text-[#8B1A2F] uppercase tracking-wider mb-2">Signature Dishes</p>
          <div className="flex flex-wrap gap-2">
            {region.dishes.map((dish) => (
              <span
                key={dish}
                className="text-xs bg-[#FAF7F2] text-[#1C1C1C] border border-[#E8E0D5] px-3 py-1 rounded-full"
              >
                {dish}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const RegionsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="regions" ref={containerRef} className="bg-[#FAF7F2] py-20 md:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm font-medium tracking-[0.3em] uppercase mb-3">
            Across the Hexagon
          </p>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-bold text-[#1C1C1C] mb-6">
            Flavours by Region
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mb-8" />
          <p className="text-[#6B6560] text-lg max-w-2xl mx-auto">
            Each region of France has its own distinct culinary identity, shaped by climate, geography, and centuries of tradition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regions.map((region) => (
            <RegionCard key={region.id} region={region} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionsSection;

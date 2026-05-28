import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const regions = [
  {
    id: 'region-oaxaca',
    imgId: 'region-img-oaxaca-3h6k',
    name: 'Oaxaca',
    label: 'The Land of Seven Moles',
    description: 'Famous for its complex moles, tlayudas, and mezcal. Oaxacan cuisine is deeply rooted in indigenous traditions.',
  },
  {
    id: 'region-yucatan',
    imgId: 'region-img-yucatan-7m2p',
    name: 'Yucatán',
    label: 'Mayan Flavors',
    description: 'Cochinita pibil, sopa de lima, and habanero salsas define this region\'s bold and aromatic Mayan heritage.',
  },
  {
    id: 'region-veracruz',
    imgId: 'region-img-veracruz-1s9d',
    name: 'Veracruz',
    label: 'Coastal Richness',
    description: 'Seafood-forward cuisine with Spanish and Afro-Caribbean influences — huachinango a la veracruzana is iconic.',
  },
];

const RegionsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-orange-500 uppercase tracking-widest text-sm font-semibold mb-3">
            Across the Country
          </p>
          <h2
            id="regions-title"
            className="text-gray-900 text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Regional Flavors
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base">
            Mexico's cuisine varies dramatically by region, each with its own ingredients, techniques, and history.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regions.map((region) => (
            <div key={region.id} className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 bg-amber-100">
                <img
                  id={region.id}
                  alt={region.name}
                  data-strk-img-id={region.imgId}
                  data-strk-img={`[${region.id}] [regions-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-orange-300 text-xs uppercase tracking-widest font-semibold">{region.label}</span>
                  <h3 className="text-white text-2xl font-bold mt-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {region.name}
                  </h3>
                </div>
              </div>
              <div className="bg-white p-5">
                <p className="text-gray-500 text-sm leading-relaxed">{region.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionsSection;

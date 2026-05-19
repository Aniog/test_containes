import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const seasons = [
  {
    id: 'season-title-1',
    name: 'Spring',
    id_desc: 'season-desc-1',
    description: 'Witness the world reawaken as blossoms burst forth and life returns to every corner of the earth.',
    imgId: 'season-img-e4f5g6',
    color: 'from-pink-400/80',
  },
  {
    id: 'season-title-2',
    name: 'Summer',
    id_desc: 'season-desc-2',
    description: 'Bask in golden light, lush greenery, and the full abundance of nature at its most vibrant peak.',
    imgId: 'season-img-h7i8j9',
    color: 'from-yellow-500/80',
  },
  {
    id: 'season-title-3',
    name: 'Autumn',
    id_desc: 'season-desc-3',
    description: 'Marvel at the fiery tapestry of reds, oranges, and golds as forests prepare for their winter rest.',
    imgId: 'season-img-k1l2m3',
    color: 'from-orange-600/80',
  },
  {
    id: 'season-title-4',
    name: 'Winter',
    id_desc: 'season-desc-4',
    description: 'Discover the serene beauty of snow-covered landscapes and the quiet magic of the frozen world.',
    imgId: 'season-img-n4o5p6',
    color: 'from-blue-400/80',
  },
];

const Seasons = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="seasons" ref={containerRef} className="bg-cream py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-green-forest font-sans font-semibold tracking-widest uppercase text-sm mb-3">
            Year-round beauty
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nature Through the Seasons
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Every season transforms the landscape into something entirely new and breathtaking.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {seasons.map(({ id, name, id_desc, description, imgId, color }) => (
            <div key={id} className="relative rounded-2xl overflow-hidden h-80 group cursor-pointer shadow-md hover:shadow-xl transition-shadow">
              <img
                alt={name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                data-strk-img-id={imgId}
                data-strk-img={`[${id_desc}] [${id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${color} to-transparent`} />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 id={id} className="font-serif text-2xl font-bold text-white mb-2">{name}</h3>
                <p id={id_desc} className="text-white/80 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Seasons;

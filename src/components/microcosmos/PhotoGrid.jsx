import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const PhotoGrid = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const photos = [
    { id: 'pg-cell', titleId: 'pg-cell-title', descId: 'pg-cell-desc', imgId: 'pg-img-cell-i1j2k3', title: 'Cell Division', desc: 'Mitosis under fluorescent microscopy', ratio: '1x1', width: '400' },
    { id: 'pg-spore', titleId: 'pg-spore-title', descId: 'pg-spore-desc', imgId: 'pg-img-spore-l4m5n6', title: 'Fungal Spores', desc: 'Colorized SEM of fungal spore clusters', ratio: '1x1', width: '400' },
    { id: 'pg-snowflake', titleId: 'pg-snowflake-title', descId: 'pg-snowflake-desc', imgId: 'pg-img-snowflake-o7p8q9', title: 'Ice Crystal', desc: 'Macro photography of snowflake structure', ratio: '1x1', width: '400' },
    { id: 'pg-blood', titleId: 'pg-blood-title', descId: 'pg-blood-desc', imgId: 'pg-img-blood-r1s2t3', title: 'Red Blood Cells', desc: 'Human erythrocytes under electron microscope', ratio: '1x1', width: '400' },
    { id: 'pg-mold', titleId: 'pg-mold-title', descId: 'pg-mold-desc', imgId: 'pg-img-mold-u4v5w6', title: 'Mold Colony', desc: 'Penicillium mold colony growth pattern', ratio: '1x1', width: '400' },
    { id: 'pg-butterfly', titleId: 'pg-butterfly-title', descId: 'pg-butterfly-desc', imgId: 'pg-img-butterfly-x7y8z9', title: 'Wing Scale', desc: 'Butterfly wing scales under microscope', ratio: '1x1', width: '400' },
    { id: 'pg-coral', titleId: 'pg-coral-title', descId: 'pg-coral-desc', imgId: 'pg-img-coral-a2b3c4', title: 'Coral Polyp', desc: 'Microscopic coral polyp structure', ratio: '1x1', width: '400' },
    { id: 'pg-eye', titleId: 'pg-eye-title', descId: 'pg-eye-desc', imgId: 'pg-img-eye-d5e6f7', title: 'Compound Eye', desc: 'Insect compound eye facets under SEM', ratio: '1x1', width: '400' },
  ];

  return (
    <section ref={containerRef} className="bg-gray-950 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-medium tracking-widest uppercase">Photo Collection</span>
          <h2 id="photogrid-title" className="font-space text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            The Beauty of the Small
          </h2>
          <p id="photogrid-subtitle" className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every image is a window into a world that exists all around us, yet remains invisible to the naked eye.
          </p>
        </div>

        {/* 4-column photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-xl border border-gray-800 hover:border-purple-500/40 transition-all duration-500 aspect-square"
            >
              <img
                alt={photo.title}
                data-strk-img-id={photo.imgId}
                data-strk-img={`[${photo.descId}] [${photo.titleId}] [photogrid-subtitle] [photogrid-title]`}
                data-strk-img-ratio={photo.ratio}
                data-strk-img-width={photo.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                <p id={photo.titleId} className="text-white text-xs font-semibold">{photo.title}</p>
                <p id={photo.descId} className="text-gray-400 text-xs hidden">{photo.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGrid;

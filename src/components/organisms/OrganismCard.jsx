import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const OrganismCard = ({ organism }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden hover:border-teal-500/50 transition-all group"
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          alt={organism.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-strk-img-id={organism.imgId}
          data-strk-img={`[${organism.id}-habitat] [${organism.id}-name] [${organism.id}-kingdom]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-teal-500/20 text-teal-300 text-xs font-medium px-3 py-1 rounded-full border border-teal-500/30">
            {organism.kingdom}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 id={`${organism.id}-name`} className="text-white font-bold text-lg">
              {organism.name}
            </h3>
            <p className="text-teal-400 text-sm italic">{organism.scientific}</p>
          </div>
          <span className={`text-xs px-2 py-1 rounded-full font-medium ${organism.dangerColor}`}>
            {organism.danger}
          </span>
        </div>

        <p id={`${organism.id}-kingdom`} className="text-gray-500 text-xs mb-1 hidden">{organism.kingdom}</p>
        <p id={`${organism.id}-habitat`} className="text-gray-400 text-sm leading-relaxed mb-4">
          {organism.description}
        </p>

        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="bg-gray-800 rounded-lg p-3">
            <div className="text-gray-500 mb-1">Habitat</div>
            <div className="text-gray-200 font-medium">{organism.habitat}</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-3">
            <div className="text-gray-500 mb-1">Size</div>
            <div className="text-gray-200 font-medium">{organism.size}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganismCard;

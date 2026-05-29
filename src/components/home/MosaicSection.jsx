import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '10³⁰', label: 'Microbes on Earth' },
  { value: '99%', label: 'Species Undiscovered' },
  { value: '1.5 kg', label: 'Microbes in Human Body' },
  { value: '3.5B', label: 'Years of Evolution' },
];

const images = [
  { id: 'mosaic-img-a1', query: '[mosaic-title] microscopic bacteria cell', ratio: '1x1', width: 400 },
  { id: 'mosaic-img-b1', query: '[mosaic-title] virus electron microscope', ratio: '1x1', width: 400 },
  { id: 'mosaic-img-c1', query: '[mosaic-title] fungi spores microscope', ratio: '1x1', width: 400 },
  { id: 'mosaic-img-d1', query: '[mosaic-title] protozoa microscopic organism', ratio: '1x1', width: 400 },
  { id: 'mosaic-img-e1', query: '[mosaic-title] algae microscopic green', ratio: '1x1', width: 400 },
  { id: 'mosaic-img-f1', query: '[mosaic-title] diatom microscopic silica', ratio: '1x1', width: 400 },
];

const MosaicSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-teal-400 text-sm font-medium uppercase tracking-widest">
              By the Numbers
            </span>
            <h2 id="mosaic-title" className="text-4xl font-bold text-white mt-2 mb-6">
              The Scale of the Invisible
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              The microbial world dwarfs everything we can see. Microorganisms
              outnumber stars in the observable universe and have been shaping
              life on Earth for billions of years.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-gray-800 rounded-xl p-5 border border-gray-700">
                  <div className="text-2xl font-bold text-teal-400 mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {images.map((img) => (
              <div key={img.id} className="aspect-square rounded-xl overflow-hidden">
                <img
                  alt="Microscopic organism"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  data-strk-img-id={img.id}
                  data-strk-img={img.query}
                  data-strk-img-ratio={img.ratio}
                  data-strk-img-width={img.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MosaicSection;

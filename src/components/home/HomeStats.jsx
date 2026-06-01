import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const quickFacts = [
  { stat: '10 trillion', label: 'Microbial cells in the human body' },
  { stat: '1 μm', label: 'Average size of a bacterium' },
  { stat: '8.7 million', label: 'Estimated species on Earth' },
  { stat: '3.5 billion', label: 'Years of microbial life on Earth' },
];

const mosaicImages = [
  { id: 'mosaic-bacteria', titleId: 'home-mosaic-bacteria-title', imgId: 'home-mosaic-bacteria-img-s1t2u3', title: 'Bacteria colony under microscope', ratio: '1x1', width: '400' },
  { id: 'mosaic-fungi', titleId: 'home-mosaic-fungi-title', imgId: 'home-mosaic-fungi-img-v4w5x6', title: 'Fungi spores microscopy', ratio: '1x1', width: '400' },
  { id: 'mosaic-crystal', titleId: 'home-mosaic-crystal-title', imgId: 'home-mosaic-crystal-img-y7z8a9', title: 'Mineral crystal macro photography', ratio: '1x1', width: '400' },
  { id: 'mosaic-insect', titleId: 'home-mosaic-insect-title', imgId: 'home-mosaic-insect-img-b1c2d3', title: 'Insect eye macro close-up', ratio: '1x1', width: '400' },
  { id: 'mosaic-cell', titleId: 'home-mosaic-cell-title', imgId: 'home-mosaic-cell-img-e4f5g6', title: 'Human cell fluorescence microscopy', ratio: '1x1', width: '400' },
  { id: 'mosaic-plankton', titleId: 'home-mosaic-plankton-title', imgId: 'home-mosaic-plankton-img-h7i8j9', title: 'Marine plankton microscope', ratio: '1x1', width: '400' },
];

export default function HomeStats() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <span className="text-emerald-400 text-sm font-medium uppercase tracking-widest">By the Numbers</span>
          <h2 id="home-stats-title" className="text-4xl md:text-5xl font-bold text-white mt-2 mb-8">
            The Scale of the Invisible
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {quickFacts.map((fact, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <div className="text-3xl font-black text-teal-400 mb-2">{fact.stat}</div>
                <div className="text-gray-400 text-sm leading-snug">{fact.label}</div>
              </div>
            ))}
          </div>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 mt-8 bg-teal-500 hover:bg-teal-400 text-gray-950 font-semibold px-6 py-3 rounded-full transition-all text-sm"
          >
            Learn More About Us
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {mosaicImages.map((img) => (
            <div key={img.id} className="rounded-xl overflow-hidden aspect-square">
              <img
                alt={img.title}
                data-strk-img-id={img.imgId}
                data-strk-img={`[${img.titleId}] [home-stats-title]`}
                data-strk-img-ratio={img.ratio}
                data-strk-img-width={img.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
              <span id={img.titleId} className="sr-only">{img.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

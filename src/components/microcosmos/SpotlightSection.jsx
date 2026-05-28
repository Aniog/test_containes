import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const spotlightItems = [
  {
    id: 'sp-1',
    titleId: 'sptitle-1',
    subtitleId: 'spsub-1',
    title: 'Cyanobacteria',
    subtitle: 'Cyanobacteria blue green algae photosynthesis oxygen ancient earth',
    label: 'Ancient Life',
    desc: 'The first organisms to produce oxygen through photosynthesis, transforming Earth\'s atmosphere 2.7 billion years ago.',
  },
  {
    id: 'sp-2',
    titleId: 'sptitle-2',
    subtitleId: 'spsub-2',
    title: 'Mycelium Network',
    subtitle: 'Mycelium fungal network underground forest communication threads',
    label: 'Nature\'s Internet',
    desc: 'A single teaspoon of forest soil contains miles of fungal threads, connecting trees and transferring nutrients across vast distances.',
  },
  {
    id: 'sp-3',
    titleId: 'sptitle-3',
    subtitleId: 'spsub-3',
    title: 'Foraminifera',
    subtitle: 'Foraminifera shell fossil ocean sediment microscopic protozoa',
    label: 'Living Fossils',
    desc: 'These shelled protists have existed for 500 million years. Their fossilized shells form the limestone in the Egyptian pyramids.',
  },
];

const SpotlightSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-gray-900 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-medium">Spotlight</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            Remarkable Stories
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base md:text-lg">
            Each microorganism carries a story spanning millions of years.
          </p>
        </div>

        <div className="space-y-8">
          {spotlightItems.map((item, idx) => (
            <div
              key={item.id}
              className={`group grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 ${
                idx % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="relative aspect-video md:aspect-auto md:min-h-64 overflow-hidden">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-strk-img-id={`spotlight-img-${item.id}`}
                  data-strk-img={`[${item.subtitleId}] [${item.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/30" />
              </div>
              <div className="bg-gray-950 p-8 md:p-10 flex flex-col justify-center">
                <span className="inline-block bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded-full px-3 py-1 text-xs uppercase tracking-widest font-medium mb-4 self-start">
                  {item.label}
                </span>
                <h3 id={item.titleId} className="text-2xl md:text-3xl font-bold text-white mb-4">{item.title}</h3>
                <p id={item.subtitleId} className="text-gray-400 text-base leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpotlightSection;

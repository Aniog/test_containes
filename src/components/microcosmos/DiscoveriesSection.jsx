import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const discoveries = [
  {
    id: 'disc-crispr',
    titleId: 'disc-crispr-title',
    descId: 'disc-crispr-desc',
    imgId: 'disc-img-crispr-z1a2b3',
    year: '2012',
    title: 'CRISPR-Cas9',
    desc: 'Bacterial immune system repurposed as a revolutionary gene-editing tool, transforming medicine and biology.',
  },
  {
    id: 'disc-microbiome',
    titleId: 'disc-microbiome-title',
    descId: 'disc-microbiome-desc',
    imgId: 'disc-img-microbiome-c4d5e6',
    year: '2007',
    title: 'Human Microbiome',
    desc: 'The Human Microbiome Project revealed trillions of microbes living in and on our bodies, outnumbering our own cells.',
  },
  {
    id: 'disc-archaea',
    titleId: 'disc-archaea-title',
    descId: 'disc-archaea-desc',
    imgId: 'disc-img-archaea-f7g8h9',
    year: '1977',
    title: 'Domain Archaea',
    desc: 'Carl Woese discovered a third domain of life — Archaea — fundamentally changing our understanding of evolution.',
  },
];

const DiscoveriesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-gray-900 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">Breakthroughs</span>
          <h2 id="disc-title" className="font-space text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Landmark Discoveries
          </h2>
          <p id="disc-subtitle" className="text-gray-400 text-lg max-w-2xl mx-auto">
            Microbiology has produced some of the most transformative scientific discoveries in human history.
          </p>
        </div>

        {/* Discovery cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {discoveries.map((disc) => (
            <div
              key={disc.id}
              className="group bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]"
            >
              <div className="relative overflow-hidden">
                <img
                  alt={disc.title}
                  data-strk-img-id={disc.imgId}
                  data-strk-img={`[${disc.descId}] [${disc.titleId}] [disc-subtitle] [disc-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-cyan-400/20 border border-cyan-400/40 rounded-full px-3 py-1">
                  <span className="text-cyan-400 text-xs font-bold">{disc.year}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 id={disc.titleId} className="font-space text-xl font-bold text-white mb-3">{disc.title}</h3>
                <p id={disc.descId} className="text-gray-400 text-sm leading-relaxed">{disc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoveriesSection;

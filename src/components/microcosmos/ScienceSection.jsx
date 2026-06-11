import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Microscope, Zap, Globe, FlaskConical } from 'lucide-react';

const scienceTopics = [
  {
    id: 'sci-01',
    imgId: 'sci-img-mc001',
    titleId: 'sci-title-mc001',
    descId: 'sci-desc-mc001',
    title: 'Electron Microscopy',
    desc: 'Scanning and transmission electron microscopes reveal structures at the nanometer scale, magnifying objects up to 10 million times.',
    icon: Microscope,
    stat: '10,000,000×',
    statLabel: 'Max Magnification',
  },
  {
    id: 'sci-02',
    imgId: 'sci-img-mc002',
    titleId: 'sci-title-mc002',
    descId: 'sci-desc-mc002',
    title: 'Bioluminescence',
    desc: 'Certain microorganisms produce their own light through chemical reactions, illuminating the deep ocean and forest floors at night.',
    icon: Zap,
    stat: '80%',
    statLabel: 'Deep-sea species',
  },
  {
    id: 'sci-03',
    imgId: 'sci-img-mc003',
    titleId: 'sci-title-mc003',
    descId: 'sci-desc-mc003',
    title: 'Microbiome Diversity',
    desc: 'The human body hosts over 38 trillion microbial cells — outnumbering human cells — forming a complex ecosystem essential to health.',
    icon: Globe,
    stat: '38 Trillion',
    statLabel: 'Microbes in humans',
  },
  {
    id: 'sci-04',
    imgId: 'sci-img-mc004',
    titleId: 'sci-title-mc004',
    descId: 'sci-desc-mc004',
    title: 'CRISPR & Microbiology',
    desc: 'Gene-editing tools derived from bacterial immune systems are revolutionizing medicine, agriculture, and our understanding of life itself.',
    icon: FlaskConical,
    stat: '1953',
    statLabel: 'DNA structure discovered',
  },
];

const ScienceSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="science" ref={containerRef} className="py-24 px-4 md:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-teal-400 text-sm font-semibold uppercase tracking-widest mb-3">
            The Science
          </p>
          <h2
            id="science-section-title"
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Discoveries That Changed Everything
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Microbiology has unlocked the secrets of life, disease, and evolution — reshaping medicine, ecology, and our place in the universe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {scienceTopics.map((topic) => {
            const Icon = topic.icon;
            return (
              <div
                key={topic.id}
                className="group flex flex-col md:flex-row gap-0 bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-teal-500/40 transition-all duration-300"
              >
                <div className="relative md:w-48 flex-shrink-0 overflow-hidden aspect-[4/3] md:aspect-auto">
                  <img
                    data-strk-img-id={topic.imgId}
                    data-strk-img={`[${topic.descId}] [${topic.titleId}] [science-section-title]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={topic.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/60 hidden md:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent md:hidden" />
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-teal-500/10 border border-teal-500/30 rounded-lg p-2">
                        <Icon className="w-5 h-5 text-teal-400" />
                      </div>
                      <h3
                        id={topic.titleId}
                        className="text-lg font-bold text-white"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {topic.title}
                      </h3>
                    </div>
                    <p id={topic.descId} className="text-gray-400 text-sm leading-relaxed">
                      {topic.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-800">
                    <span className="text-2xl font-bold text-teal-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {topic.stat}
                    </span>
                    <span className="text-gray-500 text-xs ml-2">{topic.statLabel}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;

import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const techniques = [
  {
    id: 'sci1',
    name: 'Electron Microscopy',
    abbr: 'SEM / TEM',
    description: 'Uses beams of electrons instead of light to create images with resolution up to 0.1 nanometers — revealing atomic-level structures.',
    ratio: '4x3',
    width: 600,
  },
  {
    id: 'sci2',
    name: 'Fluorescence Microscopy',
    abbr: 'FLIM / TIRF',
    description: 'Fluorescent dyes or proteins tag specific molecules, making them glow under UV light and revealing the inner workings of living cells.',
    ratio: '4x3',
    width: 600,
  },
  {
    id: 'sci3',
    name: 'Cryo-Electron Tomography',
    abbr: 'Cryo-ET',
    description: 'Samples are flash-frozen and imaged from multiple angles to reconstruct 3D structures of proteins and viruses in near-native states.',
    ratio: '4x3',
    width: 600,
  },
];

const timeline = [
  { year: '1674', event: 'Antonie van Leeuwenhoek first observes bacteria using a handcrafted microscope' },
  { year: '1838', event: 'Cell theory proposed — all living things are made of cells' },
  { year: '1931', event: 'Ernst Ruska invents the electron microscope' },
  { year: '1953', event: 'Watson & Crick reveal the double helix structure of DNA' },
  { year: '1983', event: 'PCR technique developed, revolutionizing microbiology' },
  { year: '2017', event: 'Cryo-EM wins Nobel Prize, enabling atomic-resolution imaging' },
];

const Science = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="science" ref={containerRef} className="py-24 px-4 md:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Techniques */}
        <div className="text-center mb-14">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">Science</p>
          <h2 id="science-title" className="text-4xl md:text-5xl font-black text-white mb-4">
            How We See the Invisible
          </h2>
          <p id="science-subtitle" className="text-gray-400 text-lg max-w-2xl mx-auto">
            Modern microscopy techniques have transformed our understanding of life at the nanoscale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {techniques.map((tech) => (
            <div
              key={tech.id}
              className="group bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  alt={tech.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={`sci-${tech.id}-img`}
                  data-strk-img={`[sci-${tech.id}-desc] [sci-${tech.id}-name] [science-subtitle] [science-title]`}
                  data-strk-img-ratio={tech.ratio}
                  data-strk-img-width={tech.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded">
                  {tech.abbr}
                </span>
                <h3 id={`sci-${tech.id}-name`} className="text-white text-lg font-bold mt-3 mb-2">
                  {tech.name}
                </h3>
                <p id={`sci-${tech.id}-desc`} className="text-gray-400 text-sm leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white text-center mb-10">
            A History of Discovery
          </h3>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-violet-500/50 to-emerald-500/50" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 border-2 border-gray-950 mt-1.5" />
                  {/* Content */}
                  <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                    <span className="text-cyan-400 font-black text-lg">{item.year}</span>
                    <p className="text-gray-300 text-sm mt-1 leading-relaxed">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Science;

import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const techniques = [
  {
    id: 'tech1',
    name: 'Light Microscopy',
    abbr: 'LM',
    magnification: 'Up to 1,000×',
    description: 'The classic technique using visible light and glass lenses. Ideal for observing living cells and organisms in their natural state.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
  },
  {
    id: 'tech2',
    name: 'Electron Microscopy',
    abbr: 'EM',
    magnification: 'Up to 10,000,000×',
    description: 'Uses beams of electrons instead of light, revealing atomic-level structures. Produces stunning black-and-white images of nanoscale details.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
  },
  {
    id: 'tech3',
    name: 'Fluorescence Microscopy',
    abbr: 'FM',
    magnification: 'Up to 1,500×',
    description: 'Fluorescent dyes or proteins illuminate specific structures within cells, creating vivid, colorful images of biological processes.',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
  },
  {
    id: 'tech4',
    name: 'Confocal Microscopy',
    abbr: 'CM',
    magnification: 'Up to 2,000×',
    description: 'Uses laser scanning to create sharp 3D images by eliminating out-of-focus light. Essential for imaging thick biological specimens.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
  },
];

const discoveries = [
  { year: '1665', event: 'Robert Hooke coins the term "cell"', icon: '🔬' },
  { year: '1674', event: 'Antonie van Leeuwenhoek discovers bacteria', icon: '🦠' },
  { year: '1838', event: 'Cell theory established by Schleiden & Schwann', icon: '📖' },
  { year: '1931', event: 'First electron microscope built by Ruska', icon: '⚡' },
  { year: '1953', event: 'DNA double helix structure revealed', icon: '🧬' },
  { year: '2014', event: 'Super-resolution microscopy wins Nobel Prize', icon: '🏆' },
];

const Science = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="science" ref={containerRef} className="py-24 md:py-32 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-3">
            The Science
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-sky-50 mb-4">
            How We See the Invisible
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Modern microscopy techniques have transformed our understanding of life at the smallest scales.
          </p>
        </div>

        {/* Techniques grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {techniques.map((tech) => (
            <div
              key={tech.id}
              className={`${tech.bg} border ${tech.border} rounded-2xl p-6 hover:shadow-lg transition-all duration-300`}
            >
              <div className={`text-3xl font-black ${tech.color} mb-3`}>{tech.abbr}</div>
              <h3 className="text-sky-50 font-bold text-base mb-1">{tech.name}</h3>
              <p className={`text-xs font-semibold ${tech.color} mb-3`}>{tech.magnification}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{tech.description}</p>
            </div>
          ))}
        </div>

        {/* Two-column: timeline + image */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Timeline */}
          <div>
            <h3
              id="timeline-title"
              className="text-2xl font-black text-sky-50 mb-8"
            >
              Milestones in Microscopy
            </h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 to-transparent" />
              <div className="space-y-6">
                {discoveries.map((d) => (
                  <div key={d.year} className="flex gap-5 pl-12 relative">
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-[#0f1f38] border border-cyan-500/40 flex items-center justify-center text-sm">
                      {d.icon}
                    </div>
                    <div>
                      <span className="text-cyan-400 font-black text-sm">{d.year}</span>
                      <p className="text-slate-300 text-sm mt-0.5">{d.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Science image */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden border border-cyan-500/20 shadow-[0_0_30px_rgba(0,212,200,0.08)]">
              <img
                alt="Electron microscopy image"
                className="w-full h-64 object-cover"
                data-strk-img-id="science-img1-5f6a7b"
                data-strk-img="electron microscopy cell structure [timeline-title]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden border border-purple-500/20">
                <img
                  alt="Fluorescence microscopy"
                  className="w-full h-40 object-cover"
                  data-strk-img-id="science-img2-8c9d0e"
                  data-strk-img="fluorescence microscopy cell biology"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="350"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-teal-500/20">
                <img
                  alt="Confocal microscopy"
                  className="w-full h-40 object-cover"
                  data-strk-img-id="science-img3-1a2b3c"
                  data-strk-img="confocal microscopy 3D cell imaging"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="350"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Science;

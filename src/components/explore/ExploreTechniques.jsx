import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const techniques = [
  {
    id: 'sem',
    titleId: 'exp-tech-sem-title',
    descId: 'exp-tech-sem-desc',
    imgId: 'exp-tech-sem-img-s1t2u3',
    title: 'Scanning Electron Microscopy',
    abbr: 'SEM',
    desc: 'Uses a focused beam of electrons to scan the surface of a specimen, producing detailed 3D-like images with extraordinary depth of field.',
    magnification: 'Up to 500,000×',
  },
  {
    id: 'tem',
    titleId: 'exp-tech-tem-title',
    descId: 'exp-tech-tem-desc',
    imgId: 'exp-tech-tem-img-v4w5x6',
    title: 'Transmission Electron Microscopy',
    abbr: 'TEM',
    desc: 'Electrons pass through an ultra-thin specimen, revealing internal structures at the nanometer scale — even individual atoms.',
    magnification: 'Up to 50,000,000×',
  },
  {
    id: 'fluorescence',
    titleId: 'exp-tech-fluor-title',
    descId: 'exp-tech-fluor-desc',
    imgId: 'exp-tech-fluor-img-y7z8a9',
    title: 'Fluorescence Microscopy',
    abbr: 'FM',
    desc: 'Fluorescent dyes or proteins label specific cellular structures, which then glow under UV light, creating vivid color-coded images.',
    magnification: 'Up to 1,000×',
  },
];

export default function ExploreTechniques() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-gray-900/40 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <span className="text-violet-400 text-sm font-medium uppercase tracking-widest">How We See</span>
          <h2 id="exp-tech-title" className="text-4xl md:text-5xl font-bold text-white mt-2">
            Microscopy Techniques
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Different tools reveal different secrets of the microscopic world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techniques.map((tech) => (
            <article
              key={tech.id}
              className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-violet-500/40 transition-all group"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  alt={tech.title}
                  data-strk-img-id={tech.imgId}
                  data-strk-img={`[${tech.descId}] [${tech.titleId}] [exp-tech-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-gray-950/80 backdrop-blur text-violet-400 text-xs font-bold px-3 py-1 rounded-full border border-violet-500/30">
                  {tech.abbr}
                </div>
              </div>
              <div className="p-6">
                <h3 id={tech.titleId} className="text-lg font-semibold text-white mb-2">{tech.title}</h3>
                <p id={tech.descId} className="text-gray-400 text-sm leading-relaxed mb-4">{tech.desc}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="text-violet-400 font-medium">Magnification:</span>
                  <span className="text-gray-300">{tech.magnification}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

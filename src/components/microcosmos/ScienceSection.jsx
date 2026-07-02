import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const techniques = [
  {
    id: 'tech-01',
    imgId: 'science-img-01-ef1gh2',
    titleId: 'science-title-01',
    descId: 'science-desc-01',
    number: '01',
    title: 'Light Microscopy',
    desc: 'The foundation of microscopy. Visible light passes through or reflects off a specimen, magnified by glass lenses. Modern confocal microscopes can resolve structures as small as 200 nanometers.',
    detail: 'Resolution: ~200 nm',
  },
  {
    id: 'tech-02',
    imgId: 'science-img-02-ij3kl4',
    titleId: 'science-title-02',
    descId: 'science-desc-02',
    number: '02',
    title: 'Electron Microscopy',
    desc: 'Using beams of electrons instead of light, electron microscopes achieve resolutions down to 0.1 nanometers — revealing atomic-scale structures of viruses, proteins, and materials.',
    detail: 'Resolution: ~0.1 nm',
  },
  {
    id: 'tech-03',
    imgId: 'science-img-03-mn5op6',
    titleId: 'science-title-03',
    descId: 'science-desc-03',
    number: '03',
    title: 'Fluorescence Imaging',
    desc: 'Fluorescent dyes and proteins tag specific molecules, making them glow under UV light. This technique has revolutionized cell biology, allowing scientists to track living processes in real time.',
    detail: 'Wavelength: 400–700 nm',
  },
  {
    id: 'tech-04',
    imgId: 'science-img-04-qr7st8',
    titleId: 'science-title-04',
    descId: 'science-desc-04',
    number: '04',
    title: 'Atomic Force Microscopy',
    desc: 'A nanoscale probe physically scans surfaces, mapping topography at the atomic level. AFM can image individual DNA strands, protein complexes, and even manipulate single atoms.',
    detail: 'Resolution: ~0.01 nm',
  },
];

export default function ScienceSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="science" ref={containerRef} className="py-24 md:py-36 bg-[#0a1520]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-400 mb-4">
            How We See
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            The Science of Seeing Small
          </h2>
          <p className="text-[#7fb3c8] text-lg max-w-2xl mx-auto leading-relaxed">
            Modern microscopy techniques have transformed our understanding of life, matter, and the universe at the smallest scales.
          </p>
        </div>

        {/* Technique rows */}
        <div className="flex flex-col gap-10">
          {techniques.map((tech, i) => (
            <div
              key={tech.id}
              className={`group flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center rounded-2xl overflow-hidden border border-emerald-900/30 bg-[#0d1a24] hover:border-emerald-400/30 hover:shadow-[0_0_50px_rgba(0,255,204,0.08)] transition-all duration-500`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 overflow-hidden aspect-[4/3]">
                <img
                  alt={tech.title}
                  data-strk-img-id={tech.imgId}
                  data-strk-img={`[${tech.descId}] [${tech.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 p-8 md:p-10">
                <span className="text-5xl font-black text-emerald-400/20 block mb-4 leading-none">
                  {tech.number}
                </span>
                <h3 id={tech.titleId} className="text-2xl font-bold text-white mb-4">
                  {tech.title}
                </h3>
                <p id={tech.descId} className="text-[#7fb3c8] leading-relaxed mb-6">
                  {tech.desc}
                </p>
                <span className="inline-block px-4 py-2 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 text-xs font-semibold uppercase tracking-widest">
                  {tech.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { FlaskConical, Atom, Eye, Zap } from 'lucide-react';

const techniques = [
  {
    id: 'tech-sem',
    imgId: 'science-img-sem-t1u2v3',
    titleId: 'science-title-sem',
    descId: 'science-desc-sem',
    icon: Eye,
    title: 'Scanning Electron Microscopy',
    desc: 'SEM uses a focused beam of electrons to scan the surface of a sample, producing high-resolution 3D-like images with extraordinary depth of field.',
    detail: 'Resolution: 1–20 nm',
  },
  {
    id: 'tech-fluor',
    imgId: 'science-img-fluor-w4x5y6',
    titleId: 'science-title-fluor',
    descId: 'science-desc-fluor',
    icon: Zap,
    title: 'Fluorescence Microscopy',
    desc: 'Fluorescent dyes and proteins are used to label specific cellular structures, making them glow under UV light and revealing the inner workings of living cells.',
    detail: 'Wavelength: 400–700 nm',
  },
  {
    id: 'tech-xray',
    imgId: 'science-img-xray-z7a8b9',
    titleId: 'science-title-xray',
    descId: 'science-desc-xray',
    icon: Atom,
    title: 'X-Ray Crystallography',
    desc: 'By diffracting X-rays through crystalline samples, scientists can determine the atomic structure of molecules — including DNA, proteins, and minerals.',
    detail: 'Atomic resolution: 0.1 nm',
  },
  {
    id: 'tech-confocal',
    imgId: 'science-img-confocal-c1d2e3',
    titleId: 'science-title-confocal',
    descId: 'science-desc-confocal',
    icon: FlaskConical,
    title: 'Confocal Microscopy',
    desc: 'Confocal microscopes use a pinhole aperture to eliminate out-of-focus light, enabling optical sectioning and 3D reconstruction of biological specimens.',
    detail: 'Depth resolution: 500 nm',
  },
];

export default function ScienceSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="science" ref={containerRef} className="py-20 md:py-28 bg-[#fce7f3]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-[#be185d] text-sm font-semibold tracking-widest uppercase">Methodology</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-[#1e1b2e]">The Science of Seeing Small</h2>
          <p className="mt-4 text-[#7c4d6a] max-w-2xl mx-auto text-lg">
            Modern microscopy techniques have revolutionized our understanding of life, matter, and the universe at the smallest scales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techniques.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.id}
                className="group rounded-2xl overflow-hidden bg-[#fff0f7] border border-[#f9a8d4] hover:border-[#f472b6] transition-all duration-300 hover:shadow-[0_0_40px_rgba(219,39,119,0.1)] flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    alt={t.title}
                    data-strk-img-id={t.imgId}
                    data-strk-img={`[${t.descId}] [${t.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#fff0f7] to-transparent" />
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#fce7f3] border border-[#f9a8d4]">
                      <Icon className="w-5 h-5 text-[#be185d]" />
                    </div>
                    <span className="text-[#be185d] text-xs font-semibold tracking-wider">{t.detail}</span>
                  </div>
                  <h3 id={t.titleId} className="text-xl font-bold text-[#1e1b2e]">{t.title}</h3>
                  <p id={t.descId} className="text-[#7c4d6a] text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

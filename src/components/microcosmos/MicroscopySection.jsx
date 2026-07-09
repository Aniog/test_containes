import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    id: 'f1',
    title: 'Electron Microscopy',
    desc: 'Scanning and transmission electron microscopes reveal surface textures and internal structures at nanometer resolution.',
    titleId: 'feat-f1-title',
    descId: 'feat-f1-desc',
    imgId: 'feat-img-f1-mc017',
    number: '01',
  },
  {
    id: 'f2',
    title: 'Fluorescence Imaging',
    desc: 'Fluorescent dyes and proteins light up specific cellular components, turning biology into living art.',
    titleId: 'feat-f2-title',
    descId: 'feat-f2-desc',
    imgId: 'feat-img-f2-mc018',
    number: '02',
  },
  {
    id: 'f3',
    title: 'Confocal Microscopy',
    desc: 'Optical sectioning builds 3D reconstructions of cells and tissues with extraordinary depth and clarity.',
    titleId: 'feat-f3-title',
    descId: 'feat-f3-desc',
    imgId: 'feat-img-f3-mc019',
    number: '03',
  },
];

const MicroscopySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-cosmos-surface py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p id="micro-section-label" className="text-cosmos-emerald text-sm uppercase tracking-[0.3em] font-inter font-medium mb-4">
            Tools of Discovery
          </p>
          <h2 id="micro-section-title" className="font-grotesk text-4xl md:text-5xl font-bold text-cosmos-text">
            How We See the Invisible
          </h2>
        </div>

        <div className="space-y-16">
          {features.map((feat, idx) => (
            <div
              key={feat.id}
              className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image side */}
              <div className={`relative ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-[0_0_50px_rgba(16,185,129,0.1)]">
                  <img
                    alt={feat.title}
                    data-strk-img-id={feat.imgId}
                    data-strk-img={`[${feat.descId}] [${feat.titleId}] [micro-section-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text side */}
              <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                <span className="font-grotesk text-6xl font-bold text-cosmos-border select-none">
                  {feat.number}
                </span>
                <h3 id={feat.titleId} className="font-grotesk text-3xl font-bold text-cosmos-text mt-2 mb-4">
                  {feat.title}
                </h3>
                <p id={feat.descId} className="font-inter text-cosmos-muted text-lg leading-relaxed">
                  {feat.desc}
                </p>
                <div className="mt-6 h-px bg-gradient-to-r from-cosmos-emerald/40 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MicroscopySection;

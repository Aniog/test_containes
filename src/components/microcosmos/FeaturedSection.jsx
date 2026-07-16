import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    id: 'feat-1',
    titleId: 'feat-1-title',
    descId: 'feat-1-desc',
    imgId: 'feat-img-1-mc030',
    title: 'Scanning Electron Microscopy',
    desc: 'SEM fires a focused beam of electrons across a specimen surface, generating detailed 3D-like images with resolution down to 1 nanometer. It reveals textures and structures impossible to see with light.',
    tag: 'Technology',
    ratio: '4x3',
    width: '700',
  },
  {
    id: 'feat-2',
    titleId: 'feat-2-title',
    descId: 'feat-2-desc',
    imgId: 'feat-img-2-mc031',
    title: 'Confocal Laser Microscopy',
    desc: 'By using fluorescent dyes and a pinhole aperture, confocal microscopes eliminate out-of-focus light to produce razor-sharp optical sections through living tissue — enabling 3D reconstruction of cells.',
    tag: 'Imaging',
    ratio: '4x3',
    width: '700',
  },
  {
    id: 'feat-3',
    titleId: 'feat-3-title',
    descId: 'feat-3-desc',
    imgId: 'feat-img-3-mc032',
    title: 'Polarized Light Microscopy',
    desc: 'Polarized light interacts with birefringent materials like crystals and collagen to produce vivid interference colors. This technique transforms transparent specimens into spectacular works of art.',
    tag: 'Optics',
    ratio: '4x3',
    width: '700',
  },
];

const FeaturedSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-amber-400 mb-3 font-medium">
            How We See
          </p>
          <h2
            id="feat-section-title"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            The Instruments of Discovery
          </h2>
          <p id="feat-section-desc" className="text-slate-400 max-w-xl mx-auto">
            Modern microscopy techniques that transform the invisible into the spectacular.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {features.map((feat, i) => (
            <div
              key={feat.id}
              className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-slate-700/50 shadow-[0_0_40px_rgba(139,92,246,0.08)] group">
                <img
                  alt={feat.title}
                  data-strk-img-id={feat.imgId}
                  data-strk-img={`[${feat.descId}] [${feat.titleId}] [feat-section-desc] [feat-section-title]`}
                  data-strk-img-ratio={feat.ratio}
                  data-strk-img-width={feat.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-violet-400 font-medium mb-3 block">
                  {feat.tag}
                </span>
                <h3
                  id={feat.titleId}
                  className="text-2xl md:text-3xl font-bold text-white mb-4"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {feat.title}
                </h3>
                <p id={feat.descId} className="text-slate-300 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;

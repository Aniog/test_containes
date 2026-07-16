import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const specimens = [
  {
    id: 'sp-1', titleId: 'sp-1-title', descId: 'sp-1-desc',
    imgId: 'sp-img-1-mc040',
    title: 'Vorticella',
    desc: 'Bell-shaped ciliate protozoan that contracts its stalk when disturbed',
    size: '50–200 µm',
    habitat: 'Freshwater',
  },
  {
    id: 'sp-2', titleId: 'sp-2-title', descId: 'sp-2-desc',
    imgId: 'sp-img-2-mc041',
    title: 'Radiolaria',
    desc: 'Amoeboid protozoa with intricate mineral skeletons of silica',
    size: '0.1–2 mm',
    habitat: 'Marine',
  },
  {
    id: 'sp-3', titleId: 'sp-3-title', descId: 'sp-3-desc',
    imgId: 'sp-img-3-mc042',
    title: 'Paramecium',
    desc: 'Slipper-shaped ciliate that navigates using thousands of tiny hair-like cilia',
    size: '50–330 µm',
    habitat: 'Freshwater',
  },
  {
    id: 'sp-4', titleId: 'sp-4-title', descId: 'sp-4-desc',
    imgId: 'sp-img-4-mc043',
    title: 'Euglena',
    desc: 'Flagellate that can photosynthesize like a plant or consume food like an animal',
    size: '15–500 µm',
    habitat: 'Freshwater',
  },
  {
    id: 'sp-5', titleId: 'sp-5-title', descId: 'sp-5-desc',
    imgId: 'sp-img-5-mc044',
    title: 'Foraminifera',
    desc: 'Ancient marine protists with chambered calcium carbonate shells',
    size: '0.1–20 cm',
    habitat: 'Marine',
  },
  {
    id: 'sp-6', titleId: 'sp-6-title', descId: 'sp-6-desc',
    imgId: 'sp-img-6-mc045',
    title: 'Stentor',
    desc: 'Trumpet-shaped giant among protists, visible to the naked eye',
    size: '1–2 mm',
    habitat: 'Freshwater',
  },
  {
    id: 'sp-7', titleId: 'sp-7-title', descId: 'sp-7-desc',
    imgId: 'sp-img-7-mc046',
    title: 'Amoeba',
    desc: 'Shape-shifting cell that engulfs prey using pseudopod extensions',
    size: '250–750 µm',
    habitat: 'Soil & Water',
  },
  {
    id: 'sp-8', titleId: 'sp-8-title', descId: 'sp-8-desc',
    imgId: 'sp-img-8-mc047',
    title: 'Rotifer',
    desc: 'Microscopic animals with a crown of cilia used for locomotion and feeding',
    size: '100–500 µm',
    habitat: 'Freshwater',
  },
];

const SpecimenGrid = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-[#050810]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-sky-400 mb-3 font-medium">
            Specimen Collection
          </p>
          <h2
            id="spec-section-title"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Meet the Inhabitants
          </h2>
          <p id="spec-section-desc" className="text-slate-400 max-w-xl mx-auto">
            A curated collection of microscopic organisms — each one a marvel of
            evolutionary ingenuity and biological complexity.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {specimens.map((sp) => (
            <div
              key={sp.id}
              className="group bg-[#0d1428] border border-slate-700/50 rounded-2xl overflow-hidden hover:border-sky-400/40 hover:shadow-[0_0_25px_rgba(56,189,248,0.1)] transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  alt={sp.title}
                  data-strk-img-id={sp.imgId}
                  data-strk-img={`[${sp.descId}] [${sp.titleId}] [spec-section-desc] [spec-section-title]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3
                  id={sp.titleId}
                  className="text-white font-semibold text-sm mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {sp.title}
                </h3>
                <p id={sp.descId} className="text-slate-500 text-xs leading-relaxed mb-3">
                  {sp.desc}
                </p>
                <div className="flex justify-between text-xs">
                  <span className="text-cyan-400 font-medium">{sp.size}</span>
                  <span className="text-slate-500">{sp.habitat}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecimenGrid;

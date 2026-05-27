import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  {
    id: 'org-img-a1b2c3',
    name: 'Paramecium',
    nameId: 'org-name-1',
    descId: 'org-desc-1',
    desc: 'A slipper-shaped single-celled organism that propels itself with thousands of tiny hair-like cilia.',
    tag: 'Protozoa',
    query: 'paramecium microscope cilia single cell organism',
    ratio: '3x4',
    width: 500,
  },
  {
    id: 'org-img-d4e5f6',
    name: 'Radiolaria',
    nameId: 'org-name-2',
    descId: 'org-desc-2',
    desc: 'Marine protists with intricate mineral skeletons of stunning geometric symmetry.',
    tag: 'Marine Protist',
    query: 'radiolaria skeleton microscope geometric symmetry ocean',
    ratio: '3x4',
    width: 500,
  },
  {
    id: 'org-img-g7h8i9',
    name: 'Vorticella',
    nameId: 'org-name-3',
    descId: 'org-desc-3',
    desc: 'Bell-shaped ciliates that attach to surfaces and contract rapidly like a spring.',
    tag: 'Ciliate',
    query: 'vorticella bell shaped ciliate microscope water',
    ratio: '3x4',
    width: 500,
  },
  {
    id: 'org-img-j1k2l3',
    name: 'Euglena',
    nameId: 'org-name-4',
    descId: 'org-desc-4',
    desc: 'A flagellate that can photosynthesize like a plant or consume food like an animal.',
    tag: 'Flagellate',
    query: 'euglena flagellate green microscope chloroplast',
    ratio: '3x4',
    width: 500,
  },
];

const OrganismsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="organisms" ref={containerRef} className="py-20 md:py-28 bg-[#050a0f]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3">Microscopic Life</p>
          <h2 id="organisms-title" className="text-3xl md:text-5xl font-bold text-white mb-4">
            Meet the Organisms
          </h2>
          <p id="organisms-subtitle" className="text-slate-400 max-w-xl mx-auto text-lg">
            Extraordinary creatures that thrive in a world invisible to the human eye.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {organisms.map((org) => (
            <div
              key={org.id}
              className="group bg-[#0d1a24] border border-teal-900/40 rounded-2xl overflow-hidden hover:border-teal-500/50 transition-all duration-300 shadow-[0_0_30px_rgba(20,184,166,0.05)] hover:shadow-[0_0_40px_rgba(20,184,166,0.15)]"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={org.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  data-strk-img-id={org.id}
                  data-strk-img={`${org.query} [organisms-subtitle] [organisms-title]`}
                  data-strk-img-ratio={org.ratio}
                  data-strk-img-width={org.width}
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-teal-400">{org.tag}</span>
                <h3 id={org.nameId} className="text-white font-bold text-lg mt-1 mb-2">{org.name}</h3>
                <p id={org.descId} className="text-slate-400 text-sm leading-relaxed">{org.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganismsSection;

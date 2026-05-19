import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  {
    id: 'org-1',
    titleId: 'org-title-1',
    subtitleId: 'org-sub-1',
    name: 'Tardigrade',
    description: 'Known as "water bears," these microscopic animals can survive in outer space, extreme radiation, and complete dehydration.',
    size: '0.1 – 1.5 mm',
    habitat: 'Moss, Lichen, Freshwater',
    imgId: 'org-img-h7i8j9',
    ratio: '3x4',
    width: 500,
  },
  {
    id: 'org-2',
    titleId: 'org-title-2',
    subtitleId: 'org-sub-2',
    name: 'Paramecium',
    description: 'Single-celled ciliates that propel themselves through water using thousands of tiny hair-like cilia in coordinated waves.',
    size: '0.05 – 0.35 mm',
    habitat: 'Freshwater Ponds',
    imgId: 'org-img-k1l2m3',
    ratio: '3x4',
    width: 500,
  },
  {
    id: 'org-3',
    titleId: 'org-title-3',
    subtitleId: 'org-sub-3',
    name: 'Radiolaria',
    description: 'Marine protozoa with intricate mineral skeletons of silica, forming geometric patterns of extraordinary complexity.',
    size: '0.1 – 2 mm',
    habitat: 'Ocean Surface Waters',
    imgId: 'org-img-n4o5p6',
    ratio: '3x4',
    width: 500,
  },
  {
    id: 'org-4',
    titleId: 'org-title-4',
    subtitleId: 'org-sub-4',
    name: 'Vorticella',
    description: 'Bell-shaped ciliates that attach to surfaces via a coiled stalk, contracting rapidly when disturbed.',
    size: '0.05 – 0.15 mm',
    habitat: 'Freshwater & Marine',
    imgId: 'org-img-q7r8s9',
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
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-[#f4a261] font-semibold mb-3">
            Tiny Giants
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Remarkable Microorganisms
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Meet the extraordinary creatures that have shaped life on Earth for billions of years, yet remain invisible to the unaided eye.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {organisms.map((org) => (
            <div
              key={org.id}
              className="bg-[#0d1a24] border border-[#1e3a4a] rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-300 shadow-lg shadow-[#9b5de5]/5"
            >
              <div className="relative overflow-hidden">
                <img
                  alt={org.name}
                  className="w-full object-cover"
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[${org.subtitleId}] [${org.titleId}]`}
                  data-strk-img-ratio={org.ratio}
                  data-strk-img-width={org.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a24] via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 id={org.titleId} className="text-lg font-bold text-white mb-2">
                  {org.name}
                </h3>
                <p id={org.subtitleId} className="text-slate-400 text-sm leading-relaxed mb-4">
                  {org.description}
                </p>
                <div className="flex flex-col gap-1 border-t border-[#1e3a4a] pt-4">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500 uppercase tracking-wider">Size</span>
                    <span className="text-[#00d4c8] font-medium">{org.size}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500 uppercase tracking-wider">Habitat</span>
                    <span className="text-slate-300 font-medium text-right">{org.habitat}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganismsSection;

import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  {
    id: 'org-1',
    imgId: 'org-img-mc020',
    titleId: 'org-title-1',
    descId: 'org-desc-1',
    title: 'Tardigrade',
    subtitle: 'Water Bear',
    desc: 'Nearly indestructible microscopic animals that survive in the vacuum of space, extreme radiation, and boiling water.',
    tag: 'Extremophile',
    tagColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  },
  {
    id: 'org-2',
    imgId: 'org-img-mc021',
    titleId: 'org-title-2',
    descId: 'org-desc-2',
    title: 'Vorticella',
    subtitle: 'Bell Animalcule',
    desc: 'A stalked ciliate protozoan that contracts like a spring when disturbed, one of nature\'s most elegant microscopic mechanisms.',
    tag: 'Protozoa',
    tagColor: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
  },
  {
    id: 'org-3',
    imgId: 'org-img-mc022',
    titleId: 'org-title-3',
    descId: 'org-desc-3',
    title: 'Diatom',
    subtitle: 'Glass Algae',
    desc: 'Single-celled algae encased in intricate silica shells — nature\'s most beautiful architects, responsible for 20% of Earth\'s oxygen.',
    tag: 'Algae',
    tagColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  },
  {
    id: 'org-4',
    imgId: 'org-img-mc023',
    titleId: 'org-title-4',
    descId: 'org-desc-4',
    title: 'Paramecium',
    subtitle: 'Slipper Animalcule',
    desc: 'A fast-swimming ciliate covered in thousands of hair-like cilia, capable of learning and memory despite having no brain.',
    tag: 'Ciliate',
    tagColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  },
  {
    id: 'org-5',
    imgId: 'org-img-mc024',
    titleId: 'org-title-5',
    descId: 'org-desc-5',
    title: 'Radiolaria',
    subtitle: 'Spiny Protist',
    desc: 'Marine protists with stunning geometric mineral skeletons, forming intricate lattice structures that inspired Art Nouveau architecture.',
    tag: 'Protist',
    tagColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
  },
  {
    id: 'org-6',
    imgId: 'org-img-mc025',
    titleId: 'org-title-6',
    descId: 'org-desc-6',
    title: 'Rotifer',
    subtitle: 'Wheel Animal',
    desc: 'Microscopic animals with a crown of cilia that spin like a wheel to draw food into their mouths — ancient survivors from 500 million years ago.',
    tag: 'Invertebrate',
    tagColor: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
  },
];

const OrganismsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="organisms" ref={containerRef} className="py-24 px-4 md:px-8 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm text-violet-400 uppercase tracking-widest font-medium mb-3">Field Guide</p>
          <h2 id="org-section-title" className="text-3xl md:text-5xl font-bold text-white mb-4">
            Microscopic Organisms
          </h2>
          <p id="org-section-desc" className="text-gray-400 text-lg max-w-xl mx-auto">
            Meet the extraordinary creatures that inhabit every drop of water, every handful of soil, and every breath of air around you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organisms.map((org) => (
            <div
              key={org.id}
              className="group bg-gray-950 border border-gray-700 rounded-2xl overflow-hidden hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={org.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[${org.descId}] [${org.titleId}] [org-section-desc] [org-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width={600}
                />
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${org.tagColor}`}>
                    {org.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">{org.subtitle}</p>
                <h3 id={org.titleId} className="text-white font-bold text-xl mb-2">{org.title}</h3>
                <p id={org.descId} className="text-gray-400 text-sm leading-relaxed">{org.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganismsSection;

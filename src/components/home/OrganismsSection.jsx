import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  {
    id: 'org-tardigrade',
    name: 'Tardigrade',
    nickname: 'Water Bear',
    description: 'Nearly indestructible micro-animals that survive in the vacuum of space, extreme radiation, and temperatures from -272°C to 150°C.',
    tag: 'Extremophile',
    tagColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
    imgId: 'org-img-mc004',
    imgQuery: '[org-tardigrade-desc] [org-tardigrade-name] microscopic water bear',
  },
  {
    id: 'org-diatom',
    name: 'Diatom',
    nickname: 'Glass Sculptor',
    description: 'Single-celled algae encased in intricate silica shells called frustules — nature\'s most beautiful architects, producing 20% of Earth\'s oxygen.',
    tag: 'Algae',
    tagColor: 'text-[#00d4ff] bg-[#00d4ff]/10 border-[#00d4ff]/30',
    imgId: 'org-img-mc005',
    imgQuery: '[org-diatom-desc] [org-diatom-name] microscopic algae silica',
  },
  {
    id: 'org-vorticella',
    name: 'Vorticella',
    nickname: 'Bell Animalcule',
    description: 'A stalked ciliate that contracts like a spring when disturbed, creating one of the fastest movements in the biological world.',
    tag: 'Protozoa',
    tagColor: 'text-purple-400 bg-purple-400/10 border-purple-400/30',
    imgId: 'org-img-mc006',
    imgQuery: '[org-vorticella-desc] [org-vorticella-name] protozoa ciliate microscope',
  },
  {
    id: 'org-radiolaria',
    name: 'Radiolaria',
    nickname: 'Ocean Jewel',
    description: 'Marine protozoa with stunning geometric mineral skeletons that inspired Art Nouveau architecture and Ernst Haeckel\'s famous illustrations.',
    tag: 'Marine',
    tagColor: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
    imgId: 'org-img-mc007',
    imgQuery: '[org-radiolaria-desc] [org-radiolaria-name] marine protozoa skeleton microscope',
  },
  {
    id: 'org-bdelloid',
    name: 'Bdelloid Rotifer',
    nickname: 'Immortal Spinner',
    description: 'Microscopic animals that have survived without sexual reproduction for 80 million years, capable of absorbing foreign DNA to repair themselves.',
    tag: 'Rotifer',
    tagColor: 'text-rose-400 bg-rose-400/10 border-rose-400/30',
    imgId: 'org-img-mc008',
    imgQuery: '[org-bdelloid-desc] [org-bdelloid-name] rotifer microscopic animal',
  },
  {
    id: 'org-nematode',
    name: 'Nematode',
    nickname: 'Roundworm',
    description: 'The most abundant animals on Earth — a single handful of soil contains thousands. C. elegans was the first animal to have its entire genome sequenced.',
    tag: 'Worm',
    tagColor: 'text-lime-400 bg-lime-400/10 border-lime-400/30',
    imgId: 'org-img-mc009',
    imgQuery: '[org-nematode-desc] [org-nematode-name] roundworm soil microscope',
  },
];

const OrganismsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#00d4ff] text-xs font-semibold tracking-widest uppercase">Featured Organisms</span>
          <h2 id="organisms-title" className="text-4xl md:text-5xl font-black text-[#f0f8ff] mt-3 mb-5">
            Meet the <span className="text-[#00d4ff]">Inhabitants</span>
          </h2>
          <p id="organisms-subtitle" className="text-slate-400 text-lg max-w-2xl mx-auto">
            Extraordinary creatures that thrive in the microscopic realm, each with unique adaptations that defy imagination.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organisms.map((org) => (
            <div
              key={org.id}
              className="group bg-[#0f1f3d] border border-[#00d4ff]/15 rounded-2xl overflow-hidden hover:border-[#00d4ff]/40 hover:shadow-[0_0_40px_rgba(0,212,255,0.15)] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  alt={org.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={org.imgId}
                  data-strk-img={org.imgQuery}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f3d] to-transparent" />
                <span className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full border ${org.tagColor}`}>
                  {org.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-1">
                  <span className="text-slate-500 text-xs uppercase tracking-widest">{org.nickname}</span>
                </div>
                <h3 id={org.id} className="text-xl font-bold text-[#f0f8ff] mb-3">{org.name}</h3>
                <p id={`${org.id}-desc`} className="text-slate-400 text-sm leading-relaxed">{org.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganismsSection;

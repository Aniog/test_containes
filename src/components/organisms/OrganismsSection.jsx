import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  {
    id: 'amoeba',
    title: 'Amoeba',
    desc: 'Single-celled organism that moves by extending pseudopods',
    category: 'Protozoa',
    imgId: 'org-amoeba-4a2c8f',
    titleId: 'org-amoeba-title',
    descId: 'org-amoeba-desc',
  },
  {
    id: 'paramecium',
    title: 'Paramecium',
    desc: 'Ciliated protozoan swimming through freshwater environments',
    category: 'Protozoa',
    imgId: 'org-paramecium-7b3d1e',
    titleId: 'org-paramecium-title',
    descId: 'org-paramecium-desc',
  },
  {
    id: 'rotifer',
    title: 'Rotifer',
    desc: 'Microscopic animal with rotating crown of cilia for feeding',
    category: 'Animalia',
    imgId: 'org-rotifer-2e9f5a',
    titleId: 'org-rotifer-title',
    descId: 'org-rotifer-desc',
  },
  {
    id: 'desmid',
    title: 'Desmid',
    desc: 'Symmetrical green algae with ornate cell wall patterns',
    category: 'Algae',
    imgId: 'org-desmid-8c1d4b',
    titleId: 'org-desmid-title',
    descId: 'org-desmid-desc',
  },
  {
    id: 'stentor',
    title: 'Stentor',
    desc: 'Trumpet-shaped ciliate visible to the naked eye in blue-green',
    category: 'Protozoa',
    imgId: 'org-stentor-5f7a3c',
    titleId: 'org-stentor-title',
    descId: 'org-stentor-desc',
  },
  {
    id: 'volvox',
    title: 'Volvox',
    desc: 'Spherical colony of green algae cells working together',
    category: 'Algae',
    imgId: 'org-volvox-3d8e2f',
    titleId: 'org-volvox-title',
    descId: 'org-volvox-desc',
  },
];

const OrganismsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="organisms" ref={containerRef} className="py-20 md:py-28 bg-cosmos-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-cosmos-purple-light font-medium text-sm tracking-widest uppercase mb-3">Living Wonders</p>
          <h2 id="organisms-section-title" className="text-3xl md:text-4xl font-bold text-cosmos-text mb-4">
            Microscopic Organisms
          </h2>
          <p id="organisms-section-subtitle" className="text-cosmos-muted text-lg max-w-2xl mx-auto">
            Meet the fascinating creatures that thrive in the microscopic realm, each with unique adaptations and behaviors
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {organisms.map((org) => (
            <div
              key={org.id}
              className="group rounded-2xl overflow-hidden bg-cosmos-card border border-cosmos-border hover:border-cosmos-purple/40 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="h-52 overflow-hidden">
                <img
                  alt={org.title}
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[${org.descId}] [${org.titleId}] [organisms-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-cosmos-purple/10 text-cosmos-purple-light border border-cosmos-purple/20 mb-3">
                  {org.category}
                </span>
                <h3 id={org.titleId} className="text-lg font-semibold text-cosmos-text mb-2">
                  {org.title}
                </h3>
                <p id={org.descId} className="text-sm text-cosmos-muted leading-relaxed">
                  {org.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganismsSection;

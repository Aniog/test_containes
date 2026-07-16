import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  {
    id: 'org-amoeba',
    titleId: 'org-amoeba-title',
    descId: 'org-amoeba-desc',
    imgId: 'org-img-amoeba-s1t2u3',
    title: 'Amoeba',
    category: 'Protozoa',
    desc: 'Shape-shifting single-celled organisms that engulf prey through phagocytosis.',
    color: 'text-teal-400',
    borderColor: 'border-teal-500/30',
  },
  {
    id: 'org-paramecium',
    titleId: 'org-paramecium-title',
    descId: 'org-paramecium-desc',
    imgId: 'org-img-paramecium-v4w5x6',
    title: 'Paramecium',
    category: 'Ciliate',
    desc: 'Slipper-shaped ciliates that swim using thousands of tiny hair-like cilia.',
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/30',
  },
  {
    id: 'org-euglena',
    titleId: 'org-euglena-title',
    descId: 'org-euglena-desc',
    imgId: 'org-img-euglena-y7z8a9',
    title: 'Euglena',
    category: 'Flagellate',
    desc: 'Remarkable organisms that can photosynthesize like plants and hunt like animals.',
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
  },
  {
    id: 'org-radiolaria',
    titleId: 'org-radiolaria-title',
    descId: 'org-radiolaria-desc',
    imgId: 'org-img-radiolaria-b1c2d3',
    title: 'Radiolaria',
    category: 'Rhizaria',
    desc: 'Ocean-dwelling protists with intricate mineral skeletons of stunning geometric beauty.',
    color: 'text-purple-400',
    borderColor: 'border-purple-500/30',
  },
];

const OrganismsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-gray-950 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-medium tracking-widest uppercase">Microscopic Life</span>
          <h2 id="organisms-title" className="font-space text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Meet the Inhabitants
          </h2>
          <p id="organisms-subtitle" className="text-gray-400 text-lg max-w-2xl mx-auto">
            From shape-shifting amoebas to geometric radiolaria, the microbial world is filled with extraordinary life forms.
          </p>
        </div>

        {/* Organisms grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {organisms.map((org) => (
            <div
              key={org.id}
              className={`group flex flex-col sm:flex-row gap-6 bg-gray-900 border ${org.borderColor} rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(45,212,191,0.08)] transition-all duration-500`}
            >
              <div className="sm:w-48 sm:flex-shrink-0 overflow-hidden">
                <img
                  alt={org.title}
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[${org.descId}] [${org.titleId}] [organisms-subtitle] [organisms-title]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-48 sm:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <span className={`text-xs font-medium tracking-widest uppercase mb-2 ${org.color}`}>{org.category}</span>
                <h3 id={org.titleId} className="font-space text-2xl font-bold text-white mb-3">{org.title}</h3>
                <p id={org.descId} className="text-gray-400 leading-relaxed">{org.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganismsSection;

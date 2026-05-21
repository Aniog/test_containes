import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  {
    id: 'org-01',
    imgId: 'org-img-a1b2c3',
    name: 'Tardigrade',
    nickname: 'Water Bear',
    desc: 'Nearly indestructible microscopic animals that can survive in outer space, extreme radiation, and complete dehydration.',
    size: '0.1–1.5 mm',
    habitat: 'Moss & Lichen',
    category: 'Extremophile',
  },
  {
    id: 'org-02',
    imgId: 'org-img-d4e5f6',
    name: 'Vorticella',
    nickname: 'Bell Animalcule',
    desc: 'A stalked, bell-shaped protozoan that contracts rapidly when disturbed, creating a mesmerizing spring-like motion.',
    size: '30–150 μm',
    habitat: 'Freshwater',
    category: 'Protozoa',
  },
  {
    id: 'org-03',
    imgId: 'org-img-g7h8i9',
    name: 'Diatom',
    nickname: 'Glass Algae',
    desc: 'Single-celled algae encased in intricate glass-like silica shells with geometric patterns of breathtaking precision.',
    size: '2–500 μm',
    habitat: 'Aquatic',
    category: 'Algae',
  },
  {
    id: 'org-04',
    imgId: 'org-img-j0k1l2',
    name: 'Rotifer',
    nickname: 'Wheel Animal',
    desc: 'Microscopic aquatic animals with a crown of cilia that spin like a wheel, drawing food particles into their mouths.',
    size: '100–500 μm',
    habitat: 'Freshwater',
    category: 'Invertebrate',
  },
  {
    id: 'org-05',
    imgId: 'org-img-m3n4o5',
    name: 'Paramecium',
    nickname: 'Slipper Animalcule',
    desc: 'A slipper-shaped single-celled organism covered in thousands of tiny hair-like cilia used for movement and feeding.',
    size: '50–330 μm',
    habitat: 'Freshwater',
    category: 'Protozoa',
  },
  {
    id: 'org-06',
    imgId: 'org-img-p6q7r8',
    name: 'Nematode',
    nickname: 'Roundworm',
    desc: 'The most abundant animals on Earth — billions live in every square meter of soil, playing vital roles in ecosystems.',
    size: '0.3–8 mm',
    habitat: 'Soil & Water',
    category: 'Worm',
  },
];

const OrganismsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="organisms" ref={containerRef} className="py-20 md:py-28 bg-cosmos-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-cosmos-accent text-xs uppercase tracking-widest font-semibold mb-3 font-grotesk">
            Featured Organisms
          </p>
          <h2
            id="org-section-title"
            className="font-grotesk font-bold text-3xl md:text-4xl text-cosmos-text mb-4"
          >
            Meet the Tiny Inhabitants
          </h2>
          <p id="org-section-desc" className="text-cosmos-muted max-w-xl mx-auto leading-relaxed">
            These remarkable creatures share our world, yet remain hidden from our eyes. Each one is a masterpiece of evolution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {organisms.map((org) => (
            <div
              key={org.id}
              className="group bg-cosmos-card border border-cosmos-border rounded-2xl overflow-hidden hover:border-cosmos-accent/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,229,200,0.08)]"
            >
              {/* Image */}
              <div className="aspect-[4x3] overflow-hidden relative">
                <img
                  id={org.id}
                  alt={org.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[${org.id}] [org-section-desc] [org-section-title] microscopic organism`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width={500}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmos-card/80 to-transparent" />
                <span className="absolute top-3 right-3 bg-cosmos-accent/20 backdrop-blur-sm text-cosmos-accent text-xs px-2 py-1 rounded-full font-grotesk font-medium border border-cosmos-accent/30">
                  {org.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="mb-3">
                  <h3 className="font-grotesk font-bold text-xl text-cosmos-text">{org.name}</h3>
                  <p className="text-cosmos-accent text-sm font-medium font-grotesk">"{org.nickname}"</p>
                </div>
                <p className="text-cosmos-muted text-sm leading-relaxed mb-4">{org.desc}</p>
                <div className="flex gap-4 pt-3 border-t border-cosmos-border">
                  <div>
                    <p className="text-cosmos-dim text-xs uppercase tracking-wider font-grotesk mb-0.5">Size</p>
                    <p className="text-cosmos-text text-sm font-medium">{org.size}</p>
                  </div>
                  <div>
                    <p className="text-cosmos-dim text-xs uppercase tracking-wider font-grotesk mb-0.5">Habitat</p>
                    <p className="text-cosmos-text text-sm font-medium">{org.habitat}</p>
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

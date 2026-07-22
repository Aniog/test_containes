import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  {
    id: 'org-bacteria',
    name: 'Bacteria',
    latin: 'Prokaryota',
    size: '0.5–5 μm',
    habitat: 'Ubiquitous',
    desc: 'Single-celled prokaryotes without a nucleus. They are the most abundant life form on Earth, colonizing every environment from deep-sea vents to the human gut.',
    fact: 'Your body hosts 38 trillion bacterial cells — roughly equal to your own cells.',
    color: 'from-teal-500/20 to-cosmos-card',
    badge: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
    imgId: 'org-img-mc011',
    titleId: 'org-bacteria-title',
    descId: 'org-bacteria-desc',
  },
  {
    id: 'org-virus',
    name: 'Viruses',
    latin: 'Viridae',
    size: '20–300 nm',
    habitat: 'Host-dependent',
    desc: 'Non-living particles on the boundary of life. Viruses hijack cellular machinery to replicate, displaying extraordinary geometric precision in their protein capsids.',
    fact: 'There are 10³¹ viruses on Earth — more than all other biological entities combined.',
    color: 'from-purple-500/20 to-cosmos-card',
    badge: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    imgId: 'org-img-mc012',
    titleId: 'org-virus-title',
    descId: 'org-virus-desc',
  },
  {
    id: 'org-fungi',
    name: 'Fungi',
    latin: 'Mycota',
    size: '2–10 μm',
    habitat: 'Soil, organic matter',
    desc: 'Eukaryotic organisms forming vast underground networks. Fungi are nature\'s recyclers, breaking down organic matter and forming symbiotic relationships with plants.',
    fact: 'The largest organism on Earth is a honey fungus spanning 2,385 acres in Oregon.',
    color: 'from-amber-500/20 to-cosmos-card',
    badge: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    imgId: 'org-img-mc013',
    titleId: 'org-fungi-title',
    descId: 'org-fungi-desc',
  },
  {
    id: 'org-protozoa',
    name: 'Protozoa',
    latin: 'Protista',
    size: '10–100 μm',
    habitat: 'Aquatic environments',
    desc: 'Single-celled eukaryotes with complex internal structures. Protozoa are predators of the microbial world, hunting bacteria and algae with remarkable agility.',
    fact: 'Paramecium can swim 10 times its body length per second — equivalent to a human swimming at 60 mph.',
    color: 'from-blue-500/20 to-cosmos-card',
    badge: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    imgId: 'org-img-mc014',
    titleId: 'org-protozoa-title',
    descId: 'org-protozoa-desc',
  },
];

const OrganismsSection = () => {
  const containerRef = useRef(null);
  const [active, setActive] = useState(organisms[0].id);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [active]);

  const current = organisms.find((o) => o.id === active);

  return (
    <section id="organisms" ref={containerRef} className="py-24 px-6 md:px-12 bg-cosmos-bg">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cosmos-teal text-sm font-semibold tracking-widest uppercase mb-3 block">
            Life Forms
          </span>
          <h2 id="organisms-title" className="text-3xl md:text-5xl font-black text-cosmos-text mb-4">
            Meet the Organisms
          </h2>
          <p id="organisms-subtitle" className="text-cosmos-muted text-lg max-w-2xl mx-auto">
            From the simplest viruses to complex protozoa, each microorganism plays a vital role in the web of life.
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" role="tablist">
          {organisms.map((org) => (
            <button
              key={org.id}
              type="button"
              role="tab"
              aria-selected={active === org.id}
              onClick={() => setActive(org.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
                active === org.id
                  ? 'bg-cosmos-teal text-cosmos-bg border-cosmos-teal shadow-[0_0_20px_rgba(0,212,200,0.3)]'
                  : 'bg-transparent text-cosmos-muted border-cosmos-teal/20 hover:border-cosmos-teal/50 hover:text-cosmos-teal'
              }`}
            >
              {org.name}
            </button>
          ))}
        </div>

        {/* Active organism detail */}
        {organisms
          .filter((org) => org.id === active)
          .map((org) => (
            <div
              key={org.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden border border-cosmos-teal/20 shadow-[0_0_40px_rgba(0,212,200,0.1)]">
                <img
                  alt={org.name}
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[${org.descId}] [${org.titleId}] [organisms-subtitle] [organisms-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full object-cover bg-cosmos-card"
                  style={{ opacity: 0 }}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${org.color} pointer-events-none`} />
              </div>

              {/* Info */}
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${org.badge}`}>
                  {org.latin}
                </span>
                <h3 id={org.titleId} className="text-cosmos-text text-3xl md:text-4xl font-black mb-4">
                  {org.name}
                </h3>
                <p id={org.descId} className="text-cosmos-muted text-base leading-relaxed mb-6">
                  {org.desc}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-cosmos-surface rounded-xl p-4 border border-cosmos-teal/10">
                    <div className="text-cosmos-dim text-xs uppercase tracking-widest mb-1">Size</div>
                    <div className="text-cosmos-teal font-bold">{org.size}</div>
                  </div>
                  <div className="bg-cosmos-surface rounded-xl p-4 border border-cosmos-teal/10">
                    <div className="text-cosmos-dim text-xs uppercase tracking-widest mb-1">Habitat</div>
                    <div className="text-cosmos-teal font-bold">{org.habitat}</div>
                  </div>
                </div>

                <div className="bg-cosmos-surface border border-cosmos-teal/20 rounded-xl p-4">
                  <div className="text-cosmos-teal text-xs font-semibold tracking-widest uppercase mb-2">Did You Know?</div>
                  <p className="text-cosmos-muted text-sm leading-relaxed italic">"{org.fact}"</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default OrganismsSection;

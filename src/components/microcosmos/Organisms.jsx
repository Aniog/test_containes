import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  {
    id: 'tardigrade',
    name: 'Tardigrade',
    nickname: 'Water Bear',
    desc: 'Nearly indestructible micro-animals that survive in outer space, extreme radiation, and complete dehydration. They can enter cryptobiosis — a state of suspended animation — for decades.',
    habitat: 'Moss & Lichen',
    size: '0.1–1.5 mm',
    superpower: 'Cryptobiosis',
    color: 'cyan',
    titleId: 'org-tardigrade-title',
    descId: 'org-tardigrade-desc',
    imgId: 'org-tardigrade-img-a1b2c3',
  },
  {
    id: 'diatom',
    name: 'Diatom',
    nickname: 'Glass Algae',
    desc: 'Single-celled algae encased in intricate glass-like silica shells called frustules. They produce 20% of Earth\'s oxygen and form the base of aquatic food chains.',
    habitat: 'Oceans & Lakes',
    size: '2–500 µm',
    superpower: 'Oxygen Production',
    color: 'emerald',
    titleId: 'org-diatom-title',
    descId: 'org-diatom-desc',
    imgId: 'org-diatom-img-d4e5f6',
  },
  {
    id: 'vorticella',
    name: 'Vorticella',
    nickname: 'Bell Animalcule',
    desc: 'A bell-shaped protozoan that attaches to surfaces via a coiled stalk. It creates water currents with its cilia to draw in bacteria and algae for food.',
    habitat: 'Freshwater',
    size: '30–150 µm',
    superpower: 'Rapid Contraction',
    color: 'violet',
    titleId: 'org-vorticella-title',
    descId: 'org-vorticella-desc',
    imgId: 'org-vorticella-img-g7h8i9',
  },
  {
    id: 'radiolarian',
    name: 'Radiolarian',
    nickname: 'Star of the Sea',
    desc: 'Marine protozoa with stunning geometric mineral skeletons. Their intricate silica structures inspired Art Nouveau architecture and modern geodesic dome designs.',
    habitat: 'Open Ocean',
    size: '0.1–2 mm',
    superpower: 'Geometric Perfection',
    color: 'amber',
    titleId: 'org-radiolarian-title',
    descId: 'org-radiolarian-desc',
    imgId: 'org-radiolarian-img-j1k2l3',
  },
  {
    id: 'bdelloid',
    name: 'Bdelloid Rotifer',
    nickname: 'Wheel Animal',
    desc: 'Microscopic animals that have survived without sexual reproduction for 80 million years. They can absorb and incorporate DNA from other organisms into their own genome.',
    habitat: 'Soil & Freshwater',
    size: '100–500 µm',
    superpower: 'DNA Absorption',
    color: 'rose',
    titleId: 'org-bdelloid-title',
    descId: 'org-bdelloid-desc',
    imgId: 'org-bdelloid-img-m4n5o6',
  },
  {
    id: 'noctiluca',
    name: 'Noctiluca',
    nickname: 'Sea Sparkle',
    desc: 'A bioluminescent dinoflagellate responsible for the magical blue glow seen in ocean waves at night. Each cell produces its own cold light through a chemical reaction.',
    habitat: 'Coastal Oceans',
    size: '0.2–2 mm',
    superpower: 'Bioluminescence',
    color: 'blue',
    titleId: 'org-noctiluca-title',
    descId: 'org-noctiluca-desc',
    imgId: 'org-noctiluca-img-p7q8r9',
  },
];

const colorMap = {
  cyan: { badge: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30', border: 'border-cyan-500/20', hover: 'hover:border-cyan-500/50' },
  emerald: { badge: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30', border: 'border-emerald-500/20', hover: 'hover:border-emerald-500/50' },
  violet: { badge: 'bg-violet-500/15 text-violet-400 border-violet-500/30', border: 'border-violet-500/20', hover: 'hover:border-violet-500/50' },
  amber: { badge: 'bg-amber-500/15 text-amber-400 border-amber-500/30', border: 'border-amber-500/20', hover: 'hover:border-amber-500/50' },
  rose: { badge: 'bg-rose-500/15 text-rose-400 border-rose-500/30', border: 'border-rose-500/20', hover: 'hover:border-rose-500/50' },
  blue: { badge: 'bg-blue-500/15 text-blue-400 border-blue-500/30', border: 'border-blue-500/20', hover: 'hover:border-blue-500/50' },
};

export default function Organisms() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="organisms" ref={containerRef} className="bg-[#050a0e] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Microscopic Life
          </span>
          <h2 id="organisms-title" className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            Meet the Inhabitants
          </h2>
          <p id="organisms-subtitle" className="text-slate-400 text-lg max-w-2xl mx-auto">
            Six extraordinary organisms that reveal the astonishing complexity,
            beauty, and resilience of life at the microscopic scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organisms.map((org) => {
            const c = colorMap[org.color];
            return (
              <div
                key={org.id}
                className={`bg-slate-900/50 backdrop-blur-sm border ${c.border} ${c.hover} rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.08)] group`}
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    alt={org.name}
                    data-strk-img-id={org.imgId}
                    data-strk-img={`[${org.descId}] [${org.titleId}] [organisms-subtitle] [organisms-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  <div className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full border ${c.badge}`}>
                    {org.nickname}
                  </div>
                </div>

                <div className="p-6">
                  <h3 id={org.titleId} className="text-slate-50 text-xl font-bold mb-1">{org.name}</h3>
                  <p id={org.descId} className="text-slate-400 text-sm leading-relaxed mb-4">{org.desc}</p>

                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-800">
                    <div>
                      <div className="text-slate-500 text-xs mb-1">Habitat</div>
                      <div className="text-slate-300 text-xs font-medium">{org.habitat}</div>
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs mb-1">Size</div>
                      <div className="text-slate-300 text-xs font-medium">{org.size}</div>
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs mb-1">Superpower</div>
                      <div className="text-slate-300 text-xs font-medium">{org.superpower}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Droplets, Bug, Leaf, FlaskConical } from 'lucide-react';

const specimens = [
  {
    id: 'spec-01',
    titleId: 'spec-01-title',
    descId: 'spec-01-desc',
    imgId: 'spec-img-mc011',
    icon: <Bug className="w-5 h-5" />,
    tag: 'Micro-Animal',
    title: 'Tardigrade',
    desc: 'Known as "water bears," tardigrades are microscopic animals capable of surviving extreme conditions — from the vacuum of space to boiling water. They can enter cryptobiosis, halting all metabolic processes.',
    facts: ['0.1–1.5 mm long', 'Survives -272°C', '600M years old lineage'],
  },
  {
    id: 'spec-02',
    titleId: 'spec-02-title',
    descId: 'spec-02-desc',
    imgId: 'spec-img-mc012',
    icon: <Droplets className="w-5 h-5" />,
    tag: 'Protozoa',
    title: 'Paramecium',
    desc: 'Single-celled organisms covered in tiny hair-like cilia that propel them through water. Paramecia are among the most complex single-celled organisms, with specialized organelles for digestion and locomotion.',
    facts: ['50–330 μm long', 'Moves 1mm/sec', 'Eats bacteria'],
  },
  {
    id: 'spec-03',
    titleId: 'spec-03-title',
    descId: 'spec-03-desc',
    imgId: 'spec-img-mc013',
    icon: <Leaf className="w-5 h-5" />,
    tag: 'Algae',
    title: 'Diatom',
    desc: 'Microscopic algae encased in intricate glass-like shells called frustules. Diatoms produce about 20% of Earth\'s oxygen and form the base of many aquatic food chains. Their geometric patterns are breathtaking.',
    facts: ['2–200 μm', 'Produces 20% O₂', '100,000+ species'],
  },
  {
    id: 'spec-04',
    titleId: 'spec-04-title',
    descId: 'spec-04-desc',
    imgId: 'spec-img-mc014',
    icon: <FlaskConical className="w-5 h-5" />,
    tag: 'Bacteria',
    title: 'Cyanobacteria',
    desc: 'Ancient photosynthetic bacteria that transformed Earth\'s atmosphere by producing oxygen over 2.4 billion years ago. Today they form colorful blooms in water and are studied for biofuel production.',
    facts: ['1–10 μm', '2.4B years old', 'Oxygenated Earth'],
  },
];

export default function SpecimensSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="specimens" ref={containerRef} className="py-24 px-6 md:px-12 bg-cosmos-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cosmos-teal text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Featured Organisms
          </p>
          <h2
            id="specimens-title"
            className="text-4xl md:text-5xl font-bold text-slate-50 mb-4"
          >
            Notable Specimens
          </h2>
          <p
            id="specimens-subtitle"
            className="text-slate-400 text-lg max-w-xl mx-auto"
          >
            Meet the remarkable inhabitants of the microscopic world — each one a marvel of evolution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {specimens.map((spec) => (
            <div
              key={spec.id}
              className="group bg-cosmos-surface border border-cosmos-teal/15 rounded-2xl overflow-hidden hover:border-cosmos-teal/40 transition-all duration-300 glow-teal"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  alt={spec.title}
                  data-strk-img-id={spec.imgId}
                  data-strk-img={`[${spec.descId}] [${spec.titleId}] [specimens-subtitle] [specimens-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmos-surface via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-cosmos-bg/70 backdrop-blur-sm border border-cosmos-teal/30 rounded-full px-3 py-1.5">
                  <span className="text-cosmos-teal">{spec.icon}</span>
                  <span className="text-cosmos-teal text-xs font-semibold tracking-wider uppercase">
                    {spec.tag}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 id={spec.titleId} className="text-slate-50 text-xl font-bold mb-3">
                  {spec.title}
                </h3>
                <p id={spec.descId} className="text-slate-400 text-sm leading-relaxed mb-5">
                  {spec.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {spec.facts.map((fact) => (
                    <span
                      key={fact}
                      className="px-3 py-1 rounded-full bg-cosmos-elevated border border-cosmos-teal/20 text-cosmos-teal text-xs font-medium"
                    >
                      {fact}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

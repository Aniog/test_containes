import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  {
    id: 'org-bacteria',
    name: 'Bacteria',
    latin: 'Prokaryota',
    desc: 'Single-celled organisms without a nucleus, found in every environment on Earth. Some are essential for life; others cause disease.',
    color: 'text-cyan-400',
    imgId: 'org-img-mc003',
  },
  {
    id: 'org-diatoms',
    name: 'Diatoms',
    latin: 'Bacillariophyta',
    desc: 'Microscopic algae encased in intricate glass-like silica shells. They produce 20% of the world\'s oxygen.',
    color: 'text-teal-400',
    imgId: 'org-img-mc004',
  },
  {
    id: 'org-protozoa',
    name: 'Protozoa',
    latin: 'Protista',
    desc: 'Single-celled eukaryotes that hunt, swim, and behave almost like tiny animals in ponds and oceans.',
    color: 'text-purple-400',
    imgId: 'org-img-mc005',
  },
  {
    id: 'org-fungi',
    name: 'Fungi & Spores',
    latin: 'Fungi',
    desc: 'Microscopic fungi and their spores are nature\'s recyclers, breaking down organic matter and forming vital symbioses.',
    color: 'text-amber-400',
    imgId: 'org-img-mc006',
  },
  {
    id: 'org-viruses',
    name: 'Viruses',
    latin: 'Viridae',
    desc: 'Nanoscale entities that blur the line between living and non-living, hijacking cells to replicate with astonishing precision.',
    color: 'text-rose-400',
    imgId: 'org-img-mc007',
  },
  {
    id: 'org-tardigrade',
    name: 'Tardigrades',
    latin: 'Tardigrada',
    desc: 'The toughest animals on Earth. These microscopic "water bears" survive extreme radiation, vacuum, and temperatures.',
    color: 'text-green-400',
    imgId: 'org-img-mc008',
  },
];

export default function OrganismsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-[#0a1628] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p id="org-section-label" className="text-cyan-400 text-sm font-semibold tracking-[0.25em] uppercase mb-3">
            Meet the Inhabitants
          </p>
          <h2 id="org-section-title" className="text-3xl md:text-4xl font-bold text-[#e2f4ff] mb-4">
            Microscopic Life Forms
          </h2>
          <p className="text-[#94b8d0] max-w-xl mx-auto text-base leading-relaxed">
            From bacteria to tardigrades, the microcosmos is populated by an astonishing variety of organisms, each with unique adaptations and roles.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {organisms.map((org) => (
            <div
              key={org.id}
              className="bg-[#0d1f3c] border border-cyan-500/20 rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(0,200,255,0.07)] hover:shadow-[0_0_30px_rgba(0,200,255,0.18)] hover:border-cyan-500/40 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="overflow-hidden h-48">
                <img
                  id={org.id}
                  alt={org.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[${org.id}] [org-section-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              {/* Content */}
              <div className="p-5">
                <p className={`text-xs font-semibold tracking-widest uppercase mb-1 ${org.color}`}>
                  {org.latin}
                </p>
                <h3 className="text-[#e2f4ff] text-lg font-bold mb-2">{org.name}</h3>
                <p className="text-[#94b8d0] text-sm leading-relaxed">{org.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  { id: 'org-bacteria', title: 'Bacteria', subtitle: 'The Ancient Architects', desc: 'Single-celled prokaryotes that have shaped Earth\'s atmosphere and chemistry for over 3.5 billion years. Found in every habitat on the planet.', tag: 'Prokaryote', color: 'teal', imgId: 'org-img-mc003' },
  { id: 'org-protozoa', title: 'Protozoa', subtitle: 'The Microscopic Hunters', desc: 'Diverse single-celled eukaryotes that hunt, swim, and engulf prey. From the graceful Paramecium to the shape-shifting Amoeba.', tag: 'Eukaryote', color: 'cyan', imgId: 'org-img-mc004' },
  { id: 'org-algae', title: 'Microalgae', subtitle: 'Oxygen Factories', desc: 'Photosynthetic microorganisms responsible for producing over 50% of Earth\'s oxygen. The base of aquatic food chains worldwide.', tag: 'Photosynthetic', color: 'emerald', imgId: 'org-img-mc005' },
  { id: 'org-fungi', title: 'Fungi & Spores', subtitle: 'Nature\'s Recyclers', desc: 'Microscopic fungi and their spores break down organic matter, forming the invisible network that recycles nutrients across ecosystems.', tag: 'Decomposer', color: 'teal', imgId: 'org-img-mc006' },
  { id: 'org-diatoms', title: 'Diatoms', subtitle: 'Living Glass Art', desc: 'Algae encased in intricate silica shells of breathtaking geometric beauty. Each species has a unique, ornate pattern unlike any other.', tag: 'Algae', color: 'cyan', imgId: 'org-img-mc007' },
  { id: 'org-viruses', title: 'Viruses', subtitle: 'The Boundary of Life', desc: 'Nanoscale entities that blur the line between living and non-living. Viruses are the most abundant biological entities on Earth.', tag: 'Nanoscale', color: 'emerald', imgId: 'org-img-mc008' },
];

const colorMap = {
  teal: 'bg-teal-400/10 text-teal-400 border-teal-400/20',
  cyan: 'bg-cyan-400/10 text-cyan-400 border-cyan-400/20',
  emerald: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
};

export default function OrganismsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-gray-900 py-24 md:py-32 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-4 block">Inhabitants</span>
          <h2 id="organisms-title" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet the Microscopic World
          </h2>
          <p id="organisms-desc" className="text-gray-400 text-lg max-w-2xl mx-auto">
            Billions of organisms invisible to the naked eye form the foundation of all life on Earth.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organisms.map((org) => (
            <div key={org.id} className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:border-teal-400/40 hover:shadow-lg hover:shadow-teal-500/10 transition group">
              <div className="overflow-hidden h-52">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={org.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[${org.id}] [organisms-desc] [organisms-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span id={org.id} className="text-white font-bold text-xl">{org.title}</span>
                  <span className={`border rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest ${colorMap[org.color]}`}>
                    {org.tag}
                  </span>
                </div>
                <p className="text-teal-400 text-sm font-semibold mb-2">{org.subtitle}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{org.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

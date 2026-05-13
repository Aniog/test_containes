import { Info } from 'lucide-react';

const organisms = [
  {
    name: 'Paramecium caudatum',
    classification: 'Phylum Ciliophora',
    magnification: '400×',
    illumination: 'Phase Contrast',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=700&q=80',
    accentColor: 'cyan',
    keyFeatures: ['Oral groove', 'Macronucleus', 'Contractile vacuole', 'Cilia array'],
    description: 'The slipper animalcule navigates its aquatic environment via coordinated metachronal waves of cilia — approximately 2,500 cilia beating at 10–40 Hz. The oral groove channels bacteria toward the cytostome for phagocytosis, while contractile vacuoles regulate osmotic pressure in hypotonic freshwater environments.',
  },
  {
    name: 'Tardigrade (Water Bear)',
    classification: 'Phylum Tardigrada',
    magnification: '200×',
    illumination: 'Darkfield',
    image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=700&q=80',
    accentColor: 'purple',
    keyFeatures: ['Stylet apparatus', 'Clawed lobopods', 'Cryptobiosis', 'Cuticle molting'],
    description: 'Tardigrades are the most resilient metazoans known to science. In their cryptobiotic tun state, they survive temperatures from −272°C to +150°C, pressures exceeding 6,000 atm, ionizing radiation doses of 570,000 rad, and the vacuum of outer space. Their survival mechanism involves trehalose synthesis and Dsup (Damage Suppressor) proteins that physically shield DNA.',
  },
];

const accentMap = {
  cyan: { bar: 'bg-cyan-400', label: 'text-cyan-400', border: 'border-cyan-500/30', tag: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' },
  purple: { bar: 'bg-purple-400', label: 'text-purple-400', border: 'border-purple-500/30', tag: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
};

export default function ProtistsSection() {
  return (
    <section id="protists" className="py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-[#121824] relative overflow-hidden">
      <div className="absolute inset-0 lab-grid opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-cyan-400" />
          <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase">
            Section B · Protists & Micro-Invertebrates
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase text-slate-100 mb-6 max-w-2xl">
          The Micro-Zoo
        </h2>
        <p className="text-slate-500 text-sm leading-relaxed mb-16 max-w-2xl">
          Single-celled organisms and microscopic invertebrates exhibit behavioral and physiological complexity that challenges our intuitions about the minimum requirements for life. These specimens demonstrate that intelligence, adaptability, and resilience are not exclusive to macroscopic organisms.
        </p>

        {/* Organism Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {organisms.map((org) => {
            const c = accentMap[org.accentColor];
            return (
              <div key={org.name} className={`bg-[#0E1520] border border-slate-800/60 hover:${c.border} transition-all duration-300 overflow-hidden`}>
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={org.image}
                    alt={org.name}
                    className="w-full h-full object-cover opacity-70 hover:opacity-90 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1520] via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className={`font-mono text-[9px] tracking-widest uppercase ${c.label} bg-[#090D16]/80 px-2 py-1`}>
                      {org.magnification}
                    </span>
                    <span className="font-mono text-[9px] tracking-widest uppercase text-slate-400 bg-[#090D16]/80 px-2 py-1">
                      {org.illumination}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className={`w-6 h-px ${c.bar} mb-4`} />
                  <p className={`text-[9px] font-mono tracking-widest uppercase ${c.label} mb-1`}>{org.classification}</p>
                  <h3 className="text-slate-100 font-semibold text-lg italic mb-3">{org.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{org.description}</p>

                  {/* Key Features */}
                  <div>
                    <p className="text-[9px] font-mono tracking-widest uppercase text-slate-600 mb-3">Key Structures</p>
                    <div className="flex flex-wrap gap-2">
                      {org.keyFeatures.map((feat) => (
                        <span key={feat} className={`text-[9px] font-mono tracking-widest uppercase px-2 py-1 border ${c.tag}`}>
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Locomotion Comparison Table */}
        <div className="bg-[#0E1520] border border-slate-800/60 p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <Info className="w-4 h-4 text-cyan-400" />
            <h3 className="text-slate-200 font-semibold text-sm tracking-wide">Locomotion Mechanisms in Protists</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-800/60">
                  {['Organism', 'Mechanism', 'Organelle', 'Speed', 'Energy Source'].map((h) => (
                    <th key={h} className="text-left text-[9px] font-mono tracking-widest uppercase text-slate-600 pb-3 pr-6">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/40">
                {[
                  ['Paramecium', 'Ciliary beating', 'Cilia (×2,500)', '1 mm/s', 'ATP hydrolysis'],
                  ['Amoeba', 'Pseudopodial flow', 'Pseudopodia', '0.01 mm/s', 'Actin polymerization'],
                  ['Euglena', 'Flagellar rotation', 'Flagellum (×1)', '0.1 mm/s', 'ATP hydrolysis'],
                  ['Tardigrade', 'Lobopodal walking', 'Clawed lobopods (×8)', '0.5 mm/s', 'Muscular contraction'],
                ].map(([org, mech, org2, speed, energy]) => (
                  <tr key={org} className="hover:bg-slate-800/20 transition-colors">
                    <td className="py-3 pr-6 text-slate-300 text-xs italic">{org}</td>
                    <td className="py-3 pr-6 text-slate-400 text-xs">{mech}</td>
                    <td className="py-3 pr-6 text-slate-400 text-xs">{org2}</td>
                    <td className="py-3 pr-6 text-cyan-400 text-xs font-mono">{speed}</td>
                    <td className="py-3 text-slate-500 text-xs">{energy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

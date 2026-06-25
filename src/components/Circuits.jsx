import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { MapPin } from 'lucide-react';

const circuits = [
  {
    id: 'monaco',
    name: 'Circuit de Monaco',
    location: 'Monte Carlo, Monaco',
    laps: 78,
    length: '3.337 km',
    firstRace: 1950,
    desc: 'The jewel of the F1 calendar. Narrow streets, tight barriers, and zero margin for error make Monaco the ultimate test of driver skill.',
    titleId: 'circuit-monaco-title',
    descId: 'circuit-monaco-desc',
    imgId: 'circuit-img-monaco-a1b2c3',
  },
  {
    id: 'silverstone',
    name: 'Silverstone Circuit',
    location: 'Northamptonshire, UK',
    laps: 52,
    length: '5.891 km',
    firstRace: 1950,
    desc: 'The home of British motorsport. High-speed corners like Copse and Maggotts-Becketts define this legendary circuit.',
    titleId: 'circuit-silverstone-title',
    descId: 'circuit-silverstone-desc',
    imgId: 'circuit-img-silverstone-d4e5f6',
  },
  {
    id: 'spa',
    name: 'Circuit de Spa-Francorchamps',
    location: 'Stavelot, Belgium',
    laps: 44,
    length: '7.004 km',
    firstRace: 1950,
    desc: 'Eau Rouge, Raidillon, Pouhon — Spa is a cathedral of speed set among the Ardennes forests, beloved by drivers and fans alike.',
    titleId: 'circuit-spa-title',
    descId: 'circuit-spa-desc',
    imgId: 'circuit-img-spa-g7h8i9',
  },
  {
    id: 'suzuka',
    name: 'Suzuka International Racing Course',
    location: 'Suzuka, Japan',
    laps: 53,
    length: '5.807 km',
    firstRace: 1987,
    desc: 'The only figure-eight circuit on the calendar. Suzuka\'s technical layout and passionate fans make it a fan favourite.',
    titleId: 'circuit-suzuka-title',
    descId: 'circuit-suzuka-desc',
    imgId: 'circuit-img-suzuka-j1k2l3',
  },
];

const Circuits = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="circuits" ref={containerRef} className="bg-[#0a0a0a] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="text-[#e10600] font-bold uppercase tracking-[0.3em] text-sm">
            Iconic Venues
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white mt-3 leading-tight">
            Legendary <span className="text-[#e10600]">Circuits</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl">
            From the streets of Monaco to the forests of Spa, each circuit tells its own story of speed, drama, and history.
          </p>
        </div>

        {/* Circuits list */}
        <div className="space-y-6">
          {circuits.map((circuit, index) => (
            <div
              key={circuit.id}
              className="bg-[#1a1a1a] border border-white/10 overflow-hidden hover:border-[#e10600]/40 transition-all duration-300 group"
            >
              <div className="grid md:grid-cols-5 gap-0">
                {/* Image */}
                <div className="md:col-span-2 relative overflow-hidden h-56 md:h-auto">
                  <img
                    alt={circuit.name}
                    data-strk-img-id={circuit.imgId}
                    data-strk-img={`[${circuit.descId}] [${circuit.titleId}] Formula 1 racing circuit aerial view`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a1a1a] hidden md:block" />
                  {/* Race number */}
                  <div className="absolute top-4 left-4 text-6xl font-black text-white/10 leading-none select-none">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={14} className="text-[#e10600]" />
                    <span className="text-gray-500 text-xs uppercase tracking-wider">{circuit.location}</span>
                  </div>
                  <h3
                    id={circuit.titleId}
                    className="text-white font-black uppercase text-xl md:text-2xl tracking-wide mb-3"
                  >
                    {circuit.name}
                  </h3>
                  <p id={circuit.descId} className="text-gray-400 text-sm leading-relaxed mb-6">
                    {circuit.desc}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-4">
                    {[
                      { label: 'Laps', value: circuit.laps },
                      { label: 'Length', value: circuit.length },
                      { label: 'First Race', value: circuit.firstRace },
                    ].map((stat) => (
                      <div key={stat.label}>
                        <div className="text-white font-bold text-lg">{stat.value}</div>
                        <div className="text-gray-500 text-xs uppercase tracking-wider">{stat.label}</div>
                      </div>
                    ))}
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

export default Circuits;

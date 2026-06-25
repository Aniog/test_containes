import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const teams = [
  {
    id: 'red-bull',
    name: 'Red Bull Racing',
    base: 'Milton Keynes, UK',
    championships: 6,
    color: '#3671C6',
    desc: 'The dominant force of the modern era, Red Bull Racing has redefined what is possible in Formula 1.',
    titleId: 'team-red-bull-title',
    descId: 'team-red-bull-desc',
    imgId: 'team-img-redbull-g7h8i9',
  },
  {
    id: 'ferrari',
    name: 'Scuderia Ferrari',
    base: 'Maranello, Italy',
    championships: 16,
    color: '#E8002D',
    desc: 'The most storied team in F1 history. Ferrari is synonymous with passion, speed, and Italian flair.',
    titleId: 'team-ferrari-title',
    descId: 'team-ferrari-desc',
    imgId: 'team-img-ferrari-j1k2l3',
  },
  {
    id: 'mercedes',
    name: 'Mercedes-AMG Petronas',
    base: 'Brackley, UK',
    championships: 8,
    color: '#27F4D2',
    desc: 'Eight consecutive Constructors titles cemented Mercedes as the most successful team of the hybrid era.',
    titleId: 'team-mercedes-title',
    descId: 'team-mercedes-desc',
    imgId: 'team-img-mercedes-m4n5o6',
  },
  {
    id: 'mclaren',
    name: 'McLaren F1 Team',
    base: 'Woking, UK',
    championships: 8,
    color: '#FF8000',
    desc: 'Home of Senna and Prost, McLaren is a legendary constructor with a rich history of innovation.',
    titleId: 'team-mclaren-title',
    descId: 'team-mclaren-desc',
    imgId: 'team-img-mclaren-p7q8r9',
  },
  {
    id: 'aston-martin',
    name: 'Aston Martin',
    base: 'Silverstone, UK',
    championships: 0,
    color: '#229971',
    desc: 'The British luxury brand returned to F1 in 2021, bringing elegance and ambition to the grid.',
    titleId: 'team-aston-title',
    descId: 'team-aston-desc',
    imgId: 'team-img-aston-s1t2u3',
  },
  {
    id: 'alpine',
    name: 'Alpine F1 Team',
    base: 'Enstone, UK',
    championships: 2,
    color: '#0093CC',
    desc: 'Racing under the French tricolor, Alpine carries the legacy of Renault\'s championship-winning heritage.',
    titleId: 'team-alpine-title',
    descId: 'team-alpine-desc',
    imgId: 'team-img-alpine-v4w5x6',
  },
];

const Teams = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="teams" ref={containerRef} className="bg-[#111111] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="text-[#e10600] font-bold uppercase tracking-[0.3em] text-sm">
            2025 Season
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white mt-3 leading-tight">
            The <span className="text-[#e10600]">Teams</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl">
            Ten constructor teams battle across the season, each bringing unique engineering philosophies and racing heritage.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team) => (
            <div
              key={team.id}
              className="bg-[#1a1a1a] border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-300 group"
            >
              {/* Color accent bar */}
              <div className="h-1 w-full" style={{ backgroundColor: team.color }} />

              {/* Team image */}
              <div className="relative overflow-hidden h-48">
                <img
                  alt={team.name}
                  data-strk-img-id={team.imgId}
                  data-strk-img={`[${team.descId}] [${team.titleId}] Formula 1 racing team car`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  id={team.titleId}
                  className="text-white font-black uppercase text-lg tracking-wide mb-1"
                >
                  {team.name}
                </h3>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-gray-500 text-xs uppercase tracking-wider">{team.base}</span>
                  {team.championships > 0 && (
                    <span
                      className="text-xs font-bold px-2 py-0.5 uppercase tracking-wider"
                      style={{ backgroundColor: `${team.color}20`, color: team.color }}
                    >
                      {team.championships}× Champion
                    </span>
                  )}
                </div>
                <p id={team.descId} className="text-gray-400 text-sm leading-relaxed">
                  {team.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;

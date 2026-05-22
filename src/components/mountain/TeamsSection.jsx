import { useEffect, useRef } from 'react';
import { Users, Flag, Star, Globe } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const TEAMS = [
  {
    id: 'sherpa',
    name: 'Sherpa Elite Corps',
    origin: 'Nepal',
    specialty: 'High-Altitude Support',
    summits: 340,
    founded: '1953',
    description:
      'The backbone of Himalayan expeditions. Sherpa guides carry loads, fix ropes, and provide life-saving support above 8,000m. Many have summited Everest more than 20 times.',
    members: 28,
    imgId: 'team-img-sherpa-p7q8r9',
    imgQuery: '[team-sherpa-desc] [team-sherpa-name]',
    achievements: ['Everest record holders', 'Fixed rope specialists', 'Altitude medicine experts'],
  },
  {
    id: 'alpine',
    name: 'Alpine Ascent International',
    origin: 'USA / Europe',
    specialty: 'Guided Expeditions',
    summits: 210,
    founded: '1986',
    description:
      'One of the world\'s premier guiding companies, leading commercial expeditions on all Seven Summits. Known for rigorous safety protocols and acclimatization programs.',
    members: 45,
    imgId: 'team-img-alpine-s1t2u3',
    imgQuery: '[team-alpine-desc] [team-alpine-name]',
    achievements: ['Seven Summits specialists', 'IFMGA certified guides', 'Safety award winners'],
  },
  {
    id: 'karakoram',
    name: 'Karakoram Extreme',
    origin: 'Pakistan',
    specialty: 'Technical Routes',
    summits: 95,
    founded: '2001',
    description:
      'Specialists in the most technically demanding peaks of the Karakoram range. Known for first ascents and new route development on K2, Broad Peak, and Gasherbrum.',
    members: 12,
    imgId: 'team-img-karakoram-v4w5x6',
    imgQuery: '[team-karakoram-desc] [team-karakoram-name]',
    achievements: ['K2 winter ascent', 'New route pioneers', 'Alpine style specialists'],
  },
  {
    id: 'andes',
    name: 'Andes Vertical',
    origin: 'Argentina / Chile',
    specialty: 'South American Peaks',
    summits: 180,
    founded: '1994',
    description:
      'Leading expeditions across the Andes from Aconcagua to Patagonia. Experts in high-altitude acclimatization and the unique weather patterns of South American peaks.',
    members: 22,
    imgId: 'team-img-andes-y7z8a9',
    imgQuery: '[team-andes-desc] [team-andes-name]',
    achievements: ['Aconcagua record', 'Patagonia specialists', 'Altitude physiology research'],
  },
];

const TeamsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="teams" ref={containerRef} className="bg-slate-950 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-amber-500/20 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
            Teams
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Elite Climbing Teams
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
            Behind every successful summit is a team of highly trained professionals who
            dedicate their lives to the mountains.
          </p>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {TEAMS.map((team) => (
            <div
              key={team.id}
              className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  alt={team.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={team.imgId}
                  data-strk-img={team.imgQuery}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 id={`team-${team.id}-name`} className="text-white font-bold text-lg leading-tight">
                      {team.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Globe className="w-3.5 h-3.5 text-amber-500" />
                      <span className="text-slate-400 text-sm">{team.origin}</span>
                    </div>
                  </div>
                  <span className="bg-amber-500/20 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                    {team.specialty}
                  </span>
                </div>

                <p id={`team-${team.id}-desc`} className="text-slate-300 text-sm leading-relaxed mb-5">
                  {team.description}
                </p>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 border-t border-slate-800 pt-4 mb-5">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Flag className="w-4 h-4 text-amber-400" />
                    </div>
                    <div className="text-white font-bold text-sm">{team.summits}</div>
                    <div className="text-slate-500 text-xs">Summits</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Users className="w-4 h-4 text-sky-400" />
                    </div>
                    <div className="text-white font-bold text-sm">{team.members}</div>
                    <div className="text-slate-500 text-xs">Members</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Star className="w-4 h-4 text-green-400" />
                    </div>
                    <div className="text-white font-bold text-sm">{team.founded}</div>
                    <div className="text-slate-500 text-xs">Founded</div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="flex flex-wrap gap-2">
                  {team.achievements.map((a) => (
                    <span
                      key={a}
                      className="bg-slate-800 text-slate-300 text-xs px-2.5 py-1 rounded-lg border border-slate-700"
                    >
                      {a}
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
};

export default TeamsSection;

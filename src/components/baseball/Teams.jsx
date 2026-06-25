import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const teams = [
  {
    id: 'yankees',
    name: '纽约洋基队',
    nameEn: 'New York Yankees',
    league: '美联东区',
    titles: 27,
    founded: 1901,
    color: 'from-slate-700 to-slate-900',
    badge: '🏆',
    titleId: 'team-yankees-title',
    descId: 'team-yankees-desc',
    imgId: 'team-img-yankees-g7h8i9',
    desc: '纽约洋基队是MLB历史上最成功的球队，拥有27次世界大赛冠军，是棒球界的传奇。',
  },
  {
    id: 'redsox',
    name: '波士顿红袜队',
    nameEn: 'Boston Red Sox',
    league: '美联东区',
    titles: 9,
    founded: 1901,
    color: 'from-red-900 to-slate-900',
    badge: '🧦',
    titleId: 'team-redsox-title',
    descId: 'team-redsox-desc',
    imgId: 'team-img-redsox-j1k2l3',
    desc: '波士顿红袜队是MLB最具历史底蕴的球队之一，与洋基队的世纪宿敌对决是棒球史上最精彩的篇章。',
  },
  {
    id: 'dodgers',
    name: '洛杉矶道奇队',
    nameEn: 'Los Angeles Dodgers',
    league: '国联西区',
    titles: 7,
    founded: 1883,
    color: 'from-blue-900 to-slate-900',
    badge: '⭐',
    titleId: 'team-dodgers-title',
    descId: 'team-dodgers-desc',
    imgId: 'team-img-dodgers-m4n5o6',
    desc: '洛杉矶道奇队是西海岸最受欢迎的球队，以其强大的阵容和忠实的球迷文化闻名全球。',
  },
  {
    id: 'cubs',
    name: '芝加哥小熊队',
    nameEn: 'Chicago Cubs',
    league: '国联中区',
    titles: 3,
    founded: 1876,
    color: 'from-blue-800 to-slate-900',
    badge: '🐻',
    titleId: 'team-cubs-title',
    descId: 'team-cubs-desc',
    imgId: 'team-img-cubs-p7q8r9',
    desc: '芝加哥小熊队是MLB历史最悠久的球队之一，2016年终结了108年的冠军荒，创造了棒球史上最感人的时刻。',
  },
];

const Teams = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="teams" ref={containerRef} className="bg-slate-900 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-red-500 text-sm font-bold tracking-widest uppercase mb-3">传奇球队</p>
          <h2
            className="font-black text-4xl md:text-5xl text-white uppercase"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            MLB 经典球队
          </h2>
          <p className="text-slate-400 text-base mt-4 max-w-xl mx-auto">
            认识那些书写了棒球历史的传奇球队
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teams.map((team) => (
            <div
              key={team.id}
              className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:border-red-600/50 hover:shadow-lg hover:shadow-red-900/20 transition-all duration-300 group"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  data-strk-img-id={team.imgId}
                  data-strk-img={`[${team.descId}] [${team.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={team.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${team.color} opacity-70`} />
                <div className="absolute top-3 right-3 text-2xl">{team.badge}</div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3
                      id={team.titleId}
                      className="font-bold text-lg text-white leading-tight"
                      style={{ fontFamily: 'Oswald, sans-serif' }}
                    >
                      {team.name}
                    </h3>
                    <p className="text-slate-500 text-xs">{team.nameEn}</p>
                  </div>
                </div>
                <p id={team.descId} className="text-slate-400 text-xs leading-relaxed mb-4">
                  {team.desc}
                </p>
                <div className="flex items-center justify-between text-xs">
                  <span className="bg-red-600/20 text-red-400 border border-red-600/30 rounded-full px-2 py-0.5">
                    {team.league}
                  </span>
                  <span className="text-amber-400 font-bold">🏆 {team.titles}冠</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;

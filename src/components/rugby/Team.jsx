import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const players = [
  {
    id: 'player-1',
    name: '张伟',
    position: '锋线',
    number: '1',
    titleId: 'player-1-title',
    descId: 'player-1-desc',
    imgId: 'player-img-1-g7h8i9',
  },
  {
    id: 'player-2',
    name: '李明',
    position: '中锋',
    number: '8',
    titleId: 'player-2-title',
    descId: 'player-2-desc',
    imgId: 'player-img-2-j1k2l3',
  },
  {
    id: 'player-3',
    name: '王强',
    position: '后卫',
    number: '15',
    titleId: 'player-3-title',
    descId: 'player-3-desc',
    imgId: 'player-img-3-m4n5o6',
  },
  {
    id: 'player-4',
    name: '陈磊',
    position: '飞翼',
    number: '11',
    titleId: 'player-4-title',
    descId: 'player-4-desc',
    imgId: 'player-img-4-p7q8r9',
  },
  {
    id: 'player-5',
    name: '刘洋',
    position: '半背',
    number: '9',
    titleId: 'player-5-title',
    descId: 'player-5-desc',
    imgId: 'player-img-5-s1t2u3',
  },
  {
    id: 'player-6',
    name: '赵鑫',
    position: '锁锋',
    number: '4',
    titleId: 'player-6-title',
    descId: 'player-6-desc',
    imgId: 'player-img-6-v4w5x6',
  },
];

export default function Team() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="team" ref={containerRef} className="py-20 md:py-28 bg-rugby-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <div className="inline-block bg-rugby-gold/20 border border-rugby-gold/30 text-rugby-gold text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            球队阵容
          </div>
          <h2 id="team-section-title" className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            认识我们的<span className="text-rugby-gold">明星球员</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            每一位球员都是球队的核心，他们用汗水和拼搏诠释橄榄球精神
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {players.map((player) => (
            <div
              key={player.id}
              className="group relative bg-rugby-green-dark rounded-2xl overflow-hidden border border-rugby-green-light/20 hover:border-rugby-gold/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rugby-gold/10"
            >
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  alt={player.name}
                  data-strk-img-id={player.imgId}
                  data-strk-img={`[${player.descId}] [${player.titleId}] [team-section-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rugby-dark/90 via-transparent to-transparent" />
                <div className="absolute top-3 right-3 bg-rugby-gold text-rugby-dark font-extrabold text-lg w-10 h-10 rounded-full flex items-center justify-center">
                  {player.number}
                </div>
              </div>
              <div className="p-4">
                <h3 id={player.titleId} className="text-white font-bold text-lg leading-tight">
                  {player.name}
                </h3>
                <p id={player.descId} className="text-rugby-gold text-sm font-medium mt-0.5">
                  {player.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

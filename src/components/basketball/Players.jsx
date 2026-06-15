import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const players = [
  {
    id: 'player-23',
    name: '李明远',
    position: '得分后卫',
    number: '23',
    stats: { ppg: '28.5', rpg: '5.2', apg: '6.1' },
    titleId: 'player-23-title',
    descId: 'player-23-desc',
    imgId: 'player-img-23-a1b2c3',
  },
  {
    id: 'player-7',
    name: '王浩天',
    position: '中锋',
    number: '7',
    stats: { ppg: '22.1', rpg: '11.8', apg: '2.4' },
    titleId: 'player-7-title',
    descId: 'player-7-desc',
    imgId: 'player-img-7-d4e5f6',
  },
  {
    id: 'player-11',
    name: '张宇飞',
    position: '小前锋',
    number: '11',
    stats: { ppg: '19.7', rpg: '7.3', apg: '4.8' },
    titleId: 'player-11-title',
    descId: 'player-11-desc',
    imgId: 'player-img-11-g7h8i9',
  },
];

const Players = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="players" className="py-20 md:py-28 bg-court-black" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-14 md:mb-16">
          <p className="text-hoop-orange text-xs font-body font-semibold uppercase tracking-[0.3em] mb-3">
            明星阵容
          </p>
          <h2 className="font-heading font-black text-white uppercase leading-none"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
            核心球员
          </h2>
        </div>

        {/* Players Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {players.map((player) => (
            <div
              key={player.id}
              className="group relative bg-court-dark rounded-2xl border border-court-border hover:border-hoop-orange/50 overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]"
            >
              {/* Jersey Number */}
              <div className="absolute top-4 right-4 z-10">
                <span className="font-heading font-black text-white/10 group-hover:text-hoop-orange/20 transition-colors duration-300"
                  style={{ fontSize: '5rem', lineHeight: 1 }}>
                  #{player.number}
                </span>
              </div>

              {/* Player Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-b from-court-card to-court-dark">
                <img
                  alt={player.name}
                  data-strk-img-id={player.imgId}
                  data-strk-img={`[${player.descId}] [${player.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-court-dark via-transparent to-transparent" />
              </div>

              {/* Player Info */}
              <div className="p-6">
                <p
                  id={player.descId}
                  className="text-hoop-orange text-xs font-body font-semibold uppercase tracking-widest mb-1"
                >
                  {player.position}
                </p>
                <h3
                  id={player.titleId}
                  className="font-heading font-bold text-white text-2xl uppercase mb-4"
                >
                  {player.name}
                </h3>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-court-border">
                  <div className="text-center">
                    <p className="font-heading font-black text-white text-xl">{player.stats.ppg}</p>
                    <p className="text-gray-500 text-xs font-body uppercase tracking-wider">场均分</p>
                  </div>
                  <div className="text-center">
                    <p className="font-heading font-black text-white text-xl">{player.stats.rpg}</p>
                    <p className="text-gray-500 text-xs font-body uppercase tracking-wider">篮板</p>
                  </div>
                  <div className="text-center">
                    <p className="font-heading font-black text-white text-xl">{player.stats.apg}</p>
                    <p className="text-gray-500 text-xs font-body uppercase tracking-wider">助攻</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-10 text-center">
          <a
            href="#team"
            className="inline-block border border-gray-700 hover:border-hoop-orange text-gray-300 hover:text-hoop-orange font-body font-semibold text-sm px-8 py-3 rounded-full uppercase tracking-wide transition-all duration-200"
          >
            查看全部球员
          </a>
        </div>
      </div>
    </section>
  );
};

export default Players;

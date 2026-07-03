import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const players = [
  {
    id: 'messi',
    name: '利昂内尔·梅西',
    nameEn: 'Lionel Messi',
    position: '前锋',
    number: 10,
    club: '国际迈阿密',
    caps: 191,
    goals: 109,
    titleId: 'player-messi-title',
    descId: 'player-messi-desc',
    imgId: 'player-img-messi-d4e5f6',
  },
  {
    id: 'dibu',
    name: '埃米利亚诺·马丁内斯',
    nameEn: 'Emiliano Martínez',
    position: '门将',
    number: 23,
    club: '阿斯顿维拉',
    caps: 52,
    goals: 0,
    titleId: 'player-dibu-title',
    descId: 'player-dibu-desc',
    imgId: 'player-img-dibu-g7h8i9',
  },
  {
    id: 'dybala',
    name: '保罗·迪巴拉',
    nameEn: 'Paulo Dybala',
    position: '前锋',
    number: 21,
    club: '罗马',
    caps: 45,
    goals: 31,
    titleId: 'player-dybala-title',
    descId: 'player-dybala-desc',
    imgId: 'player-img-dybala-j1k2l3',
  },
  {
    id: 'depaul',
    name: '罗德里戈·德保罗',
    nameEn: 'Rodrigo De Paul',
    position: '中场',
    number: 7,
    club: '马德里竞技',
    caps: 72,
    goals: 8,
    titleId: 'player-depaul-title',
    descId: 'player-depaul-desc',
    imgId: 'player-img-depaul-m4n5o6',
  },
  {
    id: 'lautaro',
    name: '劳塔罗·马丁内斯',
    nameEn: 'Lautaro Martínez',
    position: '前锋',
    number: 22,
    club: '国际米兰',
    caps: 73,
    goals: 31,
    titleId: 'player-lautaro-title',
    descId: 'player-lautaro-desc',
    imgId: 'player-img-lautaro-p7q8r9',
  },
  {
    id: 'molina',
    name: '纳韦尔·莫利纳',
    nameEn: 'Nahuel Molina',
    position: '后卫',
    number: 26,
    club: '马德里竞技',
    caps: 42,
    goals: 7,
    titleId: 'player-molina-title',
    descId: 'player-molina-desc',
    imgId: 'player-img-molina-s1t2u3',
  },
  {
    id: 'macallister',
    name: '亚历克西斯·麦卡利斯特',
    nameEn: 'Alexis Mac Allister',
    position: '中场',
    number: 20,
    club: '利物浦',
    caps: 38,
    goals: 12,
    titleId: 'player-macallister-title',
    descId: 'player-macallister-desc',
    imgId: 'player-img-macallister-v4w5x6',
  },
  {
    id: 'romero',
    name: '克里斯蒂安·罗梅罗',
    nameEn: 'Cristian Romero',
    position: '后卫',
    number: 13,
    club: '热刺',
    caps: 48,
    goals: 3,
    titleId: 'player-romero-title',
    descId: 'player-romero-desc',
    imgId: 'player-img-romero-y7z8a9',
  },
];

const positionColors = {
  '前锋': 'bg-red-100 text-red-700',
  '中场': 'bg-argentina-blue/10 text-argentina-blue',
  '后卫': 'bg-green-100 text-green-700',
  '门将': 'bg-yellow-100 text-yellow-700',
};

const Players = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="players" className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold text-sm font-medium uppercase tracking-widest mb-3">
            球员阵容
          </p>
          <h2 className="text-navy text-3xl md:text-4xl font-bold">
            明星球员
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            汇聚世界顶级球星，每一位球员都是阿根廷足球精神的代表
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {players.map((player) => (
            <div
              key={player.id}
              className="bg-light-gray rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group border border-gray-100"
            >
              {/* Player Image */}
              <div className="relative overflow-hidden bg-argentina-blue/10 h-52">
                <img
                  alt={player.name}
                  data-strk-img-id={player.imgId}
                  data-strk-img={`[${player.descId}] [${player.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Number badge */}
                <div className="absolute top-3 right-3 bg-navy text-gold font-extrabold text-lg w-9 h-9 rounded-full flex items-center justify-center shadow">
                  {player.number}
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded-full ${positionColors[player.position]}`}
                >
                  {player.position}
                </span>
                <h3
                  id={player.titleId}
                  className="text-navy font-bold text-base mt-2 leading-tight"
                >
                  {player.name}
                </h3>
                <p
                  id={player.descId}
                  className="text-gray-400 text-xs mt-0.5"
                >
                  {player.nameEn} · {player.club}
                </p>
                <div className="flex gap-4 mt-3 pt-3 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-argentina-blue font-bold text-lg leading-none">{player.caps}</div>
                    <div className="text-gray-400 text-xs mt-0.5">出场</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gold font-bold text-lg leading-none">{player.goals}</div>
                    <div className="text-gray-400 text-xs mt-0.5">进球</div>
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

export default Players;

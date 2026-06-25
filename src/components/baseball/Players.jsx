import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const players = [
  {
    id: 'ruth',
    name: '贝比·鲁斯',
    nameEn: 'Babe Ruth',
    position: '外野手 / 投手',
    team: '纽约洋基队',
    era: '1914–1935',
    hr: 714,
    stat: '714支全垒打',
    desc: '棒球史上最伟大的球员，"苏丹打者"，改变了棒球运动的进攻方式，是永恒的传奇。',
    titleId: 'player-ruth-title',
    descId: 'player-ruth-desc',
    imgId: 'player-img-ruth-s1t2u3',
  },
  {
    id: 'gehrig',
    name: '卢·格里格',
    nameEn: 'Lou Gehrig',
    position: '一垒手',
    team: '纽约洋基队',
    era: '1923–1939',
    hr: 493,
    stat: '2130场连续出赛',
    desc: '"铁马"格里格以坚韧不拔的精神著称，连续出赛2130场的纪录保持了56年，是棒球界的精神象征。',
    titleId: 'player-gehrig-title',
    descId: 'player-gehrig-desc',
    imgId: 'player-img-gehrig-v4w5x6',
  },
  {
    id: 'aaron',
    name: '汉克·阿伦',
    nameEn: 'Hank Aaron',
    position: '外野手',
    team: '亚特兰大勇士队',
    era: '1954–1976',
    hr: 755,
    stat: '755支全垒打',
    desc: '"锤子汉克"以755支全垒打打破鲁斯的纪录，是棒球史上最伟大的打者之一，也是民权运动的重要象征。',
    titleId: 'player-aaron-title',
    descId: 'player-aaron-desc',
    imgId: 'player-img-aaron-y7z8a9',
  },
  {
    id: 'mays',
    name: '威利·梅斯',
    nameEn: 'Willie Mays',
    position: '中外野手',
    team: '旧金山巨人队',
    era: '1951–1973',
    hr: 660,
    stat: '660支全垒打',
    desc: '"Say Hey Kid"被许多人认为是史上最全能的棒球员，攻守俱佳，以惊天接杀闻名于世。',
    titleId: 'player-mays-title',
    descId: 'player-mays-desc',
    imgId: 'player-img-mays-b1c2d3',
  },
  {
    id: 'jeter',
    name: '德里克·基特',
    nameEn: 'Derek Jeter',
    position: '游击手',
    team: '纽约洋基队',
    era: '1995–2014',
    hr: 260,
    stat: '3465支安打',
    desc: '洋基队的精神领袖，5次世界大赛冠军，以领导力和关键时刻的表现成为现代棒球的代表人物。',
    titleId: 'player-jeter-title',
    descId: 'player-jeter-desc',
    imgId: 'player-img-jeter-e4f5g6',
  },
  {
    id: 'ohtani',
    name: '大谷翔平',
    nameEn: 'Shohei Ohtani',
    position: '投手 / 指定打击',
    team: '洛杉矶道奇队',
    era: '2018–至今',
    hr: '50+',
    stat: '二刀流传奇',
    desc: '现役最伟大的棒球员，以投打二刀流震惊世界，被誉为"棒球界的贝比鲁斯"，2023年签下10亿美元合同。',
    titleId: 'player-ohtani-title',
    descId: 'player-ohtani-desc',
    imgId: 'player-img-ohtani-h7i8j9',
  },
];

const Players = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="players" ref={containerRef} className="bg-slate-800 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-red-500 text-sm font-bold tracking-widest uppercase mb-3">传奇球星</p>
          <h2
            className="font-black text-4xl md:text-5xl text-white uppercase"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            棒球名人堂
          </h2>
          <p className="text-slate-400 text-base mt-4 max-w-xl mx-auto">
            这些球员用他们的天赋和努力，书写了棒球运动最辉煌的篇章
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {players.map((player) => (
            <div
              key={player.id}
              className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden hover:border-red-600/50 hover:shadow-lg hover:shadow-red-900/20 transition-all duration-300 group"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  data-strk-img-id={player.imgId}
                  data-strk-img={`[${player.descId}] [${player.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={player.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full px-3 py-1 text-xs font-bold">
                    ⭐ {player.stat}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="mb-3">
                  <h3
                    id={player.titleId}
                    className="font-black text-xl text-white"
                    style={{ fontFamily: 'Oswald, sans-serif' }}
                  >
                    {player.name}
                  </h3>
                  <p className="text-slate-500 text-xs">{player.nameEn}</p>
                </div>

                <p id={player.descId} className="text-slate-400 text-sm leading-relaxed mb-4">
                  {player.desc}
                </p>

                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-slate-700 text-slate-300 rounded-full px-3 py-1">{player.position}</span>
                  <span className="bg-slate-700 text-slate-300 rounded-full px-3 py-1">{player.era}</span>
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

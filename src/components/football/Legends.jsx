import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star } from 'lucide-react';

const legends = [
  {
    id: 'pele',
    name: '贝利',
    country: '巴西 🇧🇷',
    goals: 12,
    titles: 3,
    era: '1958–1970',
    quote: '足球是一种美丽的游戏，我只是它的仆人。',
    titleId: 'legend-pele-title',
    descId: 'legend-pele-desc',
    imgId: 'legend-img-pele-v4w5x6',
  },
  {
    id: 'maradona',
    name: '马拉多纳',
    country: '阿根廷 🇦🇷',
    goals: 8,
    titles: 1,
    era: '1982–1994',
    quote: '我用左手触碰了上帝，用右脚触碰了世界。',
    titleId: 'legend-maradona-title',
    descId: 'legend-maradona-desc',
    imgId: 'legend-img-maradona-y7z8a9',
  },
  {
    id: 'ronaldo-r9',
    name: '罗纳尔多',
    country: '巴西 🇧🇷',
    goals: 15,
    titles: 2,
    era: '1994–2006',
    quote: '我的目标就是进球，这是我存在的意义。',
    titleId: 'legend-ronaldo-r9-title',
    descId: 'legend-ronaldo-r9-desc',
    imgId: 'legend-img-ronaldo-r9-b1c2d3',
  },
  {
    id: 'zidane',
    name: '齐达内',
    country: '法国 🇫🇷',
    goals: 5,
    titles: 1,
    era: '1994–2006',
    quote: '足球给了我一切，我把一切都给了足球。',
    titleId: 'legend-zidane-title',
    descId: 'legend-zidane-desc',
    imgId: 'legend-img-zidane-e4f5g6',
  },
  {
    id: 'messi',
    name: '梅西',
    country: '阿根廷 🇦🇷',
    goals: 13,
    titles: 1,
    era: '2006–2022',
    quote: '我梦想着世界杯，现在梦想成真了。',
    titleId: 'legend-messi-title',
    descId: 'legend-messi-desc',
    imgId: 'legend-img-messi-h7i8j9',
  },
  {
    id: 'ronaldo-cr7',
    name: 'C罗',
    country: '葡萄牙 🇵🇹',
    goals: 8,
    titles: 0,
    era: '2006–2022',
    quote: '天赋是上帝给的，但努力是我自己的选择。',
    titleId: 'legend-ronaldo-cr7-title',
    descId: 'legend-ronaldo-cr7-desc',
    imgId: 'legend-img-ronaldo-cr7-k1l2m3',
  },
];

export default function Legends() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="legends" className="bg-gray-950 py-20 px-4" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            传奇人物
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">世界杯传奇球星</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            他们用脚下的魔法书写了世界杯最动人的篇章，成为一代又一代球迷心中永恒的偶像。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {legends.map((legend) => (
            <article
              key={legend.id}
              className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-yellow-400 transition-colors group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  alt={legend.name}
                  data-strk-img-id={legend.imgId}
                  data-strk-img={`[${legend.descId}] [${legend.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 id={legend.titleId} className="text-xl font-black text-white">
                    {legend.name}
                  </h3>
                  <p className="text-sm text-gray-300">{legend.country}</p>
                </div>
              </div>
              <div className="p-5">
                <div className="flex gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-black text-yellow-400">{legend.goals}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">进球</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-yellow-400">{legend.titles}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">冠军</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-gray-300 mt-1">{legend.era}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">参赛年份</div>
                  </div>
                </div>
                <p id={legend.descId} className="text-sm text-gray-400 italic leading-relaxed border-l-2 border-yellow-400 pl-3">
                  "{legend.quote}"
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

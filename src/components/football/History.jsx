import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { MapPin, Calendar } from 'lucide-react';

const milestones = [
  {
    id: 'uruguay-1930',
    year: '1930',
    host: '乌拉圭',
    champion: '乌拉圭',
    flag: '🇺🇾',
    desc: '首届世界杯在乌拉圭举办，13支球队参赛，东道主乌拉圭夺冠，开创了足球最高荣誉的历史。',
    titleId: 'hist-uruguay-1930-title',
    descId: 'hist-uruguay-1930-desc',
    imgId: 'hist-img-uruguay-1930-d4e5f6',
  },
  {
    id: 'brazil-1970',
    year: '1970',
    host: '墨西哥',
    champion: '巴西',
    flag: '🇧🇷',
    desc: '巴西队以贝利为核心，打出了世界杯历史上最华丽的足球，三夺世界杯并永久保留雷米特杯。',
    titleId: 'hist-brazil-1970-title',
    descId: 'hist-brazil-1970-desc',
    imgId: 'hist-img-brazil-1970-g7h8i9',
  },
  {
    id: 'italy-1982',
    year: '1982',
    host: '西班牙',
    champion: '意大利',
    flag: '🇮🇹',
    desc: '罗西横空出世，意大利在小组赛险些出局后一路逆袭，最终夺得第三座世界杯冠军奖杯。',
    titleId: 'hist-italy-1982-title',
    descId: 'hist-italy-1982-desc',
    imgId: 'hist-img-italy-1982-j1k2l3',
  },
  {
    id: 'france-1998',
    year: '1998',
    host: '法国',
    champion: '法国',
    flag: '🇫🇷',
    desc: '东道主法国队在齐达内的带领下，以3-0大胜巴西，首次夺得世界杯冠军，举国欢腾。',
    titleId: 'hist-france-1998-title',
    descId: 'hist-france-1998-desc',
    imgId: 'hist-img-france-1998-m4n5o6',
  },
  {
    id: 'germany-2014',
    year: '2014',
    host: '巴西',
    champion: '德国',
    flag: '🇩🇪',
    desc: '德国队在巴西主场7-1大胜东道主，最终决赛加时赛凭格策绝杀阿根廷，夺得第四座世界杯。',
    titleId: 'hist-germany-2014-title',
    descId: 'hist-germany-2014-desc',
    imgId: 'hist-img-germany-2014-p7q8r9',
  },
  {
    id: 'argentina-2022',
    year: '2022',
    host: '卡塔尔',
    champion: '阿根廷',
    flag: '🇦🇷',
    desc: '梅西终圆世界杯梦，阿根廷在点球大战中击败法国，夺得36年来首个世界杯冠军，梅西封神。',
    titleId: 'hist-argentina-2022-title',
    descId: 'hist-argentina-2022-desc',
    imgId: 'hist-img-argentina-2022-s1t2u3',
  },
];

export default function History() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="history" className="bg-gray-950 py-20 px-4" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            历史长河
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">世界杯历史时刻</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            从1930年首届世界杯至今，每一届都留下了令人难忘的精彩瞬间。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestones.map((m) => (
            <article
              key={m.id}
              className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-yellow-400 transition-colors group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  alt={`${m.year} ${m.host} World Cup`}
                  data-strk-img-id={m.imgId}
                  data-strk-img={`[${m.descId}] [${m.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <span className="absolute top-3 left-3 bg-yellow-400 text-gray-950 text-xs font-bold px-2 py-1 rounded-full">
                  {m.year}
                </span>
              </div>
              <div className="p-5">
                <h3 id={m.titleId} className="text-lg font-bold text-white mb-1">
                  {m.flag} {m.champion} 夺冠
                </h3>
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {m.host}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {m.year}
                  </span>
                </div>
                <p id={m.descId} className="text-sm text-gray-300 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

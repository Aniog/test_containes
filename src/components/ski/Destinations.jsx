import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { MapPin, Star, Thermometer } from 'lucide-react';

const destinations = [
  {
    id: 'zermatt',
    name: '策马特',
    country: '瑞士',
    rating: 4.9,
    temp: '-8°C',
    difficulty: '全级别',
    difficultyColor: 'bg-sky-blue',
    description: '马特洪峰脚下的传奇滑雪胜地，拥有360公里的滑雪道，全年积雪，是欧洲最受欢迎的滑雪天堂。',
    imgId: 'dest-zermatt-img-a1b2c3',
    titleId: 'dest-zermatt-title',
    descId: 'dest-zermatt-desc',
  },
  {
    id: 'aspen',
    name: '阿斯彭',
    country: '美国科罗拉多',
    rating: 4.8,
    temp: '-12°C',
    difficulty: '中高级',
    difficultyColor: 'bg-slope-orange',
    description: '好莱坞明星与滑雪精英的聚集地，四座山峰提供多样化地形，奢华设施与顶级粉雪完美结合。',
    imgId: 'dest-aspen-img-d4e5f6',
    titleId: 'dest-aspen-title',
    descId: 'dest-aspen-desc',
  },
  {
    id: 'niseko',
    name: '二世古',
    country: '日本北海道',
    rating: 4.9,
    temp: '-15°C',
    difficulty: '全级别',
    difficultyColor: 'bg-sky-blue',
    description: '以"日本粉雪"闻名全球，年均降雪量超过15米，松软干燥的粉雪让每一次滑行都如梦如幻。',
    imgId: 'dest-niseko-img-g7h8i9',
    titleId: 'dest-niseko-title',
    descId: 'dest-niseko-desc',
  },
  {
    id: 'chamonix',
    name: '霞慕尼',
    country: '法国',
    rating: 4.7,
    temp: '-10°C',
    difficulty: '高级',
    difficultyColor: 'bg-red-500',
    description: '阿尔卑斯山最高峰勃朗峰的门户，极限滑雪者的圣地，拥有世界上最具挑战性的越野滑雪地形。',
    imgId: 'dest-chamonix-img-j1k2l3',
    titleId: 'dest-chamonix-title',
    descId: 'dest-chamonix-desc',
  },
  {
    id: 'whistler',
    name: '惠斯勒',
    country: '加拿大不列颠哥伦比亚',
    rating: 4.8,
    temp: '-9°C',
    difficulty: '全级别',
    difficultyColor: 'bg-sky-blue',
    description: '北美最大的滑雪度假区，两座山峰相连，超过200条滑道，是家庭和专业滑雪者的双重首选。',
    imgId: 'dest-whistler-img-m4n5o6',
    titleId: 'dest-whistler-title',
    descId: 'dest-whistler-desc',
  },
  {
    id: 'verbier',
    name: '韦尔比耶',
    country: '瑞士',
    rating: 4.7,
    temp: '-11°C',
    difficulty: '高级',
    difficultyColor: 'bg-red-500',
    description: '欧洲四谷滑雪区的核心，以壮观的越野地形和活跃的夜生活著称，是高级滑雪者的终极挑战。',
    imgId: 'dest-verbier-img-p7q8r9',
    titleId: 'dest-verbier-title',
    descId: 'dest-verbier-desc',
  },
];

export default function Destinations() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="destinations" ref={containerRef} className="bg-deep-navy py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-sky-blue text-sm font-semibold uppercase tracking-widest mb-3">
            全球精选
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-snow-white mb-4">
            顶级滑雪目的地
          </h2>
          <p className="text-glacier text-lg max-w-2xl mx-auto">
            从阿尔卑斯山的经典雪道到北海道的梦幻粉雪，为您精选全球最值得一去的滑雪胜地
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {destinations.map((dest) => (
            <article
              key={dest.id}
              className="group bg-frost rounded-2xl overflow-hidden border border-white/10 hover:border-sky-blue/40 transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-black/40"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  alt={dest.name}
                  data-strk-img-id={dest.imgId}
                  data-strk-img={`[${dest.descId}] [${dest.titleId}] skiing mountain resort`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-frost/80 to-transparent" />
                <span className={`absolute top-3 right-3 ${dest.difficultyColor} text-snow-white text-xs font-bold px-3 py-1 rounded-full`}>
                  {dest.difficulty}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 id={dest.titleId} className="text-xl font-bold text-snow-white">
                      {dest.name}
                    </h3>
                    <div className="flex items-center gap-1 text-glacier text-sm mt-0.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{dest.country}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-sky-blue/10 border border-sky-blue/30 px-2.5 py-1 rounded-full">
                    <Star className="w-3.5 h-3.5 text-sky-blue fill-sky-blue" />
                    <span className="text-sky-blue text-sm font-bold">{dest.rating}</span>
                  </div>
                </div>

                <p id={dest.descId} className="text-glacier text-sm leading-relaxed mb-4">
                  {dest.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-glacier text-sm">
                    <Thermometer className="w-4 h-4 text-sky-blue" />
                    <span>平均气温 {dest.temp}</span>
                  </div>
                  <button className="text-sky-blue text-sm font-semibold hover:text-blue-400 transition-colors">
                    查看详情 →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

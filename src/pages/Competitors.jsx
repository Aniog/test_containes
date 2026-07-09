import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Trophy, MapPin, Star, Search } from 'lucide-react';

const competitors = [
  {
    id: 'comp-zhang-wei',
    name: '张伟',
    dog: '黑影',
    breed: '德国牧羊犬',
    city: '北京',
    specialty: '服从训练',
    rank: 1,
    wins: 12,
    desc: '张伟与德国牧羊犬黑影，全国服从训练冠军，12次冠军',
    imgId: 'comp-img-zhang-wei-mm1nn2',
    titleId: 'comp-zhang-wei-title',
    descId: 'comp-zhang-wei-desc',
  },
  {
    id: 'comp-li-xiaomei',
    name: '李晓梅',
    dog: '闪电',
    breed: '边境牧羊犬',
    city: '上海',
    specialty: '敏捷障碍',
    rank: 2,
    wins: 9,
    desc: '李晓梅与边境牧羊犬闪电，敏捷障碍全国亚军，9次冠军',
    imgId: 'comp-img-li-xiaomei-oo3pp4',
    titleId: 'comp-li-xiaomei-title',
    descId: 'comp-li-xiaomei-desc',
  },
  {
    id: 'comp-wang-jianguo',
    name: '王建国',
    dog: '雷霆',
    breed: '马林诺斯',
    city: '广州',
    specialty: '护卫工作犬',
    rank: 1,
    wins: 7,
    desc: '王建国与马林诺斯雷霆，护卫工作犬全国冠军，7次冠军',
    imgId: 'comp-img-wang-jianguo-qq5rr6',
    titleId: 'comp-wang-jianguo-title',
    descId: 'comp-wang-jianguo-desc',
  },
  {
    id: 'comp-chen-fang',
    name: '陈芳',
    dog: '星辰',
    breed: '金毛寻回犬',
    city: '成都',
    specialty: '服从训练',
    rank: 3,
    wins: 5,
    desc: '陈芳与金毛寻回犬星辰，服从训练季军，5次冠军',
    imgId: 'comp-img-chen-fang-ss7tt8',
    titleId: 'comp-chen-fang-title',
    descId: 'comp-chen-fang-desc',
  },
  {
    id: 'comp-liu-yang',
    name: '刘洋',
    dog: '疾风',
    breed: '杰克罗素梗',
    city: '杭州',
    specialty: '敏捷障碍',
    rank: 2,
    wins: 8,
    desc: '刘洋与杰克罗素梗疾风，敏捷障碍亚军，8次冠军',
    imgId: 'comp-img-liu-yang-uu9vv0',
    titleId: 'comp-liu-yang-title',
    descId: 'comp-liu-yang-desc',
  },
  {
    id: 'comp-zhao-min',
    name: '赵敏',
    dog: '勇士',
    breed: '罗威纳',
    city: '武汉',
    specialty: '护卫工作犬',
    rank: 2,
    wins: 6,
    desc: '赵敏与罗威纳勇士，护卫工作犬亚军，6次冠军',
    imgId: 'comp-img-zhao-min-ww1xx2',
    titleId: 'comp-zhao-min-title',
    descId: 'comp-zhao-min-desc',
  },
];

const specialties = ['全部', '服从训练', '敏捷障碍', '护卫工作犬'];

const rankBadge = (rank) => {
  if (rank === 1) return '🥇 冠军';
  if (rank === 2) return '🥈 亚军';
  if (rank === 3) return '🥉 季军';
  return `第${rank}名`;
};

export default function Competitors() {
  const [activeSpec, setActiveSpec] = useState('全部');
  const [search, setSearch] = useState('');
  const containerRef = useRef(null);

  const filtered = competitors.filter((c) => {
    const matchSpec = activeSpec === '全部' || c.specialty === activeSpec;
    const matchSearch =
      !search ||
      c.name.includes(search) ||
      c.dog.includes(search) ||
      c.breed.includes(search) ||
      c.city.includes(search);
    return matchSpec && matchSearch;
  });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeSpec, search]);

  return (
    <div className="bg-cream min-h-screen" ref={containerRef}>
      {/* Header */}
      <div className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">选手风采</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-2 mb-3">
            优秀选手展示
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            认识来自全国各地的顶尖驯犬师，了解他们与爱犬的精彩故事。
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="搜索选手、犬只或城市..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy bg-white text-gray-800"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {specialties.map((s) => (
              <button
                key={s}
                onClick={() => setActiveSpec(s)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeSpec === s
                    ? 'bg-navy text-white'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-navy hover:text-navy'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 group"
            >
              <div className="relative h-52 bg-gray-100 overflow-hidden">
                <img
                  alt={`${c.name} 与 ${c.dog}`}
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.descId}] [${c.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                  <div>
                    <p className="text-white font-bold text-lg leading-tight">{c.name}</p>
                    <p className="text-gold text-sm">{c.dog} · {c.breed}</p>
                  </div>
                  <span className="bg-gold text-navy text-xs font-bold px-2 py-1 rounded-lg">
                    {rankBadge(c.rank)}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <p id={c.titleId} className="hidden">{c.name} {c.dog} {c.specialty}</p>
                <p id={c.descId} className="hidden">{c.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-sm text-gray-500">
                    <MapPin className="w-3.5 h-3.5 text-gold" />
                    <span>{c.city}</span>
                  </div>
                  <span className="text-xs bg-navy/10 text-navy font-medium px-2.5 py-1 rounded-full">
                    {c.specialty}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 mt-3 text-sm text-gray-600">
                  <Trophy className="w-4 h-4 text-gold" />
                  <span>累计获得 <strong className="text-navy">{c.wins}</strong> 次冠军</span>
                </div>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.min(c.wins, 5) ? 'text-gold fill-gold' : 'text-gray-200 fill-gray-200'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <Trophy className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p className="text-lg">未找到匹配的选手</p>
          </div>
        )}
      </div>
    </div>
  );
}

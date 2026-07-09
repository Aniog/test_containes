import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Calendar, MapPin, Users, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const allEvents = [
  {
    id: 'ev-bj-aug',
    title: '2026 北京春季服从训练锦标赛',
    date: '2026年8月15-17日',
    location: '北京国家体育场',
    category: '服从训练',
    status: 'upcoming',
    participants: 120,
    desc: '北京春季服从训练锦标赛，犬只服从训练竞技比赛',
    imgId: 'ev-img-bj-aug-aa1bb2',
    titleId: 'ev-bj-aug-title',
    descId: 'ev-bj-aug-desc',
  },
  {
    id: 'ev-sh-sep',
    title: '2026 上海敏捷障碍公开赛',
    date: '2026年9月3-5日',
    location: '上海虹桥体育中心',
    category: '敏捷障碍',
    status: 'open',
    participants: 200,
    desc: '上海敏捷障碍公开赛，速度与精准的极致挑战',
    imgId: 'ev-img-sh-sep-cc3dd4',
    titleId: 'ev-sh-sep-title',
    descId: 'ev-sh-sep-desc',
  },
  {
    id: 'ev-gz-oct',
    title: '2026 广州护卫犬工作赛',
    date: '2026年10月20-22日',
    location: '广州天河体育中心',
    category: '护卫工作犬',
    status: 'open',
    participants: 80,
    desc: '广州护卫犬工作赛，展示犬只保护与追踪能力',
    imgId: 'ev-img-gz-oct-ee5ff6',
    titleId: 'ev-gz-oct-title',
    descId: 'ev-gz-oct-desc',
  },
  {
    id: 'ev-cd-nov',
    title: '2026 成都幼犬培育锦标赛',
    date: '2026年11月8-9日',
    location: '成都双流体育公园',
    category: '幼犬培育',
    status: 'open',
    participants: 60,
    desc: '成都幼犬培育锦标赛，发掘潜力新星',
    imgId: 'ev-img-cd-nov-gg7hh8',
    titleId: 'ev-cd-nov-title',
    descId: 'ev-cd-nov-desc',
  },
  {
    id: 'ev-hz-dec',
    title: '2026 杭州国际邀请赛',
    date: '2026年12月5-7日',
    location: '杭州奥体中心',
    category: '国际邀请赛',
    status: 'upcoming',
    participants: 150,
    desc: '杭州国际邀请赛，亚太地区顶尖选手同台竞技',
    imgId: 'ev-img-hz-dec-ii9jj0',
    titleId: 'ev-hz-dec-title',
    descId: 'ev-hz-dec-desc',
  },
  {
    id: 'ev-wh-jan',
    title: '2027 武汉冬季团队协作赛',
    date: '2027年1月15-16日',
    location: '武汉体育中心',
    category: '团队协作',
    status: 'upcoming',
    participants: 90,
    desc: '武汉冬季团队协作赛，多犬协同完成任务',
    imgId: 'ev-img-wh-jan-kk1ll2',
    titleId: 'ev-wh-jan-title',
    descId: 'ev-wh-jan-desc',
  },
];

const categories = ['全部', '服从训练', '敏捷障碍', '护卫工作犬', '幼犬培育', '国际邀请赛', '团队协作'];

const statusMap = {
  upcoming: { label: '即将开始', cls: 'bg-blue-100 text-blue-800' },
  open: { label: '报名中', cls: 'bg-green-100 text-green-800' },
  closed: { label: '已截止', cls: 'bg-gray-100 text-gray-600' },
};

export default function Events() {
  const [activeCategory, setActiveCategory] = useState('全部');
  const containerRef = useRef(null);

  const filtered = activeCategory === '全部'
    ? allEvents
    : allEvents.filter((e) => e.category === activeCategory);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory]);

  return (
    <div className="bg-cream min-h-screen" ref={containerRef}>
      {/* Page Header */}
      <div className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">赛事日历</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-2 mb-3">
            2026–2027 赛事日历
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            浏览全年赛事安排，选择适合您的项目，提前规划参赛行程。
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter */}
        <div className="flex items-center gap-2 mb-8 flex-wrap">
          <Filter className="w-4 h-4 text-gray-500" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-navy text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-navy hover:text-navy'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((event) => {
            const status = statusMap[event.status];
            return (
              <div
                key={event.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 group flex flex-col"
              >
                <div className="relative h-44 bg-gray-100 overflow-hidden">
                  <img
                    alt={event.title}
                    data-strk-img-id={event.imgId}
                    data-strk-img={`[${event.descId}] [${event.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${status.cls}`}>
                    {status.label}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-xs font-medium text-gold bg-gold/10 px-2 py-0.5 rounded-full w-fit">
                    {event.category}
                  </span>
                  <h3 id={event.titleId} className="text-base font-bold text-navy mt-2 mb-3 leading-snug">
                    {event.title}
                  </h3>
                  <p id={event.descId} className="hidden">{event.desc}</p>
                  <div className="space-y-1.5 text-sm text-gray-500 flex-1">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gold flex-shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gold flex-shrink-0" />
                      <span>预计 {event.participants} 名选手参赛</span>
                    </div>
                  </div>
                  <Link
                    to="/register"
                    className="mt-5 block text-center bg-navy text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-gold hover:text-navy transition-colors"
                  >
                    {event.status === 'closed' ? '查看详情' : '立即报名'}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

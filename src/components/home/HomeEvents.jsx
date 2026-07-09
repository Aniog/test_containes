import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const upcomingEvents = [
  {
    id: 'event-beijing-2026',
    title: '2026 北京春季服从训练锦标赛',
    date: '2026年8月15日',
    location: '北京国家体育场',
    category: '服从训练',
    status: 'upcoming',
    imgId: 'event-img-beijing-d4e5f6',
    titleId: 'event-beijing-title',
    descId: 'event-beijing-desc',
    desc: '北京春季服从训练锦标赛，犬只服从训练竞技',
  },
  {
    id: 'event-shanghai-2026',
    title: '2026 上海敏捷障碍公开赛',
    date: '2026年9月3日',
    location: '上海虹桥体育中心',
    category: '敏捷障碍',
    status: 'upcoming',
    imgId: 'event-img-shanghai-g7h8i9',
    titleId: 'event-shanghai-title',
    descId: 'event-shanghai-desc',
    desc: '上海敏捷障碍公开赛，速度与精准的极致挑战',
  },
  {
    id: 'event-guangzhou-2026',
    title: '2026 广州护卫犬工作赛',
    date: '2026年10月20日',
    location: '广州天河体育中心',
    category: '护卫工作犬',
    status: 'open',
    imgId: 'event-img-guangzhou-j1k2l3',
    titleId: 'event-guangzhou-title',
    descId: 'event-guangzhou-desc',
    desc: '广州护卫犬工作赛，展示犬只保护与追踪能力',
  },
];

const statusMap = {
  upcoming: { label: '即将开始', cls: 'bg-blue-100 text-blue-800' },
  open: { label: '报名中', cls: 'bg-green-100 text-green-800' },
  closed: { label: '已截止', cls: 'bg-gray-100 text-gray-600' },
};

export default function HomeEvents() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="bg-white py-20 md:py-28" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">近期赛事</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">
              即将举办的赛事
            </h2>
          </div>
          <Link
            to="/events"
            className="inline-flex items-center gap-1 text-navy font-semibold hover:text-gold transition-colors text-sm"
          >
            查看全部赛事 <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => {
            const status = statusMap[event.status];
            return (
              <div
                key={event.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 group"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
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
                <div className="p-5">
                  <span className="text-xs font-medium text-gold bg-gold/10 px-2 py-0.5 rounded-full">
                    {event.category}
                  </span>
                  <h3 id={event.titleId} className="text-base font-bold text-navy mt-2 mb-3 leading-snug">
                    {event.title}
                  </h3>
                  <p id={event.descId} className="hidden">{event.desc}</p>
                  <div className="space-y-1.5 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gold flex-shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <Link
                    to="/register"
                    className="mt-4 block text-center bg-navy text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-gold hover:text-navy transition-colors"
                  >
                    立即报名
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

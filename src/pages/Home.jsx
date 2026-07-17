import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Play, TrendingUp, Users, Trophy } from 'lucide-react';

const stats = [
  { label: '支持球队', value: '30', icon: Trophy },
  { label: '注册球迷', value: '10M+', icon: Users },
  { label: '赛季场次', value: '1230', icon: TrendingUp },
];

const featuredGames = [
  {
    id: 'game-1',
    home: '湖人队',
    away: '勇士队',
    homeScore: 112,
    awayScore: 108,
    date: '2026-07-15',
    status: '已结束',
    titleId: 'game-1-title',
    descId: 'game-1-desc',
    imgId: 'game-hero-1-a3f9b2',
  },
  {
    id: 'game-2',
    home: '凯尔特人',
    away: '热火队',
    homeScore: 98,
    awayScore: 105,
    date: '2026-07-16',
    status: '已结束',
    titleId: 'game-2-title',
    descId: 'game-2-desc',
    imgId: 'game-hero-2-c7d1e4',
  },
  {
    id: 'game-3',
    home: '雄鹿队',
    away: '篮网队',
    homeScore: null,
    awayScore: null,
    date: '2026-07-18',
    status: '即将开始',
    titleId: 'game-3-title',
    descId: 'game-3-desc',
    imgId: 'game-hero-3-f2a8c5',
  },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          data-strk-bg-id="hero-bg-main-9f3a1c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-950/70 via-gray-950/50 to-gray-950" />
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-1.5 text-orange-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            2025-26 NBA 赛季进行中
          </div>
          <h1 id="hero-title" className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
            感受篮球的<br />
            <span className="text-orange-500">激情与荣耀</span>
          </h1>
          <p id="hero-subtitle" className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            NBA专题为您带来最新赛事资讯、球队动态、球星数据和精彩集锦
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/teams"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg px-8 py-3.5 transition-colors"
            >
              探索球队 <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/players"
              className="inline-flex items-center gap-2 border border-gray-600 hover:border-orange-500 text-gray-200 hover:text-orange-500 font-semibold rounded-lg px-8 py-3.5 transition-colors"
            >
              <Play className="w-4 h-4" /> 球星阵容
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 md:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map(({ label, value, icon: Icon }) => (
            <div key={label} className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex items-center gap-4 hover:border-orange-500/40 transition-colors">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                <Icon className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <div className="text-3xl font-black text-white">{value}</div>
                <div className="text-gray-400 text-sm">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white">近期赛事</h2>
              <p className="text-gray-400 mt-1">最新比赛结果与即将到来的赛程</p>
            </div>
            <Link to="/news" className="text-orange-500 hover:text-orange-400 text-sm font-medium flex items-center gap-1 transition-colors">
              查看全部 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredGames.map(game => (
              <div key={game.id} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/5 transition-all group">
                <div className="relative h-40 overflow-hidden">
                  <img
                    alt={`${game.home} vs ${game.away}`}
                    data-strk-img-id={game.imgId}
                    data-strk-img={`[${game.descId}] [${game.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                  <span className={`absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full ${
                    game.status === '即将开始'
                      ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                      : 'bg-green-500/20 text-green-400 border border-green-500/30'
                  }`}>
                    {game.status}
                  </span>
                </div>
                <div className="p-5">
                  <p id={game.descId} className="text-gray-400 text-xs mb-3">{game.date} · NBA常规赛</p>
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div id={game.titleId} className="text-white font-bold text-sm">{game.home}</div>
                      {game.homeScore !== null && (
                        <div className="text-2xl font-black text-white mt-1">{game.homeScore}</div>
                      )}
                    </div>
                    <div className="text-gray-500 font-bold text-sm">VS</div>
                    <div className="text-center">
                      <div className="text-white font-bold text-sm">{game.away}</div>
                      {game.awayScore !== null && (
                        <div className="text-2xl font-black text-white mt-1">{game.awayScore}</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-8 md:p-12 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -right-10 -top-10 w-64 h-64 bg-white rounded-full" />
              <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-white rounded-full" />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-2">加入我们的球迷社区</h3>
                <p className="text-orange-100">注册成为访客，获取专属内容和赛事提醒</p>
              </div>
              <Link
                to="/visitors"
                className="shrink-0 bg-white text-orange-600 hover:bg-orange-50 font-bold rounded-lg px-8 py-3.5 transition-colors"
              >
                立即加入
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

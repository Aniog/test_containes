import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronRight, Calendar, Users } from 'lucide-react';

export default function HomeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-main-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 text-gold text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            2026 全国驯犬锦标赛 · 报名进行中
          </div>

          <h1
            id="hero-title"
            className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight mb-4"
          >
            驯犬赛事
            <span className="text-gold block">专业平台</span>
          </h1>

          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8"
          >
            汇聚全国顶尖驯犬师，举办高水准竞技赛事。
            服从训练、敏捷障碍、护卫工作犬——多项目同台竞技，见证人犬默契的极致展现。
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition-all shadow-lg hover:shadow-gold/30 text-base"
            >
              立即报名参赛
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              to="/events"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-navy transition-all text-base"
            >
              <Calendar className="w-5 h-5" />
              查看赛事日历
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12">
            {[
              { value: '2,400+', label: '注册选手' },
              { value: '36', label: '年度赛事' },
              { value: '18', label: '参赛城市' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-extrabold text-gold">{stat.value}</div>
                <div className="text-sm text-gray-300 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

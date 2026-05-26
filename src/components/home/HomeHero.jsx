import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/Button';
import { Trophy, Zap, Shield } from 'lucide-react';

export default function HomeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden min-h-[560px] md:min-h-[680px] flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-red-950"
        data-strk-bg-id="hero-bg-wc2026"
        data-strk-bg="[hero-title-main] [hero-subtitle-main] FIFA World Cup 2026 stadium crowd celebration"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-1/2 w-96 h-96 bg-red-700/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 w-full">
        <div className="max-w-2xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 rounded-full px-4 py-1.5 mb-6">
            <Trophy className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-semibold">FIFA World Cup 2026™ 官方授权</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            <span id="hero-title-main">世界杯周边</span>
            <br />
            <span className="text-yellow-400">官方商城</span>
          </h1>
          <p id="hero-subtitle-main" className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
            收藏2026年美加墨世界杯专属周边，球衣、奖杯、收藏品一站购齐。
            为您最爱的球队加油助威！
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Link to="/products">
              <Button variant="primary" size="lg">
                立即选购
              </Button>
            </Link>
            <Link to="/products?badge=limited">
              <Button variant="secondary" size="lg">
                限量珍藏
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6">
            {[
              { icon: <Shield className="w-4 h-4" />, text: "官方授权正品" },
              { icon: <Zap className="w-4 h-4" />, text: "全球极速配送" },
              { icon: <Trophy className="w-4 h-4" />, text: "限量珍藏版本" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                <span className="text-yellow-400">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute top-8 right-8 hidden lg:flex flex-col items-center justify-center w-28 h-28 bg-yellow-400 rounded-full shadow-2xl rotate-12">
        <span className="text-slate-900 font-extrabold text-2xl leading-none">2026</span>
        <span className="text-slate-900 font-bold text-xs">FIFA™</span>
        <span className="text-slate-900 font-bold text-xs">WORLD CUP</span>
      </div>
    </section>
  );
}

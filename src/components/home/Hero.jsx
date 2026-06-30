import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Heart, Star } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-pink-50 via-white to-rose-50 pt-16"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-pink-200 rounded-full opacity-30 blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-200 rounded-full opacity-25 blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="flex flex-col gap-6">
          <span className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 text-sm font-semibold px-4 py-1.5 rounded-full w-fit">
            <Star className="w-4 h-4 fill-pink-400 text-pink-400" />
            全新美丽体验
          </span>

          <h1
            id="hero-title"
            className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight tracking-tight"
          >
            绽放你的
            <span className="text-pink-500"> 独特魅力</span>
          </h1>

          <p
            id="hero-subtitle"
            className="text-lg text-gray-500 leading-relaxed max-w-md"
          >
            专业美容护肤品牌，用天然成分呵护你的肌肤。让每一天都充满自信与光彩，展现最美的自己。
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold px-7 py-3 rounded-full transition-all shadow-lg shadow-pink-200 hover:shadow-pink-300"
            >
              探索服务
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 border-2 border-pink-300 text-pink-600 hover:bg-pink-50 font-semibold px-7 py-3 rounded-full transition-all"
            >
              了解更多
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-4 pt-6 border-t border-pink-100">
            {[
              { value: '10K+', label: '满意客户' },
              { value: '98%', label: '好评率' },
              { value: '5年', label: '专业经验' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl font-extrabold text-pink-500">{stat.value}</span>
                <span className="text-sm text-gray-500">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-sm">
            {/* Floating badge */}
            <div className="absolute -top-4 -left-4 z-20 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2 border border-pink-100">
              <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
              <div>
                <p className="text-xs text-gray-500">本月新品</p>
                <p className="text-sm font-bold text-gray-800">玫瑰精华液</p>
              </div>
            </div>

            {/* Main image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-pink-200 border-4 border-white aspect-[3/4]">
              <img
                data-strk-img-id="hero-main-img-a1b2c3"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="美容护肤"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating rating */}
            <div className="absolute -bottom-4 -right-4 z-20 bg-white rounded-2xl shadow-lg px-4 py-3 border border-pink-100">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xs font-semibold text-gray-700">4.9 / 5.0 评分</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

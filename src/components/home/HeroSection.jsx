import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Droplets, Leaf, Sun } from 'lucide-react';

const features = [
  {
    icon: <Droplets className="w-6 h-6 text-water-500" />,
    title: '无土栽培',
    desc: '以水为介质，无需泥土，干净整洁',
  },
  {
    icon: <Leaf className="w-6 h-6 text-leaf-600" />,
    title: '生长迅速',
    desc: '营养直达根部，生长速度比土培快 30%',
  },
  {
    icon: <Sun className="w-6 h-6 text-soil-500" />,
    title: '四季皆宜',
    desc: '室内种植，不受季节限制，全年绿意盎然',
  },
];

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="bg-gradient-to-br from-leaf-50 via-water-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <span className="inline-block bg-leaf-100 text-leaf-700 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              🌿 纯净水培 · 自然生长
            </span>
            <h1
              id="hero-title"
              className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              让植物在<br />
              <span className="text-leaf-600">水中绽放</span>
            </h1>
            <p
              id="hero-subtitle"
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              探索水培植物的奇妙世界——无需泥土，只需清水与阳光，
              在家中打造属于你的绿色生态角落。
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#gallery"
                className="bg-leaf-600 hover:bg-leaf-700 text-white font-semibold px-7 py-3 rounded-full transition-colors"
              >
                探索植物图鉴
              </a>
              <a
                href="#guide"
                className="border-2 border-leaf-600 text-leaf-600 hover:bg-leaf-50 font-semibold px-7 py-3 rounded-full transition-colors"
              >
                种植指南
              </a>
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-4 mt-10">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 shadow-sm"
                >
                  {f.icon}
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{f.title}</p>
                    <p className="text-xs text-gray-500">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-leaf-200 to-water-200 rounded-3xl opacity-30 blur-2xl" />
            <img
              data-strk-img-id="hero-main-img-7f3a2b"
              data-strk-img="[hero-subtitle] [hero-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="水培植物展示"
              className="relative w-full rounded-3xl shadow-xl object-cover"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-5 py-3 flex items-center gap-3">
              <span className="text-3xl">🌱</span>
              <div>
                <p className="text-sm font-bold text-gray-900">50+ 种植物</p>
                <p className="text-xs text-gray-500">精选水培品种</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

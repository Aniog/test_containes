import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown, Shield, Award, Microscope } from 'lucide-react';

const stats = [
  { value: '20+', label: '年行业经验' },
  { value: '500+', label: '产品型号' },
  { value: '50+', label: '国家出口' },
  { value: 'ISO 13485', label: '质量认证' },
];

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (strkImgConfig && Object.keys(strkImgConfig).length > 0) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-blue-950/90 via-blue-900/75 to-blue-800/50" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            <span>国家认证医疗器械制造商</span>
          </div>

          {/* Hidden text refs for image search */}
          <span id="hero-title" className="sr-only">专业医疗器械设备手术室</span>
          <span id="hero-subtitle" className="sr-only">高精度医疗仪器诊断设备</span>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            精准医疗器械
            <br />
            <span className="text-cyan-400">守护生命健康</span>
          </h1>

          <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
            星闪医疗器械有限公司专注于高精度医疗设备的研发与制造，
            为全球医疗机构提供可靠、精准、创新的医疗解决方案。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#products"
              className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-lg font-semibold text-base transition-all hover:shadow-lg hover:shadow-cyan-500/30 text-center"
            >
              探索产品系列
            </a>
            <a
              href="#contact"
              className="border-2 border-white/60 hover:border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-base transition-all text-center"
            >
              联系我们
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <a href="#about" className="text-white/60 hover:text-white transition-colors">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

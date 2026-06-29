import { useEffect, useRef } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-green-100 to-emerald-200" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-green-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-20">
        {/* Text content */}
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            <span id="hero-badge">自然 · 健康 · 可持续</span>
          </div>

          <h1 id="hero-title" className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-green-900 leading-tight mb-6">
            拥抱<span className="text-green-500">绿色</span><br />生活方式
          </h1>

          <p id="hero-subtitle" className="text-lg md:text-xl text-green-700 leading-relaxed mb-8 max-w-lg">
            与自然和谐共处，探索可持续的生活方式。我们致力于为您提供最纯净、最环保的生活解决方案。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#features"
              className="bg-green-600 text-white rounded-full px-8 py-3.5 font-semibold text-base hover:bg-green-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center"
            >
              探索更多
            </a>
            <a
              href="#about"
              className="border-2 border-green-600 text-green-700 rounded-full px-8 py-3.5 font-semibold text-base hover:bg-green-50 transition-all text-center"
            >
              了解我们
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-green-400/20 rounded-3xl blur-2xl scale-105" />
            <img
              data-strk-img-id="hero-main-img-7f3b2a"
              data-strk-img="[hero-subtitle] [hero-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="绿色生活"
              className="relative rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#features"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-green-500 animate-bounce"
        aria-label="向下滚动"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Hero;

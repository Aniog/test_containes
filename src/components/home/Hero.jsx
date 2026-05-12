import { useEffect, useRef } from 'react';
import { ArrowRight, Leaf, Wind, Droplets } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-green-950">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-30"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-green-900/90 to-emerald-900/80" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-400/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-green-800/60 border border-green-700/50 text-green-300 text-sm font-medium px-4 py-2 rounded-full mb-8">
            <Leaf className="w-4 h-4" />
            <span>可持续发展 · 绿色未来</span>
          </div>

          {/* Headline */}
          <h1
            id="hero-title"
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6"
          >
            拥抱自然，<br />
            <span className="text-emerald-400">共建绿色</span>地球
          </h1>

          {/* Subtext */}
          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-green-300 leading-relaxed mb-10 max-w-xl"
          >
            我们致力于推动可持续发展，通过创新的绿色解决方案，帮助每一个人为保护地球贡献力量。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-base"
            >
              探索我们的方案
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 border-2 border-green-600 text-green-300 hover:bg-green-800/40 font-semibold px-8 py-4 rounded-xl transition-colors text-base"
            >
              了解更多
            </a>
          </div>

          {/* Mini stats */}
          <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-green-800/50">
            {[
              { icon: Leaf, value: '10万+', label: '棵树木种植' },
              { icon: Wind, value: '50%', label: '碳排放减少' },
              { icon: Droplets, value: '200万', label: '升水资源节约' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg leading-none">{value}</div>
                  <div className="text-green-400 text-sm mt-0.5">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-green-500 animate-bounce">
        <div className="w-0.5 h-8 bg-green-600 rounded-full" />
      </div>
    </section>
  );
};

export default Hero;

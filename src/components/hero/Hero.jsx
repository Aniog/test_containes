import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleScroll = () => {
    const el = document.querySelector('#attractions');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={containerRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-chengdu-dark"
        data-strk-bg-id="hero-bg-chengdu-main-7a3b2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p
          id="hero-eyebrow"
          className="text-chengdu-gold-light text-sm md:text-base font-sans font-medium tracking-[0.3em] uppercase mb-4"
        >
          Welcome to Chengdu
        </p>
        <h1
          id="hero-title"
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
        >
          成都
        </h1>
        <p
          id="hero-subtitle"
          className="font-serif text-xl md:text-3xl text-chengdu-gold-light mb-4 font-medium"
        >
          天府之国 · 休闲之都
        </p>
        <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-10 font-sans leading-relaxed">
          探索这座拥有两千年历史的古城，感受麻辣鲜香的川味美食，
          邂逅憨态可掬的大熊猫，体验悠闲惬意的成都生活。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.querySelector('#attractions')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-chengdu-red hover:bg-chengdu-red-dark text-white font-medium px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            探索成都
          </button>
          <button
            onClick={() => document.querySelector('#food')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white/70 text-white hover:bg-white/10 font-medium px-8 py-3 rounded-full transition-all duration-300"
          >
            品味美食
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="向下滚动"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;

import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-900/80 via-slate-900/70 to-slate-900/80" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <span className="inline-block bg-indigo-500/20 text-indigo-200 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-indigo-400/30">
          Now in public beta
        </span>
        <h1
          id="hero-title"
          className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Build something{' '}
          <span className="text-indigo-400">amazing</span>{' '}
          with us
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          The all-in-one platform that helps teams launch faster, collaborate better,
          and grow without limits.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors no-underline"
          >
            Get in touch <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors border border-white/20 no-underline"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

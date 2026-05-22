import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const PageHero = ({ badge, title, subtitle, bgImgId, bgQuery, titleId, subtitleId }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative pt-32 pb-20 flex items-center overflow-hidden min-h-[340px]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id={bgImgId}
        data-strk-bg={bgQuery}
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1400"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center w-full">
        <span className="inline-block bg-amber-500/20 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
          {badge}
        </span>
        <h1 id={titleId} className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          {title}
        </h1>
        <p id={subtitleId} className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageHero;

import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function PageHero({ eyebrow, title, subtitle, bgId, bgQuery, children }) {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#0B2545] text-white">
      <div
        className="absolute inset-0"
        data-strk-bg-id={bgId}
        data-strk-bg={bgQuery}
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/95 via-[#0B2545]/85 to-[#0B2545]/55" />
      <div className="relative container-x py-20 md:py-28">
        <div className="max-w-3xl">
          {eyebrow && (
            <span className="inline-block uppercase tracking-[0.14em] text-xs font-bold text-[#F0B68A] mb-3">
              {eyebrow}
            </span>
          )}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-base md:text-lg text-[#C7D6EE] leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}

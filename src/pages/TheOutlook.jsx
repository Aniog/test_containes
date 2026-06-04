import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function TheOutlook() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="bg-forest-deep min-h-screen" ref={containerRef}>
      {/* Full-bleed hero image */}
      <section className="relative w-full" style={{ height: '100svh', minHeight: '600px' }}>
        {/* Hidden text for image query */}
        <span id="outlook-title" className="sr-only">Forest Canopy from Above</span>
        <span id="outlook-desc" className="sr-only">Wide-angle aerial view looking down through the dense green canopy of an ancient old-growth forest</span>

        <div
          data-strk-bg-id="outlook-bg-main-7f3a2b"
          data-strk-bg="[outlook-desc] [outlook-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundColor: '#1A2421' }}
        />

        {/* Deep vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/60 via-transparent to-forest-deep/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/30 via-transparent to-forest-deep/30" />

        {/* Centered minimal text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="text-mist-grey text-xs uppercase tracking-[0.4em] font-semibold mb-8">
            From Above
          </p>
          <h1
            className="heading-display text-6xl md:text-8xl xl:text-[9rem] leading-[0.9] text-fog-white"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            The<br />
            <em className="italic">Outlook</em>
          </h1>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <div className="w-px h-12 bg-mist-grey animate-pulse" />
          <span className="text-mist-grey text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        </div>
      </section>

      {/* Minimal text section */}
      <section className="py-32 px-6 md:px-12 max-w-3xl mx-auto text-center">
        <p
          className="text-fog-white text-2xl md:text-3xl leading-relaxed font-light"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          "From above, the forest is a single breathing organism — a sea of green that has outlasted empires."
        </p>
        <div className="mt-12 w-8 border-t border-mist-grey/40 mx-auto" />
        <p className="mt-8 text-mist-grey text-sm uppercase tracking-[0.25em]">
          Old-Growth Canopy — Pacific Northwest
        </p>
      </section>

      {/* Second wide image */}
      <section className="relative w-full" style={{ height: '70vh', minHeight: '400px' }}>
        <span id="outlook-title-2" className="sr-only">Aerial Forest Panorama</span>
        <span id="outlook-desc-2" className="sr-only">Panoramic aerial photograph of an unbroken ancient forest stretching to the horizon, mist rising between the treetops</span>

        <div
          data-strk-bg-id="outlook-bg-second-9c4d1e"
          data-strk-bg="[outlook-desc-2] [outlook-title-2]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundColor: '#243028' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/50 via-transparent to-forest-deep" />
      </section>

      {/* Final minimal statement */}
      <section className="py-32 px-6 md:px-12 max-w-2xl mx-auto text-center">
        <p className="text-mist-grey text-sm uppercase tracking-[0.3em] mb-6">
          Ancient Canopy
        </p>
        <p className="text-mist-light text-base leading-loose">
          These forests have stood for millennia. They ask nothing of us — only that we look, and remember.
        </p>
      </section>
    </div>
  );
}

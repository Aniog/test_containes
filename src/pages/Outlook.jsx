import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Outlook() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-[90vh] flex flex-col">
      {/* The canopy image — full width, commanding presence */}
      <div className="relative w-full overflow-hidden border-b border-canopy-moss/30">
        <img
          alt="Forest canopy from above — an endless sea of green"
          data-strk-img-id="outlook-canopy-9f3a2d"
          data-strk-img={`[outlook-subtitle] [outlook-title]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="1600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-auto block"
        />
      </div>

      {/* Minimal text */}
      <section className="max-w-3xl mx-auto px-6 md:px-12 py-20 md:py-28 flex-1">
        <h1
          id="outlook-title"
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-mist-pale tracking-wide leading-none"
        >
          The Outlook
        </h1>
        <p
          id="outlook-subtitle"
          className="font-body text-lg md:text-xl text-mist italic mt-8 leading-relaxed"
        >
          From above, the canopy stretches toward every horizon — an unbroken
          sea of green that has watched centuries pass in silence. The trees
          do not look up. They do not need to.
        </p>
      </section>
    </div>
  );
}
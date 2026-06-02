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
      {/* Minimal header */}
      <header className="px-6 pt-16 pb-10 border-b border-moss-mid">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-bark-accent text-xs tracking-[0.3em] uppercase font-body mb-4">
            Aerial Perspective
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-black text-fog-white leading-none tracking-wide">
            The Outlook
          </h1>
        </div>
      </header>

      {/* Full-width canopy image */}
      <section className="relative">
        {/* Hidden text for image query */}
        <span id="outlook-title" className="sr-only">Forest canopy from above aerial wide angle view</span>
        <span id="outlook-desc" className="sr-only">A vast old-growth forest canopy seen from above, a sea of green treetops stretching to the horizon under soft light</span>

        <div className="relative w-full overflow-hidden" style={{ height: '75vh', minHeight: '500px' }}>
          <img
            data-strk-img-id="outlook-main-img-7e3f9a"
            data-strk-img="[outlook-desc] [outlook-title]"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Forest canopy from above"
            className="w-full h-full object-cover"
          />
          {/* Subtle top and bottom fade */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, rgba(26,36,33,0.6) 0%, transparent 20%, transparent 75%, rgba(26,36,33,0.9) 100%)',
            }}
          />
        </div>
      </section>

      {/* Minimal text block */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-8 h-0.5 bg-bark-accent mx-auto mb-10" />
          <p className="font-display text-xl md:text-2xl italic text-fog-white leading-loose">
            From above, the forest is a single organism — a breathing, shifting mass of green
            that has outlasted empires.
          </p>
          <div className="w-8 h-0.5 bg-moss-mid mx-auto mt-10" />
        </div>
      </section>

      {/* Second wide image — different angle */}
      <section className="relative border-t border-moss-mid">
        <span id="outlook-title-2" className="sr-only">Aerial forest canopy treetops birds eye view</span>
        <span id="outlook-desc-2" className="sr-only">Looking straight down at a dense forest canopy, a mosaic of tree crowns in deep greens and shadows</span>

        <div className="relative w-full overflow-hidden" style={{ height: '55vh', minHeight: '380px' }}>
          <img
            data-strk-img-id="outlook-second-img-4b8c2d"
            data-strk-img="[outlook-desc-2] [outlook-title-2]"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Forest canopy birds-eye view"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, rgba(26,36,33,0.5) 0%, transparent 30%, transparent 70%, rgba(26,36,33,0.7) 100%)',
            }}
          />
          {/* Overlay text */}
          <div className="absolute bottom-8 right-8 text-right">
            <p className="font-display text-fog-white text-3xl md:text-4xl font-black italic leading-tight">
              Seen from<br />above.
            </p>
          </div>
        </div>
      </section>

      {/* Final minimal statement */}
      <section className="px-6 py-24 border-t border-moss-mid">
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-bark-accent text-xs tracking-[0.3em] uppercase font-body mb-4">
                Coordinates
              </p>
              <p className="font-display text-fog-white text-2xl font-bold">
                48°N — 123°W
              </p>
              <p className="text-mist-grey text-sm font-body mt-2 tracking-wide">
                Pacific Northwest Old-Growth Reserve
              </p>
            </div>
            <div className="border-l border-moss-mid pl-8">
              <p className="text-mist-grey text-sm leading-loose font-body">
                Captured at 1,200 metres altitude during the golden hour of an October morning.
                The canopy below stretched unbroken for forty kilometres in every direction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

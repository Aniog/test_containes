import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { materials } from '@/data/projects';

export default function Materials() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-ma-white min-h-screen">
      {/* Page header */}
      <div className="pt-32 md:pt-40 pb-16 md:pb-20 max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-xs tracking-ultra uppercase text-ma-ash font-light mb-4">
          Craft &amp; Texture
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-light text-ma-ink tracking-wide">
          Materials
        </h1>
        <div className="mt-8 w-12 h-px bg-ma-stone" />
        <p className="mt-8 text-sm text-ma-concrete font-light leading-relaxed max-w-xl">
          Every surface in our work is chosen for its capacity to age, to hold light,
          and to speak of the hands that shaped it.
        </p>
      </div>

      {/* Texture grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-32 md:pb-40">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {materials.map((mat) => (
            <button
              key={mat.id}
              onClick={() => setActive(active?.id === mat.id ? null : mat)}
              className="group relative overflow-hidden aspect-square bg-ma-paper text-left focus:outline-none"
              aria-label={mat.label}
            >
              <img
                data-strk-img-id={mat.imgId}
                data-strk-img={`[mat-label-${mat.id}]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={mat.label}
                className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
              />
              {/* Label overlay */}
              <div className="absolute inset-0 bg-ma-ink/0 group-hover:bg-ma-ink/40 transition-all duration-400 flex items-end">
                <span
                  id={`mat-label-${mat.id}`}
                  className="w-full px-4 py-3 text-xs tracking-widest uppercase text-ma-white font-light
                    translate-y-full group-hover:translate-y-0 transition-transform duration-400"
                >
                  {mat.label}
                </span>
              </div>
              {/* Active ring */}
              {active?.id === mat.id && (
                <div className="absolute inset-0 ring-2 ring-ma-wood pointer-events-none" />
              )}
            </button>
          ))}
        </div>

        {/* Expanded detail panel */}
        {active && (
          <div className="mt-8 border border-ma-stone p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12 bg-ma-paper">
            <div className="md:w-1/3 aspect-square overflow-hidden">
              <img
                data-strk-img-id={`${active.imgId}-detail`}
                data-strk-img={`[mat-detail-label-${active.id}]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={active.label}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-xs tracking-ultra uppercase text-ma-ash font-light mb-3">
                Material Study
              </p>
              <h2
                id={`mat-detail-label-${active.id}`}
                className="font-display text-2xl md:text-3xl font-light text-ma-ink tracking-wide mb-6"
              >
                {active.label}
              </h2>
              <p className="text-sm text-ma-concrete font-light leading-relaxed max-w-md">
                Selected for its texture, its capacity to hold light, and the way it
                changes with time. In our work, this material is never merely a finish —
                it is a presence.
              </p>
              <button
                onClick={() => setActive(null)}
                className="mt-8 self-start text-xs tracking-widest uppercase text-ma-ash hover:text-ma-ink transition-colors duration-400"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Philosophy link */}
      <div className="border-t border-ma-stone bg-ma-paper">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-display text-xl md:text-2xl font-light italic text-ma-concrete tracking-wide max-w-lg">
            "The material is not decoration. It is the argument."
          </p>
          <a
            href="/philosophy"
            className="text-xs tracking-widest uppercase text-ma-ash hover:text-ma-ink transition-colors duration-400 flex items-center gap-3"
          >
            Our Philosophy
            <span className="w-8 h-px bg-current inline-block" />
          </a>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { CAPABILITIES, STATS } from "@/data/site";

const Eyebrow = ({ children }) => (
  <p className="inline-flex items-center gap-3 text-xs font-medium tracking-eyebrow uppercase text-brand-brass">
    <span className="block w-8 h-px bg-brand-brass" />
    {children}
  </p>
);

const Capabilities = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="capabilities"
      ref={containerRef}
      className="bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>What we build into every machine</Eyebrow>
            <h2 className="mt-5 font-display font-semibold text-brand-ink text-3xl md:text-4xl lg:text-5xl leading-[1.1]">
              A folder is only as good as the steel it sits on.
            </h2>
            <p className="mt-5 text-brand-muted text-base lg:text-lg leading-relaxed max-w-md">
              Every ARTITECT machine starts with a stress-relieved welded
              bed, hand-scraped reference surfaces, and direct-drive servos
              on every axis. It is the only way we know how to build a
              machine that will hold geometry across a 30-year service life.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-brand-line pt-10">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-4xl lg:text-5xl font-semibold text-brand-ink">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs tracking-eyebrow uppercase text-brand-muted">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden bg-brand-mist aspect-[4/3] lg:aspect-[5/4] shadow-card">
              <img
                alt="Close-up of an ARTITECT metal folding machine in a precision fabrication shop"
                className="absolute inset-0 w-full h-full object-cover"
                data-strk-img-id="capabilities-img-w4r2t"
                data-strk-img="[capabilities-title] [capabilities-eyebrow] [hero-tagline] [hero-title]"
                data-strk-img-ratio="5x4"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <p
                  id="capabilities-eyebrow"
                  className="text-xs tracking-eyebrow uppercase text-brand-brass"
                >
                  The build
                </p>
                <p
                  id="capabilities-title"
                  className="font-display text-lg"
                >
                  Frame · Drive · Control
                </p>
              </div>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-px bg-brand-line border border-brand-line rounded-2xl overflow-hidden">
              {CAPABILITIES.map((c, i) => (
                <div
                  key={c.title}
                  className="bg-white p-6 lg:p-7"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-display text-sm text-brand-brass">
                      0{i + 1}
                    </span>
                    <span className="block flex-1 h-px bg-brand-line" />
                  </div>
                  <h3 className="mt-4 font-display font-semibold text-brand-ink text-lg">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-muted leading-relaxed">
                    {c.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;

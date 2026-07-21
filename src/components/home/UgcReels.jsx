import { useEffect, useRef } from "react";
import { Play } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Reveal from "@/components/ui/Reveal";

const PLACEHOLDER_SRC =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

const REELS = [
  { id: "morning-light", caption: "Morning light, golden hour", tag: "huggies" },
  { id: "layered-love", caption: "Layered, always", tag: "necklaces" },
  { id: "the-everyday-cuff", caption: "The everyday cuff", tag: "ear cuff" },
  { id: "desk-to-dinner", caption: "Desk to dinner", tag: "drop earrings" },
  { id: "gifted-kept", caption: "Gifted, then kept", tag: "gift set" },
  { id: "second-piercing", caption: "Second piercing energy", tag: "huggie stack" },
];

export default function UgcReels() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="border-y border-line bg-cream py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <Reveal className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
            @velmora.jewels
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-noir md:text-5xl">
            Worn by You
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-taupe">
            Real pieces on real people — tag us to be featured in the reel.
          </p>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 md:mt-14 md:gap-6 md:px-10 lg:justify-center">
          {REELS.map((reel, i) => (
            <div
              key={reel.id}
              className="group relative w-40 shrink-0 snap-start overflow-hidden bg-noir md:w-52"
            >
              <div className="aspect-[9/16]">
                <img
                  data-strk-img-id={`ugc-${reel.id}`}
                  data-strk-img={`[ugc-cap-${reel.id}] gold jewelry worn on ear and neck, candid warm editorial`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="500"
                  src={PLACEHOLDER_SRC}
                  alt={reel.caption}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-95 transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-noir/70 via-transparent to-noir/20" />
              <span className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-noir/40 backdrop-blur-sm">
                <Play size={11} className="ml-0.5 fill-ivory text-ivory" />
              </span>
              <p
                id={`ugc-cap-${reel.id}`}
                className="absolute inset-x-3 bottom-3 font-serif text-sm italic leading-snug text-ivory md:text-base"
              >
                “{reel.caption} — {reel.tag}”
              </p>
              <span className="absolute bottom-3 right-3 hidden text-[9px] uppercase tracking-[0.18em] text-sand/70">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

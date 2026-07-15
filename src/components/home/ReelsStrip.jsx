import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import SmartImage from "@/components/ui/SmartImage";
import Reveal from "@/components/ui/Reveal";
import { REELS } from "@/data/content";

// Horizontal Reels-style strip: 9:16 vertical cards with a serif caption
// overlay on each. Mimics an Instagram Reels strip.
export default function ReelsStrip() {
  const containerRef = useRef(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return undefined;
    return ImageHelper.loadImages(strkImgConfig, node);
  }, []);

  return (
    <section ref={containerRef} className="bg-cream py-20 md:py-28">
      <div className="container-editorial">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
            <div>
              <p className="eyebrow text-gold-deep">@velmora.fine</p>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl text-ink leading-tight">
                Worn <em className="italic font-normal text-mauve">by you</em>
              </h2>
            </div>
            <p className="text-sm text-mauve max-w-xs">
              Real customers, real light. Follow along on Instagram.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <div
          className="no-scrollbar overflow-x-auto"
          style={{ scrollSnapType: "x mandatory" }}
        >
          <ul
            className="flex gap-4 md:gap-6 px-6 md:px-12 lg:px-[max(48px,calc((100vw-1280px)/2))] pb-4"
            style={{ scrollPaddingLeft: "24px" }}
          >
            {REELS.map((reel, i) => (
              <li
                key={reel.id}
                className="flex-shrink-0 w-[58vw] sm:w-[44vw] md:w-[260px] lg:w-[300px]"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="relative aspect-[9/16] overflow-hidden bg-ink">
                  <SmartImage
                    alt={reel.caption}
                    query={reel.query}
                    ratio="3x4"
                    width={600}
                    imgId={reel.id}
                    className="w-full h-full"
                    imgClassName="transition-transform duration-700 ease-out hover:scale-105"
                    sizes="(min-width: 1024px) 300px, 50vw"
                  />
                  {/* Subtle bottom gradient for caption legibility */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-2/5"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(26,23,20,0) 0%, rgba(26,23,20,0.7) 100%)",
                    }}
                  />
                  <p
                    id={`${reel.id}-caption`}
                    className="absolute left-4 right-4 bottom-4 font-serif italic text-xl md:text-2xl text-ivory leading-tight"
                  >
                    {reel.caption}
                  </p>
                  <span className="absolute top-3 right-3 text-[10px] uppercase tracking-eyebrow text-ivory/80">
                    Reel 0{i + 1}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

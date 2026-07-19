import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import { Play } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";

const REELS = [
  {
    id: "reel-1",
    imgId: "ugc-reel-1",
    caption: "morning light, amber lace",
    user: "@lina.vesta",
  },
  {
    id: "reel-2",
    imgId: "ugc-reel-2",
    caption: "sphere huggies, every day",
    user: "@maya.kaya",
  },
  {
    id: "reel-3",
    imgId: "ugc-reel-3",
    caption: "the heirloom, finally",
    user: "@noor.studios",
  },
  {
    id: "reel-4",
    imgId: "ugc-reel-4",
    caption: "flora at the studio",
    user: "@ada.wears",
  },
  {
    id: "reel-5",
    imgId: "ugc-reel-5",
    caption: "aura cuff, dinner out",
    user: "@june.etc",
  },
  {
    id: "reel-6",
    imgId: "ugc-reel-6",
    caption: "the everyday stack",
    user: "@ria.sundays",
  },
  {
    id: "reel-7",
    imgId: "ugc-reel-7",
    caption: "lace drops, gallery night",
    user: "@eve.in.jewelry",
  },
];

export default function ReelRow() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section
      aria-label="Worn by you"
      className="bg-ink py-20 md:py-28"
    >
      <div className="container-7xl">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="eyebrow text-gold-soft">◆ Worn by You</p>
            <h2
              id="section-reels-title"
              className="display-1 text-ivory mt-3 text-4xl md:text-5xl"
            >
              On Them, In the Light
            </h2>
          </div>
          <p className="hidden md:block text-xs text-ivory/60 max-w-xs text-right">
            Tag <span className="text-gold-soft">@velmora</span> to be
            featured.
          </p>
        </div>
      </div>

      <div
        ref={ref}
        className="overflow-x-auto no-scrollbar pl-5 md:pl-10 pr-5 md:pr-10"
      >
        <ul className="flex gap-4 md:gap-5 snap-x snap-mandatory">
          {REELS.map((reel) => (
            <li
              key={reel.id}
              className="snap-start shrink-0 w-[200px] md:w-[240px]"
            >
              <div className="relative w-full overflow-hidden bg-stone/30 rounded-sm">
                <div
                  className="relative w-full"
                  style={{ paddingTop: "177.7778%" }}
                >
                  <img
                    alt={reel.caption}
                    data-strk-img-id={reel.imgId}
                    data-strk-img={`[reel-caption-${reel.id}] [reel-user-${reel.id}] [section-reels-title]`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="600"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  {/* Soft top-to-bottom overlay so caption is always readable */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/85"
                  />
                  <div className="absolute top-3 left-3 inline-flex items-center justify-center w-8 h-8 rounded-full bg-ivory/90 text-ink">
                    <Play
                      className="w-3.5 h-3.5"
                      strokeWidth={1.75}
                      fill="currentColor"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4 text-ivory">
                    <p
                      id={`reel-caption-${reel.id}`}
                      className="font-serif text-xl italic leading-snug"
                    >
                      {reel.caption}
                    </p>
                    <p
                      id={`reel-user-${reel.id}`}
                      className="mt-1 text-[10px] uppercase tracking-eyebrow text-ivory/70"
                    >
                      {reel.user}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

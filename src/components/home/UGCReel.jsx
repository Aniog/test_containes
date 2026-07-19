import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Play } from "lucide-react";

const reels = [
  {
    id: "reel-ear-stack",
    title: "Ear Stack Edit",
    caption: "Ear Stack Edit",
    imgId: "reel-ear-stack-img",
  },
  {
    id: "reel-flora",
    title: "Flora Unveiled",
    caption: "Flora Unveiled",
    imgId: "reel-flora-img",
  },
  {
    id: "reel-mirror",
    title: "Morning Light",
    caption: "Morning Light",
    imgId: "reel-mirror-img",
  },
  {
    id: "reel-bridal",
    title: "For the Bride",
    caption: "For the Bride",
    imgId: "reel-bridal-img",
  },
  {
    id: "reel-everyday",
    title: "Everyday Gold",
    caption: "Everyday Gold",
    imgId: "reel-everyday-img",
  },
  {
    id: "reel-evening",
    title: "After Hours",
    caption: "After Hours",
    imgId: "reel-evening-img",
  },
  {
    id: "reel-velmora",
    title: "Behind the Brand",
    caption: "Behind the Brand",
    imgId: "reel-velmora-img",
  },
];

export default function UGCReel() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return undefined;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="bg-cream py-20 md:py-28">
      <div className="container-x mb-10 md:mb-14">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <span className="eyebrow mb-3 block">@velmora.fine</span>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05]">
              Worn by You
            </h2>
          </div>
          <p className="text-mocha max-w-sm">
            Real pieces, real women. Tag <em className="text-espresso">#velmorawomen</em> for a chance to be featured.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto scrollbar-none">
        <div className="flex gap-4 md:gap-5 px-6 md:px-10 pb-4">
          {reels.map((reel) => (
            <article
              key={reel.id}
              className="relative flex-shrink-0 w-[220px] md:w-[260px] aspect-[9/16] overflow-hidden bg-espresso group"
            >
              <img
                alt={reel.caption}
                data-strk-img-id={reel.imgId}
                data-strk-img={`[reel-${reel.id}-caption] [ugc-section-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-105"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(31,26,23,0) 50%, rgba(31,26,23,0.7) 100%)",
                }}
              />
              <div className="absolute top-4 right-4 w-9 h-9 grid place-items-center rounded-full bg-ivory/20 backdrop-blur-sm border border-ivory/30 text-ivory">
                <Play className="w-3.5 h-3.5 ml-0.5" fill="currentColor" strokeWidth={0} />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p
                  id={`reel-${reel.id}-caption`}
                  className="font-serif text-2xl text-ivory italic leading-tight"
                >
                  {reel.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <p
        id="ugc-section-title"
        className="container-x mt-2 text-[11px] uppercase tracking-wider-3 text-mocha"
      >
        Scroll the Edit
      </p>
    </section>
  );
}

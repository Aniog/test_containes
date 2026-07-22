import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import SectionHeader from "@/components/ui/SectionHeader";

const reels = [
  {
    id: "reel-1",
    handle: "@isabellem",
    caption: "Morning stack — three pieces, infinite quiet",
  },
  {
    id: "reel-2",
    handle: "@noa.studio",
    caption: "A garden in gold",
  },
  {
    id: "reel-3",
    handle: "@maren.k",
    caption: "The huggie that lives on my ear",
  },
  {
    id: "reel-4",
    handle: "@theoline",
    caption: "Layered, never loud",
  },
  {
    id: "reel-5",
    handle: "@aria.notes",
    caption: "Heirloom in the making",
  },
  {
    id: "reel-6",
    handle: "@sienna.r",
    caption: "Soft light, gold leaf",
  },
];

export default function UgcReels() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="bg-ivory">
      <div className="container-editorial pt-20 md:pt-28 pb-12 md:pb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="eyebrow mb-4">Worn by you</p>
            <h2 className="display-2 text-balance">#WornInVelmora</h2>
          </div>
          <p className="text-sm text-ink-muted font-sans max-w-sm">
            Tag <span className="text-ink">@velmora</span> on Instagram for a chance
            to be featured. Your stories, in our world.
          </p>
        </div>
      </div>

      <div
        ref={ref}
        className="pl-5 md:pl-10 pb-20 md:pb-28 overflow-x-auto no-scrollbar"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <ul className="flex gap-4 md:gap-5 pr-5 md:pr-10">
          {reels.map((r) => (
            <li
              key={r.id}
              className="shrink-0 w-[220px] md:w-[260px]"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="relative aspect-[9/16] overflow-hidden bg-sand group">
                <img
                  alt={`${r.handle} wearing Velmora`}
                  data-strk-img-id={`reel-${r.id}`}
                  data-strk-img={`[reel-${r.id}-caption] [reel-${r.id}-handle] velmora fine jewelry`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <p
                    id={`reel-${r.id}-caption`}
                    className="font-serif text-cream text-lg md:text-xl italic leading-snug text-balance"
                  >
                    "{r.caption}"
                  </p>
                  <p
                    id={`reel-${r.id}-handle`}
                    className="mt-3 text-[10px] uppercase tracking-widest-2 text-cream/75"
                  >
                    {r.handle}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

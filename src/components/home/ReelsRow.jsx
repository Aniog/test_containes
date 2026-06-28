import { Play } from "lucide-react";
import { REELS } from "@/data/products";
import { IMG_PLACEHOLDER } from "@/lib/placeholder";

export default function ReelsRow() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="mb-10 md:mb-14 max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-champagne mb-3">
            @velmora
          </p>
          <h2
            id="reels-section-title"
            className="font-serif font-light text-4xl md:text-5xl text-ink leading-[1.1]"
          >
            Styled by you.
          </h2>
          <p
            id="reels-section-subtitle"
            className="mt-4 text-taupe text-base md:text-lg"
          >
            Tag #VelmoraEveryday to be featured.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <ul className="flex gap-4 md:gap-5 px-5 md:px-10 pb-2 max-w-[1400px] mx-auto">
          {REELS.map((reel) => (
            <li
              key={reel.id}
              className="relative flex-shrink-0 w-[180px] sm:w-[220px] md:w-[260px] aspect-[9/16] overflow-hidden bg-sand group cursor-pointer"
            >
              <img
                alt={reel.caption}
                data-strk-img-id={`velmora-reel-${reel.id}-7q3m`}
                data-strk-img={`[reel-${reel.id}-caption] [reels-section-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src={IMG_PLACEHOLDER}
                className="w-full h-full object-cover bg-sand group-hover:scale-[1.04] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent pointer-events-none" />
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-ivory/90 flex items-center justify-center">
                <Play
                  size={11}
                  strokeWidth={2}
                  className="text-ink translate-x-[1px]"
                  fill="currentColor"
                />
              </div>
              <div className="absolute bottom-0 inset-x-0 p-4">
                <p
                  id={`reel-${reel.id}-caption`}
                  className="font-serif text-ivory text-lg md:text-xl leading-tight"
                >
                  {reel.caption}
                </p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-ivory/70 mt-1">
                  @velmora
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

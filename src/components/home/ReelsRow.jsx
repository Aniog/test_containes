import { Play } from "lucide-react";
import { REELS } from "@/data/catalog";

export default function ReelsRow() {
  return (
    <section className="py-20 md:py-28 bg-onyx text-ivory">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="font-sans text-[11px] uppercase tracking-[0.32em] text-champagne">
              Worn by you
            </span>
            <h2 className="mt-3 font-serif font-light text-4xl md:text-5xl tracking-tight">
              On the Reel
            </h2>
          </div>
          <p className="font-sans text-sm text-ivory/70 max-w-sm">
            Tag <span className="text-champagne">@velmora</span> to be featured.
            A peek at how the collection lives in the wild.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto no-scrollbar -mx-px">
        <div className="flex gap-4 md:gap-6 px-6 md:px-10 pb-2 min-w-min">
          {REELS.map((reel) => (
            <article
              key={reel.id}
              className="relative shrink-0 w-[220px] sm:w-[260px] md:w-[300px] aspect-[9/16] overflow-hidden bg-espresso group cursor-pointer"
            >
              <img
                alt={reel.caption}
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.captionId}] ${reel.query}`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/85 via-onyx/10 to-transparent" />
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-ivory/15 backdrop-blur flex items-center justify-center">
                <Play size={14} strokeWidth={1.5} className="text-ivory ml-0.5" />
              </div>
              <p
                id={reel.captionId}
                className="absolute bottom-5 left-5 right-5 font-serif text-lg md:text-xl text-ivory leading-tight"
              >
                {reel.caption}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Play } from "lucide-react";
import { REELS } from "@/data/products";

export default function UgcReels() {
  return (
    <section className="bg-[#1A1410] text-[#F7F2EA] py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10 mb-10 md:mb-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#D9BE85] mb-4">
              @velmora · As Worn
            </p>
            <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl tracking-tight">
              Seen on you.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-[#F7F2EA]/70 leading-relaxed">
            Tag <span className="text-[#D9BE85]">@velmora</span> for a chance to be
            featured. We re-post our favorites every Sunday.
          </p>
        </div>
      </div>

      <div className="pl-5 md:pl-10">
        <div className="flex gap-4 md:gap-5 overflow-x-auto no-scrollbar pb-4 pr-5 md:pr-10 snap-x snap-mandatory">
          {REELS.map((r) => (
            <article
              key={r.id}
              className="group relative shrink-0 w-[62%] sm:w-[44%] md:w-[28%] lg:w-[22%] aspect-[9/16] overflow-hidden bg-[#3D332A] snap-start"
            >
              <img
                alt={r.caption}
                data-strk-img-id={r.imgId}
                data-strk-img={`[${r.captionId}] ${r.query}`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              {/* Bottom gradient for caption legibility */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#1A1410]/85 via-[#1A1410]/30 to-transparent pointer-events-none" />

              {/* Top: play icon */}
              <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#F7F2EA]/15 backdrop-blur-sm flex items-center justify-center">
                <Play className="w-3.5 h-3.5 text-[#F7F2EA] fill-[#F7F2EA]" />
              </div>

              {/* Caption */}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p
                  id={r.captionId}
                  className="font-serif italic text-lg md:text-xl leading-snug text-[#F7F2EA] max-w-[85%]"
                >
                  "{r.caption}"
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-[#D9BE85]">
                  @velmora
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

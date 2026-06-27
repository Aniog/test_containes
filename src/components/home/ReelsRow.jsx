import { Play } from "lucide-react";
import { reels } from "@/data/products";

export default function ReelsRow() {
  return (
    <section className="bg-bone py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-[11px] tracking-[0.35em] uppercase text-gold mb-4">
              @velmora
            </p>
            <h2 className="font-serif font-light text-4xl md:text-5xl leading-[1.05] tracking-tight">
              Worn by you.
            </h2>
          </div>
          <a
            href="https://instagram.com"
            className="text-[12px] tracking-[0.3em] uppercase text-ink hover:text-gold border-b border-ink/30 hover:border-gold pb-1.5 transition-all self-start md:self-end"
          >
            Follow @velmora
          </a>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar px-5 md:px-10 pb-4 snap-x snap-mandatory">
          {reels.map((reel) => (
            <article
              key={reel.id}
              className="relative shrink-0 w-[68vw] sm:w-[44vw] md:w-[24vw] lg:w-[18vw] aspect-[9/16] bg-ink overflow-hidden snap-start group"
            >
              <img
                alt={reel.caption}
                data-strk-img-id={reel.imgId}
                data-strk-img={`[reel-caption-${reel.id}] vertical portrait jewelry on model`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="700"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-cream/15 backdrop-blur-sm flex items-center justify-center text-cream">
                <Play size={14} strokeWidth={1.5} fill="currentColor" />
              </div>
              <p
                id={`reel-caption-${reel.id}`}
                className="absolute left-4 right-4 bottom-4 text-cream font-serif text-lg leading-tight"
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

import React from "react";
import { Play } from "lucide-react";
import { REELS } from "@/data/products";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ReelsRow() {
  return (
    <section className="bg-bone py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between gap-6 mb-10 md:mb-14">
          <SectionHeading
            eyebrow="@velmora · Reels"
            title="As worn by you"
            align="left"
            className="md:max-w-xl"
          >
            Real moments, tagged from our community. Tap any reel to see the look.
          </SectionHeading>
        </div>
      </div>

      {/* Edge-to-edge horizontal scroller */}
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-5 px-5 md:px-8 pb-2">
          {REELS.map((reel) => (
            <article
              key={reel.id}
              className="relative flex-shrink-0 w-[220px] md:w-[260px] aspect-[9/16] bg-ink overflow-hidden group cursor-pointer"
            >
              <img
                alt={reel.caption}
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.captionId}] gold demi-fine jewelry on neck or ear vertical editorial portrait`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
                loading="lazy"
              />
              {/* gradient overlay for caption legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-ink/20" />

              {/* play hint */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-cream/15 backdrop-blur-sm flex items-center justify-center text-cream">
                <Play size={14} strokeWidth={1.5} fill="currentColor" />
              </div>

              {/* caption */}
              <p
                id={reel.captionId}
                className="absolute bottom-5 left-5 right-5 font-serif italic text-cream text-lg md:text-xl leading-tight"
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

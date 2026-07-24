import React from "react";
import { Play } from "lucide-react";
import { reels } from "@/data/products";
import StrkImage from "@/components/ui/StrkImage";
import Reveal from "@/components/ui/Reveal";

export default function ReelsStrip() {
  return (
    <section className="overflow-hidden bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mb-10 flex items-end justify-between gap-6 md:mb-14">
          <div>
            <p className="eyebrow text-gold-soft">@velmora.jewelry</p>
            <h2 className="mt-3 font-serif text-4xl font-light text-ivory md:text-5xl">
              Worn &amp; Loved
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm font-light leading-relaxed text-muted-dark md:block">
            Real moments from our community — gold on skin, caught in warm light.
          </p>
        </Reveal>
      </div>
      <Reveal delay={150}>
        <div className="no-scrollbar flex gap-4 overflow-x-auto px-4 pb-2 md:gap-5 md:px-8">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="group relative w-[190px] shrink-0 cursor-pointer overflow-hidden bg-ink-soft md:w-[230px]"
            >
              <div className="aspect-[9/16]">
                <StrkImage
                  imgId={reel.imgId}
                  query={`[${reel.captionId}] gold jewelry worn on ear and neck, editorial reel`}
                  ratio="9x16"
                  width="500"
                  alt={reel.caption}
                  className="transition-transform duration-700 ease-luxe group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-ink/20" />
              <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-ink/50 backdrop-blur-sm">
                <Play className="h-3 w-3 fill-ivory text-ivory" />
              </span>
              <p
                id={reel.captionId}
                className="absolute inset-x-4 bottom-4 font-serif text-lg font-light italic leading-snug text-ivory"
              >
                {reel.caption}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

import React, { useRef } from "react";
import { Play } from "lucide-react";

const CLIPS = [
  { id: "ugc-1", label: "Everyday stack" },
  { id: "ugc-2", label: "Date night glow" },
  { id: "ugc-3", label: "Morning light" },
  { id: "ugc-4", label: "Gift moment" },
  { id: "ugc-5", label: "Layered look" },
  { id: "ugc-6", label: "Soft gold" },
];

export default function UGCReel() {
  const scrollRef = useRef(null);

  return (
    <section className="bg-velmora-dark py-16 text-velmora-cream md:py-24">
      <div className="mx-auto mb-8 flex max-w-7xl items-end justify-between px-6">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-velmora-gold">
            @velmorajewelry
          </p>
          <h2 className="font-serif text-3xl font-medium md:text-4xl">
            Styled by You
          </h2>
        </div>
        <a
          href="#"
          className="hidden text-xs font-medium uppercase tracking-[0.16em] underline-offset-4 transition-colors hover:text-velmora-gold hover:underline md:block"
        >
          Follow along
        </a>
      </div>

      <div
        ref={scrollRef}
        className="scrollbar-hide flex gap-4 overflow-x-auto px-6 pb-4 md:gap-5"
      >
        {CLIPS.map((clip) => (
          <article
            key={clip.id}
            className="group relative w-[180px] shrink-0 md:w-[220px]"
          >
            <div className="relative aspect-[9/16] overflow-hidden bg-velmora-charcoal">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={clip.label}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/50" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-velmora-cream/90 text-velmora-dark backdrop-blur-sm">
                  <Play className="h-5 w-5 fill-current" />
                </div>
              </div>
            </div>
            <p
              id={`${clip.id}-label`}
              className="absolute bottom-4 left-4 right-4 font-serif text-base italic text-velmora-cream drop-shadow-md"
            >
              {clip.label}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

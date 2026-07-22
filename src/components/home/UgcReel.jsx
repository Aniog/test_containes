import React from "react";
import { StrkImage } from "@/components/ui/StrkMedia";
import SectionHeading from "@/components/ui/SectionHeading";

// Reel-style UGC strip: vertical 9:16 cards, horizontal scroll, serif caption
// overlay — mimics an Instagram Reels row.
const REELS = [
  {
    id: "reel-1",
    caption: "Golden hour, always",
    query: "gold huggie earrings worn on ear, close up, warm golden hour light",
  },
  {
    id: "reel-2",
    caption: "Layered & loved",
    query: "layered gold necklaces on neck, elegant, warm skin tones",
  },
  {
    id: "reel-3",
    caption: "The everyday cuff",
    query: "gold ear cuff on model, minimal, soft warm light",
  },
  {
    id: "reel-4",
    caption: "A little heirloom",
    query: "delicate gold jewelry detail, elegant hand and neck, warm",
  },
  {
    id: "reel-5",
    caption: "Worn on repeat",
    query: "gold drop earrings worn, elegant portrait, warm editorial light",
  },
  {
    id: "reel-6",
    caption: "Quiet luxury",
    query: "gold necklace on collarbone, minimal luxury, soft warm light",
  },
];

export default function UgcReel() {
  return (
    <section className="border-y border-line bg-sand py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="@velmora"
          title="Worn by You"
          className="reveal"
        />
        <p className="reveal mx-auto mt-4 max-w-md text-center text-sm leading-relaxed text-inkSoft">
          Real moments from our community. Tag @velmora to be featured.
        </p>
      </div>

      <div className="mt-12">
        <div className="scrollbar-none flex gap-4 overflow-x-auto px-5 pb-2 sm:px-8 lg:px-12">
          {REELS.map((reel, i) => {
            const capId = `${reel.id}-cap`;
            return (
              <figure
                key={reel.id}
                className="group reveal relative w-[180px] flex-shrink-0 overflow-hidden rounded-sm sm:w-[210px] md:w-[230px]"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <StrkImage
                  imgId={`ugc-${reel.id}`}
                  query={`[${capId}] ${reel.query}`}
                  ratio="9x16"
                  width={460}
                  alt={reel.caption}
                  className="aspect-[9/16] w-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <figcaption
                  id={capId}
                  className="absolute inset-x-0 bottom-0 p-4 font-display text-lg italic leading-snug text-cream"
                >
                  {reel.caption}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

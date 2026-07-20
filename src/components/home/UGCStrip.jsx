import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const UGCStrip = () => {
  const cards = [
    { id: 1, caption: "Golden hour glow", ref: "ear jewelry model" },
    { id: 2, caption: "Daily essentials", ref: "neck jewelry model" },
    { id: 3, caption: "Stacking season", ref: "multiple ear piercings" },
    { id: 4, caption: "Timeless elegance", ref: "jewelry close up" },
    { id: 5, caption: "The perfect gift", ref: "jewelry box" },
    { id: 6, caption: "Curated collection", ref: "gold necklace model" },
  ];

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground text-center mb-4">
          Worn & Loved
        </h2>
        <p className="text-3xl font-serif text-center">
          In Her Element
        </p>
      </div>

      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex w-max space-x-4 px-6">
          {cards.map((card) => (
            <div 
              key={card.id} 
              className="relative w-[280px] aspect-[9/16] bg-secondary overflow-hidden group"
            >
              <div 
                className="absolute inset-0 z-0 group-hover:scale-105 transition-transform duration-700"
                data-strk-bg-id={`ugc-bg-${card.id}`}
                data-strk-bg={`${card.ref}`}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="600"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <p className="text-white font-serif italic text-lg whitespace-normal leading-tight opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {card.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>
    </section>
  );
};

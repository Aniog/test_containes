import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Section from "@/components/ui/Section";
import { UgcPortraitArt } from "@/components/illustrations/JewelryArt";
import { PHOTO } from "@/data/products";

const CAPTIONS = [
  { caption: "Layered every day", handle: "@amelia" },
  { caption: "The huggies that stay", handle: "@rosa" },
  { caption: "Slow morning light", handle: "@noor" },
  { caption: "For the ceremony", handle: "@ines" },
  { caption: "Stacked, never doubled", handle: "@june" },
  { caption: "Worn with linen", handle: "@maren" },
  { caption: "The heirloom edit", handle: "@cleo" },
  { caption: "Soft, not sparkly", handle: "@sasha" },
];

const ReelCard = ({ item, index }) => {
  const photoKey = `ugc${(index % 8) + 1}`;
  const photo = PHOTO[photoKey];
  return (
    <article className="snap-start shrink-0 w-[200px] sm:w-[230px] md:w-[260px] aspect-[9/16] relative overflow-hidden bg-mocha group">
      {photo ? (
        <img
          src={photo}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      ) : null}
      <div className="absolute inset-0">
        <UgcPortraitArt variant={index} />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(27,23,20,0) 30%, rgba(27,23,20,0.6) 80%, rgba(27,23,20,0.85) 100%)",
        }}
      />
      {/* Caption block */}
      <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 text-ivory">
        <p className="font-serif text-2xl md:text-3xl leading-tight mb-1">
          {item.caption}
        </p>
        <p className="font-sans text-[10px] uppercase tracking-eyebrow text-ivory/70">
          {item.handle}
        </p>
      </div>
      {/* Reel play indicator (decorative) */}
      <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-ivory/15 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <Play size={12} strokeWidth={1.5} className="text-ivory ml-0.5" fill="currentColor" />
      </div>
    </article>
  );
};

const UgcReel = () => {
  const scrollerRef = useRef(null);

  const scrollBy = (dir) => {
    const node = scrollerRef.current;
    if (!node) return;
    const amount = node.clientWidth * 0.8;
    node.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <Section tone="ink" size="lg" className="!py-20 md:!py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="font-sans text-[10px] uppercase tracking-eyebrow text-ivory/60 mb-3">
              As worn by
            </p>
            <h2 className="font-serif text-4xl md:text-6xl text-ivory leading-[1.05]">
              The Velmora community
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => scrollBy(-1)}
              className="w-10 h-10 border border-ivory/20 text-ivory/80 hover:bg-ivory hover:text-ink transition-colors flex items-center justify-center"
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => scrollBy(1)}
              className="w-10 h-10 border border-ivory/20 text-ivory/80 hover:bg-ivory hover:text-ink transition-colors flex items-center justify-center"
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>
        <div
          ref={scrollerRef}
          className="no-scrollbar flex gap-4 md:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 -mx-6 md:-mx-10 px-6 md:px-10"
        >
          {CAPTIONS.map((item, i) => (
            <ReelCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default UgcReel;

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ugcItems } from "@/data/products";

export default function UGCReels() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 280;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 sm:py-20 bg-charcoal overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-end justify-between mb-8 sm:mb-10">
          <div>
            <p className="text-xs tracking-mega-wide uppercase text-gold mb-2 font-sans font-medium">
              #VelmoraStyle
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white">
              Styled by You
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable reel strip */}
      <div
        ref={scrollRef}
        className="flex gap-4 px-4 sm:px-6 lg:px-8 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {/* Left spacer for alignment */}
        <div className="flex-shrink-0 w-0 lg:w-[calc((100vw-1400px)/2)]" />

        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[200px] sm:w-[240px] aspect-[9/16] relative overflow-hidden group cursor-pointer"
            style={{ scrollSnapAlign: "start" }}
          >
            {/* Image */}
            <div
              data-strk-img-id={item.id}
              data-strk-img={item.imageQuery}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              className="absolute inset-0 bg-espresso"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gold/15" />
              </div>
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-serif text-sm sm:text-base text-white italic leading-snug">
                {item.caption}
              </p>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}

        {/* Right spacer */}
        <div className="flex-shrink-0 w-4" />
      </div>
    </section>
  );
}

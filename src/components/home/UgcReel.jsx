import { useRef } from "react";
import { UGC_ITEMS } from "@/data/products";

export function UgcReel() {
  const scrollRef = useRef(null);

  return (
    <section className="bg-parchment py-16">
      <div className="mx-auto mb-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.22em] text-gold">
          Styled by You
        </p>
        <h2 className="font-serif text-3xl font-light sm:text-4xl">
          #VelmoraWomen
        </h2>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-4 pb-4 sm:gap-6 sm:px-6 lg:px-8 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {UGC_ITEMS.map((item) => (
          <div
            key={item.id}
            className="group relative shrink-0 cursor-pointer"
          >
            <div className="relative h-[360px] w-[200px] overflow-hidden rounded-lg sm:h-[420px] sm:w-[240px]">
              <img
                src={item.image}
                alt={item.caption}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-serif text-lg italic text-white">
                  {item.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { useRef } from "react";
import { useImageLoader } from "@/hooks/useImageLoader";
import { ugcItems } from "@/data/products";

export function UGCReel() {
  const containerRef = useRef(null);
  useImageLoader(containerRef, []);

  return (
    <section className="bg-parchment py-16 md:py-24" ref={containerRef}>
      <div className="mx-auto mb-10 max-w-7xl px-4 md:px-8 lg:px-12">
        <p className="mb-2 text-xs uppercase tracking-[0.25em] text-gold">
          @velmorafine
        </p>
        <h2 className="font-serif text-3xl text-espresso md:text-4xl">
          Styled by You
        </h2>
      </div>

      <div className="hide-scrollbar flex gap-4 overflow-x-auto px-4 pb-4 md:gap-6 md:px-8 lg:px-12">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="group relative aspect-[9/16] w-52 shrink-0 overflow-hidden rounded-sm bg-espresso md:w-64"
          >
            <img
              data-strk-img-id={item.id}
              data-strk-img={`[${item.id}-caption]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
            <p
              id={`${item.id}-caption`}
              className="absolute bottom-5 left-5 right-5 font-serif text-lg italic text-ivory"
            >
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

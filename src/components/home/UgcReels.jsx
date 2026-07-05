import React from "react";
import { ugcReels } from "../../data/products";

export default function UgcReels() {
  return (
    <section className="py-16 lg:py-24 bg-[hsl(var(--secondary))]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-[0.05em]">
            As Seen On You
          </h2>
          <div className="w-12 h-[1px] bg-[#b68860] mx-auto mt-4" />
          <p className="mt-4 font-sans text-sm text-[hsl(var(--muted-foreground))] max-w-md mx-auto">
            Real women, real moments — tag <span className="italic">@velmora</span> to be featured.
          </p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto no-scrollbar pb-4">
        <div className="flex gap-4 px-6 lg:px-8 min-w-max">
          {ugcReels.map((reel) => (
            <div
              key={reel.id}
              className="relative w-44 md:w-52 aspect-[9/16] bg-[hsl(var(--muted))] flex-shrink-0 overflow-hidden group cursor-pointer"
            >
              <img
                src={reel.image}
                alt={reel.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white/90 leading-snug italic">
                {reel.caption}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
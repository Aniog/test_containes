import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ugcItems } from "@/data/products";

function UGCCard({ item }) {
  return (
    <div className="flex-shrink-0 w-44 md:w-52 relative overflow-hidden group cursor-pointer">
      {/* 9:16 aspect ratio container */}
      <div className="relative" style={{ paddingBottom: "177.78%" }}>
        <img
          data-strk-img-id={item.imgId}
          data-strk-img={`[${item.descId}] [${item.titleId}]`}
          data-strk-img-ratio="9x16"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={item.caption}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/70 via-transparent to-transparent" />

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p
            id={item.titleId}
            className="font-cormorant text-sm italic text-velmora-text-light leading-snug"
          >
            {item.caption}
          </p>
        </div>

        {/* Hidden desc for image query */}
        <span id={item.descId} className="hidden">{item.description}</span>
      </div>
    </div>
  );
}

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-velmora-linen py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-manrope text-xs tracking-widest-xl uppercase text-velmora-gold mb-3">
              As Worn
            </p>
            <h2 className="font-cormorant text-3xl lg:text-4xl font-light text-velmora-obsidian">
              The Velmora Edit
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 font-manrope text-xs tracking-widest-md uppercase text-velmora-text-mid hover:text-velmora-gold transition-colors duration-200"
          >
            Follow @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="pl-6 lg:pl-12">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
          {ugcItems.map((item) => (
            <UGCCard key={item.id} item={item} />
          ))}
          {/* Repeat for visual fullness */}
          {ugcItems.slice(0, 3).map((item) => (
            <UGCCard key={`${item.id}-dup`} item={{ ...item, imgId: `${item.imgId}-dup`, titleId: `${item.titleId}-dup`, descId: `${item.descId}-dup` }} />
          ))}
        </div>
      </div>
    </section>
  );
}

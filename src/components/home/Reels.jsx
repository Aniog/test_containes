import React, { useEffect, useRef } from "react";
import { Instagram } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { reels } from "@/data/products";

export default function Reels() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-ivory py-20 md:py-28"
      aria-labelledby="reels-title"
    >
      <div className="mx-auto max-w-editorial px-5 sm:px-8 lg:px-12 mb-10 md:mb-12 flex items-end justify-between">
        <div>
          <p className="eyebrow">Worn By You</p>
          <h2
            id="reels-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso mt-3"
          >
            Styled in the Wild
          </h2>
          <p
            id="reels-subtitle"
            className="mt-4 text-sm md:text-base text-ash max-w-md leading-relaxed"
          >
            Real women, real light, real outfits. Tag{" "}
            <span className="text-espresso">@velmora</span> for a chance to be
            featured.
          </p>
        </div>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 text-[12px] tracking-widest2 uppercase text-espresso hover:text-gold transition"
        >
          <Instagram size={16} strokeWidth={1.5} />
          Follow Us
        </a>
      </div>

      <div className="overflow-x-auto no-scrollbar pl-5 sm:pl-8 lg:pl-12 pr-5 sm:pr-8 lg:pr-12">
        <ul className="flex gap-4 md:gap-6 snap-x snap-mandatory">
          {reels.map((reel) => (
            <li
              key={reel.id}
              className="relative flex-shrink-0 w-[200px] sm:w-[230px] md:w-[260px] aspect-[9/16] snap-start bg-sand overflow-hidden group"
            >
              <img
                alt={reel.caption}
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.captionId}] [${reel.titleId}] Velmora gold jewelry worn by model close-up ear neck editorial`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-espresso/80" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-ivory">
                <p
                  className="font-serif text-lg leading-snug"
                  id={reel.captionId}
                >
                  {reel.caption}
                </p>
                <p
                  className="mt-1 text-[10px] tracking-widest2 uppercase text-ivory/80"
                  id={reel.titleId}
                >
                  {reel.handle}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

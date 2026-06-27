import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { UGC_REELS } from "@/data/products";
import { PLACEHOLDER_SVG } from "@/lib/utils";
import { Play } from "lucide-react";

export default function UgcReel() {
  return (
    <section className="py-20 md:py-28 bg-velmora-ivory">
      <div className="max-w-[1400px] mx-auto">
        <div className="px-5 md:px-10 lg:px-16 mb-10 md:mb-14">
          <SectionHeading
            align="center"
            eyebrow="Worn by Velmora"
            title="As Seen on You"
            description="Tag #VelmoraOnYou for a chance to be featured."
          />
        </div>

        <div className="velmora-scroll-x overflow-x-auto">
          <ul className="flex gap-4 md:gap-6 px-5 md:px-10 lg:px-16 pb-4 snap-x snap-mandatory">
            {UGC_REELS.map((reel) => (
              <li
                key={reel.id}
                className="snap-start flex-shrink-0 w-[220px] md:w-[260px] lg:w-[280px]"
              >
                <div className="relative aspect-[9/16] overflow-hidden bg-velmora-bone group cursor-pointer">
                  <img
                    alt={reel.caption}
                    data-strk-img-id={reel.imgId}
                    data-strk-img={reel.q}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="500"
                    src={PLACEHOLDER_SVG}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/70 via-velmora-espresso/10 to-transparent" />

                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-velmora-cream/20 backdrop-blur-sm flex items-center justify-center">
                    <Play size={12} strokeWidth={1.5} className="text-velmora-cream fill-velmora-cream ml-0.5" />
                  </div>

                  <p
                    id={reel.titleId}
                    className="absolute bottom-5 left-5 right-5 font-serif italic text-velmora-cream text-lg md:text-xl leading-snug"
                  >
                    "{reel.caption}"
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";


const cardClasses =
  "relative flex-shrink-0 w-[220px] md:w-[280px] aspect-[9/16] overflow-hidden group";
const imgClasses =
  "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105";

export function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3">@velmorafine</p>
        <h2 className="font-serif text-3xl md:text-4xl text-espresso">Styled by You</h2>
      </div>

      <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 md:px-8 pb-4">
        <div className={cardClasses}>
          <img
            data-strk-img-id="ugc-lily-g"
            data-strk-img="gold jewelry earring necklace quiet luxury styled"
            data-strk-img-ratio="9x16"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Styled by @lily.g"
            className={imgClasses}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
            <p className="text-xs uppercase tracking-widest text-gold mb-1">@lily.g</p>
            <p className="font-serif text-lg md:text-xl italic">quiet luxury</p>
          </div>
        </div>

        <div className={cardClasses}>
          <img
            data-strk-img-id="ugc-amara-style"
            data-strk-img="gold jewelry daily wear earring huggie styled"
            data-strk-img-ratio="9x16"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Styled by @amara.style"
            className={imgClasses}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
            <p className="text-xs uppercase tracking-widest text-gold mb-1">@amara.style</p>
            <p className="font-serif text-lg md:text-xl italic">daily gold</p>
          </div>
        </div>

        <div className={cardClasses}>
          <img
            data-strk-img-id="ugc-nina-j"
            data-strk-img="gold jewelry stacked rings earrings layered styled"
            data-strk-img-ratio="9x16"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Styled by @nina.j"
            className={imgClasses}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
            <p className="text-xs uppercase tracking-widest text-gold mb-1">@nina.j</p>
            <p className="font-serif text-lg md:text-xl italic">stacked fine</p>
          </div>
        </div>

        <div className={cardClasses}>
          <img
            data-strk-img-id="ugc-cleo-t"
            data-strk-img="gold jewelry evening earrings necklace styled"
            data-strk-img-ratio="9x16"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Styled by @cleo.t"
            className={imgClasses}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
            <p className="text-xs uppercase tracking-widest text-gold mb-1">@cleo.t</p>
            <p className="font-serif text-lg md:text-xl italic">evening glow</p>
          </div>
        </div>

        <div className={cardClasses}>
          <img
            data-strk-img-id="ugc-mira-elle"
            data-strk-img="gold jewelry gift box earrings necklace styled"
            data-strk-img-ratio="9x16"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Styled by @mira.elle"
            className={imgClasses}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
            <p className="text-xs uppercase tracking-widest text-gold mb-1">@mira.elle</p>
            <p className="font-serif text-lg md:text-xl italic">gift to me</p>
          </div>
        </div>
      </div>
    </section>
  );
}

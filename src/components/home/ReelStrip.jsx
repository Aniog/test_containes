import { useRef } from "react";
import { ugcReels } from "../../data/products";
import { useEffect } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../../strk-img-config.json";
import { Play } from "lucide-react";

export default function ReelStrip() {
  const sectionRef = useRef(null);
  useEffect(() => { return ImageHelper.loadImages(strkImgConfig, sectionRef.current); }, []);;

  return (
    <section
      ref={sectionRef}
      className="bg-champagne py-20 md:py-24 border-y border-sand"
      aria-labelledby="ugc-title"
    >
      <div className="container-velmora mb-8 md:mb-10">
        <p className="eyebrow">From the community</p>
        <div className="mt-3 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2
            id="ugc-title"
            className="heading-display text-3xl md:text-4xl"
          >
            #WornWithVelmora
          </h2>
          <p className="font-sans text-sm text-ink-soft max-w-md">
            Tag <span className="text-espresso">@velmora.jewelry</span> for a
            chance to be featured.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <ul className="flex gap-4 md:gap-6 px-5 md:px-8 lg:px-12 pb-2">
          {ugcReels.map((reel) => (
            <li
              key={reel.id}
              className="relative flex-shrink-0 w-[60vw] sm:w-[260px] md:w-[240px] aspect-[9/16] bg-espresso overflow-hidden group"
            >
              <img
                alt={reel.caption}
                data-strk-img-id={`reel-${reel.id}`}
                data-strk-img={reel.image}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-espresso/80" />
              {/* Play cue (visual only — not a real video) */}
              <span className="absolute top-4 right-4 w-9 h-9 grid place-items-center bg-ivory/10 backdrop-blur border border-ivory/30 text-ivory">
                <Play className="h-3.5 w-3.5" strokeWidth={1.5} fill="currentColor" />
              </span>
              <p
                id={reel.captionId}
                className="absolute left-5 right-5 bottom-5 font-serif text-2xl text-ivory leading-tight"
              >
                {reel.caption}
              </p>
            </li>
          ))}
          {/* Spacer so the last card doesn't sit flush against the edge */}
          <li aria-hidden="true" className="flex-shrink-0 w-1" />
        </ul>
      </div>
    </section>
  );
}

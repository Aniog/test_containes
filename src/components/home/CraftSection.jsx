import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function CraftSection() {
  const ref = useRef(null);
  useEffect(() => ImageHelper.loadImages(strkImgConfig, ref.current), []);

  return (
    <section ref={ref} className="bg-bone py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <div className="aspect-[4/5] bg-mist overflow-hidden order-2 lg:order-1">
          <img
            alt="ARTITECT engineer fitting a folding beam"
            className="w-full h-full object-cover"
            data-strk-img-id="craft-image-3a91be"
            data-strk-img="[craft-desc] [craft-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-[10px] uppercase tracking-[0.3em] text-brass mb-5">
            The Workshop
          </p>
          <h2
            id="craft-title"
            className="font-serif text-4xl md:text-5xl font-light text-ink leading-tight"
          >
            Hand-built by people who{" "}
            <span className="italic text-brass">use them too</span>.
          </h2>
          <p
            id="craft-desc"
            className="mt-6 text-lg text-steel font-light leading-relaxed"
          >
            Every ARTITECT machine is assembled in our Sheffield workshop by
            engineers who train fabricators in their own shops. Frames are
            stress-relieved, beams are ground in-house, and every folder is
            run through a 200-cycle calibration before it leaves us.
          </p>

          <ul className="mt-10 space-y-4">
            {[
              "Stress-relieved welded steel frames",
              "In-house ground 42CrMo4 folding beams",
              "200-cycle calibration on every machine",
              "Spare parts kept in stock for 20 years",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 text-sm text-ink"
              >
                <span className="mt-2 h-px w-6 bg-brass shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

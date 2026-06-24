import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function AboutStory() {
  const ref = useRef(null);
  useEffect(() => ImageHelper.loadImages(strkImgConfig, ref.current), []);

  return (
    <section ref={ref} className="bg-bone py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-brass mb-5">
            Our story
          </p>
          <h2
            id="about-story-title"
            className="font-serif text-4xl md:text-5xl font-light text-ink leading-tight"
          >
            Built by fabricators,{" "}
            <span className="italic text-brass">for fabricators</span>.
          </h2>
          <div
            id="about-story-desc"
            className="mt-8 space-y-5 text-base text-steel leading-relaxed"
          >
            <p>
              ARTITECT was founded in a small Sheffield workshop in 1986. Our
              first machine — a 2-meter sheet metal folder — is still in
              service at a roofing company forty years later. We measure our
              success in machines like that one.
            </p>
            <p>
              Today we design and manufacture double folding machines, sheet
              metal folders and CNC metal folding machines for fabricators in
              62 countries. We keep the workshop small on purpose: every
              machine is touched by the same hands that designed it.
            </p>
            <p>
              We don&rsquo;t sell the cheapest folder on the market. We sell
              the one your team will still trust in 2046.
            </p>
          </div>
        </div>

        <div className="aspect-[4/5] bg-mist overflow-hidden">
          <img
            alt="ARTITECT workshop floor"
            className="w-full h-full object-cover"
            data-strk-img-id="about-story-img-7c3b21"
            data-strk-img="[about-story-desc] [about-story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
      </div>
    </section>
  );
}

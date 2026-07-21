import React from "react";
import { ArrowRight } from "lucide-react";
import { Eyebrow, Hairline } from "@/components/ui/primitives";
import { getStrkImageUrl } from "@/hooks/useStrkImages";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function BrandStory() {
  const sectionRef = React.useRef(null);
  React.useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, sectionRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={sectionRef} id="story" className="bg-espresso py-16 text-cream md:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 md:grid-cols-2 md:gap-16 lg:px-12">
        {/* Image */}
        <div className="relative order-1 overflow-hidden">
          <img
            data-strk-img-id="story-atelier-8d9e0f"
            data-strk-img="[story-text] gold jewelry atelier hands crafting warm ambient light editorial"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src={getStrkImageUrl("story-atelier-8d9e0f")}
            alt="Velmora atelier — hands crafting gold jewelry"
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 bg-cream px-5 py-3">
            <p className="text-[10px] font-semibold uppercase tracking-widest2 text-gold-deep">
              The Atelier — Lisbon
            </p>
          </div>
        </div>

        {/* Text */}
        <div className="order-2">
          <Eyebrow className="text-gold-tint">Our Story</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl font-medium leading-tight md:text-4xl lg:text-[2.75rem]">
            Jewelry made slowly, priced honestly.
          </h2>
          <Hairline className="my-7 border-cream/20" />
          <div id="story-text" className="space-y-5 text-[15px] leading-relaxed text-cream/80">
            <p>
              Velmora began at a single workbench in Lisbon, with a simple frustration: jewelry that
              looked precious but was priced like it wasn't — or priced like treasure and made like
              costume. We believed there was an honest middle.
            </p>
            <p>
              Every piece is plated in 18k gold over recycled brass, finished by hand, and tested on
              sensitive skin before it ever reaches yours. No middlemen, no markup theatre — just
              quiet, lasting beauty from $30 to $120.
            </p>
          </div>
          <a
            href="#story"
            className="group mt-9 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-gold-tint underline decoration-gold underline-offset-8 transition-colors hover:text-cream"
          >
            Read Our Story
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

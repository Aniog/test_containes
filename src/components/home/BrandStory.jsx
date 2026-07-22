import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Reveal from "@/components/Reveal";

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="border-y border-hairline bg-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:gap-16 md:px-8 md:py-28">
        <Reveal>
          <div className="relative overflow-hidden bg-sand aspect-[4/5] md:aspect-[5/6]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              data-strk-bg-id="story-bg-velmora-1"
              data-strk-bg="[story-text] jeweler's hands crafting gold jewelry at a workbench, warm atelier light, editorial photography"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="900"
            />
          </div>
        </Reveal>

        <Reveal delay={150} className="md:pl-4">
          <p className="text-xs tracking-[0.4em] uppercase text-gold">
            Our Story
          </p>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-espresso md:text-5xl">
            Fine jewelry, without the fine print
          </h2>
          <div
            id="story-text"
            className="mt-6 space-y-5 text-[15px] leading-relaxed text-cocoa"
          >
            <p>
              Velmora began at a small atelier bench with one belief: the
              pieces you wear every day should be made like the ones you save
              for special occasions. So we plate every design in a generous
              layer of 18K gold, set each stone by hand, and skip the
              middlemen who double the price.
            </p>
            <p>
              The result is demi-fine jewelry that lives with you — through
              meetings, milestones, and everything in between — and still
              looks like the day it arrived.
            </p>
          </div>
          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-3 text-xs font-semibold tracking-[0.3em] uppercase text-espresso transition-colors hover:text-gold"
          >
            <span className="border-b border-espresso/30 pb-1 transition-colors group-hover:border-gold">
              Read Our Story
            </span>
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

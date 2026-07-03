import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../../strk-img-config.json";
import Button from "../ui/Button.jsx";
import Eyebrow from "../ui/Eyebrow.jsx";

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-ink-900 py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-content grid-cols-1 gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-10">
        <div className="relative aspect-[4/5] overflow-hidden bg-ink-950 md:aspect-[5/6]">
          <img
            data-strk-img-id="brand-story-portrait-2a7c"
            data-strk-img="[brand-story-headline] [brand-story-quote] [brand-story-tag]"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Founder of Velmora in the studio, surrounded by jewelry sketches"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span id="brand-story-tag" className="hidden">
            Velmora founder studio portrait
          </span>
        </div>

        <div className="flex flex-col justify-center">
          <Eyebrow tone="gold">Our Story</Eyebrow>
          <h2
            id="brand-story-headline"
            className="mt-5 font-serif text-[36px] font-light leading-[1.05] text-ink-100 md:text-[56px]"
          >
            A small atelier, making{" "}
            <span className="italic text-gold-300">quiet</span> pieces for a loud
            world.
          </h2>
          <p
            id="brand-story-quote"
            className="mt-8 max-w-lg font-serif text-[20px] font-light italic leading-relaxed text-ink-200"
          >
            “We design jewelry to be lived in — on a Tuesday, with a coffee; on
            a Saturday, with a glass of wine. The pieces you stop noticing,
            because they belong to you.”
          </p>
          <p className="mt-6 max-w-lg font-sans text-[14px] leading-relaxed text-ink-300">
            Velmora began in a Brooklyn studio in 2021, with one cuff and a
            notebook. Today we craft in small batches, plate in 18K gold, and
            ship from New York to the world.
          </p>
          <div className="mt-10">
            <Button as={Link} to="/about" variant="outline" size="lg">
              Our Story
              <ArrowRight size={14} strokeWidth={1.8} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

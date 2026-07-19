import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";

export default function BrandStory() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section
      ref={ref}
      aria-label="Our story"
      className="container-7xl py-20 md:py-32"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Image */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <div
            className="relative overflow-hidden bg-stone"
            style={{ paddingTop: "75%" }}
          >
            <img
              alt="Inside the Velmora studio"
              data-strk-img-id="brand-story-1"
              data-strk-img="[brand-story-eyebrow] [brand-story-title] [brand-story-blurb]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1400"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </div>

        {/* Copy */}
        <div className="lg:col-span-5 order-1 lg:order-2">
          <p
            id="brand-story-eyebrow"
            className="eyebrow text-muted"
          >
            ◆ Our Story
          </p>
          <h2
            id="brand-story-title"
            className="display-1 text-ink mt-3 text-4xl md:text-5xl lg:text-6xl text-balance"
          >
            Made slowly,<br />worn often.
          </h2>
          <p
            id="brand-story-blurb"
            className="text-base text-ink-soft mt-6 leading-relaxed max-w-md"
          >
            Velmora was started with one belief: that fine jewelry shouldn't
            live in a safe. Every piece is designed in our small studio in
            Lisbon and crafted in 18k gold plating over brass, so it can be
            worn — really worn — from a Tuesday morning to a Saturday
            wedding.
          </p>
          <p className="text-base text-ink-soft mt-4 leading-relaxed max-w-md">
            We work with small family workshops, use hypoallergenic metals,
            and ship each piece in packaging that can be reused or recycled.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-eyebrow font-medium text-ink relative after:absolute after:left-0 after:right-0 after:bottom-[-3px] after:h-px after:bg-gold after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out-soft"
          >
            Read our story
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}

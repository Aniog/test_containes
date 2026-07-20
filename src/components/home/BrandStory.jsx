import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useRef, useEffect } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-bone text-espresso"
      aria-labelledby="story-title"
    >
      <div className="max-w-8xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-6 order-2 md:order-1">
            <div className="relative aspect-[4/5] max-w-[520px] mx-auto md:mx-0 bg-sand overflow-hidden">
              <img
                data-strk-img-id="brand-story-img"
                data-strk-img="[story-title] [story-subtitle] founder atelier working with gold jewelry"
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                alt="Inside the Velmora atelier"
                className="w-full h-full object-cover"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>

          <div className="md:col-span-6 order-1 md:order-2 md:pl-6 lg:pl-12">
            <p id="story-eyebrow" className="eyebrow mb-4">
              Our Story
            </p>
            <h2
              id="story-title"
              className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05]"
            >
              A small studio with a slow hand.
            </h2>
            <p
              id="story-subtitle"
              className="mt-6 text-base md:text-lg text-espresso/70 max-w-lg leading-relaxed"
            >
              Velmora began at a kitchen table in Brooklyn, with a single brass
              press, a vintage polishing cloth, and a belief that everyday
              jewelry should feel as considered as the day you keep it. Every
              piece is finished by hand in our atelier — designed to be layered,
              gifted, and quietly treasured.
            </p>
            <p className="mt-5 text-sm md:text-base text-espresso/60 max-w-lg leading-relaxed">
              We use recycled brass and sterling silver, thick layers of 18K
              gold plating, and hypoallergenic posts. We don't do fast
              fashion, and we don't do markup.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] link-underline"
            >
              Our Story
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.4} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

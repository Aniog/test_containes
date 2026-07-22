import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function StorySplit() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="bg-bone py-20 md:py-28">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-12 md:gap-16 md:px-10 lg:px-16">
        <div className="md:col-span-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-bone">
            <img
              alt="Founder working at a jewelry bench"
              data-strk-img-id="story-img-3f7a1e"
              data-strk-img="[story-subtitle] [story-title] founder hands at a jewelry bench working with fine gold pieces warm natural light"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-6">
          <p id="story-eyebrow" className="eyebrow">Our Story</p>
          <h2
            id="story-title"
            className="display-lg mt-4 text-ink"
          >
            Made in small batches.{" "}
            <em className="text-gold italic">Made to last.</em>
          </h2>
          <p
            id="story-subtitle"
            className="mt-6 max-w-md font-serif text-[17px] italic leading-relaxed text-charcoal"
          >
            Velmora began at a kitchen table in Lisbon, with a single piece of
            brass, a flask of plating solution, and a notebook full of sketches.
          </p>
          <p className="mt-5 max-w-md font-sans text-[14px] leading-relaxed text-charcoal/80">
            Today we work with a small atelier of craftspeople to make each piece
            in small batches — 18K gold plated over hypoallergenic metals, with
            the same care as the first. Demi-fine, in the truest sense: precious
            enough to feel special, made to be worn everyday.
          </p>
          <Link to="/about" className="link-underline mt-10 inline-flex items-center gap-3">
            Our Story
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { useEffect, useRef } from "react";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowRight } from "lucide-react";

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div ref={ref} className="bg-bone-100 pt-24 sm:pt-28 pb-24 min-h-screen">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[11px] font-medium uppercase tracking-widest2 text-espresso/55">
            Our Story
          </p>
          <h1 className="display-serif mt-3 text-4xl sm:text-5xl">
            Made slowly. Worn for years.
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] image-placeholder overflow-hidden reveal">
            <img
              alt="Founder shaping a piece of Velmora jewelry at the bench"
              data-strk-img-id="about-page-bench-7a8b"
              data-strk-img="[about-text] [about-title] founder at workbench"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              loading="lazy"
              className="relative z-10 w-full h-full object-cover"
            />
          </div>

          <div className="reveal">
            <h2 id="about-title" className="display-serif text-3xl sm:text-4xl">
              We started at a single workbench in Brooklyn.
            </h2>
            <p id="about-text" className="mt-6 text-[15px] sm:text-base leading-[1.8] text-espresso/75">
              Velmora began with a simple question: why does demi-fine have to feel
              disposable? We design in small batches, hand-finish every piece, and plate
              in real 18K gold over recycled brass. The result is jewelry that looks
              and feels like an heirloom, at a price you can actually gift.
            </p>
            <p className="mt-4 text-[15px] sm:text-base leading-[1.8] text-espresso/75">
              Today, Velmora lives on dressers and in jewelry boxes across the country —
              a small, quiet reminder that the pieces you wear every day are worth
              caring about.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-y-6 gap-x-6 max-w-md">
              <Stat label="Founded" value="2021" />
              <Stat label="Studio" value="Brooklyn" />
              <Stat label="Pieces sold" value="40,000+" />
              <Stat label="Returns" value="< 2%" />
            </div>

            <Link to="/shop" className="btn btn-primary mt-10">
              Shop the Collection
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <p className="font-serif text-3xl text-espresso">{value}</p>
      <p className="mt-1 text-[11px] uppercase tracking-widest2 text-espresso/55">{label}</p>
    </div>
  );
}

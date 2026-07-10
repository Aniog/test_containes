import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import StrkImage from "@/components/ui/StrkImage";

export default function BrandStory() {
  return (
    <section className="bg-sand-50">
      <div className="mx-auto max-w-content px-6 md:px-10 lg:px-16 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-1 lg:order-1">
            <div className="relative aspect-[4/5] bg-sand-100 overflow-hidden">
              <StrkImage
                imgId="brand-story-img-5a6b7c"
                query="editorial portrait of jewelry maker hands holding fine gold jewelry at workbench warm natural daylight"
                ratio="4x5"
                width={1000}
                alt="A Velmora jeweler at the workbench"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
          <div className="lg:col-span-6 order-2 lg:order-2">
            <span className="label-cap text-champagne-600">Our Story</span>
            <h2
              id="brand-story-title"
              className="mt-4 font-serif text-4xl md:text-5xl font-light text-ink-950 leading-[1.1]"
            >
              Made slowly.
              <br /> Made to be kept.
            </h2>
            <p
              id="brand-story-subtitle"
              className="mt-6 text-base md:text-lg text-textmute leading-relaxed max-w-lg"
            >
              Velmora began with a single thought: the best jewelry is the kind
              you stop noticing — until someone asks where you got it. Every
              piece is hand-finished in 18K gold plate, made in small batches,
              and shipped from our studio in linen-wrapped boxes meant to be
              kept long after the ribbon comes off.
            </p>
            <p className="mt-5 text-sm text-textmute leading-relaxed max-w-lg">
              We design for the everyday. For the women who reach for one
              piece in the morning, take it off at night, and forget — until
              they see themselves in a mirror and remember.
            </p>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 label-cap text-ink-950 hover:text-champagne-600 editorial-transition"
            >
              Our Story
              <ArrowRight size={14} strokeWidth={1.4} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

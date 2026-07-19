import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ProductImage from "@/components/product/ProductImage";

export default function BrandStory() {
  return (
    <section className="bg-sand">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[560px]">
        {/* Image */}
        <div className="relative aspect-[4/5] md:aspect-auto overflow-hidden">
          <ProductImage
            imgId="brand-story-img-main"
            query="[brand-story-quote] [brand-story-title] Our Story"
            ratio="4x5"
            width={900}
            alt="Founder portrait, hand-finishing jewelry"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-8 md:px-14 lg:px-20 py-16 md:py-24">
          <p className="eyebrow mb-5">Our Story</p>
          <h2
            id="brand-story-title"
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight"
          >
            Heirlooms,
            <br />
            <em className="italic font-light">within reach.</em>
          </h2>
          <p
            id="brand-story-quote"
            className="mt-6 text-base md:text-lg text-espresso/75 leading-relaxed max-w-md font-light"
          >
            Velmora began at a kitchen table in Lisbon — sketches in a notebook,
            a single gold-plated sample, and the belief that fine jewelry
            shouldn't wait for a milestone.
          </p>
          <p className="mt-4 text-base md:text-lg text-espresso/75 leading-relaxed max-w-md font-light">
            Each piece is finished in 18K gold plating over hypoallergenic brass,
            hand-set where it matters, and shipped in velvet — because the
            unwrapping should feel as considered as the jewelry inside.
          </p>
          <Link
            to="/about"
            className="mt-10 inline-flex items-center gap-2 font-serif italic text-base text-espresso editorial-link self-start"
          >
            Our Story
            <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}

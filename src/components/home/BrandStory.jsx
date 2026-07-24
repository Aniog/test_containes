import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function BrandStory() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-ivory">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden order-2 lg:order-1">
            <div
              data-strk-img-id="brand-story-img"
              data-strk-img="artisan jewelry workshop hands crafting gold pieces warm lighting"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              className="absolute inset-0 bg-espresso"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gold/15" />
              </div>
            </div>
            {/* Decorative frame */}
            <div className="absolute top-4 left-4 right-4 bottom-4 border border-gold/20 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 lg:pl-8">
            <p className="text-xs tracking-mega-wide uppercase text-gold mb-4 font-sans font-medium">
              Our Story
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
              Jewelry That
              <br />
              <span className="italic">Feels Like You</span>
            </h2>
            <div className="w-16 h-[1px] bg-gold/40 mb-6" />
            <p className="text-warm-gray leading-relaxed mb-5">
              Velmora was born from a simple belief: every woman deserves jewelry
              that feels luxurious without the luxury price tag. We craft demi-fine
              pieces using 18K gold plating over sterling silver, designed to be worn
              every day and treasured for years.
            </p>
            <p className="text-warm-gray leading-relaxed mb-8">
              Each piece is hypoallergenic, tarnish-resistant, and made with intention
              — from our signature huggies to our statement necklaces. We believe in
              quiet luxury: pieces that whisper rather than shout.
            </p>
            <Link
              to="/shop"
              className="group inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-medium text-charcoal hover:text-gold transition-colors"
            >
              Discover the Collection
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

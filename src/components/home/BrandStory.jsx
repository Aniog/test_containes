import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-velmora-warm-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-velmora-cream overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=85"
              alt="Crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <p className="text-velmora-gold text-xs tracking-widest uppercase font-sans mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-ebony leading-tight">
              Jewelry That
              <br />
              <span className="italic">Endures</span>
            </h2>
            <p className="text-velmora-pewter text-sm md:text-base mt-6 leading-relaxed font-sans">
              At Velmora, we believe fine jewelry should be accessible without
              compromising on quality. Every piece is thoughtfully designed
              in-house and crafted from premium materials, including 18K gold
              plating over brass and ethically sourced stones.
            </p>
            <p className="text-velmora-pewter text-sm md:text-base mt-4 leading-relaxed font-sans">
              Our name — a blend of{" "}
              <span className="italic">velum</span> (veil) and{" "}
              <span className="italic">mora</span> (delay) — speaks to
              the slow, intentional beauty we hope our jewelry brings to
              your everyday.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 btn-outline"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
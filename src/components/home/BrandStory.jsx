import React from "react";
import { Link } from "react-router-dom";

export default function BrandStory() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-[hsl(var(--muted))] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=900&q=85"
              alt="Artisan jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-[0.05em] leading-tight">
              Crafted with
              <br />
              <span className="italic">Intention</span>
            </h2>
            <div className="w-12 h-[1px] bg-[#b68860] mt-6 mb-6" />
            <p className="font-sans text-sm md:text-base text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
              At Velmora, we believe fine jewelry should be accessible without
              compromising quality. Each piece is meticulously crafted in 18K gold
              plated finishes, designed to transition seamlessly from day to night.
            </p>
            <p className="font-sans text-sm md:text-base text-[hsl(var(--muted-foreground))] leading-relaxed mb-8">
              We source only the finest materials — genuine cubic zirconia crystals,
              hypoallergenic metals, and sustainable packaging — so you can wear
              our jewelry with pride, every single day.
            </p>
            <Link
              to="/about"
              className="btn-outline text-xs"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
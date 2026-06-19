import React from "react";
import { ArrowRight } from "lucide-react";

export default function BrandStory() {
  return (
    <section id="story" className="py-16 sm:py-24 bg-velmora-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative overflow-hidden rounded-sm aspect-[4/5] sm:aspect-[3/4]">
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&auto=format&fit=crop&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-velmora-gold mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl tracking-wide leading-tight">
              Jewelry That Honors the Everyday
            </h2>
            <div className="mt-6 space-y-4 text-velmora-mocha leading-relaxed text-[15px]">
              <p>
                Velmora was born from a simple belief: luxury should feel personal, not
                unattainable. Every piece in our collection is designed in-house and
                finished in 18K gold plate — demi-fine quality at a price that invites
                you to wear it daily.
              </p>
              <p>
                We work with family-run ateliers who share our obsession for detail.
                From the first sketch to the final polish, our process is slow,
                intentional, and always cruelty-free.
              </p>
            </div>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] uppercase text-velmora-ink hover:text-velmora-gold transition-colors"
            >
              Read Our Story
              <ArrowRight size={14} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import StrkImg from "@/components/ui/StrkImg";
import Reveal from "@/components/ui/Reveal";

export default function BrandStory() {
  return (
    <section className="border-y border-line bg-ivory">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <Reveal className="order-2 lg:order-1">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <StrkImg
                imgId="story-img"
                query="jeweler hands crafting gold jewelry at workbench, warm atelier light, artisan editorial photography"
                ratio="4x5"
                width={900}
                alt="Velmora atelier craftsmanship"
                className="h-full w-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden border border-line bg-cream px-6 py-5 shadow-card sm:block md:-right-8">
              <p className="font-display text-4xl text-gold-deep">18K</p>
              <p className="mt-1 font-body text-[11px] uppercase tracking-widest2 text-cocoa">
                Gold Plated
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2" delay={120}>
          <span className="font-body text-[11px] font-semibold uppercase tracking-mega text-gold-deep">
            Our Story
          </span>
          <h2 className="mt-3 font-display text-3xl leading-tight text-espresso md:text-5xl">
            Jewelry made to be lived in, not saved for someday
          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-cocoa/80">
            Velmora began with a simple frustration: the pieces we loved were either
            precious and precious-priced, or beautiful and disposable. We believed
            there was a middle path — demi-fine jewelry with the soul of an heirloom
            and the ease of the everyday.
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-cocoa/80">
            Each design is plated in 18K gold over a hypoallergenic core, finished by
            hand, and made to move with you — from morning coffee to midnight.
          </p>
          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-2 font-body text-[12px] font-semibold uppercase tracking-widest2 text-espresso"
          >
            <span className="link-underline">Read our story</span>
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import Newsletter from "@/components/home/Newsletter";
import { Eyebrow } from "@/components/ui/Primitives";

export default function About() {
  return (
    <>
      <section className="bg-ivory-light pt-32 md:pt-44 pb-16 md:pb-24">
        <div className="mx-auto max-w-content px-5 md:px-8 lg:px-12 text-center">
          <Eyebrow>Our Story</Eyebrow>
          <h1 className="serif-display text-4xl md:text-6xl lg:text-7xl text-cocoa mt-4 leading-[1.05]">
            Quiet luxury, <em className="italic font-light">made by hand</em>.
          </h1>
          <p className="mt-6 text-base md:text-lg text-cocoa-soft leading-relaxed max-w-xl mx-auto">
            Velmora began in a small Los Angeles studio in 2021, with a single cuff and a stubborn belief: that demi-fine jewelry should feel like the real thing — heavy in the hand, warm on the skin, made to last.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-wide px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="relative aspect-[4/5] bg-cocoa overflow-hidden order-2 lg:order-1">
              <img
                alt="Founder of Velmora in her studio"
                data-strk-img-id="about-portrait"
                data-strk-img="[about-headline] founder studio jewelry designer"
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <Eyebrow>Materials</Eyebrow>
              <h2 id="about-headline" className="serif-display text-3xl md:text-4xl text-cocoa mt-4">
                18K gold over brass — never over compromise.
              </h2>
              <p className="mt-5 text-[15px] text-cocoa-soft leading-relaxed">
                Every Velmora piece starts with a recycled brass core — sturdy, substantial, and kind to the earth. We then plate it in a thick layer of 18K gold, hand-polishing each piece before it ships.
              </p>
              <p className="mt-4 text-[15px] text-cocoa-soft leading-relaxed">
                The result: jewelry that looks and feels like the real thing, at a price that makes sense for the everyday.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6">
                <div>
                  <p className="serif-display text-3xl text-claret">2021</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted">Studio founded</p>
                </div>
                <div>
                  <p className="serif-display text-3xl text-claret">100%</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted">Hypoallergenic</p>
                </div>
                <div>
                  <p className="serif-display text-3xl text-claret">75+</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted">Countries shipped</p>
                </div>
                <div>
                  <p className="serif-display text-3xl text-claret">1%</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted">Donated to Oceana</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}

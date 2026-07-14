import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Sparkles, Leaf, Heart } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Demi-fine, done right",
    text: "18K gold plating over a brass core. Real weight, real finish — without the heirloom price tag.",
  },
  {
    icon: Leaf,
    title: "Made to last",
    text: "Hypoallergenic, nickel-free, water-resistant. Pieces that wear in, not out.",
  },
  {
    icon: Heart,
    title: "Considered always",
    text: "From recycled packaging to small-batch production, we make with care — not volume.",
  },
];

export default function About() {
  const topRef = useRef(null);
  const valuesRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, topRef.current);
  }, []);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, valuesRef.current);
  }, []);

  return (
    <div className="bg-cream">
      <section
        ref={topRef}
        className="relative bg-espresso text-ivory"
        aria-labelledby="about-hero-title"
      >
        <div className="absolute inset-0">
          <img
            alt="Velmora atelier — gold jewelry on linen"
            data-strk-img-id="about-hero-img-c1b9"
            data-strk-img="[about-hero-subtitle] [about-hero-title] Velmora atelier gold jewelry craftsmanship warm light editorial"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover opacity-60"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 to-espresso/85" />
        </div>

        <div className="relative mx-auto max-w-3xl px-5 sm:px-8 py-32 md:py-44 text-center">
          <p className="text-[11px] tracking-widest2 uppercase text-gold">
            Our Story
          </p>
          <h1
            id="about-hero-title"
            className="font-serif text-4xl sm:text-5xl md:text-6xl mt-4 leading-[1.05]"
          >
            Gold, made for the every day.
          </h1>
          <p
            id="about-hero-subtitle"
            className="mt-7 text-base md:text-lg text-ivory/80 leading-relaxed max-w-xl mx-auto"
          >
            Velmora is a small atelier making demi-fine jewelry for the moments
            between moments — the coffee run, the office, the dinner, the
            rest of your life.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28" ref={valuesRef}>
        <div className="mx-auto max-w-editorial px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <p className="eyebrow">What We Believe</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso mt-3">
              Quietly considered.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <article key={v.title} className="text-center md:text-left">
                  <div
                    id={`value-${i}-title`}
                    className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-cream mb-5"
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      className="text-gold-deep"
                    />
                  </div>
                  <h3
                    id={`value-${i}-heading`}
                    className="font-serif text-2xl text-espresso"
                  >
                    {v.title}
                  </h3>
                  <p
                    id={`value-${i}-text`}
                    className="mt-3 text-sm text-ash leading-relaxed"
                  >
                    {v.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28" aria-labelledby="craft-title">
        <div className="mx-auto max-w-editorial px-5 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <p className="eyebrow">The Craft</p>
            <h2
              id="craft-title"
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso mt-3 leading-[1.1]"
            >
              Made in small batches. By hand. In our atelier.
            </h2>
            <p
              id="craft-text"
              className="mt-6 text-base text-ash leading-relaxed"
            >
              Every Velmora piece begins as a hand-carved wax and ends with
              three layers of 18K gold plating, hand-buffed to a high polish.
              We work in small batches — not because it's easy, but because
              it's the only way we know how.
            </p>
            <p className="mt-4 text-base text-ash leading-relaxed">
              The result: demi-fine jewelry that wears like fine, priced like
              a gift you can give without thinking twice.
            </p>
          </div>
          <div className="relative aspect-[4/5] bg-sand overflow-hidden">
            <img
              alt="Velmora craft — hand-finishing a gold piece"
              data-strk-img-id="about-craft-img-9a3c"
              data-strk-img="[craft-text] [craft-title] Velmora craft hand finishing gold piece atelier close-up warm light"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28 text-center">
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <p className="eyebrow">Find Your Forever Piece</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso mt-3">
            Start with one. Wear it forever.
          </h2>
          <Link to="/shop" className="mt-9 inline-block btn-primary">
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  );
}

import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[92vh] items-end overflow-hidden bg-ink md:min-h-screen"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-a1f3c9"
        data-strk-bg="[hero-subtitle] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/30" />
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-40 md:px-8 md:pb-28">
        <Reveal>
          <p className="eyebrow text-gold-soft">Demi-Fine Jewelry · 18k Gold</p>
        </Reveal>
        <Reveal delay={120}>
          <h1
            id="hero-headline"
            className="mt-5 max-w-3xl font-serif text-5xl font-light leading-[1.05] text-ivory md:text-7xl"
          >
            Crafted to be <span className="italic text-gold-soft">Treasured</span>
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p
            id="hero-subtitle"
            className="mt-6 max-w-xl text-base font-light leading-relaxed text-ivory/80 md:text-lg"
          >
            Warm-lit, close-up gold jewelry worn on skin — earrings, necklaces and
            huggies designed in small batches for everyday rituals and
            once-in-a-lifetime moments alike.
          </p>
        </Reveal>
        <Reveal delay={360}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/shop" className="btn-gold">
              Shop the Collection
            </Link>
            <Link to="/about" className="btn-outline-dark">
              Our Story
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { PLACEHOLDER_SRC } from "@/components/ui/StrkImg";
import { Button } from "@/components/ui/Buttons";
import Reveal from "@/components/ui/Reveal";

const VALUES = [
  {
    title: "Made Slowly",
    desc: "Every piece is sketched, cast, and polished by hand in small batches — never mass-produced.",
  },
  {
    title: "Kind to Skin",
    desc: "Nickel-free, hypoallergenic finishes over recycled brass, sealed for everyday wear.",
  },
  {
    title: "Priced Honestly",
    desc: "Demi-fine quality without the fine-jewelry markup. Treasure shouldn't wait for occasions.",
  },
];

export default function AboutPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-ivory">
      {/* Hero */}
      <div
        data-strk-bg-id="about-hero-bg"
        data-strk-bg="[about-title] [about-sub]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="relative flex min-h-[60svh] items-end bg-espresso bg-cover bg-center pt-20"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/40" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 md:px-8">
          <Reveal>
            <h1
              id="about-title"
              className="font-serif text-5xl font-medium text-ivory md:text-7xl"
            >
              Our Story
            </h1>
            <p
              id="about-sub"
              className="mt-4 max-w-xl text-base leading-relaxed text-ivory/75"
            >
              A goldsmith's bench, a belief in everyday treasure, and the
              atelier behind Velmora Fine Jewelry.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Narrative */}
      <section className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gold-deep">
            Est. at the bench
          </p>
          <h2 className="mt-4 font-serif text-3xl font-medium leading-snug text-ink md:text-4xl">
            "Fine jewelry shouldn't wait in a box for special occasions. It
            should live on your skin, gather your stories, and stay beautiful
            through all of them."
          </h2>
          <p className="mt-8 text-sm leading-relaxed text-bronze md:text-base">
            Velmora was founded by a third-generation goldsmith who grew up
            watching her grandmother reserve her "good jewelry" for weddings
            and anniversaries. We started with a simple question: what if the
            good jewelry was made for Tuesdays?
          </p>
          <p className="mt-5 text-sm leading-relaxed text-bronze md:text-base">
            Today, every Velmora piece begins as a sketch in our studio, is
            cast in recycled brass, and receives a generous hand-applied layer
            of 18k gold. Each one is polished, inspected, and tucked into its
            pouch by a person who knows it by name.
          </p>
        </Reveal>
      </section>

      {/* Values */}
      <section className="border-y border-line bg-cream py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 md:grid-cols-3 md:px-8">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 100} className="text-center">
              <span className="mx-auto block h-px w-10 bg-gold" />
              <h3 className="mt-6 font-serif text-2xl font-medium uppercase tracking-[0.15em] text-ink">
                {v.title}
              </h3>
              <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-bronze">
                {v.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Atelier image + CTA */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
        <Reveal>
          <img
            data-strk-img-id="about-atelier-hands"
            data-strk-img="[about-title] [about-sub]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1000"
            src={PLACEHOLDER_SRC}
            alt="Goldsmith at work in the Velmora atelier"
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
        </Reveal>
        <Reveal delay={120}>
          <h2 className="font-serif text-4xl font-medium text-ink">
            From our bench to your jewelry box.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-bronze md:text-base">
            Explore the current collection — each piece photographed as it left
            the atelier, warm-lit and ready to be worn.
          </p>
          <Link to="/shop" className="mt-8 inline-block">
            <Button variant="primary">Shop the Collection</Button>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}

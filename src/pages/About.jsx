import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import StrkImage from "@/components/ui/StrkImage";
import Reveal from "@/components/ui/Reveal";

const values = [
  {
    title: "Small Batches",
    text: "We produce in limited runs and inspect every piece by hand before it leaves the atelier.",
  },
  {
    title: "Honest Materials",
    text: "Recycled brass, thick 18k gold plating, and nickel-free finishes — nothing hidden, nothing harsh.",
  },
  {
    title: "Fair Pricing",
    text: "Direct to you, without the traditional jewelry markup. Fine craft at $30–$120.",
  },
];

export default function About() {
  const pageRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current);
  }, []);

  return (
    <div ref={pageRef} className="bg-ivory">
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-ink">
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="about-hero-bg-8c2e41"
          data-strk-bg="[about-hero-sub] [about-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/30" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-40 md:px-8">
          <Reveal>
            <p className="eyebrow text-gold-soft">Since 2019</p>
            <h1
              id="about-hero-title"
              className="mt-4 max-w-2xl font-serif text-5xl font-light leading-tight text-ivory md:text-6xl"
            >
              The Velmora Atelier
            </h1>
            <p id="about-hero-sub" className="mt-5 max-w-xl text-base font-light leading-relaxed text-ivory/80">
              Artisan hands finishing warm gold jewelry in a sunlit atelier — slow
              craft, honest materials, heirlooms for every day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-3 font-serif text-4xl font-light leading-tight text-ink">
              Fine craft, <span className="italic text-gold-deep">without the markup</span>
            </h2>
            <p className="mt-6 text-[15px] font-light leading-relaxed text-muted">
              Velmora was founded on a simple frustration: jewelry that looked
              precious but was made carelessly, or made beautifully but priced for
              the few. We work directly with a family-run workshop, casting from
              recycled brass and bathing each piece in a generous layer of 18k gold.
            </p>
            <p className="mt-4 text-[15px] font-light leading-relaxed text-muted">
              Every design is sketched, sampled and worn by our own team for weeks
              before it earns a place in the collection. If it doesn't become a
              daily favorite, it never reaches you.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="aspect-[3/4] overflow-hidden bg-sand">
              <StrkImage
                imgId="about-craft-img-6f0d93"
                query="jeweler hands polishing gold necklace at workbench, warm atelier light"
                ratio="3x4"
                width="800"
                alt="Hand-finishing a gold necklace"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-5 md:grid-cols-3 md:gap-6">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 120}>
              <div className="h-full border border-line bg-cream p-8">
                <h3 className="font-serif text-2xl font-light text-ink">{v.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-muted">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 text-center">
          <Link to="/shop" className="btn-gold">
            Shop the Collection
          </Link>
        </Reveal>
      </section>
    </div>
  );
}

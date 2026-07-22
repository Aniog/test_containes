import React from "react";
import { Award, Leaf, Recycle, HeartHandshake } from "lucide-react";
import { usePageFx } from "@/hooks/usePageFx";
import { StrkImage, StrkBackground } from "@/components/ui/StrkMedia";
import Button from "@/components/ui/Button";

const VALUES = [
  {
    icon: Award,
    title: "Demi-Fine Craft",
    text: "18k gold plating over recycled brass, finished by hand and made to last.",
  },
  {
    icon: Leaf,
    title: "Kind to Skin",
    text: "Every piece is nickel-free and hypoallergenic — safe for sensitive ears.",
  },
  {
    icon: Recycle,
    title: "Considered Materials",
    text: "Recycled metals and plastic-free, recyclable gift packaging as standard.",
  },
  {
    icon: HeartHandshake,
    title: "Honestly Priced",
    text: "No traditional retail markup. Quiet luxury, within reach.",
  },
];

export default function About() {
  const ref = usePageFx([]);

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-end">
        <StrkBackground
          bgId="about-hero-bg"
          query="[about-title] jewelry atelier, artisan hands crafting gold, warm editorial light"
          ratio="16x9"
          width={1600}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/30" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 lg:px-12">
          <span className="font-sans text-xs font-semibold uppercase tracking-overline text-goldSoft">
            Our Story
          </span>
          <h1
            id="about-title"
            className="mt-3 max-w-2xl font-display text-4xl leading-[1.05] text-cream md:text-6xl"
          >
            Quiet luxury, made to be lived in
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:py-24">
        <p className="reveal font-display text-2xl leading-relaxed text-ink md:text-3xl">
          Velmora began at a single workbench in 2021, with a simple belief:
          beautiful, lasting jewelry should not be reserved for special
          occasions.
        </p>
        <div className="reveal mt-8 space-y-5 text-base leading-relaxed text-inkSoft">
          <p>
            We design every piece in-house, then finish it in warm 18k gold over
            recycled brass — the standard known as demi-fine. It is the
            middle ground we believe in: more enduring than fast-fashion
            plating, more attainable than solid gold.
          </p>
          <p>
            Each design is made to be worn daily, gifted often and kept for
            years. We keep our collection deliberately small, our materials
            considered, and our prices honest — because luxury should feel
            quiet, not loud.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-line bg-sand py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="reveal text-center">
            <span className="font-sans text-xs font-semibold uppercase tracking-overline text-gold">
              What We Stand For
            </span>
            <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
              Made with intention
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className="reveal flex flex-col gap-3 rounded-sm border border-line bg-cream p-7 shadow-soft"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <v.icon size={20} />
                </span>
                <h3 className="font-display text-lg font-semibold text-ink">
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed text-inkSoft">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atelier image + CTA */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:gap-16 md:py-24 lg:px-12">
        <StrkImage
          imgId="about-atelier-img"
          query="gold jewelry atelier workbench, tools and craft, warm light, editorial"
          ratio="4x3"
          width={900}
          alt="The Velmora atelier"
          className="reveal aspect-[4/3] w-full rounded-sm shadow-card"
        />
        <div className="reveal flex flex-col items-start gap-5">
          <span className="font-sans text-xs font-semibold uppercase tracking-overline text-gold">
            The Atelier
          </span>
          <h2 className="font-display text-3xl leading-tight text-ink md:text-4xl">
            Designed here, treasured everywhere
          </h2>
          <p className="text-base leading-relaxed text-inkSoft">
            From the first sketch to the final polish, every Velmora piece
            passes through the hands of our small atelier team. We would love
            for you to find your next everyday treasure among them.
          </p>
          <Button variant="solid" to="/shop">
            Shop the Collection
          </Button>
        </div>
      </section>
    </div>
  );
}

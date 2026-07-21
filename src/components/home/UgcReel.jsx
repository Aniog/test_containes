import React from "react";
import { Instagram } from "lucide-react";
import { PLACEHOLDER_SRC } from "@/components/ui/StrkImg";
import Reveal from "@/components/ui/Reveal";

const REELS = [
  {
    id: "golden-hour",
    caption: "Golden hour, golden ears",
    handle: "@amelia.wears",
    alt: "Gold huggie earrings worn on ear, warm light",
  },
  {
    id: "layered-necklines",
    caption: "Layered necklines we love",
    handle: "@styledbysophie",
    alt: "Layered gold necklaces on neck, editorial",
  },
  {
    id: "ear-stack",
    caption: "The everyday ear stack",
    handle: "@chloeandgold",
    alt: "Gold ear cuff and huggie stack close-up",
  },
  {
    id: "weekend-glow",
    caption: "Weekend glow ritual",
    handle: "@natalie.in.nyc",
    alt: "Woman wearing gold drop earrings, soft light",
  },
  {
    id: "gifted-kept",
    caption: "Gifted, then kept forever",
    handle: "@emmakate",
    alt: "Opening gold jewelry gift box, velvet",
  },
  {
    id: "barely-there",
    caption: "Barely-there, always there",
    handle: "@thegoldedit",
    alt: "Delicate gold pendant necklace on collarbone",
  },
];

export default function UgcReel() {
  return (
    <section className="overflow-hidden border-y border-line bg-sand py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gold-deep">
              Worn by You
            </p>
            <h2
              id="ugc-title"
              className="mt-3 font-serif text-4xl font-medium text-ink md:text-5xl"
            >
              The Velmora Edit
            </h2>
            <p id="ugc-sub" className="mt-4 max-w-md text-sm leading-relaxed text-bronze">
              Real moments from our community — gold jewelry worn on ears and
              necklines around the world.
            </p>
          </div>
          <a
            href="#"
            className="hidden items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-ink underline decoration-gold underline-offset-8 transition-colors hover:text-gold-deep md:inline-flex"
          >
            <Instagram size={14} /> @velmora
          </a>
        </Reveal>
      </div>

      <Reveal delay={150}>
        <div className="reel-scroll mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:px-8 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]">
          {REELS.map((reel, i) => (
            <figure
              key={reel.id}
              className="group relative w-[62vw] shrink-0 snap-start overflow-hidden bg-espresso sm:w-[38vw] md:w-[240px] lg:w-[250px]"
            >
              <div className="aspect-[9/16]">
                <img
                  data-strk-img-id={`ugc-${reel.id}-${i}`}
                  data-strk-img={`[ugc-cap-${reel.id}] [ugc-sub] [ugc-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="500"
                  src={PLACEHOLDER_SRC}
                  alt={reel.alt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <p
                  id={`ugc-cap-${reel.id}`}
                  className="font-serif text-lg italic leading-snug text-ivory"
                >
                  "{reel.caption}"
                </p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold-soft">
                  {reel.handle}
                </p>
              </figcaption>
              <span className="absolute right-4 top-4 text-ivory/70">
                <Instagram size={15} strokeWidth={1.5} />
              </span>
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

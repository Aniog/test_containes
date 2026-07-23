import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { PLACEHOLDER_IMG } from "@/data/products";
import Reveal from "@/components/ui/Reveal";

const VALUES = [
  {
    title: "Made to last",
    body: "A thick layer of 18k gold over recycled metals, sealed against tarnish — plated to endure daily wear, not just special occasions.",
  },
  {
    title: "Kind to skin",
    body: "Every piece is nickel-free and hypoallergenic, finished and inspected by hand before it leaves the atelier.",
  },
  {
    title: "Honestly priced",
    body: "By selling directly to you, we skip the traditional 8–10x jewelry markup. Heirloom feel, without the heirloom invoice.",
  },
];

export default function StoryPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    let cleanup;
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => {
      window.cancelAnimationFrame(frameId);
      if (typeof cleanup === "function") cleanup();
    };
  }, []);

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      <section className="relative overflow-hidden bg-espresso">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          data-strk-bg-id="story-hero-bg"
          data-strk-bg="[story-hero-title] jewelry atelier bench warm candlelight gold tools"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative mx-auto max-w-4xl px-5 py-28 text-center md:py-40">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-champagne">
              Since 2019
            </p>
            <h1
              id="story-hero-title"
              className="mt-5 font-display text-5xl font-medium leading-tight text-cream md:text-6xl"
            >
              Jewelry that waits for no occasion
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 md:py-28">
        <Reveal>
          <p className="font-display text-2xl font-medium italic leading-relaxed text-espresso md:text-3xl">
            “We started Velmora because the jewelry we loved was either solid
            gold we couldn't justify, or fast fashion that faded in a month. We
            believed there had to be a middle way.”
          </p>
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.26em] text-gold">
            — Mara & Elio Velasquez, Founders
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 space-y-5 text-base leading-relaxed text-mocha">
            <p>
              Velmora is a small, independent atelier making demi-fine jewelry:
              pieces with the look, weight, and longevity of fine jewelry, at a
              price that invites you to wear them on an ordinary Tuesday. Every
              design begins as a pencil sketch at our bench and is produced in
              limited runs — never mass-manufactured, never trend-chasing.
            </p>
            <p>
              We plate each piece in a generous layer of 18k gold over recycled
              brass, then seal it with an anti-tarnish coating developed with
              our plating partners over two years of testing. The result is
              jewelry our customers describe the same way, again and again: “I
              never take it off.”
            </p>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-14 overflow-hidden bg-sand md:aspect-[16/9]">
            <img
              src={PLACEHOLDER_IMG}
              alt="Inside the Velmora atelier"
              loading="lazy"
              data-strk-img-id="story-atelier-wide"
              data-strk-img="[story-hero-title] artisan hands polishing gold jewelry atelier warm window light"
              data-strk-img-ratio="16x9"
              data-strk-img-width="1200"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="border-t border-champagne bg-sand/60 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="border-l-2 border-gold pl-6">
                  <h2 className="font-display text-2xl font-medium text-espresso">
                    {v.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-mocha">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-16 text-center">
            <Link
              to="/shop"
              className="inline-block bg-gold px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.28em] text-cream transition-colors duration-300 hover:bg-gold-deep"
            >
              Shop the Collection
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

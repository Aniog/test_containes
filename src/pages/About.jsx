import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Reveal from "@/components/ui/Reveal";
import Newsletter from "@/components/home/Newsletter";

const VALUES = [
  {
    title: "Craft over noise",
    body: "No seasonal churn. We design fewer pieces and refine them relentlessly — some huggies take eleven prototypes.",
  },
  {
    title: "Honest materials",
    body: "Recycled brass cores, a generous 18K gold layer, nickel-free always. What touches your skin should be as considered as what catches the light.",
  },
  {
    title: "Priced for real life",
    body: "By selling directly to you, we skip the traditional 8x jewelry markup. Atelier quality, $30–$120.",
  },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      <div
        className="relative flex h-64 items-center justify-center overflow-hidden bg-noir md:h-96"
        data-strk-bg-id="about-hero-bg"
        data-strk-bg="[about-title] artisan jeweler's hands polishing a gold earring at a warm-lit workbench, macro editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-noir/55" />
        <div className="relative z-10 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-goldlight">
            Since 2021
          </p>
          <h1
            id="about-title"
            className="mt-3 font-serif text-4xl font-medium text-ivory md:text-6xl"
          >
            Our Story
          </h1>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5 text-center md:px-10">
          <Reveal>
            <p className="font-serif text-2xl italic leading-relaxed text-noir md:text-3xl">
              “We started Velmora because we couldn't find jewelry that felt
              like an heirloom without costing like one. So we built the
              atelier we wished existed.”
            </p>
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.26em] text-gold">
              Elena V. — Founder
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid items-center gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-10">
          <Reveal>
            <div className="overflow-hidden">
              <div className="aspect-[3/4]">
                <img
                  data-strk-img-id="about-atelier-01"
                  data-strk-img="gold jewelry pieces arranged on a jeweler's workbench with tools, warm window light, editorial still life"
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Inside the Velmora atelier"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
              The Atelier
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-noir md:text-4xl">
              Small batches, hand-finished
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-taupe md:text-base">
              Every Velmora piece begins as a sketch at our bench, is cast in
              recycled brass, then plated in 18K gold and polished by hand. We
              produce in small runs to keep quality exacting and waste near
              zero — when a piece sells out, we make more, not differently.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-taupe md:text-base">
              The result is demi-fine jewelry with the weight, warmth and
              finish of pieces many times the price.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <Reveal className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
              What We Believe
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-noir md:text-4xl">
              Three quiet promises
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="border-t border-line pt-8 text-center md:text-left">
                  <p className="font-serif text-xl font-medium text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-medium text-noir">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-taupe">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 text-center">
            <Link
              to="/shop"
              className="inline-block bg-noir px-10 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-ivory transition-colors hover:bg-espresso"
            >
              Shop the Collection
            </Link>
          </Reveal>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}

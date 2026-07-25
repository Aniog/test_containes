import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight, Gem, HandHeart, Recycle } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import Reveal from "@/components/Reveal";

const VALUES = [
  {
    icon: Gem,
    title: "Demi-fine, defined",
    body: "A thick layer of 18K gold over recycled brass — the look and feel of fine jewelry, without the fine-jewelry markup.",
  },
  {
    icon: Recycle,
    title: "Responsibly made",
    body: "Recycled base metals, small-batch production, and plastic-free packaging as standard — not as a campaign.",
  },
  {
    icon: HandHeart,
    title: "Made by hand",
    body: "Every stone is hand-set and every piece hand-finished by atelier partners we know by name.",
  },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return undefined;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-cream pt-16 md:pt-20">
      <header className="border-b border-sand bg-ivory">
        <div className="mx-auto max-w-3xl px-5 py-14 text-center md:px-8 md:py-20">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
            Our Story
          </p>
          <h1
            id="about-title"
            className="mt-4 font-serif text-4xl font-medium leading-tight text-ink md:text-6xl"
          >
            Jewelry for the life <br />
            <em className="italic">you actually live</em>
          </h1>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                data-strk-img-id="about-founder-7a1e4b"
                data-strk-img="[about-body] [about-title] founder portrait at jewelry bench warm window light"
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Velmora founder at the jewelry bench"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={140}>
            <h2 className="font-serif text-3xl font-medium text-ink md:text-4xl">
              It started at one <em className="italic">jeweler’s bench</em>
            </h2>
            <p
              id="about-body"
              className="mt-6 text-base leading-relaxed text-espresso"
            >
              Velmora was founded in 2019 after our founder inherited her
              grandmother’s gold locket — and realized nothing in her own
              jewelry box was made to last like that. Fine jewelry felt out of
              reach; fast fashion jewelry faded within weeks.
            </p>
            <p className="mt-4 text-base leading-relaxed text-espresso">
              So we built the in-between. Demi-fine pieces plated in a generous
              layer of 18K gold, designed in-house, finished by hand, and sold
              directly to you. No middlemen, no 10x markups — just honest,
              beautiful jewelry priced between $30 and $120.
            </p>
            <p className="mt-4 text-base leading-relaxed text-espresso">
              Today, Velmora pieces are worn in over 40 countries — on school
              runs and wedding days, in first jobs and family photos. That is
              exactly where we want to be.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-sand bg-ivory py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
              What We Stand For
            </p>
            <h2 className="mt-3 font-serif text-4xl font-medium text-ink">
              Three quiet <em className="italic">promises</em>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} delay={i * 100}>
                <div className="text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-cream">
                    <value.icon className="h-6 w-6 text-gold" />
                  </span>
                  <h3 className="mt-5 font-serif text-2xl text-ink">
                    {value.title}
                  </h3>
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-espresso">
                    {value.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <Reveal>
          <div className="relative overflow-hidden">
            <div
              className="relative flex min-h-[380px] items-center justify-center bg-cover bg-center px-6 py-16 text-center"
              data-strk-bg-id="about-cta-bg-3e9d5a"
              data-strk-bg="gold jewelry scattered on warm linen fabric editorial still life"
              data-strk-bg-ratio="16x9"
              data-strk-bg-width="1600"
            >
              <span className="absolute inset-0 bg-ink/60" />
              <div className="relative max-w-xl">
                <h2 className="font-serif text-4xl font-medium text-cream md:text-5xl">
                  Begin your own <em className="italic">heirloom</em>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-cream/80">
                  Every Velmora piece arrives in our signature keepsake box —
                  ready to gift, ready to keep.
                </p>
                <Link
                  to="/shop"
                  className="mt-8 inline-flex items-center gap-2 bg-gold px-9 py-4 text-[11px] uppercase tracking-[0.22em] text-white transition-colors hover:bg-gold-deep"
                >
                  Shop the Collection <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

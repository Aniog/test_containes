import React from "react";
import { Link } from "react-router-dom";
import { Gem, Leaf, HeartHandshake, Sparkles } from "lucide-react";
import StrkImg from "@/components/ui/StrkImg";
import StrkBg from "@/components/ui/StrkBg";
import Reveal from "@/components/ui/Reveal";
import AccentButton from "@/components/ui/AccentButton";

const VALUES = [
  { icon: Gem, title: "Demi-Fine, Done Right", text: "18K gold plating over a hypoallergenic core — the look and feel of fine jewelry, made for every day." },
  { icon: Leaf, title: "Kind to Skin", text: "Nickel-free and thoughtfully finished, so even the most sensitive ears can wear Velmora all day." },
  { icon: HeartHandshake, title: "Made to Last", text: "Hand-finished in small batches and quality-checked piece by piece before it ever reaches you." },
  { icon: Sparkles, title: "Considered Design", text: "Quiet, sculptural silhouettes designed to be lived in — not saved for a someday that never comes." },
];

export default function About() {
  return (
    <div className="pb-20">
      {/* Hero */}
      <StrkBg
        bgId="about-hero-bg"
        query="elegant gold jewelry atelier workspace warm light, artisan tools and gold pieces, editorial photography"
        ratio="16x9"
        width={1600}
        className="relative flex min-h-[60vh] items-center justify-center"
      >
        <div className="absolute inset-0 bg-espresso/60" />
        <div className="relative px-5 py-28 text-center">
          <span className="font-body text-[11px] font-semibold uppercase tracking-mega text-gold">
            Our Story
          </span>
          <h1 className="mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight text-ivory md:text-6xl">
            Quiet luxury, made to be lived in
          </h1>
        </div>
      </StrkBg>

      {/* Narrative */}
      <div className="mx-auto max-w-3xl px-5 py-16 text-center md:py-24">
        <Reveal>
          <p className="font-display text-2xl italic leading-relaxed text-espresso md:text-3xl">
            “We believed there was a middle path — jewelry with the soul of an
            heirloom and the ease of the everyday.”
          </p>
          <p className="mt-8 font-body text-base leading-relaxed text-cocoa/80">
            Velmora was founded on a simple frustration: the pieces we loved were
            either precious and precious-priced, or beautiful and disposable. So we
            set out to create demi-fine jewelry that refuses to compromise — 18K
            gold plated, hypoallergenic, and finished by hand.
          </p>
          <p className="mt-5 font-body text-base leading-relaxed text-cocoa/80">
            Every design begins in our atelier as a sketch, is prototyped in small
            batches, and is worn by our own team before it ever earns the Velmora
            name. The result is jewelry that feels considered, comfortable, and
            quietly luxurious — from morning coffee to midnight.
          </p>
        </Reveal>
      </div>

      {/* Image split */}
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <Reveal>
          <div className="aspect-[4/3] overflow-hidden">
            <StrkImg
              imgId="about-craft-img"
              query="close up of hands polishing gold jewelry at bench, warm atelier light, artisan craftsmanship editorial"
              ratio="4x3"
              width={1000}
              alt="Velmora craftsmanship"
            />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="font-display text-3xl leading-tight text-espresso md:text-4xl">
            Crafted by hand, checked by heart
          </h2>
          <p className="mt-5 font-body text-base leading-relaxed text-cocoa/80">
            We plate each piece in a generous layer of 18K gold, then hand-finish
            and inspect it under magnification. It's a slower way to make jewelry —
            but it's the only way we know how to make jewelry worth treasuring.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-line pt-6 text-center">
            {[
              { n: "18K", l: "Gold Plated" },
              { n: "100%", l: "Nickel-Free" },
              { n: "30+", l: "Quality Checks" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-3xl text-gold-deep">{s.n}</p>
                <p className="mt-1 font-body text-[10px] uppercase tracking-widest2 text-cocoa/70">{s.l}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Values */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 70}>
              <div className="h-full border border-line bg-ivory p-7 shadow-card">
                <v.icon size={22} strokeWidth={1.5} className="text-gold-deep" />
                <h3 className="mt-4 font-display text-xl text-espresso">{v.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-cocoa/75">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 text-center">
          <AccentButton as={Link} to="/shop">
            Shop the Collection
          </AccentButton>
        </Reveal>
      </div>
    </div>
  );
}

import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { useReveal } from "@/lib/useReveal.js";

const values = [
  {
    title: "Made by hand",
    body: "Each piece is hand-finished by a small team of artisans. Nothing is mass-produced, nothing is rushed.",
  },
  {
    title: "Demi-fine, never disposable",
    body: "We plate in 18K gold over a solid brass core, at a thicker-than-standard micron layer — built for daily wear, not for a season.",
  },
  {
    title: "Quietly priced",
    body: "By designing in-house and selling direct, we keep the mark-up small. The price you see is the price of the jewelry.",
  },
  {
    title: "For the long wear",
    body: "Our pieces soften and patina over time. The right way to wear them is the way you'll actually wear them.",
  },
];

const milestones = [
  { year: "2019", body: "Velmora begins at a kitchen table in Lisbon, with three pieces and a single plating bath." },
  { year: "2021", body: "Our first atelier opens above a small ceramics studio in Alfama." },
  { year: "2023", body: "We cross 10,000 happy wearers — and expand to a second, larger atelier in Porto." },
  { year: "2025", body: "The Floral Edit launches, the first collection shaped entirely from community feedback." },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-ink-900 text-cream-100 pt-32 sm:pt-40 pb-24 sm:pb-32 overflow-hidden">
        <div
          data-strk-bg-id="about-hero-bg-7c4e"
          data-strk-bg="[about-hero-subtitle] [about-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(15,11,8,0.55) 0%, rgba(15,11,8,0.25) 50%, rgba(15,11,8,0.7) 100%)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative mx-auto max-w-editorial px-4 sm:px-6 lg:px-10 text-center">
          <p
            id="about-hero-subtitle"
            className="eyebrow text-cream-200/70 animate-fade-in"
          >
            Our Story
          </p>
          <h1
            id="about-hero-title"
            className="mt-4 font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-cream-100 animate-fade-in"
            style={{ animationDelay: "0.15s" }}
          >
            Heirloom in the <em className="not-italic text-gold-300 font-normal">making</em>
          </h1>
          <p
            className="mt-6 max-w-xl mx-auto text-sm sm:text-[15px] leading-relaxed text-cream-200/85 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            We started Velmora because we wanted the same things from our jewelry that
            we wanted from our clothes: quiet pieces, made well, that we'd still be
            wearing years from now.
          </p>
        </div>
      </section>

      {/* Image + text */}
      <AboutSplit />

      {/* Values */}
      <Values />

      {/* Milestones */}
      <Milestones />

      {/* CTA */}
      <section className="bg-cream-100 py-20 sm:py-24">
        <div className="mx-auto max-w-editorial px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl text-ink-800">Begin your own quiet ritual.</h2>
          <p className="mt-4 text-sm text-muted-500 max-w-md mx-auto">
            Discover demi-fine gold jewelry, made to be worn every day — and given without occasion.
          </p>
          <Link to="/shop" className="btn-primary mt-8">
            Shop the Collection
            <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </>
  );
}

function AboutSplit() {
  const ref = useReveal();
  const imageRef = useRef(null);
  useEffect(() => {
    if (!imageRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, imageRef.current);
  }, []);
  return (
    <section className="bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-editorial px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div ref={imageRef} className="lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-ink-700 to-ink-900">
              <img
                alt="In the atelier"
                data-strk-img-id="about-portrait-1-22a1"
                data-strk-img="[about-body] [about-values-title]"
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          <div ref={ref} className="reveal lg:col-span-6">
            <p
              id="about-body"
              className="eyebrow text-muted-500"
            >
              A Quiet Beginning
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-ink-800 leading-[1.05]">
              The first piece was a single pair of huggies, for a friend.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-ink-800/85 max-w-xl">
              The first pair of Velmora huggies were made for a friend who couldn't find
              jewelry she could sleep in, shower in, and wear to a meeting the next morning.
              She wore them for two years without taking them off.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-800/85 max-w-xl">
              That, more or less, is the brief we still design to: jewelry that asks
              nothing of you, except that you wear it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Values() {
  const ref = useReveal();
  return (
    <section className="bg-sand-100 py-20 sm:py-28">
      <div className="mx-auto max-w-editorial px-4 sm:px-6 lg:px-10">
        <div ref={ref} className="reveal max-w-2xl">
          <p className="eyebrow text-muted-500">What We Believe</p>
          <h2 id="about-values-title" className="mt-3 font-serif text-4xl sm:text-5xl text-ink-800 leading-[1.05]">
            Four small commitments, taken seriously.
          </h2>
        </div>
        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <li key={v.title} className="bg-cream-100 p-7 border border-hairline/60">
              <h3 className="font-serif text-2xl text-ink-800">{v.title}</h3>
              <p className="mt-3 text-sm text-ink-800/80 leading-relaxed">{v.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Milestones() {
  const ref = useReveal();
  return (
    <section className="bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-editorial px-4 sm:px-6 lg:px-10">
        <div ref={ref} className="reveal max-w-2xl mb-12">
          <p className="eyebrow text-muted-500">Milestones</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-ink-800 leading-[1.05]">
            A small history, in dates.
          </h2>
        </div>
        <ol className="relative border-l border-hairline/80 ml-3 space-y-10">
          {milestones.map((m) => (
            <li key={m.year} className="pl-8 relative">
              <span
                aria-hidden
                className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-gold-400 border-2 border-cream-100"
              />
              <p className="text-[11px] tracking-[0.28em] uppercase text-gold-500 font-medium">
                {m.year}
              </p>
              <p className="mt-2 font-serif text-2xl text-ink-800 max-w-2xl leading-relaxed">
                {m.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

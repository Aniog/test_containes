import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useStrkImages } from "@/lib/useStrkImages";
import Newsletter from "@/components/layout/Newsletter";

const pillars = [
  { title: "Made in Small Batches", body: "We never over-produce. Each drop is capped, intentional, and exhausted before the next begins." },
  { title: "Considered Materials", body: "18K gold plating over recycled brass, hypoallergenic posts, lead- and nickel-free." },
  { title: "Honest Pricing", body: "Fine-feeling jewelry at a fair mark. No middlemen, no inflated retail math." },
];

export default function About() {
  const ref = useRef(null);
  useStrkImages(ref);

  return (
    <div ref={ref} className="bg-ivory-50">
      {/* Hero */}
      <section className="relative min-h-[80vh] overflow-hidden bg-ink-900 text-ivory-50">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-9e2d"
          data-strk-bg="Our Story founder at the workbench warm natural light"
          data-strk-bg-ratio="4x5"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/20 via-ink-900/0 to-ink-900/70" />
        <div className="relative mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-end px-5 pb-20 pt-40 sm:px-8 sm:pb-28 lg:px-12 lg:pb-32">
          <p className="eyebrow text-ivory-50/85">Our Story</p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.04] text-ivory-50 text-balance">
            Fine-feeling jewelry,
            <br />
            <span className="italic font-light">made honestly.</span>
          </h1>
        </div>
      </section>

      {/* Intro copy */}
      <section className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-12 py-20 sm:py-28 text-center">
        <p className="font-serif text-2xl sm:text-3xl text-ink-800 leading-snug text-balance">
          Velmora began at a small workbench in 2021 — with one question: what
          if fine-feeling jewelry didn't have to come with a fine-jewelry price
          tag?
        </p>
        <p className="mt-8 text-ink-600 leading-relaxed text-pretty">
          We design in small batches, plate in 18K gold, and hand-finish every
          piece with a maker we know by name. We work slowly, in tight drops,
          and we never make more than the women who will actually wear them.
        </p>
      </section>

      {/* Pillars */}
      <section className="bg-ivory-100">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="border-t border-ink-800/15 pt-6">
                <h3 className="font-serif text-2xl text-ink-800">{p.title}</h3>
                <p className="mt-3 text-ink-600 leading-relaxed text-pretty">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial block */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden bg-ink-800">
            <img
              alt="Maker at the workbench"
              data-strk-img-id="about-makers-3a7b"
              data-strk-img="Maker at the workbench hand finishing jewelry warm light"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1200"
              loading="lazy"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="eyebrow">A note from our founder</p>
            <p className="mt-4 font-serif text-2xl sm:text-3xl text-ink-800 leading-snug text-balance">
              "I wanted pieces that felt like the jewelry I inherited — weighty,
              considered, made to last — at a price I could actually afford to
              wear every day."
            </p>
            <p className="mt-6 text-ink-500 text-sm">— Mira Velmora, Founder</p>
            <Link
              to="/shop"
              className="link-underline mt-10 inline-flex items-center gap-2 font-sans uppercase tracking-widest2 text-[11px] text-ink-800"
            >
              Shop the collection
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}

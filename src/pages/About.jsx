import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import StockImage from "@/components/ui/StockImage";

const PILLARS = [
  { title: "Hand-finished",  body: "Every piece is touched, set, and polished by hand in our atelier in Lisbon. No mass production — ever." },
  { title: "Made to last",   body: "1.2 micron 18K gold plating over recycled brass — over four times the industry standard. Designed for daily wear." },
  { title: "Hypoallergenic", body: "Nickel-free, lead-free, and tested on real skin. If your ears could thank us, they would." },
];

const TIMELINE = [
  { year: "2019", title: "A kitchen-table cuff", body: "Velmora begins as a single crystal ear cuff, hand-set in our founder's kitchen in Paris." },
  { year: "2021", title: "Lisbon atelier",      body: "We open our first atelier and hire our first three jewelers — all women, all craftspeople." },
  { year: "2023", title: "Carbon-neutral shipping", body: "All orders ship plastic-free, carbon-offset, and arrive in our signature cream box." },
  { year: "2025", title: "Re-released classics", body: "We relaunch our first five pieces — unchanged, still hand-finished, still made to be worn for a lifetime." },
];

export default function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="vm-page">
      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-cream">
        <div className="mx-auto max-w-page px-5 md:px-10">
          <Reveal>
            <p className="vm-eyebrow text-ink-muted">About</p>
            <h1 className="vm-display text-ink mt-4 text-5xl md:text-7xl leading-[1.02] max-w-4xl">
              We're a small atelier that believes{" "}
              <span className="italic font-light">quiet is the new loud.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-ink-muted text-base md:text-lg leading-relaxed">
              Velmora is a six-person studio that makes demi-fine jewelry meant to outlast trends, not chase them. Every piece is hand-finished in our atelier by women paid fairly, working by appointment.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Image essay */}
      <section className="bg-cream-50">
        <div className="mx-auto max-w-page px-5 md:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-8 md:gap-10">
          <Reveal className="md:col-span-7">
            <div className="aspect-[4/5] bg-cream-200 overflow-hidden">
              <StockImage
                imgId="about-portrait"
                query="velmora founder atelier portrait editorial warm light hands gold jewelry"
                ratio="4x5"
                width="900"
                alt="The Velmora atelier"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
          <div className="md:col-span-5 grid gap-8 md:gap-10">
            <Reveal delay={120}>
              <div className="aspect-[4/3] bg-cream-200 overflow-hidden">
                <StockImage
                  imgId="about-detail"
                  query="velmora atelier close up hands polishing gold jewelry soft focus"
                  ratio="4x3"
                  width="600"
                  alt="Polishing at the atelier bench"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="aspect-square bg-cream-200 overflow-hidden">
                <StockImage
                  imgId="about-pack"
                  query="velmora cream jewelry box packaging unboxing soft warm"
                  ratio="1x1"
                  width="600"
                  alt="Velmora packaging"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-page px-5 md:px-10">
          <Reveal>
            <p className="vm-eyebrow text-ink-muted">What we believe</p>
            <h2 className="vm-display text-ink mt-3 text-4xl md:text-6xl leading-[1.05] max-w-3xl">
              Three promises, kept quietly.
            </h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-6 md:gap-10">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <article className="p-8 md:p-10 bg-cream-50 border border-ink/8 h-full">
                  <p className="vm-eyebrow text-gold-dark">0{i + 1}</p>
                  <h3 className="vm-display text-ink mt-3 text-2xl md:text-3xl">{p.title}</h3>
                  <p className="mt-4 text-ink-soft leading-relaxed text-[15px]">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-cream-50 border-t border-ink/8">
        <div className="mx-auto max-w-page px-5 md:px-10">
          <Reveal>
            <p className="vm-eyebrow text-ink-muted">Our story</p>
            <h2 className="vm-display text-ink mt-3 text-4xl md:text-6xl leading-[1.05] max-w-3xl">
              Six years, one quiet thread.
            </h2>
          </Reveal>
          <ol className="mt-14 relative border-l border-ink/15 pl-8 md:pl-10 space-y-12 max-w-3xl">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 80}>
                <li className="relative">
                  <span className="absolute -left-[34px] md:-left-[42px] top-2 w-2.5 h-2.5 bg-gold rounded-full ring-4 ring-cream-50" />
                  <p className="vm-eyebrow text-gold-dark">{t.year}</p>
                  <h3 className="vm-serif text-2xl md:text-3xl text-ink mt-2">{t.title}</h3>
                  <p className="text-ink-soft mt-2 leading-relaxed">{t.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-page px-5 md:px-10 text-center">
          <Reveal>
            <p className="vm-eyebrow text-ink-muted">Begin where you'd like</p>
            <h2 className="vm-display text-ink mt-3 text-4xl md:text-6xl leading-[1.05] max-w-2xl mx-auto">
              Find your{" "}
              <span className="italic font-light">first piece.</span>
            </h2>
            <Link to="/shop" className="vm-btn vm-btn--primary mt-9 inline-flex">
              Shop the Collection
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.6} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

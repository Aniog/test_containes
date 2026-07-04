import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useStrkImages } from "@/hooks/useStrkImages";
import { Sparkles, Heart, Globe2, Award } from "lucide-react";

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

const VALUES = [
  {
    icon: Sparkles,
    title: "Demi-fine, by design",
    body:
      "We plate 18K gold over hypoallergenic cores in small batches — heavy enough to feel like real jewelry, light enough to wear every day.",
  },
  {
    icon: Heart,
    title: "Made to be lived in",
    body:
      "We design for the morning stack, the candlelit dinner, and the years in between. Quiet luxury that gets better with wear.",
  },
  {
    icon: Globe2,
    title: "Considered at every step",
    body:
      "Carbon-neutral shipping, recyclable packaging, and an atelier partner that pays above the regional living wage — always.",
  },
  {
    icon: Award,
    title: "A two-year promise",
    body:
      "If your finish ever dulls within two years, we will re-plate it for you. Free. Because the piece should outlast the trend.",
  },
];

export default function About() {
  const ref = useRef(null);
  useStrkImages(ref);

  return (
    <div ref={ref} className="pt-24 md:pt-28 bg-cream">
      {/* Hero */}
      <section className="container-editorial py-12 md:py-20 text-center">
        <p className="eyebrow">Our Story</p>
        <h1 className="font-serif text-5xl md:text-7xl text-ink mt-3 leading-[1.05] tracking-[-0.01em] max-w-3xl mx-auto text-balance">
          Jewelry you don't have to think twice about.
        </h1>
        <p className="mt-7 text-base md:text-lg text-ink-soft max-w-2xl mx-auto leading-relaxed">
          Velmora is a small, women-led studio making demi-fine jewelry from a single belief: the right
          piece should feel inevitable the moment you put it on — and stay with you for the years after.
        </p>
      </section>

      {/* Editorial image */}
      <section className="container-editorial">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
          <div className="md:col-span-7 aspect-[4/5] overflow-hidden bg-ink">
            <img
              alt="Founder portrait — soft natural light"
              data-strk-img-id="about-portrait"
              data-strk-img="[about-body-quote] [about-section-title] [about-section-eyebrow]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src={PLACEHOLDER}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-5 flex flex-col justify-end">
            <p id="about-section-eyebrow" className="eyebrow">The Founder</p>
            <h2
              id="about-section-title"
              className="font-serif text-3xl md:text-4xl text-ink mt-3 leading-[1.1] tracking-[-0.01em]"
            >
              Built in a small studio, worn in the real world.
            </h2>
            <p id="about-body-quote" className="mt-5 text-ink-soft leading-relaxed text-[15px]">
              After a decade in fashion and a childhood in her grandmother's jewelry shop, our founder
              set out to make the kind of pieces she wished she could find: demi-fine, warm-toned, and
              built to last. Every Velmora piece begins with that question.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-editorial py-20 md:py-28">
        <div className="text-center mb-12 md:mb-16">
          <p className="eyebrow">Our Promise</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink mt-3 tracking-[-0.01em]">
            Four things we will not compromise on.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {VALUES.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-ivory p-8 border border-hairline">
              <Icon className="w-5 h-5 text-gold-deep" strokeWidth={1.5} />
              <h3 className="font-serif text-xl text-ink mt-5">{title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed mt-3">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="container-editorial pb-20 md:pb-28">
        <div className="bg-ink text-cream p-10 md:p-16 text-center">
          <p className="eyebrow text-cream/60">Begin with a piece</p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mt-3 tracking-[-0.01em] max-w-2xl mx-auto text-balance">
            Designed to be worn for years. Remembered for longer.
          </h2>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center mt-10 bg-cream text-ink px-9 py-4 text-[12px] uppercase tracking-[0.22em] font-medium hover:bg-gold transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  );
}

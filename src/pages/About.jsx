import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import Testimonials from "@/components/home/Testimonials";
import { resolveImageUrl } from "@/lib/stockImages";

const VALUES = [
  {
    title: "Slow made",
    body: "Every piece is finished by hand in small batches, never mass-produced. We release new designs when they're ready, not when the calendar says so.",
  },
  {
    title: "Demi-fine, truly",
    body: "18K gold plating over a hypoallergenic brass core. Heavier than costume, lighter than fine — built to wear every day, not saved for someday.",
  },
  {
    title: "Considered packaging",
    body: "Every order ships in a keepsake velvet box with a hand-tied ribbon and a soft polishing cloth. No plastic, no excess.",
  },
];

export default function About() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div ref={ref} className="bg-cream">
      {/* Hero */}
      <section className="relative bg-ink text-cream overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg"
          data-strk-bg="[about-hero-subtitle] [about-hero-title] woman founder gold jewelry studio warm light editorial"
          data-strk-bg-ratio="21x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/10 to-ink/60" />
        <div className="relative max-w-4xl mx-auto px-5 md:px-8 pt-40 md:pt-56 pb-24 md:pb-36 text-center">
          <p className="eyebrow text-gold mb-4">Our story</p>
          <h1
            id="about-hero-title"
            className="display-xl text-cream"
          >
            Made slowly. Worn <em className="font-serif italic font-light text-gold-soft">often</em>.
          </h1>
          <p
            id="about-hero-subtitle"
            className="mt-6 md:mt-8 text-cream/80 font-sans font-light text-base md:text-lg max-w-xl mx-auto leading-relaxed"
          >
            Velmora is a small studio making demi-fine jewelry that feels as
            considered as heritage, but as wearable as the everyday.
          </p>
        </div>
      </section>

      {/* Founder letter */}
      <section className="max-w-3xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <p className="eyebrow text-gold-deep mb-3">A letter from the studio</p>
        <h2 className="display-md text-ink">How we started.</h2>
        <div className="mt-8 space-y-6 text-[16px] text-ink-soft font-sans font-light leading-[1.85]">
          <p>
            Velmora started in a Brooklyn apartment in 2021, with a single
            pair of earrings and a quiet frustration with the way fine jewelry
            made most of us feel — priced out, sized out, or talked down to.
            We wanted pieces that felt like heirlooms but cost less than a
            weekly grocery run.
          </p>
          <p>
            We worked with a small family workshop overseas to develop a
            plating process that actually lasts — and a brass core that's
            genuinely hypoallergenic. We hand-finish every piece in our
            studio in New York, where we also design, pack, and ship each
            order ourselves.
          </p>
          <p>
            Three years on, we're still small. We still answer our own DMs.
            And we still believe the best jewelry is the kind you forget
            you're wearing — until you catch a glimpse of it in a window.
          </p>
          <p className="font-serif italic text-ink text-xl pt-2">
            — Mara Ellis, founder
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ivory py-20 md:py-28 border-y border-line/70">
        <div className="max-w-8xl mx-auto px-5 md:px-8">
          <p className="eyebrow text-gold-deep mb-3 text-center">What we believe</p>
          <h2 className="display-md text-ink text-center max-w-xl mx-auto">
            Three quiet promises.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mt-14">
            {VALUES.map((v, i) => (
              <div key={v.title} className="text-center md:text-left">
                <span className="font-serif text-gold-deep text-3xl block mb-4">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-2xl text-ink">{v.title}</h3>
                <p className="mt-3 text-ink-soft text-[15px] font-sans font-light leading-[1.75]">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="bg-cream py-20 md:py-24 text-center">
        <Link
          to="/shop"
          className="btn-primary group"
        >
          Shop the collection
          <ArrowRight strokeWidth={1.5} className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </section>
    </div>
  );
}

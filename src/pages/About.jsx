import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";
import StockImage from "@/components/ui/StockImage";
import Button from "@/components/ui/Button";

const VALUES = [
  {
    title: "Demi-fine, by design",
    body: "Gold-plated over sterling silver — substantial enough to live in, priced so it can be gifted often.",
  },
  {
    title: "Small batches, named hands",
    body: "Each piece is hand-finished by a studio of eleven artisans. We know every name.",
  },
  {
    title: "Quietly packaged",
    body: "Recyclable, reusable, never plastic. The box is part of the gift.",
  },
];

export default function About() {
  const ref = useRef(null);
  useReveal(ref);
  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);
  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="relative bg-espresso text-cream overflow-hidden">
        <div className="absolute inset-0">
          <StockImage
            id="about-hero"
            query="two designers working on jewelry sketches at a sunlit table"
            alt="The Velmora studio"
            ratio="3x2"
            width={1800}
            className="w-full h-full"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-espresso/40 to-espresso/85" />
        </div>
        <div className="relative mx-auto max-w-screen-2xl px-5 md:px-8 lg:px-12 min-h-[60vh] flex flex-col justify-end py-32 md:py-40">
          <div className="max-w-2xl">
            <Eyebrow className="text-champagne-soft">Our Story</Eyebrow>
            <h1
              id="about-headline"
              className="mt-4 font-serif font-light leading-[1.05] tracking-tight text-5xl md:text-6xl lg:text-7xl"
            >
              Made to be <em className="italic">lived in</em>.
            </h1>
            <p
              id="about-sub"
              className="mt-6 text-cream/80 text-base md:text-lg max-w-xl leading-relaxed"
            >
              Velmora is a New York jewelry studio making demi-fine 18K gold
              plated pieces, designed to be worn every day and gifted often.
            </p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-cream py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Eyebrow>The Beginning</Eyebrow>
          <SectionTitle className="mt-3">A kitchen table in Brooklyn.</SectionTitle>
          <div className="mt-8 space-y-5 text-[15px] md:text-base text-espresso-soft leading-[1.8]">
            <p>
              In 2021, our founder Maya Verlin was a jewelry buyer who couldn't
              find a single brand that bridged the gap between fast-fashion
              costume and fine jewelry. The first pieces — three earring
              styles, two chain lengths, one cuff — were prototyped on a
              borrowed jeweler's bench in her apartment.
            </p>
            <p>
              Two years later, Velmora ships from a small studio in Greenpoint
              to 38 countries. We've stayed deliberately small. Every piece
              is hand-finished by a team of eleven artisans, most of whom
              have been with us since year one. We still answer customer
              emails ourselves on weekends.
            </p>
            <p>
              We don't do loud. We don't do trends. We make the jewelry we
              want to wear — and we hope you want to wear it too.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-screen-2xl px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {VALUES.map((v, i) => (
              <article
                key={v.title}
                className="reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="text-[11px] uppercase tracking-eyebrow text-champagne">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-serif text-2xl md:text-3xl font-light text-espresso leading-tight">
                  {v.title}
                </h3>
                <p className="mt-4 text-sm text-espresso-soft leading-relaxed">
                  {v.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-cream py-20 md:py-28 text-center">
        <div className="mx-auto max-w-xl px-5 md:px-8">
          <SectionTitle as="h2" className="text-3xl md:text-4xl">
            Come see for yourself.
          </SectionTitle>
          <p className="mt-4 text-sm text-taupe">
            Browse the full collection — or read more in the journal.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
            <Button as={Link} to="/shop" size="lg">
              Shop the Collection
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.6} />
            </Button>
            <Button as={Link} to="/journal" variant="ghost" size="lg">
              Read the Journal
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

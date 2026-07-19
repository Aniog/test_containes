import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

const VALUES = [
  {
    title: "Made slowly",
    body: "Every piece is sketched, cast and finished by hand in a six-seat atelier in Lisbon. We do not chase seasons — we chase feel.",
  },
  {
    title: "Made to wear",
    body: "Demi-fine, hypoallergenic, nickel-free. Thick 18K gold plating over a brass core. Real materials at an honest price.",
  },
  {
    title: "Made to last",
    body: "We design for the everyday. That means finishes that hold, clasps that click, and a 30-day promise if anything doesn't.",
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
    <div ref={containerRef}>
    <div className="bg-bone">
      {/* Header */}
      <div className="pt-24 sm:pt-28 lg:pt-32">
        <div className="container-page pb-12 sm:pb-16">
          <p className="eyebrow">Our Story</p>
          <h1 className="mt-4 font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.02] text-ink max-w-4xl">
            Quiet luxury,
            <br />
            <em className="italic">made by hand.</em>
          </h1>
        </div>
      </div>

      {/* Hero image */}
      <div className="container-page">
        <div className="relative aspect-[16/9] sm:aspect-[16/8] overflow-hidden bg-cream">
          <img
            alt="Inside the Velmora atelier, hands at work"
            src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=1600&q=80&auto=format&fit=crop"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Body */}
      <div className="container-page py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7 lg:col-start-3">
            <p
              id="about-headline"
              className="font-serif text-2xl sm:text-3xl leading-relaxed text-ink"
            >
              Velmora is a six-seat atelier in a quiet street in Lisbon, founded
              in 2021 by a goldsmith and a writer who believed fine jewelry
              should be felt, not filed away.
            </p>
            <div className="mt-8 space-y-5 text-ink/75 text-base sm:text-[17px] leading-relaxed">
              <p>
                We work in small batches. Each piece is sketched, then
                prototyped, then cast, then finished by hand. We plate thick
                — never the thinnest flash the industry allows — because
                jewelry should be worn in the shower, on holiday, on the way
                to dinner. Not stored in a box.
              </p>
              <p>
                We use hypoallergenic, nickel-free brass as our base metal,
                and a generous layer of 18K gold plating on top. It's the
                same finish used in demi-fine houses that charge two or three
                times our price. We just make less, and we keep the team
                small.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20 sm:mt-28 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {VALUES.map((v, i) => (
            <article
              key={v.title}
              className="border border-line p-7 bg-bone"
            >
              <p className="eyebrow">No. 0{i + 1}</p>
              <h3 className="mt-3 font-serif text-2xl sm:text-3xl font-light text-ink">
                {v.title}
              </h3>
              <p className="mt-3 text-sm text-ink/75 leading-relaxed">
                {v.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 sm:mt-20 text-center">
          <Link to="/shop" className="btn-primary">
            Explore the Collection
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}

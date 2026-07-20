import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const VALUES = [
  {
    title: "Demi-fine, by design",
    body: "18K gold plating over a hypoallergenic brass core — substantial enough to wear daily, considered enough to last.",
  },
  {
    title: "Slow, hand-made",
    body: "Every piece is finished by hand in our atelier. We work in small runs, and restock thoughtfully.",
  },
  {
    title: "Priced for living in",
    body: "We make heirlooms accessible. Real gold, real weight, real detail — without the traditional markup.",
  },
];

export default function About() {
  const containerRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-ivory">
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 bg-ivory-soft">
        <div className="container-velmora text-center max-w-3xl">
          <p className="eyebrow mb-4">Our Story</p>
          <h1 className="display-serif text-5xl md:text-6xl lg:text-7xl text-espresso text-balance">
            Jewelry, made the way it should be.
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted text-pretty">
            Velmora began with a small studio and a simple belief: demi-fine
            jewelry deserves the same care as fine. So we work in 18K gold plating,
            with hypoallergenic metals, finishing every piece by hand.
          </p>
        </div>
      </section>

      <section className="container-velmora py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-espresso-soft">
            <img
              alt="The Velmora atelier"
              data-strk-img-id="about-atelier-2c4d"
              data-strk-img="[about-heading] [velmora-section-title] jewelry atelier workshop"
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div>
            <h2
              id="about-heading"
              className="display-serif text-3xl md:text-4xl text-espresso text-balance"
            >
              From a small studio, with intention.
            </h2>
            <p className="mt-5 text-base text-muted leading-relaxed text-pretty">
              Our founder, a former goldsmith, was tired of choosing between
              fast-fashion jewelry that turned green in a week and fine jewelry
              that cost a month's rent. Velmora is the third way: real materials,
              made slowly, priced honestly.
            </p>
            <p className="mt-4 text-base text-muted leading-relaxed text-pretty">
              Today we work with a small atelier of seven, producing in
              considered runs, and restocking only when a piece sells. We
              believe that's how jewelry should be made.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory-soft py-20 md:py-28">
        <div className="container-velmora">
          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {VALUES.map((v) => (
              <div key={v.title}>
                <div className="w-10 h-px bg-bronze mb-5" />
                <h3 className="font-serif text-2xl text-espresso mb-3 text-balance">
                  {v.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed text-pretty">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-velmora py-20 md:py-28 text-center">
        <h2 className="display-serif text-3xl md:text-5xl text-espresso text-balance max-w-2xl mx-auto">
          Begin with a piece you won't take off.
        </h2>
        <Link
          to="/shop"
          className="mt-10 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-espresso hover:text-bronze-deep transition-colors group"
        >
          Shop the Collection
          <ArrowRight
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            strokeWidth={1.5}
          />
        </Link>
      </section>
    </div>
  );
}

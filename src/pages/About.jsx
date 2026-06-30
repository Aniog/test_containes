import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useStrkImages } from "@/lib/imageLoader.js";
import Newsletter from "@/components/home/Newsletter.jsx";

const VALUES = [
  {
    title: "Made in small batches",
    body: "We cast in small batches, finish by hand, and restock slowly. Nothing is mass-produced and nothing is rushed.",
  },
  {
    title: "Designed to be lived in",
    body: "Every Velmora piece is hypoallergenic, nickel-free, and finished with a tarnish-resistant coating — made to wear in, not wear out.",
  },
  {
    title: "Considered at every step",
    body: "From FSC-certified gift boxes to recycled metal findings, we choose the more careful option whenever we can.",
  },
];

const MILESTONES = [
  { year: "2019", text: "Founded in a small studio with a single sketchbook and a love for warm gold." },
  { year: "2021", text: "Launched our first demi-fine collection — five pieces, all hand-finished in 18K gold plating." },
  { year: "2023", text: "Crossed one hundred thousand pieces worn by our community, in forty-two countries." },
  { year: "2026", text: "Reached for a capsule wardrobe staple — and decided to stay small, on purpose." },
];

export default function About() {
  const ref = useRef(null);
  useStrkImages(ref);

  return (
    <div ref={ref} className="bg-cream">
      <section className="bg-surface-warm border-b border-line">
        <div className="container-wide py-16 md:py-24 flex flex-col items-center text-center gap-4">
          <span className="eyebrow">Our story</span>
          <h1
            id="about-title"
            className="font-serif font-light text-4xl md:text-6xl text-ink leading-[1.05] max-w-2xl"
          >
            Quietly made, designed to be lived in.
          </h1>
          <p
            id="about-lead"
            className="font-sans text-base md:text-[17px] text-ink-muted max-w-xl leading-relaxed"
          >
            Velmora began with a simple idea — that the jewelry you wear most
            should feel as considered as the moments you wear it for.
          </p>
        </div>
      </section>

      <section className="container-wide py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden bg-overlay">
              <img
                alt="A founder sketching jewelry designs in a sunlit studio"
                data-strk-img-id="about-image-1"
                data-strk-img="founder sketching jewelry designs in sunlit studio warm light [about-title] [about-lead]"
                data-strk-img-ratio="4x5"
                data-strk-img-width="1200"
                loading="lazy"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-6 flex flex-col gap-5">
            <h2 className="font-serif text-3xl md:text-4xl text-ink font-light leading-[1.1]">
              From a sketchbook, slowly.
            </h2>
            <p className="font-sans text-[15px] md:text-base text-ink-muted leading-relaxed">
              Velmora started as a side project between two friends who wanted
              demi-fine jewelry that felt personal, warm, and considered — and
              who could not find any they could afford. We sketched our first
              five pieces in a small studio with afternoon light, and made them
              in batches of twenty.
            </p>
            <p className="font-sans text-[15px] md:text-base text-ink-muted leading-relaxed">
              Six years later, we still sketch first and make in small batches.
              The studio is a little larger, the sketches are a little better,
              and the five pieces have grown to a quiet, considered collection
              of more than forty — but the way we work has not changed.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-warm py-20 md:py-28">
        <div className="container-wide">
          <div className="text-center mb-12 md:mb-16">
            <span className="eyebrow">What we hold to</span>
            <h2 className="font-serif text-3xl md:text-5xl text-ink font-light leading-[1.1] mt-3 max-w-2xl mx-auto">
              Three small promises.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {VALUES.map((v) => (
              <div key={v.title} className="flex flex-col items-start gap-3">
                <h3 className="font-serif text-2xl text-ink font-light">
                  {v.title}
                </h3>
                <p className="font-sans text-[15px] text-ink-muted leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-wide py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <span className="eyebrow">Milestones</span>
            <h2 className="font-serif text-3xl md:text-5xl text-ink font-light leading-[1.1] mt-3">
              A small timeline.
            </h2>
            <p className="font-sans text-[15px] text-ink-muted leading-relaxed mt-5 max-w-md">
              We grow slowly and on purpose. These are a few of the moments
              that have shaped Velmora so far.
            </p>
          </div>
          <div className="md:col-span-7">
            <ol className="border-t border-line">
              {MILESTONES.map((m) => (
                <li
                  key={m.year}
                  className="grid grid-cols-12 gap-4 md:gap-8 py-6 border-b border-line"
                >
                  <span className="col-span-3 md:col-span-2 font-serif text-2xl text-ink font-light">
                    {m.year}
                  </span>
                  <p className="col-span-9 md:col-span-10 font-sans text-[15px] text-ink-muted leading-relaxed pt-1">
                    {m.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="container-wide pb-20 md:pb-28 text-center flex flex-col items-center gap-5">
        <h2 className="font-serif text-3xl md:text-5xl text-ink font-light leading-[1.1] max-w-xl">
          Begin with a single piece.
        </h2>
        <Link to="/shop" className="btn-primary mt-2">
          Shop the collection
          <ArrowRight strokeWidth={1.5} className="w-4 h-4 ml-3" />
        </Link>
      </section>

      <Newsletter />
    </div>
  );
}

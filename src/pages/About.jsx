import { Link } from "react-router-dom";
import { useRef } from "react";
import StockImage from "@/components/ui/StockImage";
import { useStrkImages } from "@/lib/useStrkImages";

export default function About() {
  const ref = useRef(null);
  useStrkImages(ref, []);

  return (
    <section ref={ref} className="bg-bone">
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-16 pb-10 md:pt-24">
        <p className="text-[11px] tracking-[0.3em] uppercase text-charcoal">
          Our Story
        </p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl lg:text-6xl text-espresso">
          Crafted to be Treasured
        </h1>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 pb-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-bone/40">
          <StockImage
            imageId="about-portrait"
            query="[about-caption] [about-headline]"
            ratio="4x5"
            width={1000}
            alt="Atelier portrait of a jeweler at work"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div>
          <h2
            id="about-headline"
            className="font-serif text-3xl md:text-4xl text-espresso leading-tight"
          >
            Demi-fine jewelry, made with the care of fine jewelry.
          </h2>
          <p id="about-caption" className="mt-6 text-sm leading-relaxed text-charcoal">
            Velmora began as a small atelier project — a quiet rebellion against
            fast-fashion jewelry that loses its color in a season. Each piece is
            hand-finished in 18K gold plating over brass, set with hypoallergenic
            posts, and inspected twice before it leaves the studio.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-charcoal">
            We design for the everyday. For morning walks and candlelit dinners.
            For the friend who buys herself flowers and the sister who marks
            another year around the sun.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-charcoal">
            We believe a piece of jewelry should be affordable enough to wear
            daily and precious enough to keep forever. That balance — quiet
            luxury, accessible price — is what Velmora was built around.
          </p>
          <Link
            to="/shop"
            className="mt-10 inline-block text-[11px] tracking-[0.22em] uppercase text-accent border-b border-accent pb-1 hover:text-espresso hover:border-espresso transition-colors"
          >
            Discover the collection
          </Link>
        </div>
      </div>

      {/* Values */}
      <div className="border-t border-bone/80 bg-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Hand-finished",
              body: "Each piece is polished and inspected by hand in our atelier. No mass production.",
            },
            {
              title: "Hypoallergenic",
              body: "Nickel-free, lead-free, and tarnish-resistant. Safe for sensitive ears.",
            },
            {
              title: "Made to last",
              body: "Plated 5x thicker than industry standard, with a 30-day wear promise.",
            },
          ].map((v) => (
            <div key={v.title}>
              <p className="font-serif text-2xl text-espresso">{v.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-charcoal">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
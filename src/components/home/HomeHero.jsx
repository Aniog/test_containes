import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="relative bg-ink text-paper overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="home-hero-bg-4f8a2c"
        data-strk-bg="[home-hero-subtitle] [home-hero-title] precision sheet metal folding machine factory"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      {/* Ink overlay */}
      <div className="absolute inset-0 bg-ink/75" />
      <div className="absolute inset-0 bp-grid-dark opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-32 md:pt-40 md:pb-44">
        <p
          id="home-hero-eyebrow"
          className="text-xs uppercase tracking-[0.3em] text-brass font-medium"
        >
          ARTITECT MACHINERY · Est. precision since 2008
        </p>

        <h1
          id="home-hero-title"
          className="mt-8 font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight max-w-5xl"
        >
          The architecture of a perfect bend.
        </h1>

        <p
          id="home-hero-subtitle"
          className="mt-8 max-w-2xl text-lg md:text-xl text-paper/80 leading-relaxed"
        >
          Double folders and sheet metal folding machines engineered for
          fabricators who measure their work in tenths of a millimetre.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 bg-paper text-ink hover:bg-mist rounded-sm px-8 py-4 text-sm tracking-wide font-medium transition-colors"
          >
            Explore the Machines
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 border border-paper/40 text-paper hover:border-paper hover:bg-paper/5 rounded-sm px-8 py-4 text-sm tracking-wide font-medium transition-colors"
          >
            Request a Quote
          </Link>
        </div>

        {/* Spec callouts */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-paper/10 max-w-4xl">
          {[
            { k: "Up to", v: "3.2 m", l: "Bending length" },
            { k: "±", v: "0.05 mm", l: "Repeatability" },
            { k: "Up to", v: "1.6 mm", l: "Material thickness" },
            { k: "Over", v: "40", l: "Countries served" },
          ].map((stat) => (
            <div key={stat.l} className="bg-ink p-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-brass">
                {stat.k}
              </p>
              <p className="font-display text-2xl md:text-3xl mt-1.5">{stat.v}</p>
              <p className="text-xs text-paper/60 mt-1">{stat.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

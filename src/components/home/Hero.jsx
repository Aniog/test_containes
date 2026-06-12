import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-ink text-bone">
      <div
        className="absolute inset-0 opacity-40"
        data-strk-bg-id="hero-bg-artitect-9f31aa"
        data-strk-bg="[hero-subtitle] [hero-title] sheet metal folding machine industrial workshop"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="2000"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-24 pb-28 md:pt-32 md:pb-40 lg:pt-40 lg:pb-48">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold mb-8">
            <span aria-hidden className="inline-block w-10 h-px bg-gold" />
            <span>Precision Sheet Metal Folding</span>
          </div>

          <h1
            id="hero-title"
            className="font-serif font-medium tracking-tight text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-bone"
          >
            Folded with intent.
            <br />
            <span className="text-gold">Engineered to endure.</span>
          </h1>

          <p
            id="hero-subtitle"
            className="mt-8 text-lg md:text-xl text-mist max-w-xl leading-relaxed"
          >
            ARTITECT MACHINERY designs and builds elegant, high-precision double
            folding machines and sheet metal folders for workshops that value
            craftsmanship as much as productivity.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/products"
              className="group inline-flex items-center justify-center gap-3 bg-gold text-ink px-7 py-4 text-xs uppercase tracking-[0.25em] font-medium hover:bg-gold-deep hover:text-bone transition-colors"
            >
              Explore Machines
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 border border-mist/40 text-bone px-7 py-4 text-xs uppercase tracking-[0.25em] font-medium hover:bg-bone hover:text-ink hover:border-bone transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>

        <div className="mt-20 md:mt-24 grid grid-cols-3 gap-8 md:gap-12 max-w-2xl border-t border-graphite pt-8">
          <div>
            <p className="font-serif text-3xl md:text-4xl text-gold">25+</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-mist">Years of Engineering</p>
          </div>
          <div>
            <p className="font-serif text-3xl md:text-4xl text-gold">42</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-mist">Countries Served</p>
          </div>
          <div>
            <p className="font-serif text-3xl md:text-4xl text-gold">±0.03</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-mist">mm Accuracy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

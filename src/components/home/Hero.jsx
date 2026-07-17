import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { JewelryImage } from "@/components/ui/JewelryImage";

export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-espresso text-ink-onDark">
      <JewelryImage
        art="hero"
        palette="warm"
        ratio="16/9"
        className="absolute inset-0 h-full w-full"
        alt=""
      />
      {/* Soft warm gradient overlay for legibility */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      <div className="relative z-10 flex h-full flex-col justify-end pb-24 md:pb-32">
        <div className="container-editorial">
          <div className="max-w-2xl animate-fadeUp">
            <p className="eyebrow eyebrow-on-dark">Velmora — Spring Edit</p>
            <h1 className="mt-5 font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-[88px]">
              Crafted to be
              <br />
              <span className="italic font-light">treasured</span>.
            </h1>
            <p className="mt-7 max-w-md text-base leading-relaxed text-ink-onDarkSecondary md:text-lg">
              Demi-fine jewelry, hand-finished in 18K gold plating. Designed for
              everyday wear, made to be passed down.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link to="/shop" className="btn-gold">
                Shop the Collection
                <ArrowRight size={14} strokeWidth={1.6} />
              </Link>
              <Link to="/about" className="btn-outline-on-dark">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Side meta */}
      <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 md:block">
        <div className="rotate-90 origin-right text-[10px] uppercase tracking-wider3 text-ink-onDarkSecondary">
          EST. 2021 — Designed in Brooklyn
        </div>
      </div>
    </section>
  );
}

export default Hero;

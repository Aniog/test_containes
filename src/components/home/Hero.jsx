import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import StockImage from "@/components/ui/StockImage";

export default function Hero() {
  return (
    <section className="relative h-[100vh] min-h-[640px] w-full overflow-hidden bg-espresso">
      {/* Background image */}
      <div className="absolute inset-0">
        <StockImage
          query="warm-lit close up of gold jewelry on a model dark background editorial"
          imageId="hero-main-7c1d2e"
          ratio="3x4"
          width={1600}
          alt=""
          aria-hidden
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-espresso/10 to-espresso/70" />
      </div>

      {/* Content */}
      <div className="relative h-full container-x flex flex-col justify-end pb-24 md:pb-32 text-ivory">
        <p className="eyebrow eyebrow-ivory reveal is-visible" id="hero-eyebrow">
          The Velmora Atelier
        </p>
        <h1
          id="hero-title"
          className="mt-4 font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.02] tracking-[-0.01em] max-w-[18ch] reveal is-visible"
        >
          Crafted to be{" "}
          <span className="font-display-italic">treasured</span>.
        </h1>
        <p
          id="hero-subtitle"
          className="mt-6 max-w-md text-ivory/85 text-[15px] leading-[1.7] reveal is-visible"
        >
          Demi-fine gold jewelry, designed in our atelier and finished by hand.
          Quiet luxury, made for the everyday and the heirloom moment.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4 reveal is-visible">
          <Link to="/shop" className="btn btn-gold">
            Shop the Collection
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
          <Link
            to="/collections"
            className="btn btn-outline-light"
          >
            Explore Lookbook
          </Link>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ivory/70 text-[10px] tracking-widest3 uppercase hidden md:block">
        <div className="w-[1px] h-10 bg-ivory/40 mx-auto mb-2" />
        Scroll
      </div>
    </section>
  );
}
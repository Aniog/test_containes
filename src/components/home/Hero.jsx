import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import StockImage from "@/components/ui/StockImage";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-onyx-900 text-cream-100">
      {/* Background image */}
      <div className="absolute inset-0">
        <StockImage
          query="Warm-lit close-up of a model wearing gold jewelry editorial portrait on dark background"
          ratio="3x4"
          width={1600}
          imgId="hero-bg-7a91c3"
          className="w-full h-full"
          alt="Model wearing Velmora gold jewelry"
          priority
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(14,13,10,0.45) 0%, rgba(14,13,10,0.1) 35%, rgba(14,13,10,0.55) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 sm:pb-28">
        <div className="container-wide">
          <Reveal>
            <p className="font-sans uppercase tracking-widest-2 text-[11px] text-gold-300 mb-5">
              Summer 2026 · The Heritage Edit
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-display text-[clamp(56px,9vw,128px)] leading-[0.95] text-cream-100 max-w-[18ch]">
              Crafted to be{" "}
              <span className="italic text-gold-300">treasured.</span>
            </h1>
          </Reveal>
          <Reveal delay={260}>
            <p className="mt-6 text-[16px] sm:text-[17px] text-cream-200/85 max-w-[44ch] leading-relaxed">
              Demi-fine gold jewelry, designed in Stockholm and worn everywhere.
              18K gold-plated, hypoallergenic, made to become an heirloom.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/shop"
                className="btn-primary !bg-cream-100 !text-onyx-900 hover:!bg-gold-300 hover:!text-onyx-900"
              >
                Shop the Collection <ArrowRight size={14} strokeWidth={1.5} />
              </Link>
              <Link
                to="/about"
                className="font-sans uppercase tracking-widest-2 text-[12px] text-cream-100 border-b border-cream-100/40 pb-1 hover:border-gold-300 hover:text-gold-300 transition-colors"
              >
                Our story
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-cream-200/70 animate-soft-pulse">
        <ChevronDown size={20} strokeWidth={1.2} />
      </div>
    </section>
  );
}

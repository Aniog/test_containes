import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import StockBackground from "@/components/ui/StockBackground";

export default function Hero() {
  return (
    <section className="relative -mt-16 md:-mt-20">
      <StockBackground
        id="hero-main"
        query="editorial portrait woman gold jewelry earrings warm light closeup"
        ratio="4x5"
        width={1600}
        className="h-[88vh] md:h-[92vh] min-h-[560px] w-full"
        overlayClassName="bg-gradient-to-b from-ink/35 via-ink/15 to-ink/55"
      >
        <div className="container-page h-full flex flex-col justify-end pb-16 md:pb-24">
          <div className="max-w-2xl text-ivory">
            <p className="eyebrow text-ivory/80 mb-5">The Velmora Edit</p>
            <h1
              id="hero-headline"
              className="font-serif font-light leading-[0.98] text-[44px] sm:text-6xl md:text-7xl lg:text-[88px] text-ivory text-balance"
            >
              Crafted to be
              <br />
              <span className="italic font-normal text-gold-soft">treasured</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-ivory/85 max-w-md leading-relaxed">
              Demi-fine 18K gold-plated jewelry, hand-finished in small batches.
              Made to wear daily — and keep for years.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-4">
              <Link to="/shop" className="btn-gold inline-flex gap-2">
                Shop the Collection
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.75} />
              </Link>
              <Link
                to="/about"
                className="text-xs tracking-eyebrow uppercase text-ivory/85 hover:text-gold-soft transition-colors inline-flex items-center gap-2"
              >
                Our Story
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </StockBackground>
    </section>
  );
}

import React from "react"
import { Link } from "react-router-dom"
import { StockBackground } from "@/components/StockImage"

export default function Hero() {
  return (
    <section className="relative">
      <StockBackground
        bgId="hero-bg-velmora-9f3c2a"
        query="warm lit close up portrait of woman wearing delicate gold earrings and layered gold necklaces soft editorial photography dark warm background"
        ratio="16x9"
        width={1920}
        className="relative flex min-h-[100svh] items-end bg-ink"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/30" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-40 md:px-8 md:pb-32">
          <div className="max-w-2xl animate-fade-up">
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#D9C39A]">
              Demi-Fine · 18K Gold · Hypoallergenic
            </p>
            <h1 className="mt-5 font-serif text-5xl font-light leading-[1.05] text-[#F7F1E5] md:text-7xl">
              Crafted to be <span className="italic text-[#E4CD9E]">Treasured</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[#D8CCB8] md:text-lg">
              Quietly luxurious gold jewelry for every day — designed to be lived in, gifted, and
              passed on.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/shop"
                className="bg-accent px-9 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-accent-foreground transition-all duration-300 hover:bg-accent-deep"
              >
                Shop the Collection
              </Link>
              <Link
                to="/about"
                className="border border-[#F7F1E5]/40 px-9 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-[#F7F1E5] transition-all duration-300 hover:border-[#F7F1E5] hover:bg-[#F7F1E5]/10"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </StockBackground>
    </section>
  )
}

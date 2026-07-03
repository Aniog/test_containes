import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import StrkImage from "@/components/StrkImage"

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-base">
      {/* Background image — warm, editorial close-up of gold jewelry */}
      <div className="absolute inset-0">
        <div
          data-strk-bg-id="home-hero-bg"
          data-strk-bg="[home-hero-subtitle] [home-hero-title]"
          data-strk-bg-ratio="3x4"
          data-strk-bg-width="1800"
          className="absolute inset-0"
        />
        {/* Warm vignette gradient to keep type legible and add mood */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(14,13,11,0.55) 0%, rgba(14,13,11,0.35) 30%, rgba(14,13,11,0.55) 70%, rgba(14,13,11,0.85) 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(60% 60% at 30% 50%, rgba(201,168,118,0.18) 0%, rgba(0,0,0,0) 60%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative container-site h-[100svh] flex flex-col justify-end pb-20 md:pb-28">
        <div className="max-w-3xl">
          <p className="eyebrow text-accent" id="home-hero-eyebrow">
            New Collection · 2026
          </p>
          <h1
            id="home-hero-title"
            className="display text-[44px] sm:text-[64px] md:text-[88px] lg:text-[104px] text-ink-primary mt-5 text-balance"
          >
            Crafted to be
            <span className="block italic font-light text-accent">treasured.</span>
          </h1>
          <p
            id="home-hero-subtitle"
            className="mt-6 max-w-xl text-base md:text-lg text-ink-secondary leading-relaxed"
          >
            Demi-fine jewelry in 18K gold plating — designed in small batches,
            finished by hand, and made to live in.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link to="/shop" className="btn-primary">
              Shop the Collection
              <ArrowRight className="ml-3 h-4 w-4" strokeWidth={1.5} />
            </Link>
            <Link
              to="/about"
              className="btn-outline border-ink-primary/40 text-ink-primary hover:bg-ink-primary/5"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Small scroll hint at the bottom-right (desktop only) */}
      <div className="hidden md:flex absolute right-12 bottom-12 flex-col items-center gap-3 text-ink-secondary">
        <span className="eyebrow">Scroll</span>
        <span className="w-px h-12 bg-line-strong" />
      </div>
    </section>
  )
}

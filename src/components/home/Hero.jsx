import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { StrkBg, useStrkImages } from "@/components/ui/StrkImage"

export default function Hero() {
  const ref = useStrkImages([])
  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <StrkBg
        bgId="hero-bg-velmora-01"
        query="[hero-subtitle] [hero-title]"
        ratio="9x16"
        width={1600}
        className="absolute inset-0 h-full w-full"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/10 to-ink/50" />

      <div className="container-editorial relative flex h-full flex-col items-center justify-end pb-20 text-center md:items-start md:justify-center md:pb-0 md:text-left">
        <p className="eyebrow animate-fade-up text-cream-50/90" style={{ animationDelay: "0.1s" }}>
          Velmora Fine Jewelry
        </p>
        <h1
          id="hero-title"
          className="mt-5 max-w-3xl font-serif text-5xl font-light leading-[1.05] text-cream-50 animate-fade-up sm:text-6xl md:text-7xl lg:text-[88px]"
          style={{ animationDelay: "0.2s" }}
        >
          Crafted to be
          <br />
          <span className="italic text-gold-light">Treasured</span>
        </h1>
        <p
          id="hero-subtitle"
          className="mt-6 max-w-md font-sans text-sm leading-relaxed text-cream-50/85 animate-fade-up md:text-base"
          style={{ animationDelay: "0.35s" }}
        >
          Demi-fine gold jewelry, made to be worn every day. Quietly luxurious,
          warmly considered, built to last.
        </p>
        <div className="mt-9 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <Link to="/shop" className="btn-accent bg-gold-deep px-10 py-4 hover:bg-cream-50 hover:text-ink">
            Shop the Collection
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="font-sans text-[10px] uppercase tracking-ultra text-cream-50/70">
          Scroll
        </span>
        <span className="h-10 w-px bg-cream-50/40" />
      </div>
    </section>
  )
}

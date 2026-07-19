import { Link } from "react-router-dom"
import { ArrowRight, ArrowDown } from "lucide-react"
import StrkImage from "@/components/ui/StrkImage"

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink text-paper">
      <StrkImage
        imgId="hero-portrait-main"
        query="[hero-eyebrow] [hero-heading] warm editorial portrait of woman wearing gold jewelry soft light"
        ratio="3x4"
        width={1800}
        alt="Model wearing Velmora gold jewelry"
        className="absolute inset-0 h-full w-full"
        imgClassName="object-cover opacity-90"
      />
      {/* Gradient overlay for legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(29,22,17,0.55) 0%, rgba(29,22,17,0.15) 35%, rgba(29,22,17,0.15) 60%, rgba(29,22,17,0.75) 100%)",
        }}
      />

      <div className="relative h-full container-editorial flex flex-col">
        <div className="flex-1 flex flex-col justify-end pb-20 md:pb-24 lg:pb-28">
          <p
            id="hero-eyebrow"
            className="eyebrow text-paper/80 mb-5"
          >
            The Velmora Edit — Spring 2026
          </p>
          <h1
            id="hero-heading"
            className="font-serif font-medium text-paper text-5xl md:text-7xl lg:text-[88px] leading-[1.02] tracking-[-0.01em] max-w-3xl"
          >
            Crafted to be
            <br />
            <span className="italic font-light">treasured</span>.
          </h1>
          <p className="mt-6 text-base md:text-lg text-paper/85 max-w-md leading-relaxed">
            Demi-fine gold jewelry, finished by hand in our small Lisbon
            atelier. Designed for the everyday, made to last.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link to="/shop" className="btn-primary-gold">
              Shop the Collection
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
            <Link
              to="/shop?collection=earrings"
              className="btn-outline-light"
            >
              Discover Earrings
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="pb-8 hidden md:flex items-center gap-3 text-paper/70 text-[10px] uppercase tracking-eyebrow">
          <ArrowDown size={14} strokeWidth={1.25} />
          Scroll
        </div>
      </div>
    </section>
  )
}

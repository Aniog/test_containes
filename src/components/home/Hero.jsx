import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import StockImage from "@/components/StockImage"

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-espresso-800">
      {/* Background image */}
      <StockImage
        id="hero-bg-a7c3d1"
        query="[hero-subtitle] [hero-title]"
        ratio="3x4"
        width="1800"
        alt="Model wearing warm gold jewelry, lit by soft golden hour light"
        eager
        className="absolute inset-0"
        imgClassName="w-full h-full object-cover scale-105 animate-[fade-in_1.4s_ease_both]"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(31,22,18,0.45) 0%, rgba(31,22,18,0.15) 35%, rgba(31,22,18,0.55) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative h-full max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col justify-end pb-20 sm:pb-28 lg:pb-32">
        <div className="max-w-2xl text-ivory animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <p
            id="hero-subtitle"
            className="text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-gold-200/95 font-medium mb-5 sm:mb-7"
          >
            Demi-fine · 18K Gold Plated · Hand-finished
          </p>
          <h1
            id="hero-title"
            className="font-serif text-ivory text-[2.75rem] sm:text-6xl lg:text-7xl leading-[0.98] tracking-[-0.015em]"
          >
            Crafted to be{" "}
            <span className="display-italic text-gold-200">Treasured</span>
          </h1>
          <p className="mt-5 sm:mt-7 text-sm sm:text-base text-ivory-200/85 font-light max-w-md leading-relaxed">
            Quiet heirlooms in warm 18K gold — designed for the everyday and
            made to last a lifetime.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            <Link to="/shop" className="btn-outline-light">
              Shop the Collection
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </Link>
            <Link
              to="/about"
              className="text-[11px] tracking-[0.22em] uppercase text-ivory-200/85 hover:text-gold-200 transition-colors"
            >
              Our Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

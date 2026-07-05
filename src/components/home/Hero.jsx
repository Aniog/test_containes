import { Link } from "react-router-dom"
import { useReveal } from "@/hooks/useReveal"
import StockImage from "@/components/ui/StockImage"
import { cn } from "@/lib/utils"

export default function Hero() {
  const [ref, inView] = useReveal({ threshold: 0.1 })

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink"
      aria-label="Velmora Fine Jewelry"
    >
      {/* Background image */}
      <StockImage
        imgId="img-hero"
        query="[hero-eyebrow] [hero-headline] warm lit gold jewelry on model closeup"
        ratio="3x4"
        width={1800}
        alt="A model wearing warm-lit Velmora gold jewelry"
        className="absolute inset-0 h-full w-full"
        imgClassName="w-full h-full object-cover"
        priority
      />
      {/* Warm gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(27,24,21,0.45) 0%, rgba(27,24,21,0.15) 30%, rgba(27,24,21,0.55) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Subtle grain */}
      <div className="absolute inset-0 grain pointer-events-none" aria-hidden="true" />

      {/* Content */}
      <div className="relative h-full flex flex-col">
        <div className="container-editorial flex-1 flex flex-col justify-end pb-20 sm:pb-24 lg:pb-28 pt-32">
          <div className={cn("max-w-2xl transition-all duration-700 ease-out", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")}>
            <p id="hero-eyebrow" className="text-[0.7rem] uppercase tracking-eyebrow text-bone/85 font-sans mb-5">
              Spring Edit · 2026
            </p>
            <h1
              id="hero-headline"
              className="font-serif text-bone text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.25rem] font-light leading-[1.02] tracking-tight"
            >
              Crafted to be<br />
              <em className="not-italic font-serif italic text-bone/95">Treasured</em>
            </h1>
            <p className="mt-6 max-w-md text-bone/80 text-base sm:text-lg leading-relaxed font-sans">
              Demi-fine jewelry, hand-finished in 18K gold plate — designed to be worn every day and gifted without occasion.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                to="/shop"
                className="btn h-12 px-8 bg-bone text-ink hover:bg-bone-2 text-[0.7rem] tracking-eyebrow"
              >
                Shop the Collection
              </Link>
              <Link
                to="/shop?category=sets"
                className="btn h-12 px-8 bg-transparent border border-bone/60 text-bone hover:bg-bone hover:text-ink text-[0.7rem] tracking-eyebrow"
              >
                Gift Sets
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom hairline scroll cue */}
        <div className="container-editorial pb-6 hidden sm:flex items-center gap-3 text-bone/60 text-[10px] uppercase tracking-eyebrow font-sans">
          <span className="inline-block w-8 h-px bg-bone/40" />
          Scroll
        </div>
      </div>
    </section>
  )
}

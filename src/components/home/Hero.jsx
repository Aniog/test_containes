import { Link } from "react-router-dom"
import { useStrkImages } from "@/lib/useStrkImages"
import Button from "@/components/ui/Button"

export default function Hero() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-ink">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-7f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry worn on model warm editorial"
        data-strk-bg-ratio="9x16"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/20 to-ink/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
        <p className="fade-up text-[11px] uppercase tracking-widest3 text-champagne">
          Velmora Fine Jewelry
        </p>
        <h1
          id="hero-title"
          className="fade-up mt-5 max-w-4xl font-serif text-5xl font-medium leading-[1.05] text-ivory md:text-7xl lg:text-8xl"
          style={{ animationDelay: "0.1s" }}
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="fade-up mt-6 max-w-xl text-base leading-relaxed text-ivory/80 md:text-lg"
          style={{ animationDelay: "0.2s" }}
        >
          Demi-fine gold jewelry, designed for the everyday and the
          unforgettable. Quietly luxurious, made to be worn and loved.
        </p>
        <div className="fade-up mt-9" style={{ animationDelay: "0.3s" }}>
          <Button as={Link} to="/shop" size="lg">
            Shop the Collection
          </Button>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-ivory/40 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-ivory/70" />
        </div>
      </div>
    </section>
  )
}

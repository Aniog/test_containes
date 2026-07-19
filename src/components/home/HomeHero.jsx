import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { useStrkImages } from "@/hooks/useStrkImages"
import Button from "@/components/ui/Button"

export default function HomeHero() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7f3a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-espresso/20 to-espresso/60" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center md:px-10">
        <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.3em] text-ivory/80 animate-fade-up">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="max-w-3xl font-serif text-5xl leading-[1.05] text-ivory animate-fade-up md:text-7xl lg:text-8xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-6 max-w-xl text-base leading-relaxed text-ivory/85 animate-fade-up md:text-lg"
        >
          Warm-lit, hand-finished gold jewelry made for the everyday and the
          unforgettable. Designed in studio, worn for a lifetime.
        </p>
        <div className="mt-9 animate-fade-up">
          <Button as={Link} to="/shop" className="px-10 py-4">
            Shop the Collection
            <ArrowRight size={15} />
          </Button>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-ivory/50 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-ivory/70" />
        </div>
      </div>
    </section>
  )
}

import { Link } from "react-router-dom"
import { useStrkImages } from "@/lib/useStrkImages"
import { Button } from "@/components/ui/Button"

export default function Hero() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-espresso">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-9a3f"
        data-strk-bg="[hero-subtitle] [hero-headline] warm lit close up gold jewelry worn on model editorial"
        data-strk-bg-ratio="9x16"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-espresso/20 to-espresso/60" />

      <div className="relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-20 md:pb-28">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-5">
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-headline"
            className="font-serif text-ivory text-5xl md:text-7xl lg:text-8xl leading-[1.05] font-light"
          >
            Crafted to be
            <br />
            Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="text-ivory/80 text-base md:text-lg mt-6 max-w-md leading-relaxed font-light"
          >
            Warm, wearable gold — designed in studio and made for the everyday
            and the unforgettable.
          </p>
          <div className="mt-9">
            <Button as={Link} to="/shop" variant="primary">
              Shop the Collection
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-ivory/60">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="w-px h-10 bg-ivory/40 animate-pulse" />
      </div>
    </section>
  )
}

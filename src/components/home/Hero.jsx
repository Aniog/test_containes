import { Link } from "react-router-dom"
import { useStrkImages } from "@/lib/strk-images"
import Button from "@/components/ui/Button"

export default function Hero() {
  const ref = useStrkImages([])
  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-1"
        data-strk-bg="[hero-subtitle] [hero-title] warm lit close up gold jewelry worn on model editorial"
        data-strk-bg-ratio="9x16"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-espresso/20 to-espresso/60" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-cream">
        <p className="mb-5 text-xs uppercase tracking-widest2 text-cream/80 animate-fade-up">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-5xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Crafted to be
          <br />
          Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-6 max-w-md text-sm md:text-base text-cream/85 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Hand-finished 18K gold plated pieces, designed in studio and made to
          be worn every single day.
        </p>
        <div className="mt-9 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Button as={Link} to="/shop" variant="solid">
            Shop the Collection
          </Button>
        </div>
      </div>
    </section>
  )
}

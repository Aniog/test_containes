import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { useStrkImages } from "@/lib/use-strk-images"

export default function Hero() {
  const strkRef = useStrkImages()
  return (
    <section ref={strkRef} className="relative flex min-h-[100svh] items-end overflow-hidden bg-noir md:items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-main-7a3f1c"
        data-strk-bg="[hero-subtitle] [hero-headline] warm-lit close-up of gold jewelry on a model, dark editorial photography"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/40 to-noir/30 md:bg-gradient-to-r md:from-noir/80 md:via-noir/35 md:to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-40 md:px-8 md:py-0">
        <div className="max-w-xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold-light">
            Demi-Fine · 18K Gold Plated
          </p>
          <h1
            id="hero-headline"
            className="mt-6 font-serif text-5xl font-light leading-[1.05] text-ivory md:text-7xl"
          >
            Crafted to be <em className="font-normal italic text-gold-light">Treasured</em>
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-md text-[15px] font-light leading-relaxed text-ivory/85">
            Warm-lit 18k gold jewelry — earrings, necklaces and huggies designed in
            small batches for the moments you keep. From $30, with love, forever yours.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/shop"
              className="group inline-flex items-center justify-center gap-3 bg-gold px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-noir transition-colors duration-300 hover:bg-gold-light"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center border border-ivory/40 px-10 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-ivory transition-colors duration-300 hover:border-gold-light hover:text-gold-light"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="text-[9px] uppercase tracking-[0.3em] text-ivory/60">Scroll</span>
        <span className="h-10 w-px bg-ivory/30" />
      </div>
    </section>
  )
}

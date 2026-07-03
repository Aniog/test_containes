import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { StockImage } from "@/components/StockImage"

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <StockImage
        id="hero-main"
        query="[hero-headline] [hero-subheadline]"
        ratio="16x9"
        width={1600}
        alt="Gold jewelry on a model"
        asBackground
        className="absolute inset-0 h-full w-full"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/20 to-ink/50" />
      </StockImage>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <p className="mb-4 font-sans text-xs font-medium uppercase tracking-wide text-white/90">
          New Collection
        </p>
        <h1
          id="hero-headline"
          className="max-w-4xl font-serif text-5xl font-light leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subheadline"
          className="mt-6 max-w-md font-sans text-base font-light leading-relaxed text-white/90 md:text-lg"
        >
          Demi-fine gold jewelry for the moments that matter — designed in small batches, made to last.
        </p>
        <Button
          asChild
          className="mt-8 bg-white text-ink hover:bg-champagne hover:text-white"
          size="lg"
        >
          <Link to="/shop">Shop the Collection</Link>
        </Button>
      </div>
    </section>
  )
}

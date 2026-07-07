import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden">
      <div
        data-strk-bg-id="hero-bg-velmora-main"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="9x16"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-charcoal"
      />
      <div className="absolute inset-0 bg-ink/30" />

      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-center text-cream">
          <p
            id="hero-subtitle"
            className="mb-4 text-xs font-sans font-medium uppercase tracking-[0.25em] text-gold-light"
          >
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-5xl font-light leading-[1.1] tracking-wide sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Crafted to be Treasured
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base font-light leading-relaxed text-cream/90 sm:text-lg">
            Timeless pieces designed for everyday luxury. Gold-plated, hypoallergenic,
            and made to last.
          </p>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="min-w-[200px]">
              <Link to="/shop">Shop the Collection</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="min-w-[200px] border-cream text-cream hover:bg-cream hover:text-ink"
            >
              <Link to="/#story">Our Story</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 text-center">
        <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-cream/70">
          Scroll
        </span>
      </div>
    </section>
  )
}

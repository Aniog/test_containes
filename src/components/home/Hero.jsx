import { Link } from "react-router-dom"
import { Button } from "@/components/ui/Button"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <img
        alt="Model wearing Velmora gold jewelry in warm light"
        data-strk-img-id="hero-main-a1b2c3"
        data-strk-img="[hero-subtitle] [hero-title] gold jewelry worn on model warm light"
        data-strk-img-ratio="16x9"
        data-strk-img-width="1600"
        src={PLACEHOLDER}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/60" />

      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-champagne mb-6 animate-fade-up">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-cream text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-4xl animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-6 text-cream/85 text-base md:text-lg max-w-xl leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Hand-finished 18K gold plated pieces, designed in studio and made to
          be worn every single day.
        </p>
        <div className="mt-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Button as={Link} to="/shop" variant="primary">
            Shop the Collection
          </Button>
        </div>
      </div>
    </section>
  )
}

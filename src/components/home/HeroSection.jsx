import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const HeroSection = () => {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-velvet text-ivory">
      <div
        className="absolute inset-0"
        data-strk-bg-id="velmora-hero-bg-a19d0"
        data-strk-bg="[hero-visual] [hero-mood] [hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-velvet/90 via-velvet/60 to-velvet/35" />
      <div className="absolute inset-0 bg-glow opacity-90" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-5 pb-20 pt-36 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p id="hero-visual" className="sr-only">
            Warm-lit close-up of demi-fine gold jewelry on a model
          </p>
          <p id="hero-mood" className="sr-only">
            Quiet luxury jewelry campaign portrait with editorial styling
          </p>
          <p
            id="hero-subtitle"
            className="text-xs font-medium uppercase tracking-[0.38em] text-gold sm:text-sm"
          >
            Quiet luxury for everyday rituals
          </p>
          <h1
            id="hero-title"
            className="mt-6 font-serif text-5xl leading-[0.98] text-ivory sm:text-6xl lg:text-7xl"
          >
            Crafted to be Treasured
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-ivory/78 sm:text-lg">
            Premium demi-fine gold jewelry designed for gifting, layering, and the kind of self-purchase that feels beautifully considered.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-velvet transition hover:bg-rosewood hover:text-ivory"
            >
              Shop the Collection <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/collections"
              className="inline-flex items-center rounded-full border border-white/20 px-7 py-4 text-sm font-medium uppercase tracking-[0.24em] text-ivory transition hover:border-gold hover:text-gold"
            >
              Explore Collections
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

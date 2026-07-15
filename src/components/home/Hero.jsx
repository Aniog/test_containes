import { Link } from "react-router-dom"
import { useStrkImages } from "@/lib/useStrkImages"

export default function Hero() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div
        data-strk-bg-id="hero-bg-velmora-7f3a"
        data-strk-bg="[hero-subtitle] [hero-title] warm lit close up gold jewelry worn on model editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-ink"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/60" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-end pb-24 md:pb-32">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-xs uppercase tracking-widest2 text-cream/80 mb-5">
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-cream text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-6"
          >
            Crafted to be
            <br />
            <span className="italic text-champagne">Treasured</span>
          </h1>
          <p
            id="hero-subtitle"
            className="text-cream/85 text-base md:text-lg max-w-md leading-relaxed mb-8"
          >
            Hand-finished 18K gold plated pieces, designed in studio and made to
            be worn every single day.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-champagne text-cream px-10 py-4 text-xs uppercase tracking-widest2 hover:bg-champagne-deep transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}

import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-espresso text-ivory">
      {/* Hero image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="home-hero-bg-9a4f21"
        data-strk-bg="[hero-headline] [hero-subhead] velmora fine jewelry editorial model gold"
        data-strk-bg-ratio="3x4"
        data-strk-bg-width="1800"
      />

      {/* Layered darkening + warm vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(31,26,20,0.35) 0%, rgba(31,26,20,0.10) 35%, rgba(31,26,20,0.55) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 65%, transparent 35%, rgba(31,26,20,0.45) 100%)",
        }}
      />

      {/* Text content */}
      <div className="relative z-10 flex h-full items-end">
        <div className="container-x pb-20 md:pb-28">
          <div className="max-w-2xl">
            <span
              id="hero-eyebrow"
              className="font-sans text-[11px] uppercase tracking-[0.22em] text-gold/90"
            >
              Considered Demi-Fine Jewelry
            </span>
            <h1
              id="hero-headline"
              className="h-display mt-4 text-5xl text-ivory sm:text-6xl md:text-7xl lg:text-[88px]"
            >
              Crafted to be <em className="not-italic text-gold">treasured</em>.
            </h1>
            <p
              id="hero-subhead"
              className="mt-6 max-w-md text-base leading-relaxed text-ivory/85 md:text-lg"
            >
              Quietly considered gold jewelry, made in small batches. Pieces you'll
              keep on your nightstand, then wear for the next decade.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link to="/shop" className="btn-primary">
                Shop the Collection
              </Link>
              <Link
                to="/about"
                className="font-sans text-[12px] uppercase tracking-[0.22em] text-ivory/90 underline underline-offset-[6px] decoration-[0.5px] decoration-ivory/40 transition-colors hover:decoration-gold hover:text-gold"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

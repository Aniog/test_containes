import { Link } from "react-router-dom"
import { StrkBackground } from "@/components/ui/StrkImage"
import { useImageLoader } from "@/hooks/useImageLoader"

export default function Hero() {
  const ref = useImageLoader([])
  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      <StrkBackground
        bgId="hero-bg-velmora-7f2a9c"
        query="[hero-subtitle] [hero-title]"
        ratio="16x9"
        width={1920}
        className="absolute inset-0 w-full h-full"
      >
        {/* Warm overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-espresso/20 to-espresso/55" />
      </StrkBackground>

      <div className="relative h-full max-w-8xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-20 md:pb-28">
        <div className="max-w-2xl">
          <p className="text-cream/80 text-xs uppercase tracking-widest2 mb-5 fade-up">
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-cream text-5xl md:text-7xl lg:text-8xl leading-[1.02] fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Crafted to be
            <br />
            <span className="italic text-gold-soft">Treasured</span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-cream/85 text-base md:text-lg max-w-md leading-relaxed fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            18K gold plated earrings, necklaces and huggies — designed in studio,
            made for everyday wear and a lifetime of moments.
          </p>
          <div className="mt-9 fade-up" style={{ animationDelay: "0.3s" }}>
            <Link
              to="/shop"
              className="inline-flex items-center uppercase tracking-wide2 text-xs font-medium bg-gold text-cream px-9 py-4 hover:bg-gold-soft transition-colors duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

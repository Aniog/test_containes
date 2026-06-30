import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { StrkBackground, ImageLoader } from "@/components/Image"

export default function Hero() {
  return (
    <ImageLoader>
      <section className="relative h-[90vh] min-h-[620px] flex items-center justify-center overflow-hidden">
        <StrkBackground
          id="hero-bg-velmora"
          query="[hero-subtitle] [hero-title]"
          ratio="16x9"
          width="1600"
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-ink/50" />
        </StrkBackground>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-champagne mb-4 md:mb-6">
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream leading-[0.95]"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 md:mt-8 text-base md:text-lg text-cream/90 max-w-xl mx-auto font-light"
          >
            Timeless pieces for everyday rituals and once-in-a-lifetime moments.
          </p>
          <div className="mt-8 md:mt-10">
            <Button
              asChild
              className="bg-champagne text-ink hover:bg-champagne-dark uppercase tracking-[0.2em] text-xs h-12 px-10"
            >
              <Link to="/shop">Shop the Collection</Link>
            </Button>
          </div>
        </div>
      </section>
    </ImageLoader>
  )
}

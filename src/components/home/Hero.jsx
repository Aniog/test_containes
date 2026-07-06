import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { BackgroundImage } from "@/components/ImageTag"

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full">
      <BackgroundImage
        id="hero-bg-velmora"
        query="[hero-subtitle] [hero-title]"
        ratio="16x9"
        width={1600}
        className="absolute inset-0 h-full w-full"
      >
        <div className="absolute inset-0 bg-espresso/30" />
      </BackgroundImage>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <p
          id="hero-subtitle"
          className="mb-4 font-sans text-xs font-medium uppercase tracking-extra-wide text-white/90"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="max-w-3xl font-serif text-5xl font-normal leading-[1.1] md:text-7xl lg:text-8xl"
        >
          Crafted to be Treasured
        </h1>
        <p className="mt-6 max-w-md text-base font-light leading-relaxed text-white/85 md:text-lg">
          Timeless silhouettes in 18k gold plate, designed for everyday luxury and moments worth remembering.
        </p>
        <Button asChild className="mt-10 bg-gold px-10 py-4 text-white hover:bg-gold-dark">
          <Link to="/shop">Shop the Collection</Link>
        </Button>
      </div>
    </section>
  )
}

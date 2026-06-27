import { Link } from "react-router-dom"
import { Button } from "@/components/ui/Button"
import { BackgroundImage } from "@/components/ui/BackgroundImage"
import { useImageLoader } from "@/hooks/useImageLoader"

export function HeroSection() {
  const containerRef = useImageLoader()

  return (
    <section ref={containerRef} className="relative h-[100svh] min-h-[600px] w-full">
      <BackgroundImage
        id="hero-bg-velmora"
        query="[hero-subtitle] [hero-title]"
        ratio="9x16"
        width={1200}
        className="absolute inset-0 h-full w-full"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/10 to-ink/50" />
      </BackgroundImage>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center text-ivory">
        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-ivory/80">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="max-w-4xl font-serif text-5xl font-light leading-[1.1] tracking-wide md:text-7xl lg:text-8xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mx-auto mt-6 max-w-lg text-base font-light leading-relaxed text-ivory/90 md:text-lg"
        >
          Timeless silhouettes in 18K gold plating, designed for everyday luxury and moments worth remembering.
        </p>
        <Link to="/shop" className="mt-10">
          <Button variant="accent" size="lg">
            Shop the Collection
          </Button>
        </Link>
      </div>
    </section>
  )
}

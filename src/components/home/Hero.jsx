import { Link } from "react-router-dom"
import ImageLoader, { PLACEHOLDER } from "@/components/ImageLoader"

export default function Hero() {
  return (
    <ImageLoader
      as="section"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
      deps={[]}
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-9f2a"
        data-strk-bg="[hero-subtitle] [hero-headline] gold jewelry worn on model warm light"
        data-strk-bg-ratio="9x16"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/30 to-transparent" />

      <div className="relative mx-auto w-full max-w-editorial px-6 md:px-10 pt-24">
        <div className="max-w-xl text-cream">
          <p className="eyebrow text-cream/80">Demi-Fine Gold Jewelry</p>
          <h1
            id="hero-headline"
            className="mt-4 font-serif text-5xl leading-[1.05] md:text-7xl"
          >
            Crafted to be
            <br />
            <span className="italic text-gold">Treasured</span>
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-md text-base text-cream/85 md:text-lg">
            Warm, editorial pieces in 18K gold plating — designed for everyday
            luxury and the moments worth marking.
          </p>
          <div className="mt-9">
            <Link to="/shop" className="btn-primary">
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </ImageLoader>
  )
}

import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-velvet text-ivory">
      <div
        className="absolute inset-0"
        data-strk-bg-id="velmora-hero-bg-a1f4c3"
        data-strk-bg="[hero-image-note] [hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-velvet/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-velvet to-transparent opacity-90" />
      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-end px-6 pb-20 pt-40 md:px-10 xl:px-16">
        <div className="max-w-2xl space-y-8">
          <p id="hero-image-note" className="sr-only">
            Warm-lit close-up of gold jewelry on a model with an editorial luxury mood.
          </p>
          <p className="text-xs uppercase tracking-eyebrow text-ivory-deep/80">
            Quiet luxury for every day
          </p>
          <div className="space-y-6">
            <h1 id="hero-headline" className="font-serif text-6xl leading-[0.9] text-ivory md:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subhead" className="max-w-lg text-base leading-8 text-ivory-deep/80 md:text-lg">
              Warm gold tones, softly sculpted silhouettes, and gift-ready pieces designed for self-purchase and meaningful moments alike.
            </p>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-xs uppercase tracking-eyebrow text-velvet transition duration-300 hover:bg-gold-deep hover:text-ivory"
          >
            Shop the Collection
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

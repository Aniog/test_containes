import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-velmora-ink text-velmora-parchment">
      <div
        className="absolute inset-0 opacity-80"
        data-strk-bg-id="velmora-hero-bg-a82d6f"
        data-strk-bg="[hero-image-direction] [hero-image-mood] [hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-velmora-ink/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-ink via-velmora-ink/88 to-velmora-ink/45" />
      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-end px-5 pb-16 pt-36 sm:px-8 md:pb-20 lg:px-10 lg:pt-40">
        <div className="max-w-2xl space-y-7 text-velmora-parchment">
          <span id="hero-image-direction" className="sr-only">
            Warm-lit editorial close-up portrait of a woman wearing fine gold earrings and a layered necklace.
          </span>
          <span id="hero-image-mood" className="sr-only">
            Quiet luxury jewelry campaign with soft neutral styling, premium beauty lighting, and intimate fashion framing.
          </span>
          <p className="text-xs uppercase tracking-[0.34em] text-velmora-champagne">
            Velmora Fine Jewelry
          </p>
          <div className="max-w-xl space-y-5">
            <h1
              id="hero-headline"
              className="font-display text-5xl leading-[0.92] text-velmora-parchment sm:text-7xl lg:text-[6rem]"
            >
              Crafted to be Treasured
            </h1>
            <p
              id="hero-subhead"
              className="max-w-lg text-base leading-8 text-velmora-champagne sm:text-lg"
            >
              Warm gold tones, sculptural silhouettes, and gift-ready pieces designed for everyday intimacy and unforgettable giving.
            </p>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 rounded-full bg-velmora-bronze px-7 py-4 text-sm font-medium uppercase tracking-[0.24em] text-velmora-parchment shadow-soft transition hover:bg-velmora-champagne hover:text-velmora-ink"
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

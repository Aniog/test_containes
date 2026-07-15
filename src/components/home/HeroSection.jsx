import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-velmora-ink text-velmora-pearl">
      <div
        className="absolute inset-0 opacity-80"
        data-strk-bg-id="velmora-hero-bg-7f2a91"
        data-strk-bg="[hero-image-context] [hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-ink/95 via-velmora-ink/70 to-velmora-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/85 via-transparent to-velmora-ink/35" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-5 pb-16 pt-32 md:px-8 md:pb-24">
        <div className="max-w-3xl animate-fade-up text-velmora-pearl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.42em] !text-velmora-champagne">
            Demi-fine gold jewelry
          </p>
          <p id="hero-image-context" className="sr-only">Warm-lit close-up of gold jewelry on a model</p>
          <h1 id="hero-title" className="font-serif text-6xl leading-[0.9] !text-velmora-pearl md:text-8xl lg:text-9xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-7 max-w-xl text-base leading-8 !text-velmora-linen md:text-lg">
            Warm, refined pieces for everyday rituals and unforgettable gifts — designed in 18K gold plating with a softly luminous finish.
          </p>
          <Link
            to="/shop"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-velmora-champagne px-7 py-4 text-sm font-bold uppercase tracking-[0.24em] text-velmora-ink transition hover:bg-velmora-pearl"
          >
            Shop the Collection <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

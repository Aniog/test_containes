import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-velmora-ink text-velmora-ivory">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-2f8a"
        data-strk-bg="[hero-visual-detail] [hero-visual-subject] [hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <p id="hero-visual-detail" className="sr-only">
        Warm-lit editorial close-up of layered gold jewelry with a premium luxury mood
      </p>
      <p id="hero-visual-subject" className="sr-only">
        Woman wearing elegant gold earrings and necklaces in a refined studio portrait
      </p>
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-ink/88 via-velmora-ink/58 to-velmora-ink/18" />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/62 via-transparent to-velmora-ink/72" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-4 pb-20 pt-40 md:px-8 md:pb-24">
        <div className="max-w-2xl space-y-6">
          <span className="inline-flex rounded-full border border-velmora-ivory/20 bg-velmora-ivory/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-velmora-ivory/90 backdrop-blur-sm">
            Demi-Fine Jewelry
          </span>
          <div className="space-y-5">
            <h1 id="hero-title" className="max-w-xl font-serif text-6xl leading-[0.92] text-velmora-ivory md:text-8xl">
              Crafted to be Treasured
            </h1>
            <p
              id="hero-subtitle"
              className="max-w-xl text-base leading-8 text-velmora-ivory/78 md:text-lg"
            >
              Warm gold essentials designed for self-gifting, milestone moments, and the quiet luxury of everyday wear.
            </p>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 rounded-full bg-velmora-gold px-7 py-4 text-xs font-semibold uppercase tracking-[0.26em] text-velmora-ink transition duration-300 ease-velvet hover:-translate-y-0.5"
          >
            Shop the Collection
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

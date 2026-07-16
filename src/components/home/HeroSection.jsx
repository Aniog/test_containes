import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden bg-velmora-ink text-velmora-paper">
      <div
        className="absolute inset-0"
        data-strk-bg-id="velmora-hero-bg-a41c9e"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(31,23,20,0.76),rgba(31,23,20,0.28)_50%,rgba(31,23,20,0.56))]" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-4 pb-16 pt-28 sm:px-6 md:items-center lg:px-8 lg:pb-20 lg:pt-32">
        <div className="max-w-2xl">
          <p className="mb-5 text-xs uppercase tracking-editorial text-velmora-paper/80">
            Modern demi-fine jewelry for everyday ceremony
          </p>
          <h1 id="hero-title" className="max-w-xl font-serif text-5xl leading-[0.92] text-velmora-paper sm:text-6xl lg:text-7xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-7 text-velmora-paper/80 sm:text-lg">
            Velmora Fine Jewelry creates warm, luminous pieces designed for self-purchase, gifting, and the rituals in between.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-velmora-accent px-6 py-3.5 text-sm font-semibold text-velmora-ink transition hover:bg-velmora-accent-deep"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="text-sm text-velmora-paper/75">Quietly bold earrings, necklaces, and huggies from $30–$120.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

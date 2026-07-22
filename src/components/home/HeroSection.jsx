import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-velmora-ink text-velmora-porcelain">
      <div
        className="absolute inset-0 bg-velmora-espresso"
        data-strk-bg-id="velmora-hero-bg-f93a12"
        data-strk-bg="[hero-subtitle] [hero-title] [hero-image-context]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-ink/90 via-velmora-ink/45 to-velmora-ink/10" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-velmora-ink/70 to-transparent" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-16 pt-32 sm:px-8 lg:px-10 lg:pb-24">
        <div className="max-w-3xl animate-[fadeUp_900ms_ease-out_both]">
          <p id="hero-image-context" className="mb-5 text-xs font-bold uppercase tracking-luxe text-velmora-gold">
            Demi-fine gold jewelry, direct to you
          </p>
          <h1 id="hero-title" className="font-serif text-6xl font-medium leading-[0.92] tracking-[-0.03em] text-velmora-porcelain sm:text-7xl lg:text-8xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-7 max-w-xl text-base leading-8 text-velmora-mist sm:text-lg">
            Warm 18K gold plated pieces made for everyday rituals, meaningful gifts, and the quiet confidence of wearing something beautiful.
          </p>
          <Link
            to="/shop"
            className="mt-9 inline-flex items-center gap-3 bg-velmora-gold px-7 py-4 text-xs font-bold uppercase tracking-luxe text-velmora-ink shadow-glow transition duration-300 hover:bg-velmora-porcelain hover:text-velmora-ink"
          >
            Shop the Collection
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const HomeHero = () => {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-velmora-ink text-velmora-ivory">
      <div
        className="absolute inset-0 opacity-90"
        data-strk-bg-id="velmora-hero-bg-a8d412"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(28,23,20,0.86)_15%,rgba(28,23,20,0.58)_45%,rgba(28,23,20,0.2)_72%,rgba(28,23,20,0.64)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-velmora-ink via-velmora-ink/35 to-transparent" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[90rem] items-end px-4 pb-20 pt-32 sm:px-6 md:pb-24 lg:px-10">
        <div className="max-w-2xl space-y-8">
          <p className="text-xs uppercase tracking-luxury text-velmora-gold">
            Velmora Fine Jewelry
          </p>
          <div className="space-y-5">
            <h1 id="hero-title" className="font-display text-5xl leading-[0.92] text-velmora-ivory sm:text-6xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p
              id="hero-subtitle"
              className="max-w-xl text-base leading-8 text-velmora-ivory/82 sm:text-lg"
            >
              Quietly radiant demi-fine gold jewelry designed for self-gifting, keepsake moments, and the kind of everyday polish you reach for on repeat.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link to="/shop" className="btn-primary inline-flex items-center justify-center gap-2">
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="text-xs uppercase tracking-luxury text-velmora-ivory/70">
              Premium demi-fine pieces from $30 to $120
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero

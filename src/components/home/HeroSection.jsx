import { Link } from 'react-router-dom'
import { imagePlaceholder } from '@/data/storefront'

export default function HeroSection() {
  return (
    <section className="relative -mt-20 min-h-[92vh] overflow-hidden bg-velmora-ink text-velmora-mist">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-main"
        data-strk-bg="[hero-subhead] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-vignette" />
      <div className="velmora-shell relative flex min-h-[92vh] items-end py-24 pb-20 md:items-center md:py-32">
        <div className="max-w-2xl space-y-8 rounded-[2rem] border border-white/10 bg-velmora-ink/20 p-7 shadow-lifted backdrop-blur-sm md:p-10">
          <p className="velmora-kicker !text-velmora-mist/70">Velmora Fine Jewelry</p>
          <div className="space-y-4">
            <h1 id="hero-title" className="font-display text-5xl leading-none text-velmora-mist sm:text-6xl md:text-7xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subhead" className="max-w-xl text-base leading-8 text-velmora-mist/82 md:text-lg">
              Warm gold tones, softly sculptural silhouettes, and giftable essentials designed for quiet confidence every day.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center rounded-full bg-velmora-bronze px-7 py-4 text-xs font-semibold uppercase tracking-[0.34em] text-velmora-ink transition hover:bg-velmora-gold"
            >
              Shop the Collection
            </Link>
            <div className="inline-flex items-center gap-3 text-sm text-velmora-mist/70">
              <img
                alt="Close-up jewelry editorial moment"
                className="h-14 w-14 rounded-full border border-white/15 object-cover"
                data-strk-img-id="hero-mini-jewel"
                data-strk-img="[hero-subhead] [hero-title]"
                data-strk-img-ratio="1x1"
                data-strk-img-width="200"
                src={imagePlaceholder}
              />
              <span>Premium demi-fine pieces from $30 to $120.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

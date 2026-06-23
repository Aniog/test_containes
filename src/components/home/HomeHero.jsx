import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function HomeHero() {
  return (
    <section className="relative isolate flex min-h-screen items-end overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-10 lg:pb-20 lg:pt-36">
      <div
        className="absolute inset-0"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-id="hero-bg-vlm-9f11a1"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/40 to-stone-950/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/10 to-transparent" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.8fr_0.2fr]">
        <div className="max-w-2xl space-y-7">
          <p className="eyebrow text-amber-200">Velmora Fine Jewelry</p>
          <h1 className="font-display text-6xl leading-none text-stone-50 sm:text-7xl lg:text-8xl" id="hero-title">
            Crafted to be Treasured
          </h1>
          <p className="max-w-xl text-base leading-8 text-stone-200 sm:text-lg" id="hero-subtitle">
            Quietly radiant demi-fine jewelry designed for everyday polish,
            meaningful gifting, and moments that deserve a warm glow.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link className="button-primary" to="/shop">
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a className="button-secondary" href="#story">
              Discover the brand
            </a>
          </div>
        </div>

        <div className="hidden self-end justify-self-end rounded-[2rem] border border-stone-700/70 bg-stone-950/55 p-6 backdrop-blur md:block">
          <p className="text-xs uppercase tracking-[0.24em] text-stone-400">Quiet luxury</p>
          <p className="mt-3 font-display text-3xl text-stone-50">
            Premium feel,
            <br />
            wearable pricing.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HomeHero

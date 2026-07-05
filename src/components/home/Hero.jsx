import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-[#17110D] text-[#FBF8F2]">
      <div
        className="absolute inset-0 opacity-70"
        data-strk-bg-id="velmora-hero-model-bg-c83a7e"
        data-strk-bg="[hero-image-context] [hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#17110D]/90 via-[#17110D]/55 to-[#17110D]/25" />
      <p id="hero-image-context" className="sr-only">Warm editorial close-up of a woman model wearing delicate gold earrings and necklace on neutral skin, quiet luxury jewelry campaign</p>
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-16 pt-36 md:px-8 md:pb-24">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[#E9D8BE]">Demi-fine gold jewelry</p>
          <h1 id="hero-title" className="font-serif text-5xl leading-none tracking-tight text-[#FBF8F2] md:text-7xl lg:text-8xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-[#FBF8F2]/85 md:text-lg">
            Warm gold, delicate crystal, and everyday silhouettes made for self-purchase, gifting, and the quiet rituals in between.
          </p>
          <Link
            to="/shop"
            className="mt-9 inline-flex bg-[#B9853B] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#17110D] transition hover:bg-[#FBF8F2]"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
